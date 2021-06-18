const Sequelize = require('sequelize')

const sequelize = new Sequelize("postgres://postgres:kronos2112@localhost:5432/workoutlog")

module.exports = sequelize
