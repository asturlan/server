const router = require("express").Router();

const api = require("../../../constants");
const sendErrorResponce = require("../../../utils");
const semester = require("../../../models/semester");

router.get(api.SEMESTER, async (req, res) => {
  try {
    const Semesters = await semester.findAll();
    res.status(200).send(Semesters);
  } catch (ex) {
    sendErrorResponce(res, ex);
  }
});
module.exports = router;
