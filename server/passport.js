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
    const {displayName,provider}=profile
    console.log('this is profile',profile);
    console.log('this is my email:',profile._json.email)
    const user=await User.findOne({email:profile._json.email,provider:'google'})
    if(!user){
      const newUser=new User({email:profile._json.email,name:displayName,provider,profileId:profile.id})
      await newUser.save()
      cb(null , newUser)
    }else{
      
      cb(null,user)
    }
  }catch(err){
      cb(err,false,{message:'authentication failed'})
  }


  }));

  /// local stratigy  

  passport.use(new LocalStrategy(
    async function(req,username, password,cb) {
     console.log('this is req.body', req.body);
    }
  ));

  passport.serializeUser((user, cb) => {
    cb(null, user._id);
  });
  
  passport.deserializeUser(async (id, cb) => {
    try {
      console.log('this is id', id);
  
      const user = await User.findById(id);
      console.log(user);
      
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