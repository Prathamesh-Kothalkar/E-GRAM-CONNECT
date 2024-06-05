import { verify } from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import { Request,Response,NextFunction } from "express";

declare global {
    namespace Express {
      interface Request {
        userId?: string;
      }
    }
  }

const userAuth = (req:Request, res:Response, next:NextFunction) => {
  const head_token = req.headers.authorization;

  if (!head_token || !head_token.startsWith("Bearer ")) {
    res.status(401).json({
      message: "Invalid Token"
    });
    return;
  }

  try {
    const token = head_token.split(" ")[1];
    const decode = verify(token, JWT_SECRET)as { userId: string };
    if(!decode.userId){
      res.status(401).json({
        message:"Unethical Activity Observed. It's a Cyber Crime"
      })
      return 
    }
    req.userId = decode.userId;
    next();
  } catch (err) {
    res.status(401).json({
      message: err
    });
  }
};

export default userAuth;
