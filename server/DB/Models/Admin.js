const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
userRole:{
  type: String
},provider:{
  type: String
},
profileId:String
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
    groupData:{
      name:String,
      groupId:String
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