import connectDB from "@/middleware/connectDB"
import Apply from '@/models/Apply'

const handler = async(req,res) =>{
    if(req.method == "GET"){
        let data = await Apply.find()
     res.status(200).json({data})
    }
    else if(req.method =="POST"){
        let data = new Apply({
            name:req.body.name,
            father:req.body.father,
            mother:req.body.mother,
            contact:req.body.contact,
            email:req.body.email,
            education:req.body.education,
            dob:req.body.dob,
            gender:req.body.gender,
            address:req.body.address,
        })
        await data.save()
        res.status(200).json({
            data
        })
    }
    else{
        res.status(400).json({
            "msg":"something went wrong"
        })
    }
}

export default connectDB(handler)