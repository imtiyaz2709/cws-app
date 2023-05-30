import connectDB from "@/middleware/connectDB"
import Course from '@/models/Course'

const handler = async(req, res) => {
    if(req.method == "POST"){
        let data = new Course({
            title:req.body.title,
            author:req.body.author,
            fees:req.body.fees,
            duration:req.body.duration,
            description:req.body.description,
            mode:req.body.mode,
        })
        await data.save()
        res.status(200).json({
            data
        })
    }
    else if(req.method == "GET"){
        let data = await Course.find()
        res.status(200).json({"imtiyaz":data})
    }
   
}

export default connectDB(handler)