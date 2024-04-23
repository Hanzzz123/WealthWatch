const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();

//db connect
dbConnect();
module.exports = app;
