import Sequelize from "sequelize";

const postgresClinet = require("../postgres/postgres");

const Professor = postgresClinet.define("professor", {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  firstname: { type: Sequelize.STRING, allowNull: false },
  lastname: { type: Sequelize.STRING, allowNull: false }
});

Professor.findById = async function(id) {
  const Professor = this;
  const result = await Professor.findAll({
    where: { _id: id }
  });
  return result;
};

module.exports = Professor;
