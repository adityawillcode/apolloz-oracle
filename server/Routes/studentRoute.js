const express=require('express')
const Group = require('../DB/Models/Group')
const router=express.Router()

router.get('/student-groups',async (req,res)=>{
    if(req.query.studentId){
        const groups=await Group.find({'students.studentId':req.query.studentId})
        if(!groups) {
            res.send({message:'student is not in any group'})
        }
        else{
            res.json(groups)
        }
    }
    else{
        const studentId = req.user._id  && req.user.userRole==='STUDENT'
        const groups = Group.find({'students.studentId':studentId})
        if(!groups) {
            res.send({message:'join group , you are not in any group'})
        }
        else{
            res.json(groups)
        }
    }
})



module.exports =router
