import express from "express";

require("dotenv").config();
require("./config/config");
require("./postgres/postgres");

const server = express();

//CONNECTING WITH DB
server.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
