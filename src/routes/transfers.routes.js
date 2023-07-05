const express = require('express')

const router = express.Router()

const transfersController = require('../controllers/transfers.controller')
const usersMiddleware = require('../middleware/users.middleware')

router.post('/' , usersMiddleware.validUser, transfersController.createTransfer)


module.exports = router

