import mongoose, {Schema} from "mongoose";
import bcrypt from "bcryptjs"

//schema
export const userSchema = new Schema({
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
    });

//hash password
userSchema.pre('save', async function (next) {
    if(!this.isModified("password")){
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

//compile schema into model
export const User = mongoose.model('User', userSchema);
export default {User,userSchema}
