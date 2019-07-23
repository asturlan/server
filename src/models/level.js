import Sequelize from "sequelize";

const postgresClinet = require("../postgres/postgres");

const Level = postgresClinet.define("study_level", {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  title: { type: Sequelize.STRING, allowNull: false }
});

module.exports = Level;
