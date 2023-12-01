const express=require('express')
const cors=require('cors')
const LocalStrategy=require('passport-local').Strategy;
const mongoose=require('mongoose')
const session = require('express-session');
const MongoStore = require('connect-mongo');
// const session=require('cookie-session')
const passportSetup=require('./passport')
const passport=require('passport')
const authRoute=require('./Routes/authRoute')
const quizRoute=require('./Routes/quizRoute')
const studentRoute=require('./Routes/studentRoute')
const adminRoute=require('./Routes/adminRoute')
const app=express()
const {connectToDb}=require('./DB/dbConfig')
connectToDb()
app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }))
const mongoStore=MongoStore.create({mongoUrl:'mongodb://127.0.0.1/apolloz_oracle'})

app.use(session({
  store: mongoStore,
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false , maxAge: 10*24*60*60*1000  }
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(authRoute)
app.use(quizRoute)
app.use(studentRoute)
app.use(adminRoute);



app.listen(4000)