const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
  },
  productPrice: {
    type: Number,
  },
});

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
  products: [
    {
      type: productSchema,
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
