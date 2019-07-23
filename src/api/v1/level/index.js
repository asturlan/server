const router = require("express").Router();

const api = require("../../../constants");
const sendErrorResponce = require("../../../utils");
const level = require("../../../models/level");

router.get(api.LEVEL, async (req, res) => {
  try {
    const Level = await level.findAll();
    res.status(200).send(Level);
  } catch (ex) {
    sendErrorResponce(res, ex);
  }
});
module.exports = router;
