const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  profieId:{
    type:String
  },
  email: {
    type: String,
  },
  password: {
    type: String
  },
  provider:String
  ,
  quizes:[{
    quizId:{
        type: String
    },
    isAttempted:{
        type: Boolean
    }
  }],
  groups:[
    {
      groupId: mongoose.Types.ObjectId,
      groupName:String
    }
  ]
})

const Student = mongoose.model('student', studentSchema);
module.exports = Student;
