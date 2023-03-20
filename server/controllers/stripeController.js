const asyncHandler = require("express-async-handler");
const stripe = require("stripe")(process.env.STRIPE_URI);
const DOMAIN_SUCCESS = "http://localhost:3000/order/success";
const DOMAIN_CANCEL = "http://localhost:3000/order";

const setPayment = asyncHandler(async (req, res) => {
  const { products, userId } = req.body;

  const line_items = products.map((item) => {
    return {
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          metadata: {
            id: item._id,
          },
        },
        unit_amount: item.newPrice * 100,
      },
      quantity: item.quantity,
    };
  });

  const name_items = products.map((item) => {
    return {
      name: item._id,
    };
  });

  try {
    const customer = await stripe.customers.create({
      metadata: {
        userId: userId,
        cart: JSON.stringify(name_items),
      },
      email: "test@gmail.com",
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
endpointSecret =
  "whsec_626e8828f1ee35210aaa82e13f8c61d6f8029a1f5afc6d038848f97c49717fab";

const setWebhook = asyncHandler(async (req, res) => {
  const payload = req.rawBody.toString();

  const sig = req.headers["stripe-signature"];

  let data;
  let eventType;

  if (endpointSecret) {
    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);

      console.log(event);
    } catch (err) {
      console.log(`Webhook Error: ${err.message}`);
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }
    data = event.data.object;
    eventType = event.type;
  } else {
    data = req.body.data.object;
    eventType = req.body.type;
  }

  // Handle the event
  if (eventType === "checkout.session.completed") {
    stripe.customers
      .retrieve(data.customer)
      .then((customer) => {
        console.log(customer);
        console.log("data:", data);
      })
      .catch((err) => console.log(err.message));
  }

  res.send().end();
});

module.exports = {
  setPayment,
  setWebhook,
};
