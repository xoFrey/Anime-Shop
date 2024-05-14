import express from "express";
import { OrderController } from "../controller/orderController.js";
import { doJwtAuth } from "../middlewares/doJwtAuth.js";

export const orderRouter = express
  .Router()
  .get("/", doJwtAuth, OrderController.getOrderCtrl)
  .post("/", doJwtAuth, OrderController.createOrderCtrl);
