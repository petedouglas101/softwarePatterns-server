class Administrator extends User {
  constructor(firstName, lastName, email, password) {
    super(firstName, lastName, email, password);
    this.isAdmin = true;
  }
  getIsAdmin() {
    return this.isAdmin;
  }

  setIsAdmin(isAdmin) {
    this.isAdmin = isAdmin;
  }

  toString() {
    return `Administrator: ${this.name} ${this.email} ${this.password} ${this.isAdmin}`;
  }
}
