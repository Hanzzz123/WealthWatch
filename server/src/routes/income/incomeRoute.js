import express from "express";
import {
    createIncomeController,
    fetchAllIncomeController,
    fetchIncomeDetailController
} from "../../controllers/Income/incomeController.js";

export const incomeRoute = express.Router();

incomeRoute.post('/',createIncomeController )
incomeRoute.get('/',fetchAllIncomeController)
incomeRoute.get('/:id',fetchIncomeDetailController)


export default {incomeRoute}