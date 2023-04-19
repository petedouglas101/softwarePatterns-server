const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
  },
  manufacturerName: {
    type: String,
  },
  productCategory: {
    type: String,
  },
  productPrice: {
    type: Number,
  },
  productImage: {
    type: String,
  },
  amount: {
    type: Number,
  },
});

productSchema.loadClass(require("../../../fe/classes/Product.js"));

const Product = mongoose.model("Product", productSchema);
