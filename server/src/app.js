const express = require("express");
const dbConnect = require("./config/dbConnect");
const userRoute = require("./routes/users/usersRoute");
const app = express();



//db connect
dbConnect();

//routes
app.use('/', userRoute)

//income

//expenses

module.exports = app;
