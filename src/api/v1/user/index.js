const router = require('express').Router()
const api=require('../../../constants')
const sendErrorResponce=require("../../../utils")
const UserModel = require("../../../models/user")

const {validationResult} = require('express-validator')
import validation from '../../../middleware/validation'
import signUserjwt from '../../../middleware/authentication'

router.post(api.USER, validation('UserLogin'), async (req,res)=>{
    try{
        const errors=validationResult(req)
        if(!errors.isEmpty()){
            return res.status(422).json({ errors: errors.array() });
        }else{
            //use sanitize() to remove white spaces from req data and normalize it
            const User= await UserModel.findOne({
                where:{
                    email:req.body.email,
                }
            })
            if(!User) {
               return res.status(403).json({ errors: [{msg:"Nepostojeća e-mail adresa"}]});
            }
            const isPasswordValid=req.body.password===User.password
            if(!isPasswordValid){
               return res.status(403).json({ errors: [{msg:"Neispravna lozinka"}]});
            }
            const userJson=User.toJSON()
            res.status(200).send({
                user: userJson,
                token: signUserjwt(userJson)
            })
        }
    }catch(ex){
        sendErrorResponce(res,ex);
    }
})
module.exports=router;