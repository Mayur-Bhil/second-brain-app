import { model, mongo, Schema } from "mongoose";

const mongoose = require("mongoose")
const  connectDB = async() => {
    await mongoose.connect(`${process.env.CONNECTION_URL}/${process.env.DB_NAME}`);
};

const UserSchema =new Schema({
    username : {
        type:String,
        required :true,
        unique : true,
        lowercase : true,
        trim:true,
        index:true,
    },
    email : {
        type:String,
        required :true,
        unique : true,
        lowercase : true,
        trim:true,
    },
    password :{
        type:String,
        required:[true,"Password IS Required"]
    },
},{
    timestamps:true
})


export const User = mongoose.model("User",UserSchema)
module.exports = {connectDB};