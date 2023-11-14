const Product = require("../models/productModel");

//create product
const createProducts = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//fetch all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//fetch a product by id
const getSingleProduct = async (req, res) => {
  try {
    //get the id coming from params
    const { id } = req.params;

    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update a product
const updateProduct = async (req, res) => {
  try {
    //get the id coming from params
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body);

    //check whether product is updated or not
    if (!product) {
      return res
        .status(404)
        .json({ message: `Cannot find any product with ID ${id}` });
    }

    const productUpdated = await Product.findById(id);
    res.status(200).json(productUpdated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete a product
const deleteProduct = async (req, res) => {
  try {
    //get the id coming from params
    const { id } = req.params;

    const productDeleted = await Product.findByIdAndDelete(id);

    //check whether product is deleted or not
    if (!productDeleted) {
      return res
        .status(404)
        .json({ message: `Cannot find any product with ID ${id}` });
    }
    res.status(200).json(productDeleted);

    // if you want to fetch all existing products after deleting the above product
    // const products = await Product.find({});
    // res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  createProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
