import {User} from "../../models/User.js";


//Register
export const registerUser = async (req,res)=>{
    const {email, firstname, lastname, password} = req?.body;
    try{
        //check if user exists
        const userExists = await User.findOne({email});
        if(userExists){
            res.json('User exists');
        }
        const user = await User.create({email, firstname, lastname, password});
        res.status(200).json(user);
    }catch (error){
        res.json(error);
    }
};


export default registerUser;