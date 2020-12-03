require('dotenv').config()

const mongoose = require("mongoose");
const URI = process.env.MONGO_URL;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(err));

const db = mongoose.connection;

db.once("open", function(){
    console.log("DB Connected!");
})

db.on("error", function(error){
    console.log(error);
})