import express from "express"
import mongoose from "mongoose";
import jwt from "jsonwebtoken"
const app = express();
import {connectDB} from "./db"
const dotenv = require("dotenv")
dotenv.config({
    path:"./env"
})

app.post("/api/v1/signup",(req,res)=>{

})


app.post("/api/v1/signin",(req,res)=>{
    
})

app.get("/api/v1/content",(req,res)=>{
    
})

app.delete("/api/v1/content",(req,res)=>{
    
})

app.post("/api/v1/brain/share",(req,res)=>{
    
})

app.get("/api/v1/brain/:sharLink",(req,res)=>{
    
})




connectDB();