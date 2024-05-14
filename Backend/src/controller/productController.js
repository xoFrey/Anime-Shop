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

export const ProductController = { createProductCtrl, getAllProductsCtrl };
