import { Schema} from "mongoose"
import mongoose, { model } from "mongoose"
const ContentsSchema =new Schema({
    link:{
        type:String,
        required:true
    },
    type:{

    },
    title:{
        type:String,
        required:true,
    },
    tags:{

    },
    description:{
        type:String,
        required:true

    }
},{
    timestamps:true
})


export const Contents = mongoose.model("Contents",ContentsSchema)