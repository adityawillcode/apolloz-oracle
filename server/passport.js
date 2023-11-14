const passport=require('passport');
const {GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET}=require('./config')
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const Admin=require('./DB/Models/AdminModel')
const LocalStrategy=require('passport-local').Strategy;
// google Strategy

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
   
  },
  function(accessToken, refreshToken, profile, done) {
  
    done(null,profile) 
  }));


passport.serializeUser((user, done) => {
    done(null, user);

  });
  
  passport.deserializeUser((user, done) => {
    done(null,user);
    
  });