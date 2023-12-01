const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    groupName:{
        type: String
    }, 
students:[
    {
        studentId:mongoose.Types.ObjectId,
        studentName:String
    }
],
admins:[
    {
        adminName:String,
        adminId:mongoose.Types.ObjectId 
    }
],
quizes:[
    {
        quizId:mongoose.Types.ObjectId,
        date:String,
        topic:String,
        duration:Number,
        numberOfQuestions:Number
    }
]
})

const Group = mongoose.model('group', groupSchema);
module.exports = Group;