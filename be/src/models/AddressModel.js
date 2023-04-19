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

addressSchema.loadClass(require("../../../fe/classes/Address.js"));
mongoose.model("Address", addressSchema);
