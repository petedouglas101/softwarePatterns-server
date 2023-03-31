const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://peterdouglas101:Coolrunnings1@cluster0.uda9llq.mongodb.net/?retryWrites=true&w=majority";

class MongoDBConnection {
  constructor() {
    this.connection = null;
  }

  connect() {
    if (!this.connection) {
      this.connection = mongoose.connect(mongoURI);
    }

    return this.connection;
  }
}

module.exports = new MongoDBConnection();
