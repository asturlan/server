const router = require('express').Router()
const api = require('../../../constants')
const sendErrorResponce = require("../../../utils")

const AnnualModel = require("../../../models/annual")
const LecturesModel = require("../../../models/lectures")

const { validationResult } = require('express-validator')
import validation from '../../../middleware/validation'
//import { sanitize } from 'express-validator';

router.get(api.ANNUAL + "/:id/lectures", async (req, res) => {
    try {
        const Lectures = await LecturesModel.findAll({
            where: {
                id_annual: req.params.id
            }
        })
        res.status(200).json(Lectures)
    } catch (ex) {
        sendErrorResponce(res, ex)
    }
})

router.get(api.ANNUAL, async (req, res) => {
    try {
        const ANNUALs = await AnnualModel.findAll();
        res.status(200).json(ANNUALs)

    } catch (ex) {
        sendErrorResponce(res, ex)
    }
})
router.post(api.ANNUAL, validation('CreateAnnual'), async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            //use sanitize() to remove white spaces from req data and normalize it
            const ANNUAL = await AnnualModel.create(req.body)
            res.status(200).json(ANNUAL)
        }
    } catch (ex) {
        sendErrorResponce(res, ex);
    }
})
router.delete(api.ANNUAL, (req, res) => {
    req.body.forEach(id => {
        try {
            AnnualModel.destroy({
                where: { _id: id }
            })
        } catch (ex) {
            sendErrorResponce(res, ex);
        }
    })
    res.status(200).send('Deleted')
})
module.exports = router;

//https://express-validator.github.io/docs/custom-validators-sanitizers.html check if email exists i password masches