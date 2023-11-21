const express=require('express')
const router=express.Router()
const Group=require('../DB/Models/Group')

router.post('/create-group',async (req,res)=>{
    const {groupName}=req.body
    const adminName=req.user.name
    const adminId=req.user._id
    const newGroup=new Group()
    newGroup.admins.push({ adminName,adminId })
    newGroup.groupName=groupName
    await newGroup.save()
    console.log(newGroup);
    
   res.send({groupName,groupId:newGroup._id})
})

router.post('/join-group-as-admin',async (req,res)=>{
    const {groupId}=req.body
    const group=await Group.findById(groupId)
    if(!group){
         return res.send({error:"group doesn't exist"})}
 else  { 
    group.admin.push({adminName:req.user.name,adminId:req.user._id})
   await group.save()
   console.log(group);
   res.send(group)
   }

})

module.exports = router
