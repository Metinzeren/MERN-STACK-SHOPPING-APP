const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const orderRoute = require("./routes/order");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const authRoute = require("./routes/auth");
const cookieParser = require("cookie-parser");
const cors = require("cors");
dotenv.config();
//db ye bağlanıyorum
mongoose.connect("mongodb://localhost/shoppingnode");
app.get("/", (req, res) => {
  res.send("Hello first req");
});

//middlewares
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use("/users", userRoute);
app.use("/auth", authRoute);
app.use("/carts", cartRoute);
app.use("/orders", orderRoute);
app.use("/products", productRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running");
});
