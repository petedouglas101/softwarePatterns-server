const User = require("./User.js");
class Customer extends User {
//   address;
//   previousOrders;
//   constructor(firstName, lastName, email, password) {
//     super(firstName, lastName, email, password);
//     this.isAdmin = false;
//   }

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
    return `Customer: ${this.firstName} ${this.lastName} ${this.email} ${this.password} ${this.address} ${this.isAdmin}`;
  }
}

module.exports = Customer;