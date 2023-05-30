import connectDB from "@/middleware/connectDB"
import Course from '@/models/Course'

const handler = async(req, res) => {
    const {courseid} = req.query

   if(req.method == "DELETE"){
        const data = await Course.findById(courseid)
        await data.deleteOne()
        res.status(200).json({data})
    }
   
}

export default connectDB(handler)