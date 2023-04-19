const express = require("express");
const mongoose = require("mongoose");
const ProductModel = mongoose.model("Product");
const CustomerModel = mongoose.model("Customer");
const Product = require("../../../fe/classes/Product.js");
const Customer = require("../../../fe/classes/Customer.js");
const util = require("util");

const router = express.Router();

router.post("/addProduct", async (req, res) => {
  const { newProduct } = req.body;
  const product = new Product(newProduct);
  if (!newProduct) {
    return res.status(422).send({ error: "Must provide product details" });
  }

  const productModel = new ProductModel(newProduct);
  await productModel.save();
  res.send({ message: "Product added" });
});

router.get("/getCustomers", async (req, res) => {
  const customers = await CustomerModel.find()
    .populate("previousOrders")
    .lean()
    .exec();
  console.log("Customers:", util.inspect(customers, { depth: null }));
  res.send(customers);
});

router.post("/updateStock", async (req, res) => {
  const { product } = req.body;

  //find product by title and updtate stock
  const productModel = await ProductModel.findOneAndUpdate(
    { productName: product.productName },
    {
      $set: {
        amount: product.amount,
      },
    }
  );

  res.send({ message: "Stock updated" });
});

module.exports = router;
