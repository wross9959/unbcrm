import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "hmmmm_jwt_secret"; 
const EXPIRY = "7d";

export function createToken(payload: object) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: EXPIRY });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
}
