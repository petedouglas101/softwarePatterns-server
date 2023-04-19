const express = require("express");
const mongoose = require("mongoose");
const ProductModel = mongoose.model("Product");
const Product = require("../../../fe/classes/Product.js");

const router = express.Router();

router.post("/addProduct", async (req, res) => {
  const { newProduct } = req.body;
  const product = new Product(newProduct);
  console.log(product);
  if (!newProduct) {
    return res.status(422).send({ error: "Must provide product details" });
  }

  const productModel = new ProductModel(product);
  await productModel.save();
  res.send({ message: "Product added" });
});

module.exports = router;
