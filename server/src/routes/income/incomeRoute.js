import express from "express";
import {createIncomeController, fetchAllIncomeController} from "../../controllers/Income/incomeController.js";

export const incomeRoute = express.Router();

incomeRoute.post('/',createIncomeController )
incomeRoute.get('/',fetchAllIncomeController)


export default {incomeRoute}