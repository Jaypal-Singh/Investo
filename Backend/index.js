require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");


const authRouter = require("./Routes/AuthRoute");
const userRoute = require("./Routes/UserRoute");
const HoldingsRoute = require("./Routes/HoldingsRoute");
const newOrderRoute = require("./Routes/NewOrderRoute");
const PositionRoute = require("./Routes/PositionsRoute");
const ListRoute = require("./Routes/ListRoute")
const Orders = require("./Routes/OrderRoute");

const app = express();
const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

// ------------------ MIDDLEWARE -------------------
app.use(bodyParser.json());
app.use(
  cors({
    origin: [
      "http://localhost:3001",
      "http://localhost:3000",
      "http://localhost:3002",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// ------------------ ROUTES -----------------------
app.use("/auth", authRouter);
app.use("/", userRoute);

// GET Holdings
app.use("/", HoldingsRoute);

// GET Positions
app.use("/", PositionRoute);

// POST Order
app.use("/", newOrderRoute);

//get List
app.use("/", ListRoute);

//get Order
app.use('/', Orders)
// ------------------ SERVER START ---------------------
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB is connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed", err);
  });
