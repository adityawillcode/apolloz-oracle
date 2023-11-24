const express=require('express')
const router=express.Router()
const passport = require('passport')
const {FAILURE_REDIRECT_ROUTE,SUCESS_REDIRECT_ROUTE}=require('../config')
const bcrypt=require('bcryptjs')
const User=require('../DB/Models/User')
const Admin = require('../DB/Models/Admin')
const Student = require('../DB/Models/Student')




// local signup
router.post('/auth/signup',async (req,res)=>{
  const {email,password,name}=req.body
    const user=await User.findOne({email,provider:'local'})
    if(user){res.send({error:'user already exists'})}
    else{
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser=new User({email,password:hashedPassword,name})
     await newUser.save()
     res.send({message:'User Sucessfully Registered'})
    }
})


router.post('/auth/signin',passport.authenticate('local',{failureRedirect:FAILURE_REDIRECT_ROUTE,successRedirect:SUCESS_REDIRECT_ROUTE}));






// google auth
router.get("/auth/google",passport.authenticate("google", { scope: ["profile","email"],prompt:'consent' }));
router.get( "/auth/google/callback",passport.authenticate("google",{failureRedirect:FAILURE_REDIRECT_ROUTE,successRedirect:SUCESS_REDIRECT_ROUTE}))


router.get('/getData', (req, res) => {
  console.log('this is user',req.user);
  console.log(req.user);
  if(req.user){
    res.json(req.user)
  }
  else{
    res.json({error:'user not logged in'})
  }
   
});

// update user role to google profile

router.post('/update-user-role',async (req,res)=>{
  
  try{
    const id=req.user._id
    const user=await User.findById(id)
    if(!user) {throw new Error('User not found')}
    user.userRole=req.body.userRole.toUpperCase()

  await user.save()
  res.send(user)
    
  }catch(err){
    res.send({error: err.message})
  }  
})



router.post('/create-profile',async (req,res)=>{
const user=await User.findById(req.user._id)
    if(user.userRole=='ADMIN'){
      console.log('this is admin')
      
      const newAdmin=new Admin({
        name:user.name,email:user.email,profileId:user.profileId,userRole:user.userRole
      })
     await newAdmin.save()
     console.log('this is new admin',newAdmin);
     
     user.userId=newAdmin._id
    }
    else if(user.userRole=='STUDENT'){
      const newStudent=new Student({
        name:user.name,email:user.email,userRole:user.userRole,profileId:user.profileId
      })
      await newStudent.save()
      user.userId=newStudent._id
    }
   await user.save()
   res.json(user)
})


// logout user

router.post('/logout', function(req, res,){
  console.log('logout')
  
  req.logout()
  if(!req.user)
  {res.status(200).send({message: 'user sucessfully logged out'})}
  else{
    res.status(403).send({error:'logout failed'})
  }
  
});





module.exports =router
