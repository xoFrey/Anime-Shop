import { Order } from "../../models/Order.js";

export const createOrder = async (orderInfo, authenticatedUserId) => {
  const order = await Order.create({
    ...orderInfo,
    customer: authenticatedUserId,
  });
  return order;
};
