
const mongoose = require("mongoose");

mongoose.connect(process.env.mongoURI)
.then(()=>null)
.catch((err:any)=>null)

require('./schema')