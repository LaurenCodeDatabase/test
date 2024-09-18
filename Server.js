const express = require("express");
const mongoose = require("mongoose");
const app = express();
//import mongoose from "mongoose";
app.use(express.json());
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    email:{
        type:String,
        unique:true,
        require: true
    },
    password:{
        type:String,
        require: true
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
});

const User = mongoose.model("User", userSchema);

mongoose.connect("mongodb+srv://pratapbangosavi84:mdv7ixpML1AIRxcK@mern-2024.ucvhw.mongodb.net/",{dbName: "MERN_2024"}).then(()=>console.log("MONGOODB is Connected"));
app.get("/",(req,res) => {
    res.status(200).send("Landing Page");
});

app.get("/about",(req,res) => {
    res.status(200).send("About us Page");
});
 const port = 8000;
app.listen(port, ()=>console.log(`Server is running on port ${port}`));
