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

//fetch all income
export const fetchAllExpenseController = expressAsyncHandler(async (req, res) => {
    try {
        const expense = await Expense.find()
        res.json(expense);
    } catch (error){
        res.json(error);
    }
})

//fetch single income
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

//delete income
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