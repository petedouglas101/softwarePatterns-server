class User {
  constructor(obj) {
    Object.assign(this, obj);
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  setFirstName(firstName) {
    this.firstName = firstName;
  }

  setLastName(lastName) {
    this.lastName = lastName;
  }

  setEmail(email) {
    this.email = email;
  }

  setPassword(password) {
    this.password = password;
  }

  getAddress() {
    return this.address;
  }

  setAddress(address) {
    this.address = address;
  }

  toString() {
    return `User: ${this.firstName} ${this.lastName} ${this.email} ${this.password}`;
  }
}

module.exports = User;
