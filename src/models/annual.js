import Sequelize from 'sequelize'
const postgresClient=require("../postgres/postgres")

const Annual=postgresClient.define("annual",{
    _id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    timetable_type:{
        type: Sequelize.STRING,
        allowNull: false
    },
    id_year:{
        type: Sequelize.INTEGER,
        references: 'years',
        referencesKey: '_id',
        allowNull: false
    },
    id_user:{
        type: Sequelize.INTEGER,
        references: 'users',
        referencesKey: '_id',
        allowNull: false
    }
})
module.exports=Annual;