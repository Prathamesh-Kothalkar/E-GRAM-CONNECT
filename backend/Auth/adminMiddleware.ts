import { Request,Response,NextFunction } from "express";
import { JWT_SECRET } from "../config";
import { verify } from "jsonwebtoken";

declare global {
    namespace Express {
      interface Request {
        adminId?: string;
      }
    }
  }

const adminAuth = (req:Request,res:Response,next:NextFunction)=>{
    const header_token = req.headers.authorization;
    if(!header_token && !header_token?.startsWith("Bearer ")){
        res.status(401).json({
            message:"Invalid token"
        })
        return 
    }
    try{
        const token = header_token.split(" ")[1];
        const decode = verify(token,JWT_SECRET) as {adminId:string}  ;
        if(!decode.adminId){
            res.status(401).json({
                message:"Unethical Activity Observed. It's a Cyber Crime"
            })
            return
        }

        req.adminId=decode.adminId;
        next();
    }
    catch(err){
        res.status(401).json({
            message:err
        })
        return 
    }
   
}

export default adminAuth;