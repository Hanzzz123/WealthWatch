import expressAsyncHandler from "express-async-handler";
import {Expense} from "../../models/Expense.js";

//create
export const createExpenseController = expressAsyncHandler(async (req, res) => {
   const {title, amount, description,user} = req.body;
    try {
        const expense = await Expense.create({
            title,
            amount,
            description,
            user
        });
        res.json(expense);
    } catch (error){
        res.json(error);
    }
})

//fetch all expense
export const fetchAllExpenseController = expressAsyncHandler(async (req, res) => {
    const {page} = req?.query
    try {
        const expense = await Expense.paginate(
            {},{limit:10, page:Number(page)})
        res.json(expense);
    } catch (error){
        res.json(error);
    }
})

//fetch single expense
export const fetchExpenseDetailController = expressAsyncHandler(async (req, res) => {
    const {id} = req?.params
    try {
        const expense = await Expense.findById(id)
        res.json(expense);
    } catch (error){
        res.json(error);
    }
})

export const updateExpenseController = expressAsyncHandler(async (req, res)=>{
    const {id} = req?.params;
    const {title, amount, description} = req.body;
    try {
        const expense = await Expense.findByIdAndUpdate(id,{
            title, description, amount,
        },{new: true}
        );
        res.json(expense);
    }catch (error){
    }
})

//delete expense
export const deleteExpenseController = expressAsyncHandler(async (req, res) => {
    const {id} = req?.params
    try {
        const expense = await Expense.findByIdAndDelete(id)
        res.json(expense);
    } catch (error){
        res.json(error);
    }
})

export default {
    createExpenseController,
    fetchAllExpenseController,
    fetchExpenseDetailController,
    updateExpenseController,
    deleteExpenseController
}