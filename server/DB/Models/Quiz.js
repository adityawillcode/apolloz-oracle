const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
date:Date,
quizId:String,
groupData:{},
quiz:[{}],
adminData:{
    adminName:String,
    adminId:mongoose.Types.ObjectId
}



})
const Quiz = mongoose.model('quiz', quizSchema);
module.exports = Quiz;