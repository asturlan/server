import Sequelize from 'sequelize'
const postgresClient=require("../postgres/postgres")

const Lecture=postgresClient.define("lecture",{
    _id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    id_subject:{
        type: Sequelize.INTEGER,
        references: 'subject',
        referencesKey: '_id',
        allowNull: false
    },
    id_classroom:{
        type: Sequelize.INTEGER,
        references: 'classrooms',
        referencesKey: '_id',
        allowNull: false
    },
    id_annual:{
        type: Sequelize.INTEGER,
        references: 'annuals',
        referencesKey: '_id',
        allowNull: false
    },
    id_study_approach:{
        type: Sequelize.INTEGER,
        references: 'study_approaches',
        referencesKey: '_id',
        allowNull: false
    },
    id_slot:{
        type: Sequelize.INTEGER,
        references: 'slot',
        referencesKey: '_id',
        allowNull: false
    }
})
module.exports=Lecture;