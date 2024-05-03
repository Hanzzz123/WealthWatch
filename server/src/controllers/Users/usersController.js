import {User} from "../../models/User.js";
import expressAsyncHandler from "express-async-handler";
//Register
export const registerUser = expressAsyncHandler(async (req,res)=>{
    const {email, firstname, lastname, password} = req?.body;
    const userExists = await User.findOne({email});
    if (userExists) throw new Error("User already exists")
    try{
        //check if user exists
        if(userExists) {
            res.status(500).json('User exists');
        }
        const user = await User.create({email, firstname, lastname, password});
        res.status(200).json(user);
    }catch (error){
        res.json(error);
    }
})

//fetch all users
export const fetchUsers = expressAsyncHandler(async (req,res)=>{
    try {
        const users = await User.find({});
        res.json(users)
    }catch (error) {
        res.json(error)
    }
});

export default {registerUser,fetchUsers};


