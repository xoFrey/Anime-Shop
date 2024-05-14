import { OrderService } from "../services/index.js";

const createOrderCtrl = async (req, res) => {
  try {
    const orderInfo = req.body;
    const createdOrder = await OrderService.createOrder(orderInfo);
    res.status(201).json({ createdOrder });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
      message: error.message || "Could not create Order! ",
    });
  }
};

const getOrderCtrl = async (req, res) => {
  try {
    const authenticatedUserId = req.authenticatedUserId;
    console.log(authenticatedUserId);
    const orders = await OrderService.getOrder(authenticatedUserId);
    res.json({ orders });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
      message: error.message || "Could not get Order! ",
    });
  }
};

export const OrderController = {
  createOrderCtrl,
  getOrderCtrl,
};
