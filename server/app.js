const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const urlroutes = require("./routes/url");
const dbconn = require("./configs/db");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors({
    origin:'*'
}));

app.listen(process.env.PORT,()=>{
    console.log("server is running ");
});
// yaha route ko mount kar raha theek
app.use("/",urlroutes); 

// call db conection ko
dbconn();



// app.get('/',(req,res)=>{
//     return res.send('Hello Lets Shrink The Link');
// })