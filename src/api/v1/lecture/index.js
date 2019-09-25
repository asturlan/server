const router = require('express').Router()
const api = require('../../../constants')
const sendErrorResponce = require("../../../utils")

const lecture = require("../../../models/lectures")

const { validationResult } = require('express-validator')

router.post(api.LECTURE, async (req, res) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            const Lecture = await lecture.create(req.body)
            res.status(200).json(Lecture)
        }
    } catch (ex) {
        sendErrorResponce(res, ex);
    }
})
router.delete(api.LECTURE + "/:id", (req, res) => {
    try {
        lecture.destroy({
            where: { _id: req.params.id }
        })
    } catch (ex) {
        sendErrorResponce(res, ex);
    }
    res.status(200).send('Deleted')
})
module.exports = router;