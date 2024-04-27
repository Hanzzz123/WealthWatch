import mongoose from "mongoose";

//schema
export const userSchema = mongoose.Schema({
    firstname:{
        required: [true, 'First name is required'],
        type: String,
    },
    lastname: {
        required: [true, 'Last name is required'],
        type: String,
    },
    email: {
        required: [true, 'email is required'],
        type: String,
    },
    password: {
        required: [true, 'password is required'],
        type: String,
    },
    isAdmin:{
        type: Boolean,
    }
},
    {
        timestamp: true
    })

//compile schema into model
export const User = mongoose.model('User', userSchema);
export default {User,userSchema}
