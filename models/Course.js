import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    duration:{type:Number,required:true},
    fees:{type:Number,required:true},
    description:{type:String,required:true},
    mode:{type:String,required:true}
},{
    timestamps:true
})

module.exports = mongoose.models.Course || mongoose.model("Course",courseSchema) 


