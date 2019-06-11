import Sequelize from "sequelize";

const postgresClinet = require("../postgres/postgres");

const Professor = postgresClinet.define("professor", {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  professor_name: { type: Sequelize.STRING, allowNull: false },
  professor_lastname: { type: Sequelize.STRING, allowNull: false }
});

module.exports = Professor;
