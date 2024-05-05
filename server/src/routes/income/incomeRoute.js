import express from "express";
import createIncomeController from "../../controllers/Income/incomeController.js";

export const incomeRoute = express.Router();

incomeRoute.post('/',createIncomeController )


export default {incomeRoute}