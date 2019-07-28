import Sequelize from "sequelize";

const postgresClinet = require("../postgres/postgres");

const Approach = postgresClinet.define("study_approach", {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  title: { type: Sequelize.STRING, allowNull: false }
});

module.exports = Approach;
