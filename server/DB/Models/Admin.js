const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
name: {
    type: String,
    required: true,
  }
,
profileId:String
  ,  provider:{
  type: String
},
  email: {
    type: String,
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
        type:mongoose.Types.ObjectId
    },
    date:String,
    topic:String 
 }]
});

const Admin = mongoose.model('admin', adminSchema);
module.exports = Admin;