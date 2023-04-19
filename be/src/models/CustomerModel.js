const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const cardDetailsSchema = new mongoose.Schema({
  cardNumber: {
    type: String,
    unique: false,
    required: true,
  },
  expiryDate: {
    type: String,
    unique: false,
    required: true,
  },
  cvv: {
    type: String,
    unique: false,
    required: true,
  },
});

const customerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    unique: false,
    required: true,
  },
  lastName: {
    type: String,
    unique: false,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
  },
  cardDetails: {
    type: cardDetailsSchema,
    required: false,
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
