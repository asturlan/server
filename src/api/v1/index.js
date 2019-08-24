const router = require("express").Router();
const bodyParser = require("body-parser");

const cors = require("../../middleware/cors");

router.use(bodyParser.json());
router.use(cors);

router.use("/", require("./annual"));
router.use("/", require("./professor"));
router.use("/", require("./approach"));
router.use("/", require("./level"));
router.use("/", require("./semester"));
router.use("/", require("./subject"));
router.use("/", require("./year"));
router.use("/", require("./classroom"));
router.use("/", require("./enrollment"));
router.use("/", require("./day"));
router.use("/", require("./time"));

module.exports = router;
