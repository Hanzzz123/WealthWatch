import mongoose from "mongoose";

export const dbConnect = async () =>{
    try{
        await mongoose.connect("mongodb://localhost:27017/", {
        });
        console.log(`DB Connected succesfully`)
    }catch (error){
        console.log(`Error ${error.message}`)
    }
};

export default dbConnect();