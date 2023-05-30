import connectDB from "@/middleware/connectDB"
import Apply from "@/models/Apply"

const handler =  async(req,res) =>{
    if(req.method == "DELETE"){
        let data = await Apply.findById(req.query.studentApply)
        await data.deleteOne()
        res.status(200).json({"msg":data})
    }
}

export default connectDB(handler);