import Sequelize from "sequelize";

const postgresClinet = require("../postgres/postgres");

const Professor = postgresClinet.define("professor", {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: { type: Sequelize.STRING, allowNull: false },
  lastname: { type: Sequelize.STRING, allowNull: false }
});

module.exports = Professor;
