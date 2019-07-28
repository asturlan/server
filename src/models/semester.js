import Sequelize from "sequelize";

const postgresClinet = require("../postgres/postgres");

const Semester = postgresClinet.define("semester", {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  title: { type: Sequelize.STRING, allowNull: false }
});

module.exports = Semester;
