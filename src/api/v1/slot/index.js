const router = require("express").Router();

const api = require("../../../constants");
const sendErrorResponce = require("../../../utils");
const slot = require("../../../models/slot");

router.get(api.SLOT, async (req, res) => {
    try {
        const Slots = await slot.findAll();
        res.status(200).send(Slots);
    } catch (ex) {
        sendErrorResponce(res, ex);
    }
});
module.exports = router;
