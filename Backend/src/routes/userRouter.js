import express from "express";
import { UserController } from "../controller/userController.js";
import { doJwtAuth } from "../middlewares/doJwtAuth.js";

export const userRouter = express
  .Router()
  .post("/customer/register", UserController.userRegistrationCtrl)
  .post("/admin/register", doJwtAuth, UserController.adminRegistrationCtrl)
  .post("/login", UserController.loginUserCtrl)
  .post("/verify", UserController.verifyUserCtrl);
