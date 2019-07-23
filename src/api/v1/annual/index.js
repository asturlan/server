const router = require('express').Router()
const api=require('../../../constants')
const sendErrorResponce=require("../../../utils")
const AnnualModel = require("../../../models/annual")

router.get(api.ANNUAL, async (req,res)=>{
    try{
        const ANNUALs= await AnnualModel.findAll();
        res.status(200).json(ANNUALs)

    }catch(ex){
        sendErrorResponce(res,ex)
    }
})
router.post(api.ANNUAL,(req,res)=>{
    AnnualModel.findOrCreate({
        where: req.body
    }).then(
        res.status(200).send('Database updated')
    )
})
module.exports = router;