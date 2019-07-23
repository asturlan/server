import Sequelize from "sequelize";

const postgresClinet = require("../postgres/postgres");

const Subject = postgresClinet.define("subject", {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  title: { type: Sequelize.STRING, allowNull: false },
  computers_needed: { type: Sequelize.BOOLEAN, allowNull: false },
  semestral_load: { type: Sequelize.STRING, allowNull: false },
  subject_type: { type: Sequelize.STRING, allowNull: false },
  id_professor: { type: Sequelize.INTEGER, allowNull: false },
  id_study_level: { type: Sequelize.INTEGER, allowNull: false },
  id_semester: { type: Sequelize.INTEGER, allowNull: false }
});

Subject.findByIds = async function(id_study_level, id_semester) {
  const Subject = this;
  const result = await Subject.findAll({
    where: {
      id_study_level: id_study_level,
      id_semester: id_semester
    }
  });
  return result;
};

module.exports = Subject;
