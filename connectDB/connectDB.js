const mongoose = require("mongoose")

const connectDB=()=>{
    mongoose.connect("mongodb+srv://samiron:todoapp@cluster0.prtr58s.mongodb.net/?retryWrites=true&w=majority").then(()=>{
        console.log("Database is connected!");
    })
}

module.exports = connectDB;