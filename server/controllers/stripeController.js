const asyncHandler = require("express-async-handler");
const stripe = require("stripe")(process.env.STRIPE_URI);
const DOMAIN_SUCCESS = "http://localhost:3000/order/success";
const DOMAIN_CANCEL = "http://localhost:3000/order";
const Order = require("../models/orderModel");

const setPayment = asyncHandler(async (req, res) => {
  const { products, userOrdersId, address, imageUrl } = req.body;
  const line_items = products.map((item) => {
    return {
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: item.price * 100,
        product_data: {
          name: item.name,
          images: [item.imageUrl],
        },
      },
    };
  });

  try {
    const customer = await stripe.customers.create({
      email: address.email,
      phone: address.number,
      metadata: {
        userOrdersId: userOrdersId,
      },
    });

    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      line_items,
      mode: "payment",
      success_url: DOMAIN_SUCCESS,
      cancel_url: DOMAIN_CANCEL,
    });

    res.send({ url: session.url });
  } catch (error) {
    console.error("stripe", error);
  }
});
//---------------------------------------------------------------------------------------------------------
let endpointSecret;
endpointSecret = process.env.STRIPE_END_POINT;

const setWebhook = asyncHandler(async (req, res) => {
  const payload = req.rawBody.toString();
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
  } catch (err) {
    console.log(`Webhook signature verification failed.`, err.message);
    return response.sendStatus(400);
  }

  if (event.type === "checkout.session.completed") {
    sessionId = event.data.object.id;
    const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
      sessionId,
      {
        expand: ["line_items"],
      }
    );
    const customer = await stripe.customers.retrieve(
      sessionWithLineItems.customer
    );

    const lineItems = sessionWithLineItems.line_items;
    createOrder(
      event.data.object,
      lineItems.data,
      customer.metadata.userOrdersId
    );
  }

  res.send().end();
});

// FUL FILL ORDER

const createOrder = async (data, lineItems, userOrdersId) => {
  const items = lineItems.map((item) => {
    return {
      // id: "DO POPRAWY",
      name: item.description,
      price: (item.price.unit_amount / 100).toFixed(2),
      quantity: item.quantity,
    };
  });

  const post = await Order.findByIdAndUpdate(
    userOrdersId,
    {
      $push: {
        orders: {
          paymentIntentId: data.payment_intent,
          products: items,
          subtotal: (data.amount_subtotal / 100).toFixed(2),
          total: (data.amount_total / 100).toFixed(2),
          shipping: data.customer_details,
          payment_status: data.payment_status,
        },
      },
    },
    { new: true }
  );
};

module.exports = {
  setPayment,
  setWebhook,
};
