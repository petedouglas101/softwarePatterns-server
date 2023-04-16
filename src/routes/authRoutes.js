const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Customer = mongoose.model("Customer");
const router = express.Router();

router.post("/signup", async (req, res) => {
  const { newCustomer } = req.body;
  console.log(newCustomer);
  try {
    const customer = new Customer({
      firstName: newCustomer.firstName,
      lastName: newCustomer.lastName,
      email: newCustomer.email,
      password: newCustomer.password,
    });
    await customer.save();

    const token = jwt.sign({ customerId: customer._id }, "SECRET_KEY");
    res.send({ token });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: "Must provide email and password" });
  }

  const customer = await Customer.findOne({ email });

  if (!customer) {
    return res.status(422).send({ error: "Invalid password or email" });
  }

  try {
    await customer.comparePassword(password);
    const token = jwt.sign({ customerId: customer._id }, "SECRET_KEY");
    res.send({ token });
  } catch (err) {
    return res.status(422).send({ error: "Invalid password or email" });
  }
});

module.exports = router;
