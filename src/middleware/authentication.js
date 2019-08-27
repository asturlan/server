import jwt from 'jsonwebtoken';

function signUserjwt (user) {
    try{
        return jwt.sign(user, process.env.JWT_SECRET, {expiresIn: "24h"})
    }catch(e){
        console.log(e)
    }
}

export default signUserjwt;