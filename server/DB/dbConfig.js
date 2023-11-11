const mongoose=require('mongoose')
async function connectToDb(){
    await mongoose.connect('mongodb://127.0.0.1/apolloz_oracle');
}
module.exports={connectToDb}