import { createProduct } from "./Products/createProducts.js";
import { getProducts } from "./Products/getProducts.js";
import { loginUser } from "./User/loginUser.js";
import { registerUser } from "./User/registerUser.js";
import { verifyUser } from "./User/verifyUser.js";

export const ProductService = {
  createProduct,
  getProducts,
};

export const UserService = {
  registerUser,
  loginUser,
  verifyUser,
};
