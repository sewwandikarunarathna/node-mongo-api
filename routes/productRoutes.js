const express = require("express");
const Product = require("../models/productModel");
const {
  getProducts,
  createProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

//create product
router.post("/", createProducts);

//fetch all products
router.get("/", getProducts);

//fetch a product by id
router.get("/:id", getSingleProduct);

//update a product
router.put("/:id", updateProduct);

//delete a product
router.delete("/:id", deleteProduct);

module.exports = router;
