import Sequelize from "sequelize";
const postgresClient = require("../postgres/postgres");

const Slot = postgresClient.define("slot", {
    _id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    id_time: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_day: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Slot;