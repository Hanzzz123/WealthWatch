import mongoose from "mongoose";

export const dbConnect = async () =>{
    // console.log(process.env.MONGO_URL)
    try{
        await mongoose.connect(process.env.MONGO_URL, {

        });
        console.log(`DB Connected succesfully`)

    }catch (error){
        console.log(`Error ${error.message}`)
    }
};

export default dbConnect;