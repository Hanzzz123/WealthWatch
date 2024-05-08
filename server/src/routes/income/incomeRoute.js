import express from "express";
import {
    createIncomeController,
    fetchAllIncomeController,
    fetchIncomeDetailController,
    updateIncomeController,
    deleteIncomeController
} from "../../controllers/Income/incomeController.js";
import authMiddleware from "../../middlewares/authMiddleware.js";

export const incomeRoute = express.Router();

incomeRoute.post('/',authMiddleware,createIncomeController )
incomeRoute.get('/', authMiddleware, fetchAllIncomeController)
incomeRoute.get('/:id',authMiddleware,fetchIncomeDetailController)
incomeRoute.put('/:id',authMiddleware,updateIncomeController)
incomeRoute.delete("/:id",authMiddleware,deleteIncomeController)

export default {incomeRoute}