const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String
  },
  quizes:[{
    quizId:{
        type: String
    },
    isAttempted:{
        type: Boolean
    }
  }]
});

const Student = mongoose.model('student', studentSchema);
module.exports = Student;