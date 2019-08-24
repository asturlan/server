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
router.post(api.ANNUAL, async (req,res)=>{
    try{
        const ANNUAL=await AnnualModel.create(req.body)
        res.status(200).json(ANNUAL)
    }catch(ex){
        sendErrorResponce(res,ex);
    }
})
router.delete(api.ANNUAL, (req,res) => {
    req.body.forEach(id => {
        try{
            AnnualModel.destroy({
                where: {_id : id}
            })
        }catch(ex){
            sendErrorResponce(res,ex);
        }
    })
    res.status(200).send('Deleted')
})
module.exports = router;