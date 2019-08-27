import Sequelize from 'sequelize'
const postgresClient=require("../postgres/postgres")

const User=postgresClient.define("user",{
    _id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    }
})
module.exports=User;