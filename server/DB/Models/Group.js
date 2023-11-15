const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
students:[
    {
        studentId:mongoose.Types.ObjectId,
        studentName:String
    }
],
admin:[
    {
        adminId:mongoose.Types.ObjectId 
    }
]
})

const Group = mongoose.model('group', groupSchema);
module.exports = Group;