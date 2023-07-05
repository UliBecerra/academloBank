const express = require('express')
const router = express.Router()
const userController = require('../controllers/users.controller')
const transfersController = require('../controllers/transfers.controller')
router.post('/signup', userController.createUser)
router.post('/login', userController.loginUser)

router.get('/:id/history', transfersController.getTransfersuser)


module.exports = router