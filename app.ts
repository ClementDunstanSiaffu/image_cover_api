require('dotenv').config();
require('./model/db')
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({extended:false}))
const Routes = require("./routes")
Routes.getCoverImageRoutes(app);
app.listen(PORT);