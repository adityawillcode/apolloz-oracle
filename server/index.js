const express=require('express')
const cors=require('cors')
const LocalStrategy=require('passport-local').Strategy;

const session=require('cookie-session')
const passportSetup=require('./passport')
const passport=require('passport')
const authRoute=require('./Routes/authRoute')
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
  keys:['thisiskey1'],
  maxAge:60*60*24*100
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.authenticate('session'))
app.use(authRoute)



app.listen(4000)