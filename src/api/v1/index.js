const router = require("express").Router();
const bodyParser = require("body-parser");

const cors = require("../../middleware/cors");

router.use(bodyParser.json());
router.use(cors);

router.use("/", require("./professor"));
router.use("/", require("./approach"));
router.use("/", require("./level"));
router.use("/", require("./semester"));
router.use("/", require("./subject"));

module.exports = router;
