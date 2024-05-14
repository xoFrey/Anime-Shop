import express from "express";
import { UserController } from "../controller/userController.js";

export const userRouter = express
  .Router()
  .post("/register", UserController.registerUserCtrl)
  .post("/login", UserController.loginUserCtrl)
  .post("/verify", UserController.verifyUserCtrl);
