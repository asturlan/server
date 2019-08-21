const router = require("express").Router();

const api = require("../../../constants");
const sendErrorResponce = require("../../../utils");
const enrollment = require("../../../models/enrollment");

router.get(api.ENROLLMENT, async (req, res) => {
  try {
    const Enrol = await enrollment.findAll();
    res.status(200).send(Enrol);
  } catch (ex) {
    sendErrorResponce(res, ex);
  }
});

router.get(
  api.ENROLLMENT + "/:id_subject/:id_study_approach",
  async (req, res) => {
    try {
      const Enrol = await enrollment.findBySubjectId(
        req.params.id_subject,
        req.params.id_study_approach
      );
      res.status(200).send(Enrol);
    } catch (ex) {
      sendErrorResponce(res, ex);
    }
  }
);

module.exports = router;
