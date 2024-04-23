const mongoose = require('mongoose');

const dbConnect = async () =>{
    try{
        await mongoose.connect("mongodb://localhost:27017/", {
        });
        console.log(`DB Connected succesfully`)
    }catch (error){
        console.log(`Error ${error.message}`)
    }
};

module.exports = dbConnect;