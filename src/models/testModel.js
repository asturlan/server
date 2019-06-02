import Sequelize from 'sequelize'
export default (con) => {
    var testModel = con.define('testModel', {
        userName: {
            type: Sequelize.STRING,
            unique: true
        },
        /* . . . */
    })
    return testModel
}