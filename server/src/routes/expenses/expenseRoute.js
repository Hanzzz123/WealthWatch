import express from "express";
import {
    createExpenseController,
    fetchAllExpenseController,
    fetchExpenseDetailController,
    updateExpenseController,
    deleteExpenseController,
} from "../../controllers/Expenses/expenseController.js";

export const expenseRoute = express.Router();

expenseRoute.post('/',createExpenseController)
expenseRoute.get('/',fetchAllExpenseController)
expenseRoute.get('/:id',fetchExpenseDetailController)
expenseRoute.put('/:id',updateExpenseController)
expenseRoute.delete("/:id",deleteExpenseController)

export default {expenseRoute}