const mongoose = require('mongoose');

const UserSchema=new mongoose.Schema({
  name:String,
  email:String,
  userRole: {
    type: String,
    enum: ['ADMIN', 'Student']
  },
  userId:mongoose.Types.ObjectId,
  provider:{
    type:String,
    default:'local',
    enum:['local','google','github']
  }
})

const User = mongoose.model('user', UserSchema);
module.exports = User;