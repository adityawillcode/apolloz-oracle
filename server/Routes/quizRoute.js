const express=require('express')
const Quiz = require('../DB/Models/Quiz')
const Admin = require('../DB/Models/Admin')
const User = require('../DB/Models/User')
const router=express.Router()
router.post('/create-quiz',async (req,res)=>{
// req.body  =  { newQuiz :{ questions:{question,correct,incorrect,type},groupData:{groupName,groupId},duration,date } , quizId
const quizId=req.body.quizId
const questions=req.body.newQuiz.questions
console.log('this is req.body' , req.body);
console.log('this  is questions' , questions);


const groupData=req.body.newQuiz.groupData
const duration=req.body.newQuiz.duration
const date=req.body.newQuiz.date

const adminData={adminName:req.user.name,adminId:req.user._id}
// add new quiz to quiz Model
  const newQuizAdded=new Quiz({
        quizId,groupData,quiz:questions,adminData,duration,date
    })
    await newQuizAdded.save()


    // add this quiz to creaters database
    const user=await User.findById(req.user._id)
    const userId=user.userId;
    const admin=await Admin.findById(userId)
    if(!admin) return console.log('admin doesnt exist');
    else{
      admin.quizes.push({
        quizId,groupData
      })
     await admin.save()
     res.send(newQuizAdded)
    }   
})



module.exports =router
