const passport = require ('passport')

module.exports = function (req,res,next){ //we are putting this method in front of our routes as a middleware for authentication
    //using authenticate function that will check authenticity with jwt STrategy we defined in middleware folder - this strategy returns user if it exist within database
    passport.authenticate('jwt', function(err,user){ //err is returned either as null or new Error() and user either as null or user from request
        if(err || !user){
            res.status(403).json({
                error:'Neautorizirani pristup'
            })
        }else{
            req.user=user
            next()
        }
    })(req,res,next)  
}