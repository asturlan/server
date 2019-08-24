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
router.get(api.YEARS + "/:id_year",(req,res)=>{
    try {
        YearModel.findOne({   //ili await(stavi async) ali onda bez then() i moras dodati da se rezultat spremi u tipa const Year da ga mozes vratiti u res.send(Year)
            where : {
                _id : req.params.id_year
            }
        }).then((year)=>{
            res.status(200).send(year)
        })
    }catch(ex){
        sendErrorResponce(res, ex);
    }
})
module.exports=router;