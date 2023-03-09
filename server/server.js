const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const cors = require("cors");
const port = process.env.PORT || 5000;
const stripe = require("stripe")(process.env.STRIPE_URI);

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/usersRoutes"));
app.use("/api/products", require("./routes/productsRoutes"));
app.use("/api/addresses", require("./routes/addressesRoutes"));
app.use("/api/invoices", require("./routes/invoicesRoutes"));

app.use(errorHandler);

const storeItems = new Map([
  [1, { priceInCents: 10000, name: "Learn React Today" }],
  [2, { priceInCents: 20000, name: "Learn CSS Today" }],
]);
app.listen(port, () => console.log(`Server started on port ${port}`));
