import connectDB from "@/middleware/connectDB"
import Student from '@/models/Student'
import bcrypt from 'bcryptjs'
const handler = async (req, res) => {
        switch(req.method){
            case "POST":
                let data = new Student({
                    name:req.body.name,
                    contact:req.body.contact,
                    email:req.body.email,
                    password:bcrypt.hashSync(req.body.password,10),
                })
                await data.save()
                    res.status(200).json({data})
                break;
            case "GET":
                    let studentRecord = await Student.find()
                    res.status(200).json({"data":studentRecord})
                break;
            default:
                res.status(400).json({
                    "msg":"something went wrong"
                })
        }
}

export default connectDB(handler)