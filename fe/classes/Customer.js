const User = require("./User.js");
class Customer extends User {
  constructor(obj) {
    super(obj);
  }

  //   getAddress() {
  //     return this.address;
  //   }

  //   setAddress(address) {
  //     this.address = address;
  //   }

  //   getIsAdmin() {
  //     return this.isAdmin;
  //   }

  //   setIsAdmin(isAdmin) {
  //     this.isAdmin = isAdmin;
  //   }

  //   getPreviousOrders() {
  //     return this.previousOrders;
  //   }

  //   setPreviousOrders(previousOrders) {
  //     this.previousOrders = previousOrders;
  //   }

  toString() {
    return `Customer: ${this.firstName} ${this.lastName} ${this.email} ${
      this.password
    } ${JSON.stringify(this.address)} ${this.isAdmin}`;
  }
}

module.exports = Customer;
