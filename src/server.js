import express from "express";

require("dotenv").config();
require("./config/config");
require("./postgres/postgres");
require("./middleware/passport");

const server = express();

server.use("/", require("./api/v1"));

//CONNECTING WITH DB
server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
