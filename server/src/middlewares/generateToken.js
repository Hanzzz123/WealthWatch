import jwt from "jsonwebtoken"

export const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_KEY,{expiresIn: "30d"});

}

export default generateToken;