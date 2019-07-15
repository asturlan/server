const router = require("express").Router();

const api = require("../../../constants");
const sendErrorResponce = require("../../../utils");
const testModel = require("../../../models/testModel");
const prof = require("../../../models/professor");

router.put(api.PROFESSOR, async (req, res) => {
  try {
    const test = new testModel();
    test.save().then(t => res.send(t));
  } catch (ex) {
    sendErrorResponce(res, ex);
  }
});
router.get(api.PROFESSOR, async (req, res) => {
  try {
    const Profs = await prof.findAll();
    res.status(200).send(Profs);
  } catch (ex) {
    sendErrorResponce(res, ex);
  }
});
module.exports = router;
