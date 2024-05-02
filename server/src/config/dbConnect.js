import mongoose from "mongoose";

export const dbConnect = async () =>{
    try{
        await mongoose.connect("mongodb://localhost/WealthWatch", {
        });
        console.log(`DB Connected succesfully`)
    }catch (error){
        console.log(`Error ${error.message}`)
    }
};

export default dbConnect();