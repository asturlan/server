const router = require("express").Router();

const api = require("../../../constants");
const sendErrorResponce = require("../../../utils");
const time = require("../../../models/time");

router.get(api.TIME, async (req, res) => {
  try {
    const Time = await time.findAll();
    res.status(200).send(Time);
  } catch (ex) {
    sendErrorResponce(res, ex);
  }
});

module.exports = router;
