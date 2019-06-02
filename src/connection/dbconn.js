import Sequelize from 'sequelize'
require('dotenv').config()

const models = []
const con = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        }
    }
)
//models.push(require('../models/modelname')(con)) --> for having all created models in one place
export default con