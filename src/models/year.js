import Sequelize from 'sequelize'
const postgresClient=require("../postgres/postgres")

const Year=postgresClient.define("year",{
    _id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    year:{
        type: Sequelize.STRING,
        allowNull: false
    }
})
module.exports=Year;