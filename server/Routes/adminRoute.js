const express=require('express')
const router=express.Router()
const Group=require('../DB/Models/Group')
const Admin=require('../DB/Models/Admin')
const Student=require('../DB/Models/Student')

router.post('/create-group',async (req,res)=>{
    const {groupName}=req.body   
    const adminName=req.user.name
    const adminId=req.user.userId
    const newGroup=new Group({groupName})
    newGroup.admins.push({ adminName,adminId })
    
    await newGroup.save()
    console.log(newGroup);

      const admin=await Admin.findById(adminId)
      admin.groups.push({
         groupName,groupId:newGroup._id
      })
     await admin.save()
   res.send({groupName,groupId:newGroup._id})
})

router.get('/fetch-admin-groups',async (req,res)=>{
   const groups=await Group.find({
      'admins.adminId':req.user.userId
  })
  const groupsToSend=groups.map((group)=>{
      return {
          groupId:group._id,groupName:group.groupName
      }
  })
  res.send(groupsToSend)
})

router.post('/join-group-as-admin',async (req,res)=>{
    const {groupId}=req.body
    const group=await Group.findById(groupId)
    if(!group){
         return res.send({error:"group doesn't exist"})}
 else  { 
    group.admins.push({adminName:req.user.name,adminId:req.user.userId})
   await group.save()
   console.log(group);
   res.send(group)
   }
})

router.get('/get-student-list',async (req,res)=>{
   const {groupId}=req.query
   const group=await Group.findById(groupId)
   if(!group) res.status(404).send({error:'Group not found'})
   res.send(group.students)
})

router.get('/add-student-to-group',async (req,res)=>{
   const {groupId,studentId}=req.body
   const group=await Group.findById(groupId)
   const student=await Student.findById(studentId)
   if(!student) res.status(404).send({error: 'Student not found'})
   group.students.push({
      studentId: student._id,
      studentName: student.name
   })
   await group.save()
   student.groups.push({
      groupId:group._id,
      groupName: group.name
   })
   await student.save()
   res.status(200).send({studentName: student.name,studentId: student._id})
})

module.exports = router
