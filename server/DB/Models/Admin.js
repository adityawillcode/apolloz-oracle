const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
userType:{
  type: String
}
  ,  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
 
 groups:[{
    groupId:mongoose.Types.ObjectId
 }],
 quizes:[{
    groupId:{
        type:mongoose.Types.ObjectId
    },
    quizId:{
        type:String
    }
    
 }],
 liveQuizes:[{
    startingTime:Date,
    endingTime:Date,
    quizId:{
        type:String
    }
 }]
});

const Admin = mongoose.model('admin', adminSchema);
module.exports = Admin;