const router=require('express').Router()
const api=require('../../../constants')
const sendErrorResponce=require("../../../utils")

const YearModel=require("../../../models/year")

router.get(api.YEARS, (req,res)=>{
    try{
        YearModel.findAll().then(years=>{
            const Years=years.map(year=>{
                return Object.assign({},{
                    id:year._id,
                    title: year.year,
                })
            })
            res.status(200).json(Years)
        })
    }catch{
        sendErrorResponce(res,ex)
    }
})
module.exports=router;
