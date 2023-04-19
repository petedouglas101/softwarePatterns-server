const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Customer = mongoose.model("Customer");
const Address = mongoose.model("Address");

const router = express.Router();

const requireAuth = require("../middlewares/requireAuth");

router.use(requireAuth);

router.get("/email", async (req, res) => {
  const { email } = req.query;
  const customer = await Customer.findOne({ email });

  res.send(customer);
});

router.post("/updateAddress", async (req, res) => {
  const { newAddress } = req.body;
  if (!newAddress) {
    return res
      .status(422)
      .send({ error: "Must provide addressLine1, postcode and country" });
  }

  const AddressModel = new Address(newAddress);

  // refactor using mongoose
  const customer = await Customer.findOneAndUpdate(
    { _id: req.customer._id },
    {
      $set: {
        address: AddressModel,
      },
    }
  );

  res.send({ message: "Address updated" });
});

router.post("/updateCardDetails", async (req, res) => {
  const { cardNumber, expiryDate, cvv } = req.body;
  if (!cardNumber || !expiryDate || !cvv) {
    return res
      .status(422)
      .send({ error: "Must provide cardNumber, expiryDate and cvv" });
  }

  const cardDetails = {
    cardNumber: cardNumber,
    expiryDate: expiryDate,
    cvv: cvv,
  };

  const customer = await Customer.findOneAndUpdate(
    { _id: req.customer._id },
    {
      $set: {
        cardDetails: cardDetails,
      },
    }
  );

  res.send({ message: "Card details updated" });
});
module.exports = router;
