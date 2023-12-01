const express=require('express')
const Quiz = require('../DB/Models/Quiz')
const Admin = require('../DB/Models/Admin')
const User = require('../DB/Models/User')
const Group = require('../DB/Models/Group')
const router=express.Router()
router.post('/create-quiz',async (req,res)=>{
// req.body  =  { newQuiz :{ questions:{question,correct,incorrect,type},groupData:{groupName,groupId},duration,date } , quizId
const questions=req.body.newQuiz.questions
const groupData=req.body.newQuiz.groupData
const duration=req.body.newQuiz.duration
const date=req.body.newQuiz.date
const topic=req.body.newQuiz.topic
console.log({groupData,duration,date,topic});

const adminData={adminName:req.user.name,adminId:req.user._id}
// add new quiz to quiz Model
  const newQuizAdded=new Quiz({
        groupData,quiz:questions,adminData,duration,date,topic
    })
    await newQuizAdded.save()


    // add this quiz to creaters database
    const user=await User.findById(req.user._id)
    const userId=user.userId;
    const admin=await Admin.findById(userId)
    if(!admin) return console.log('admin doesnt exist');
    else{
      admin.quizes.push({
        quizId:newQuizAdded._id,groupData,date,topic
      })
     await admin.save()
     res.send(newQuizAdded)
    }   

   
    const group=await Group.findById(groupData.groupId)
    group.quizes.push({quizId:newQuizAdded._id,date,topic,duration,numberOfQuestions:questions.length})
    await group.save()
 

})


router.get('/get-quiz',async (req,res)=>{
  const {quizId}=req.query.quizId
  const quiz=await Quiz.findOne({
    quizId
  })
  console.log('this is quiz',quiz);
  
  if(!quiz) return
  res.send(quiz)
})



module.exports =router
