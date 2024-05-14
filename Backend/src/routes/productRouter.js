import express from "express";
import { ProductController } from "../controller/Product/ProductController.js";

export const productRouter = express
  .Router()
  .get("/", ProductController.getAllProductsCtrl)
  .post("/", ProductController.createProductCtrl);
