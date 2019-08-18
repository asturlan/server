const router = require("express").Router();

const api = require("../../../constants");
const sendErrorResponce = require("../../../utils");
const classroom = require("../../../models/classroom");

router.get(api.CLASSROOMS, async (req, res) => {
  try {
    const Classr = await classroom.findAll();
    res.status(200).send(Classr);
  } catch (ex) {
    sendErrorResponce(res, ex);
  }
});

router.get(api.CLASSROOMS + "/:capacity", async (req, res) => {
  try {
    const Classr = await classroom.findByCapacity(req.params.capacity);
    res.status(200).send(Classr);
  } catch (ex) {
    sendErrorResponce(res, ex);
  }
});

module.exports = router;
