const express=require('express')
const cors=require('cors')
const app=express()
const {connectToDb}=require('./DB/dbConfig')
connectToDb()
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('amazing')
})

app.listen(8080)