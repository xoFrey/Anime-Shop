import { ProductService } from "../services/index.js";

const createProductCtrl = async (req, res) => {
  try {
    const productInfo = req.body;
    const createdProduct = await ProductService.createProduct(productInfo);
    res.status(201).json({ createdProduct });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not create new Product! " });
  }
};

const getAllProductsCtrl = async (req, res) => {
  try {
    const products = await ProductService.getProducts();
    res.json({ products });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      err,
      message: err.message || "Could not get all Product! ",
    });
  }
};

const editProductCtrl = async (req, res) => {
  try {
    const productId = req.params.productId;
    const updateInfo = req.body;
    const updatedProduct = await ProductService.editProduct(
      productId,
      updateInfo,
    );
    res.json({ updatedProduct });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not update product" });
  }
};

const deleteProductCtrl = async (req, res) => {
  try {
    const productId = req.params.productId;
    const deletedProduct = await ProductService.deleteProduct(productId);
    res.json({ deletedProduct });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error, message: error.message || "Could not delete Product" });
  }
};

export const ProductController = {
  createProductCtrl,
  getAllProductsCtrl,
  editProductCtrl,
  deleteProductCtrl,
};
