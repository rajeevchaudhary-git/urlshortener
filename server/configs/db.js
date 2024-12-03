const mongoose = require("mongoose");
require("dotenv").config();

const dbconnection=()=>{
    mongoose.connect(process.env.DATABASE_URl,{
    }).then(()=>console.log("db is connect lets go"))
    .catch((error)=>{
        console.log('issue in db connection');
        console.log(error.message);
        process.exit(1);
    })
}
module.exports = dbconnection;
