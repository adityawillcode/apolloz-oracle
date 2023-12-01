const passport=require('passport');
const {GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET,GITHUB_CLIENT_ID,GITHUB_CLIENT_SECRET}=require('./config')
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const GitHubStrategy=require('passport-github2').Strategy;
const Admin=require('./DB/Models/Admin')
const LocalStrategy=require('passport-local').Strategy;
const User=require('./DB/Models/User')
const bcrypt=require('bcryptjs')
// google Strategy

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
    
  },
 async function(accessToken, refreshToken, profile, cb) {
  try{
    const {displayName,provider}=profile
    const user=await User.findOne({profileId:profile.id,provider:'google'})
    if(!user){
      const newUser=new User({email:profile._json.email,name:displayName,provider,profileId:profile.id})
      await newUser.save()
     return cb(null , newUser)
    }else{
      
     return cb(null,user)
    }
  }catch(err){
      cb(err,false,{message:'authentication failed'})
  }


  }));

  /// local stratigy  

  passport.use(new LocalStrategy(
    async function(username,password,cb) {
     const user=await User.findOne({email:username,provider:'local'})
     if(!user){
     
     return cb(null,false,{message:'user not found'})
     }
     const hashedPassword=user.password
     const isMatch = await bcrypt.compare( password,hashedPassword);
     console.log('this is value of isMatch',isMatch);
     if( isMatch){
      console.log(user._id);
        
     return cb(null,user)
     }
     else{
      console.log('hehe');
      
     return cb(null,false,{message:'Password mismatch'})
     }
    }
  ));

  // github stratigy
  passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  },
  async  function(accessToken, refreshToken, profile, cb) {
   const user=await User.findOne({profileId:profile._json.id,provider:'github'})
   if(user) {   
   return cb(null,user)
  }
   else{
    const newUser=new User({
      profileId:profile._json.id,name:profile._json.name,provider:profile.provider
    })
    await newUser.save()   
  return  cb(null,newUser)
   }   
  }
));

  passport.serializeUser((user, cb) => {  
    console.log('passport.serialize',user);
    
    cb(null, user._id);
  });
  
  passport.deserializeUser(async (id, cb) => {
    console.log('passport.deserializeUser called',id);
    
    try {
      const user = await User.findById(id);  
      if (user && user.name) {        
        cb(null, user);
      } else {
        const error = new Error('invalid cookie');
        cb(error, false, { message: 'invalid cookie' });
      }
    } catch (err) {
      return cb(err,false, {message: 'invalid cookie'});
    }
  });


  