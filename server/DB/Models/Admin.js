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
  groupName:String 
  , groupId:mongoose.Types.ObjectId
 }],
 quizes:[{
    groupData:{
      name:String,
      groupId:String
    },
    quizId:{
        type:String
    },
    date:String,
    topic:String 
 }]
});

const Admin = mongoose.model('admin', adminSchema);
module.exports = Admin;