const router = require("express").Router();

const api = require("../../../constants");
const sendErrorResponce = require("../../../utils");
const subject = require("../../../models/subject");

router.get(api.SUBJECT, async (req, res) => {
  try {
    const Subjects = await subject.findAll();
    res.status(200).send(Subjects);
  } catch (ex) {
    sendErrorResponce(res, ex);
  }
});
router.get(api.SUBJECT + "/:id_semester/:id_study_level", async (req, res) => {
  try {
    const Subject = await subject.findByIds(
      req.params.id_semester,
      req.params.id_study_level
    );
    res.status(200).send(Subject);
  } catch (ex) {
    sendErrorResponce(res, ex);
  }
});
module.exports = router;
