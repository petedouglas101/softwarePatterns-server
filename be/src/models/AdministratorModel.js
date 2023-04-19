const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const administratorSchema = new mongoose.Schema({
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
    unique: false,
    required: true,
  },
  role: {
    type: String,
    unique: false,
    required: true,
  },
});

administratorSchema.pre("save", function (next) {
  const administrator = this;
  if (!administrator.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(administrator.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      administrator.password = hash;
      next();
    });
  });
});

administratorSchema.methods.comparePassword = function (administratorPassword) {
  const administrator = this;

  return new Promise((resolve, reject) => {
    bcrypt.compare(
      administratorPassword,
      administrator.password,
      (err, isMatch) => {
        if (err) {
          return reject(err);
        }

        if (!isMatch) {
          return reject(false);
        }

        resolve(true);
      }
    );
  });
};

administratorSchema.loadClass(require("../../../fe/classes/Administrator.js"));
mongoose.model("Administrator", administratorSchema);
