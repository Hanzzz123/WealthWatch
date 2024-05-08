import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import {User} from "../models/User.js";


export const authMiddleware = expressAsyncHandler(async (req,res,next) =>{
    if (req?.headers?.authorization?.startsWith("Bearer")){
       const token = req?.headers?.authorization?.split(" ")[1];
    try {
        if (token){
            const decodedUser = jwt.verify(token,process.env.JWT_KEY)
            //find the user
            //attach the user to req obj
            req.user = await User.findById(decodedUser?.id);
            next();
        }
    }catch (error){
        throw new Error("Not authorized")
    }
    }else {
        throw new Error("Theres no token attached to the header")
    }
})

export default authMiddleware;

