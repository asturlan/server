const router = require("express").Router();
const bodyParser = require("body-parser");

const cors = require("../../middleware/cors");

router.use(bodyParser.json());
router.use(cors);

router.use("/", require("./professor"));

module.exports = router;