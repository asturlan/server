const passport = require ('passport')
const passportJwt = require ('passport-jwt')
import UserModel from '../models/user'

const JwtStrategy = passportJwt.Strategy
const ExtractJwt = passportJwt.ExtractJwt

passport.use(
    new JwtStrategy({ //this will verify that the token that comes in with header is valid. if it is it will do following callback function
        jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET
    }, async function (userFromReq, done) {
        try{
           //check that the user exist in DB 
           const user=await UserModel.findOne({
               where : {
                   _id : userFromReq._id
               }
           })
           if(!user){
               return done(new Error(), false)
           }
           return done(null,user)
        }catch(e){ 
            return done(new Error(), false)
        }
    })
)