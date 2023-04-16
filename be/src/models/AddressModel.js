const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  addressLine1: {
    type: String,
    unique: false,
    required: true,
  },
  addressLine2: {
    type: String,
    unique: false,
    required: false,
  },
  postcode: {
    type: String,
    unique: false,
    required: true,
  },
  country: {
    type: String,
    unique: false,
    required: true,
  },
});

mongoose.model("Address", addressSchema);
