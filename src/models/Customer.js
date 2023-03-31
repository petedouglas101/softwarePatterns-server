const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
  shippingAddress: {
    type: String,
    unique: false,
    required: true,
  },
  password: {
    type: String,
    required: true,
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

    bcrypt.hash(user.password, salt, (err, hash) => {
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

mongoose.model("Customer", customerSchema);
