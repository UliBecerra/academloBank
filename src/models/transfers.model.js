const {DataTypes} = require('sequelize')

const {db} = require('../db/db')

const Transfer = db.define('transfers', {
  id:{
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  amount:{
    allowNull: false,
    type: DataTypes.INTEGER
  },
  senderUserId:{
    allowNull: false,
    type: DataTypes.INTEGER
  },
  receiverId:{
    allowNull: false,
    type: DataTypes.INTEGER
  }
})

module.exports = Transfer