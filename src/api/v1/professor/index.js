const router = require("express").Router();

const api = require("../../../constants");
const sendErrorResponce = require("../../../utils");
const prof = require("../../../models/professor");

router.get(api.PROFESSOR, async (req, res) => {
  try {
    const Profs = await prof.findAll();
    res.status(200).send(Profs);
  } catch (ex) {
    sendErrorResponce(res, ex);
  }
});

router.get(api.PROFESSOR + "/:id", async (req, res) => {
  try {
    const Profs = await prof.findById(req.params.id);
    res.status(200).send(Profs);
  } catch (ex) {
    sendErrorResponce(res, ex);
  }
});

module.exports = router;
