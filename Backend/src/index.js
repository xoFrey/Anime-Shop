import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { productRouter } from "./routes/productRouter.js";
import { connectToDatabase } from "./models/index.js";
import { userRouter } from "./routes/userRouter.js";
import { orderRouter } from "./routes/orderRouter.js";
import { doJwtAuth } from "./middlewares/doJwtAuth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/products", productRouter);
app.use("/api/v1/orders", doJwtAuth, orderRouter);
app.use("/api/v1", doJwtAuth, userRouter);
app.use("/api/v1/customer", userRouter);

try {
  await connectToDatabase();
  app.listen(PORT, () => console.log("Server ready at", PORT));
} catch (err) {
  console.log(err);
  process.exit(1);
}
