import mongoose, {Schema} from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"

//schema
export const incomeSchema = new Schema({
        title:{
            required: [true, 'Title is required'],
            type: String,
        },
        description: {
            required: [true, 'Description is required'],
            type: String,
        },
        type: {
            type: String,
            default:"income"
        },
        amount: {
            required: [true, 'Amount is required'],
            type: Number,
        },
        user:{
            //must be mongo db id
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:[true, "User ID is required"],
            }
    },
    {
        timestamp: true
    });

//pagination
incomeSchema.plugin(mongoosePaginate)

export const Income = mongoose.model("Income", incomeSchema);

export default {Income,incomeSchema}