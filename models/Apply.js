import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    name:{type:String,required:true},
    father:{type:String,required:true},
    mother:{type:String,required:true},
    contact:{type:String,required:true},
    email:{type:String,required:true},
    education:{type:String,required:true},
    dob:{type:Date,required:true},
    gender:{type:String,required:true},
    address:{type:String,required:true},
},{
    timestamps:true
})

module.exports = mongoose.models.Student || mongoose.model("Student",StudentSchema) 