const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.CONNECTION_URL,
    (err) =>{
        if(!err) {
            console.log("connected to database 😂")
        }else{
            console.log("No connection 😒")
        }
    }
    
    );
