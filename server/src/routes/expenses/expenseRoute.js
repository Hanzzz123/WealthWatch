import express from "express";
import {
    createExpenseController,
    fetchAllExpenseController,
    fetchExpenseDetailController,
    updateExpenseController,
    deleteExpenseController,
} from "../../controllers/Expenses/expenseController.js";
import authMiddleware from "../../middlewares/authMiddleware.js";

export const expenseRoute = express.Router();

expenseRoute.post('/',authMiddleware,createExpenseController)
expenseRoute.get('/',authMiddleware,fetchAllExpenseController)
expenseRoute.get('/:id',authMiddleware,fetchExpenseDetailController)
expenseRoute.put('/:id',authMiddleware,updateExpenseController)
expenseRoute.delete("/:id",authMiddleware,deleteExpenseController)

export default {expenseRoute}