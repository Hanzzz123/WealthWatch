import mongoose, {Schema} from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2"

//schema
export const expenseSchema = new Schema({
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
            default:"expense"
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
        timestamp: true,
        toJSON: {
            virtuals: true,
        },
        toObject:{
            virtuals: true
        }
    });

expenseSchema.plugin(mongoosePaginate)
export const Expense = mongoose.model("Expense", expenseSchema);

export default {Expense,expenseSchema}