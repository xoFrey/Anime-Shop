import express from "express";
import { ProductController } from "../controller/productController.js";

export const productRouter = express
  .Router()
  .get("/", ProductController.getAllProductsCtrl)
  .post("/", ProductController.createProductCtrl)
  .patch("/:productId", ProductController.editProductCtrl)
  .delete("/:productId", ProductController.deleteProductCtrl);
