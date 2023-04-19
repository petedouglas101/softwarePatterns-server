const mongoose = require("mongoose");
const Customer = require("../../../fe/classes/Customer.js");
const Administrator = require("../../../fe/classes/Administrator.js");
const CustomerModel = mongoose.model("Customer");
const AdministratorModel = mongoose.model("Administrator");
const createUser = async (userData) => {
  if (userData.role === "Customer") {
    return new CustomerModel(userData);
  } else if (userData.role === "Administrator") {
    const admin = new AdministratorModel(userData);
    return admin;
  } else {
    throw new Error("Invalid role");
  }
};

module.exports = createUser;
