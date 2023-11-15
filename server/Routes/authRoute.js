const express=require('express')
const router=express.Router()
const passport = require('passport')
const {FAILURE_REDIRECT_ROUTE,SUCESS_REDIRECT_ROUTE}=require('../config')
const bcrypt=require('bcryptjs')





router.post('/auth/local',passport.authenticate('local',{failureRedirect:FAILURE_REDIRECT_ROUTE,successRedirect:SUCESS_REDIRECT_ROUTE}));

// local auth

// router.post('/auth/login',async (req,res)=>{
//   const {email,password,userType}=req.body
//   if(userType=='ADMIN'){
//     const admin=await Admin.findOne({email})
//     if(admin){
//       console.log(admin);
//       const isMatch = await bcrypt.compare( password,admin.password);
//       console.log(isMatch);
      
//         if(!isMatch){return res.send({error: 'password mismatch'}).status(400)}
//         req.session.user=admin
//     }
//     else{
//      res.json({error:'user not found'})
//     }
//   }
//   else if(userType=='STUDENT'){
//     const student=await Student.findOne({email})
//     if(student){
//       const isMatch = await bcrypt.compare( password,student.password);
//       if(!isMatch){return res.status(400).send({error:'password mismatch'})}
//       req.session.user=student
//     }
//     else{
//      res.json({error:'user not found'})
//     }
//   }
 
// })


// router.post('/auth/signup',async (req,res)=>{
//   const {email,password,userType,name}=req.body
//   if(userType=='ADMIN'){
//     const admin=await Admin.findOne({email})
//     if(admin){res.json({error:'user already exists'})}
//     else{
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(password, salt);
//       const newAdmin=new Admin({email,password:hashedPassword,userType,name})
//       newAdmin.save()
//     }
//   }
//   else if(userType=='STUDENT'){
//     const student=await Student.findOne({email})
//     if(student){res.json({error:'user already exists'})}
//     else{
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(password, salt);
//       const newStudent=new Student({email,password:hashedPassword,userType,name})
//       newStudent.save()
//       res.send(newStudent)
//     }
//   }
 
// })




// google auth
router.get("/auth/google",passport.authenticate("google", { scope: ["profile","email"] }));
router.get( "/auth/google/callback",passport.authenticate("google",{failureRedirect:FAILURE_REDIRECT_ROUTE,successRedirect:SUCESS_REDIRECT_ROUTE}))

router.get('/getData', (req, res) => {
  console.log(req.user);
  
  if(req.user){
    res.json(req.user)
    console.log(req.user);
  }
  else{
    res.json({error:'user not logged in'})
  }
  


});





module.exports =router
