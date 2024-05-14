import { Product } from "../../models/Product.js";

export const editProduct = async (productId, updateInfo) => {
  const product = await Product.findById(productId);
  if (!product) throw new Error("Product doesnt exist");
  const updated = await Product.findByIdAndUpdate(
    productId,
    { $set: updateInfo },
    { new: true },
  );
  return updated;
};
