const {} = require('sequelize')

const express = require('express')

const usersRoute  = require('./routes/users.routes')
const transfersRoute  = require('./routes/transfers.routes')
const AppError = require('./utils/AppError')

const app = express()

app.use(express.json())

 app.use('/api/v1/users', usersRoute)

app.use('/api/v1/transfers', transfersRoute) 

app.use('*', (req, res, next) =>{
  //TODO: App Errror 
  return next(new AppError('The route not found 😔'))
})
module.exports = app