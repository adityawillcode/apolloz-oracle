const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
date:{type:String},
quizId:{type:String},
groupData:{},
quiz:[{}],
adminData:{
    adminName:String,
    adminId:mongoose.Types.ObjectId
},
duration:Number,
topic:String

})


const Quiz = mongoose.model('quiz', quizSchema);
module.exports = Quiz;