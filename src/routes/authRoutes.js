const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Customer = mongoose.model("Customer");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { firstName, lastName, email, shippingAddress, password } = req.body;
  try {
    const customer = new Customer({
      firstName,
      lastName,
      email,
      shippingAddress,
      password,
    });
    await user.save();

    const token = jwt.sign({ customerId: customer._id }, "SECRET_KEY");
    res.send({ token });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

module.exports = router;
