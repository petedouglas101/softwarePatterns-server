class UserClass {
  constructor(fistName, lastName, email, shippingAddress, password) {
    this.fistName = fistName;
    this.lastName = lastName;
    this.email = email;
    this.shippingAddress = shippingAddress;
    this.password = password;
  }

  get FirstName() {
    return this.fistName;
  }

  get LastName() {
    return this.lastName;
  }

  get Email() {
    return this.email;
  }

  get ShippingAddress() {
    return this.shippingAddress;
  }

  get Password() {
    return this.password;
  }

  set FirstName(fistName) {
    this.fistName = fistName;
  }

  set LastName(lastName) {
    this.lastName = lastName;
  }

  set Email(email) {
    this.email = email;
  }

  set ShippingAddress(shippingAddress) {
    this.shippingAddress = shippingAddress;
  }

  set Password(password) {
    this.password = password;
  }
}
