const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Customer = mongoose.model("Customer");
const router = express.Router();

const requireAuth = require("../middlewares/requireAuth");

router.use(requireAuth);

router.get("/email", async (req, res) => {
  const { email } = req.query;
  const customer = await Customer.findOne({ email });

  res.send(customer);
});

router.post("/updateAddress", async (req, res) => {
  const { address } = req.body;
  if (!address) {
    return res.status(422).send({ error: "Must provide address" });
  }
  const customer = await Customer.findOneAndUpdate(
    { _id: req.customer._id },
    {
      $set: {
        address: address,
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
