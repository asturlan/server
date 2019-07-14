import Sequelize from "sequelize";
const postgresClinet = require("../postgres/postgres");

const testModel = postgresClinet.define("testModel", {
  userName: {
    type: Sequelize.STRING,
    unique: true
  }
  /* . . . */
});
console.log("wtf?", testModel);

// module.exports = con => {
//   var testModel = con.define("testModel", {
//     userName: {
//       type: Sequelize.STRING,
//       unique: true
//     }
//     /* . . . */
//   });
//   console.log("wtf?", testModel.userName);
//   return testModel;
// };
module.exports = testModel;
