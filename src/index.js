const express = require("express");
const mongoDBConnection = require("./DatabaseConnection/MongoDBConnection");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

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

// app.get("/", (req, res) => {
//   res.send(`Your email: ${req.user.email}`);
// });

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
