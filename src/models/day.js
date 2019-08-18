import Sequelize from "sequelize";

const postgresClinet = require("../postgres/postgres");

const Day = postgresClinet.define("day", {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  title: { type: Sequelize.STRING, allowNull: false }
});

module.exports = Day;
