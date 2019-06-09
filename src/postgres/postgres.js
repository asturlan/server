const Sequelize = require("sequelize");

const models = []
const con = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    logging: false,
    host: process.env.POSTGRES_HOST,
    dialect: process.env.POSTGRES_DIALECT,
    port: process.env.POSTGRES_PORT,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

con
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the postgres database has been established successfully"
    );
  })
  .catch(err => {
    console.error("Unable to connect to the postgres database:", err);
  });


module.exports = con;
