require("./models/CustomerModel");
require("./models/AdministratorModel");
require("./models/ProductModel");
require("./models/OrderModel");
const express = require("express");
const mongoDBConnection = require("./databaseConnection/mongoDBConnection");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const accountRoutes = require("./routes/accountRoutes");
const adminRoutes = require("./routes/AdminRoutes");
const orderRoutes = require("./routes/orderRoutes");
const requireAuth = require("./middlewares/requireAuth");

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(accountRoutes);
app.use(adminRoutes);
app.use(orderRoutes);

mongoDBConnection.connect().then(() => {
  console.log("Connected to MongoDB!");

  mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.warn("MongoDB connection disconnected");
  });

  mongoose.connection.on("reconnected", () => {
    console.log("MongoDB connection reconnected");
  });
});

app.get("/", requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
