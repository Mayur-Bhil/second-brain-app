import mongoose, { Schema } from "mongoose";
const TagsSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true 
    }   
})


export const Tag = mongoose.model("Tag",TagsSchema)
