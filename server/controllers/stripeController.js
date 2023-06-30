const asyncHandler = require("express-async-handler");
const stripe = require("stripe")(process.env.STRIPE_URI);
const DOMAIN_SUCCESS = "http://localhost:3000/order/success";
const DOMAIN_CANCEL = "http://localhost:3000/order";
const Order = require("../models/orderModel");
const Review = require("../models/reviewModel");

const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD,
//   },
// });

const setPayment = asyncHandler(async (req, res) => {
  const { products, userId, address } = req.body;
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
    let productData = [];

    for (let index = 0; index < products.length; index++) {
      productData.push(
        await stripe.products.create({
          name: products[index].name,
          images: [products[index].imageUrl],
        })
      );
    }
    const productsId = productData.map((item) => {
      return item.id.slice(5);
    });

    const customer = await stripe.customers.create({
      email: address.email,
      phone: address.number,
      metadata: {
        userId: userId,
        productsId: productsId.toString(6),
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
endpointSecret = process.env.STRIPE_END_POINT_SECRET;

const setWebhook = asyncHandler(async (req, res) => {
  console.log("Hello");
  const payload = await req.rawBody.toString();
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
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const lineItems = await stripe.checkout.sessions.listLineItems(sessionId, {
      limit: 100,
    });

    const customer = await stripe.customers.retrieve(session.customer);
    const productsId = customer.metadata.productsId.split(",");
    const productsExtraText = productsId.map((item) => {
      return "prod_" + item;
    });

    const productData = await Promise.all(
      productsExtraText.map((id) => stripe.products.retrieve(id))
    );

    createOrder(
      event.data.object,
      lineItems.data,
      customer.metadata.userId,
      productData
    );

    // let emailTo = session.customer_details.email;

    // const info = await transporter.sendMail({
    //   from: process.env.email, // sender address
    //   to: emailTo, // list of receivers
    //   subject: "Thanks for the payment", // Subject line
    //   text: "Thanks for the payment", // plain text body
    //   html: `<b>Hello world?</b>`, // html body
    // });

    // console.log("Hello: %s", info.messageId);
  }

  createReview();

  res.send().status(200).end();
});

// FUL FILL ORDER

const createOrder = async (data, lineItems, userId, productData) => {
  const items = lineItems.map((item, index) => {
    return {
      // id: "DO POPRAWY",
      name: item.description,
      imageUrl: productData[index].images[0],
      price: (item.price.unit_amount / 100).toFixed(2),
      quantity: item.quantity,
    };
  });

  await Order.create({
    userId: userId,
    paymentIntentId: data.payment_intent,
    products: items,
    subtotal: (data.amount_subtotal / 100).toFixed(2),
    total: (data.amount_total / 100).toFixed(2),
    shipping: data.customer_details,
    payment_status: data.payment_status,
  });
};

module.exports = {
  setPayment,
  setWebhook,
};
