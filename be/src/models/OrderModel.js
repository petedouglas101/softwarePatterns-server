const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  orderTotal: {
    type: Number,
  },
});

orderSchema.methods.calculateOrderTotal = function () {
  return this.products.reduce((total, product) => {
    return total + product.productPrice;
  }, 0);
};

// orderSchema.loadClass(require("../../../fe/classes/Order.js"));

const Order = mongoose.model("Order", orderSchema);
