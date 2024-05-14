import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const jwtSecret = process.env.JWT_SECRET;

export const doJwtAuth = async (req, res, next) => {
  const _invalidAuth = (message) => {
    res.status(401).json({ message: message || "Invalid authorization" });
  };
  if (!req.headers.authorization) return _invalidAuth();

  const [authType, tokenString] = req.headers.authorization.split(" ");
  if (authType !== "Bearer" || !tokenString) return _invalidAuth();

  try {
    const verifiedClaims = jwt.verify(tokenString, jwtSecret);
    req.authenticatedUserId = verifiedClaims.sub;
    next();
  } catch (error) {
    console.log(error);
    return _invalidAuth();
  }
};
