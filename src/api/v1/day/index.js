const router = require("express").Router();

const api = require("../../../constants");
const sendErrorResponce = require("../../../utils");
const day = require("../../../models/day");

router.get(api.DAY, async (req, res) => {
  try {
    const Day = await day.findAll();
    res.status(200).send(Day);
  } catch (ex) {
    sendErrorResponce(res, ex);
  }
});

module.exports = router;
