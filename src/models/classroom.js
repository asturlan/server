import Sequelize from "sequelize";
const Op = require("Sequelize").Op;

const postgresClinet = require("../postgres/postgres");

const Classroom = postgresClinet.define("classroom", {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  title: { type: Sequelize.STRING, allowNull: false },
  capacity: { type: Sequelize.INTEGER, allowNull: false },
  computers_has: { type: Sequelize.BOOLEAN, allowNull: false },
  location: { type: Sequelize.STRING, allowNull: false }
});

Classroom.findByCapacity = async function(capacity) {
  const Class = this;
  const result = await Class.findAll({
    where: {
      capacity: {
        [Op.gte]: capacity
      }
    }
  });
  return result;
};

module.exports = Classroom;
