const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const cardDetailsSchema = new mongoose.Schema({
  cardNumber: {
    type: String,
    unique: false,
  },
  expiryDate: {
    type: String,
    unique: false,
  },
  cvv: {
    type: String,
    unique: false,
  },
});

const addressSchema = new mongoose.Schema({
  addressLine1: {
    type: String,
    unique: false,
  },
  addressLine2: {
    type: String,
    unique: false,
  },
  postcode: {
    type: String,
    unique: false,
  },
  country: {
    type: String,
    unique: false,
  },
});

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    unique: false,
  },
  lastName: {
    type: String,
    unique: false,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
  },
  address: {
    type: addressSchema,
  },
  cardDetails: {
    type: cardDetailsSchema,
  },
});

customerSchema.pre("save", function (next) {
  const customer = this;
  if (!customer.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(customer.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      customer.password = hash;
      next();
    });
  });
});

customerSchema.methods.comparePassword = function (customerPassword) {
  const customer = this;

  return new Promise((resolve, reject) => {
    bcrypt.compare(customerPassword, customer.password, (err, isMatch) => {
      if (err) {
        return reject(err);
      }

      if (!isMatch) {
        return reject(false);
      }

      resolve(true);
    });
  });
};

customerSchema.loadClass(require("../../../fe/classes/Customer.js"));
mongoose.model("Customer", customerSchema);
