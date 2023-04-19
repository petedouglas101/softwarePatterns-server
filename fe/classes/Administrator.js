const User = require("./User.js");
class Administrator extends User {
  // constructor(firstName, lastName, email, password, adminId) {
  //   super(firstName, lastName, email, password);
  //   this.adminId = adminId;
  // }
  constructor(obj) {
    super(obj);
  }

  get adminId() {
    return this._adminId;
  }

  set adminId(adminId) {
    this._adminId = adminId;
  }

  toString() {
    return `Administrator: ${this.name} ${this.email} ${this.password} ${this.isAdmin}`;
  }
}

module.exports = Administrator;
