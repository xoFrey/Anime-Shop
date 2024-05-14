import { createOrder } from "./Order/createOrder.js";
import { getOrder } from "./Order/getOrders.js";
import { createProduct } from "./Products/createProducts.js";
import { deleteProduct } from "./Products/deleteProduct.js";
import { editProduct } from "./Products/editProduct.js";
import { getProducts } from "./Products/getProducts.js";
import { adminRegistration } from "./User/adminRegistration.js";
import { loginUser } from "./User/loginUser.js";
import { userRegistration } from "./User/userRegistration.js";
import { verifyUser } from "./User/verifyUser.js";

export const ProductService = {
  createProduct,
  getProducts,
  editProduct,
  deleteProduct,
};

export const UserService = {
  userRegistration,
  adminRegistration,
  loginUser,
  verifyUser,
};

export const OrderService = {
  createOrder,
  getOrder,
};
