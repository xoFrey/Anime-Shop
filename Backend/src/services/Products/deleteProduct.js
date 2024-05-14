import { Product } from "../../models/Product.js";

export const deleteProduct = async (productId) => {
  const product = await Product.findById(productId);
  if (!product) throw new Error("Product doesnt exist");
  const deleted = await Product.findByIdAndDelete(productId);
  return deleted;
};
