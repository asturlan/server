import Sequelize from "sequelize";

const postgresClinet = require("../postgres/postgres");

const Enrollment = postgresClinet.define("enrollment", {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  enrolled_students: { type: Sequelize.INTEGER, allowNull: false },
  id_subject: { type: Sequelize.INTEGER, allowNull: false },
  id_year: { type: Sequelize.INTEGER, allowNull: false },
  id_study_approach: { type: Sequelize.INTEGER, allowNull: false }
});

Enrollment.findBySubjectId = async function(id) {
  const Enrol = this;
  const result = await Enrol.findAll({
    where: {
      id_subject: id
    }
  });
  return result;
};

module.exports = Enrollment;
