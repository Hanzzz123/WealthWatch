import express from "express";
import {dbConnect} from "./config/dbConnect.js";
import userRoute from "./routes/users/usersRoute.js";
import {errorHandler,notFound} from "./middlewares/errorMiddleware.js";
import dotenv from "dotenv"
import {incomeRoute} from "./routes/income/incomeRoute.js";
import {expenseRoute} from "./routes/expenses/expenseRoute.js";
import authMiddleware from "./middlewares/authMiddleware.js";


export const app = express();

//env config
dotenv.config()

//db connect
dbConnect();

//middleware
app.use(express.json())

//routes
app.use('/api/users', userRoute)
app.use('/api/income',incomeRoute)
app.use('/api/expense',expenseRoute)

//error
app.use(notFound);
app.use(errorHandler);
app.use(authMiddleware)

//income

//expenses

export default app
