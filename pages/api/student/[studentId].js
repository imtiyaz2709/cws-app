import connectDB from "@/middleware/connectDB"
import Student from "@/models/Student"

const handler = async(req,res)=>{
    if(req.method == "DELETE"){
        let data = await Student.findById(req.query.studentId)
        await data.deleteOne()
        res.status(200).json({"msg":"student data delete Successfully"})
    }
}

export default connectDB(handler);