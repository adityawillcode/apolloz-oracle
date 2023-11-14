const express=require('express')
const cors=require('cors')
const LocalStrategy=require('passport-local').Strategy;
const Admin=require('./DB/Models/AdminModel')
const session=require('express-session')
const passportSetup=require('./passport')
const passport=require('passport')
const authRoute=require('./Routes/authRoute')
const app=express()
const {connectToDb}=require('./DB/dbConfig')
connectToDb()
app.use(express.json())
app.use(cors({
  
}))
app.use(session({
    maxAge: 24 * 60 * 60 * 1000,
    secret: 'web-web-web',
    resave: true,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  


// app.use((req, res, next) => {
//   if (req.session && req.session.passport && req.session.passport.user) {
//     // Fetch user data from your data source based on the stored user information
//     const user = req.session.passport.user;

//     // Assign the user object to req.user for subsequent requests
//     req.user = user;
 
//   }

//   next();
// })


app.listen(4000)