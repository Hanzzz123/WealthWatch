const express = require('express');
const {registerUser} = require("../../controllers/Users/usersController");

const userRoute = express.Router();

userRoute.post('/register',registerUser)

module.exports = userRoute;