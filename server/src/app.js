import express from "express";
import {dbConnect} from "./config/dbConnect.js";
import userRoute from "./routes/users/usersRoute.js";
import errorHandler from "./middlewares/errorMiddleware.js";
export const app = express();


//db connect
dbConnect();

//middleware
app.use(express.json())

//routes
app.use('/', userRoute)

//error
app.use(errorHandler);
//income

//expenses

export default app
