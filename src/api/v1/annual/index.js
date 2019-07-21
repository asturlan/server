const router = require('express').Router()
const api=require('../../../constants')
const sendErrorResponce=require("../../../utils")
const AnnualModel = require("../../../models/annual")

router.get(api.ANNUAL, async (req,res)=>{
    try{
        const ANNUALs= await AnnualModel.findAll();
        console.log(ANNUALs)
        res.status(200).json(ANNUALs)
    }catch(ex){
        sendErrorResponce(res,ex)
    }
})
module.exports = router;