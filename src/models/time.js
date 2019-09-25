import Sequelize from "sequelize";
const postgresClient = require("../postgres/postgres");

const Time = postgresClient.define("time", {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  duration: {
    type: Sequelize.STRING,
    allowNull: false
  }
});
module.exports = Time;
