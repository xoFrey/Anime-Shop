import { Order } from "../../models/Order.js";
import { User } from "../../models/User.js";

export const getOrder = async (authenticatedUserId) => {
  const user = await User.findById(authenticatedUserId);
  if (!user) throw new Error("User not found");
  const userOrders = await Order.find({ customer: authenticatedUserId });
  return userOrders;
};
