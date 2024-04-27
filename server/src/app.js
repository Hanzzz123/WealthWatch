import express from "express";
import {dbConnect} from "./config/dbConnect.js";
import userRoute from "./routes/users/usersRoute.js";
export const app = express();


//db connect
dbConnect();

//middleware
app.use(express.json())
//routes
app.use('/', userRoute)

//income

//expenses

export default app
