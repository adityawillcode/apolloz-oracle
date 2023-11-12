const express=require('express')
const cors=require('cors')
const session=require('express-session')
const passportSetup=require('./passport')
const passport=require('passport')
const authRoute=require('./Routes/authRoute')
const app=express()
const {connectToDb}=require('./DB/dbConfig')
connectToDb()
app.use(express.json())
app.use(cors())
app.use(session({ 
    secret: 'your-secret-key',
    resave: true,
    saveUninitialized: true
  }));
app.use(passport.initialize());
app.use(passport.session());
app.use(authRoute)



app.listen(4000)