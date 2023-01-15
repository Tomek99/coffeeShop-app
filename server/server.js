require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// import routes
const authRoute = require("./routes/auth");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/api", (req, res) => {
  res.send("Welcome to mongodb ap5");
});

app.use("/api/auth", authRoute);

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL, {
    dbName: "data",
  })
  .then(() => {
    console.log("Connected to database");

    app.listen(5000, () => {
      console.log("Server started on port 5000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
