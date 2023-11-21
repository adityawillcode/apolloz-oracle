const express=require('express')
const cors=require('cors')
const LocalStrategy=require('passport-local').Strategy;

const session=require('cookie-session')
// const session = require('express-session');
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
    origin: "http://localhost:3000", // location of the react app
    credentials: true,
  }))

  app.use(session({
    name: 'session',
    keys: ['your-secret-key'],
    
    maxAge: 24 * 60 * 60 * 1000000, // 24 hours
    // sameSite:'none',
    secure:false
}));
// app.use(session({
//   secret: 'your-secret-key',
//   resave: true,
//   saveUninitialized:true,
//   cookie: {
//     maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
//     httpOnly: false
// }
// }));
app.use(passport.initialize());
app.use(passport.session());

app.use(authRoute)
app.use(quizRoute)
app.use(studentRoute)
app.use(adminRoute);



app.listen(4000)