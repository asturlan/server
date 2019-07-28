const router = require("express").Router();

const api = require("../../../constants");
const sendErrorResponce = require("../../../utils");
const approach = require("../../../models/approach");

router.get(api.APPROACH, async (req, res) => {
  try {
    const Aproach = await approach.findAll();
    res.status(200).send(Aproach);
  } catch (ex) {
    sendErrorResponce(res, ex);
  }
});
module.exports = router;
