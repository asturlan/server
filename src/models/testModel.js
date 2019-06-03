import Sequelize from 'sequelize'
module.exports = (con) => {
    var testModel = con.define('testModel', {
        userName: {
            type: Sequelize.STRING,
            unique: true
        },
        /* . . . */
    })
    return testModel
}