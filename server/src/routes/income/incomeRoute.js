import express from "express";
import {
    createIncomeController,
    fetchAllIncomeController,
    fetchIncomeDetailController,
    updateIncomeController,
    deleteIncomeController
} from "../../controllers/Income/incomeController.js";

export const incomeRoute = express.Router();

incomeRoute.post('/',createIncomeController )
incomeRoute.get('/',fetchAllIncomeController)
incomeRoute.get('/:id',fetchIncomeDetailController)
incomeRoute.put('/:id',updateIncomeController)
incomeRoute.delete("/:id",deleteIncomeController)

export default {incomeRoute}