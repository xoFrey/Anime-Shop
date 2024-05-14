import { Product } from "../../models/Product.js";

export const getProducts = async () => {
  const products = await Product.find({});
  return products;
};
