const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
const orderRouter = require("./routes/order");
const errorMiddleWare = require("./middleware/errors");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileupload = require("express-fileupload");
const bodyParser = require("body-parser");
//MiddleWares
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your React app's URL
    credentials: true, // Allow cookies to be sent and received
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());

app.use("/products", productRouter.router);
app.use("/users", userRouter.router);
app.use("/orders", orderRouter.router);

//Databse Connection
async function connectDatabase() {
  await mongoose.connect(process.env.DB_URL);
  console.log("MongoDB Connected");
}
//Middleware for Error
app.use(errorMiddleWare);

module.exports = { app, connectDatabase };
