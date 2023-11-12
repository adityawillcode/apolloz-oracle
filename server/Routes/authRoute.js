const express=require('express')
const router=express.Router()
const passport = require('passport')
router.get('/auth',(req,res)=>{
  console.log(req.user);
})
router.get("/auth/google", passport.authenticate("google", { scope: ["profile","email"] }));
router.get( "/auth/google/callback",
    passport.authenticate("google", {
      successRedirect: 'http://localhost:3000',
      failureRedirect: 'http://localhost:3000/auth'
    })
  );



module.exports =router
