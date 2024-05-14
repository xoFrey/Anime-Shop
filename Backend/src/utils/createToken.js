import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

export const createToken = (user, tokenType = "access") => {
  const issuedAt = Math.ceil(Date.now() / 1000);
  const tokenPayload = {
    sub: user._id,
    type: tokenType,
    iat: issuedAt,
  };
  const token = jwt.sign(tokenPayload, jwtSecret, { expiresIn: "1h" });
  return token;
};
