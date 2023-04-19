const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const CustomerModel = mongoose.model("Customer");
const AdministratorModel = mongoose.model("Administrator");
const router = express.Router();
const createUser = require("../factoryMethod/userFactory");

router.post("/signup", async (req, res) => {
  const { newUser } = req.body;
  try {
    const user = await createUser(newUser);
    await user.save();
    const token = jwt.sign({ userId: user._id }, "SECRET_KEY");
    res.send({ token, user });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: "Must provide email and password" });
  }

  const customer = await CustomerModel.findOne({ email });
  const administrator = await AdministratorModel.findOne({ email });

  if (!customer && !administrator) {
    return res.status(422).send({ error: "Invalid password or email" });
  }
  if (customer && !administrator) {
    try {
      await customer.comparePassword(password);
      const token = jwt.sign({ customerId: customer._id }, "SECRET_KEY");
      res.send({ token, customer });
    } catch (err) {
      return res.status(422).send({ error: "Invalid password or email" });
    }
  } else if (administrator && !customer) {
    try {
      await administrator.comparePassword(password);
      const token = jwt.sign(
        { administratorId: administrator._id },
        "SECRET_KEY"
      );
      res.send({ token, administrator });
    } catch (err) {
      return res.status(422).send({ error: "Invalid password or email" });
    }
  }
});

module.exports = router;
