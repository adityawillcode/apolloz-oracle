const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    groupName:{
        type: String
    }, 
students:[
    {
        studentId:mongoose.Types.ObjectId,
        studentName:String
    }
],
admins:[
    {
        adminName:String,
        adminId:mongoose.Types.ObjectId 
    }
]
})

const Group = mongoose.model('group', groupSchema);
module.exports = Group;