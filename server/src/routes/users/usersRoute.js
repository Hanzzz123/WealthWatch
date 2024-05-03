import express from "express";
import {registerUser,
    fetchUsers,
    loginUserController
} from "../../controllers/Users/usersController.js";

const userRoute = express.Router();

userRoute.post('/register',registerUser);
userRoute.post('/login',loginUserController);
userRoute.get("/",fetchUsers);

export default userRoute;