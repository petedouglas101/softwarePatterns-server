class User {
  // constructor(firstName, lastName, email, password) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.email = email;
  //   this.password = password;
  // }

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
