const express = require("express");
const mongoose = require("mongoose");
const ProductModel = mongoose.model("Product");
const CustomerModel = mongoose.model("Customer");
const OrderModel = mongoose.model("Order");

const requireAuth = require("../middlewares/requireAuth");

const router = express.Router();

router.use(requireAuth);

router.get("/getProducts", async (req, res) => {
  console.log("getProductsRoute");
  const products = await ProductModel.find({});
  console.log(products);
  res.send(products);
});

router.post("/submitOrder", async (req, res) => {
  console.log("submitOrderRoute");
  const { productsInCart } = req.body;
  const customer = await CustomerModel.findOne({ _id: req.customer._id });
  const newOrder = new OrderModel({
    customer: customer,
    products: productsInCart,
  });
  //add order to customer previous orders and save
  customer.previousOrders.push(newOrder);
  await customer.save();
  await newOrder.save();
  res.send(newOrder);
});

module.exports = router;
