const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Customer = mongoose.model("Customer");
const Administrator = mongoose.model("Administrator");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ error: "You must be logged in." });
  }

  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, "SECRET_KEY", async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: "You must be logged in." });
    }

    const { customerId } = payload;
    const { administratorId } = payload;


    const customer = await Customer.findById(customerId);
    const administrator = await Administrator.findById(administratorId);

    if (customer && !administrator) {
      req.customer = customer;
      next();
    } else if (administrator && !customer) {
      req.administrator = administrator;
      next();
    }
  });
};
