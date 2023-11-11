const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
date:Date,
quizId:String
,
groupData:{
    groupName:String,
    groupId:mongoose.Types.ObjectId
},
questions:[{
    question:String,
    answers:[]
}],
adminData:{
    adminName:String,
    adminId:mongoose.Types.ObjectId
}



})
const Quiz = mongoose.model('quiz', quizSchema);
module.exports = Quiz;