const passport=require('passport');
const {GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET}=require('./config')
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const Admin=require('./DB/Models/Admin')
const LocalStrategy=require('passport-local').Strategy;
const User=require('./DB/Models/User')
// google Strategy

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    
  },
 async function(accessToken, refreshToken, profile, cb) {
  try{
    const {displayName,email,provider}=profile
    const user=await User.findOne({email})
    if(user){
      cb(null,user)
    }else{
      const newUser=new User({email,name:displayName,provider})
      await newUser.save()
      cb(null , newUser)
    }
  }catch(err){
      cb(err,false,{message:'authentication failed'})
  }


  }));

  /// local stratigy  

  passport.use(new LocalStrategy(
    async function(username,email, password,cb) {
     const user=await User.findOne({email})
     if(!user){
      const error=new Error('couldn\'t find user')
      cb(error,false,{message:"couldn't find user"})
     }else{
      cb(null,user._id)
     }
    }
  ));












  passport.serializeUser((user, cb) => {
    cb(null, user._id);
  });
  
  passport.deserializeUser( (id, cb) => {
    
  User.findById(id).then((user) => {
    if(user){ return cb(null,user) }
    else{
      const error=new Error('invalid session cookie')
      cb(error,false,{message:'no session cookie found '})}
  })

  });