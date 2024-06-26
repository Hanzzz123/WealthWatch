import {User} from "../../models/User.js";
import expressAsyncHandler from "express-async-handler";
import generateToken from "../../middlewares/generateToken.js";

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

//login user
export const loginUserController = expressAsyncHandler(async (req, res)=>{
    const {email,password} = req?.body
    //Find user in db
    const userFound = await User.findOne({email});

    //check if user password match
    if(userFound && (await userFound?.isPasswordMatch(password))){
        res.json({
            _id: userFound?._id,
            firstname: userFound?.firstname,
            lastname: userFound?.lastname,
            email: userFound?.email,
            isAdmin: userFound?.isAdmin,
            token: generateToken(userFound?._id)
        })
    }
    else {
        res.status(401);
        throw new Error('Invalid login credentials')
    }

})

export default {registerUser,fetchUsers,loginUserController};


