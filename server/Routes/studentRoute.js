const express=require('express')
const router=express.Router()
const Group=require('../DB/Models/Group')
const Student=require('../DB/Models/Student')

router.get('/student-groups',async (req,res)=>{
//     if(req.user.userRole!=='STUDENT') res.status(404).send({error:'Invalid request'})  
//     const student=await Student.findById(req.user.userId)
//     if(!student) res.status(404).send({error:'Student not found ,Invalid Request'})
//     console.log("this is students groups");
//    res.status(200).send(student.groups)

const groups=await Group.find({
    'students.studentId':req.user.userId
})
const groupsToSend=groups.map((group)=>{
    return {
        groupId:group._id,groupName:group.groupName
    }
})
res.send(groupsToSend)
})


router.post('/join-group-as-student',async (req,res)=>{   
    const {groupId}=req.body
    if(req.user.userRole!=='STUDENT') res.send({error:"Invalid Request ,Can't join Group"})
    const studentName=req.user.name
    const studentId=req.user.userId
    const group=await Group.findById(groupId)
    if(!group) res.send({error:"Group doesn't exist"})
    group.students.push({studentName,studentId})
    await group.save()
    const student=await Student.findById(req.user.userId)
    if(!student) res.send({error:"Inalid Request , Can't join Group"})
    student.groups.push({
    groupName:group.groupName,groupId:group._id
})
    await student.save()
    res.status(200).send({groupName:group.groupName,groupId:group._id}) 
    console.log(student.groups);
})


router.get('/get-quizes-of-student',async (req,res)=>{
    const groups=await Group.find({
        'students.studentId':req.user.userId
    })
    
    let allQuizes=[]
    groups.forEach((group)=>{
     if(group.quizes.length > 0){
        
        const quizArray=group.quizes;
        allQuizes=[...allQuizes,...quizArray]
     }
    })

    res.send(allQuizes)
    
})



module.exports =router

