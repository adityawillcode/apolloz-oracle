const mongoose = require('mongoose');

const UserSchema=new mongoose.Schema({
  name:String,
  email:{type:String},
  profileId:{type:String},
  userRole: {
    type: String,
    enum: ['ADMIN', 'STUDENT']
  },
  password:String,
  userId:mongoose.Types.ObjectId,
  provider:{
    type:String,
    default:'local',
    enum:['local','google','github']
  }
})

const User = mongoose.model('user', UserSchema);
module.exports = User;