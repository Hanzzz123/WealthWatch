import expressAsyncHandler from "express-async-handler";
import {Income} from "../../models/Income.js";

//create
export const createIncomeController = expressAsyncHandler(async (req, res) => {
   const {title, amount, description,user} = req.body;
    try {
        const income = await Income.create({
            title,
            amount,
            description,
            user
        });
        res.json(income);
    } catch (error){
        res.json(error);
    }
})

//fetch all income
export const fetchAllIncomeController = expressAsyncHandler(async (req, res) => {
    const {} = req.query;
    try {
        const income = await Income.paginate({},{limit:10, page:Number(page)});
        res.json(income);
    } catch (error){
        res.json(error);
    }
})

//fetch single income
export const fetchIncomeDetailController = expressAsyncHandler(async (req, res) => {
    const {id} = req?.params
    try {
        const income = await Income.findById(id)
        res.json(income);
    } catch (error){
        res.json(error);
    }
})

export const updateIncomeController = expressAsyncHandler(async (req, res)=>{
    const {id} = req?.params;
    const {title, amount, description} = req.body;
    try {
        const income = await Income.findByIdAndUpdate(id,{
            title, description, amount,
        },{new: true}
        );
        res.json(income);
    }catch (error){

    }
})

//delete income
export const deleteIncomeController = expressAsyncHandler(async (req, res) => {
    const {id} = req?.params
    try {
        const income = await Income.findByIdAndDelete(id)
        res.json(income);
    } catch (error){
        res.json(error);
    }
})

export default {
    createIncomeController,
    fetchAllIncomeController,
    fetchIncomeDetailController,
    updateIncomeController,
    deleteIncomeController
}