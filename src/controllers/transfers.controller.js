const Transfer = require('../models/transfers.model')
const User = require('../models/users.model')
const AppError = require('../utils/AppError')
const catchAsync = require('../utils/catchAsync')

exports.createTransfer = catchAsync( async (req, res, next) =>{
  const {receiverUser} = req
  const {amount, senderUserId} = req.body

  const senderUser = await User.findOne({
    where:{
      id: senderUserId,
      status: 'active'
    }
  })

  if (!senderUser) {
    return next( new AppError('The count / user not found', 404))
  }
  console.log('updates')
  if(amount>senderUser.amount){
    return next( new AppError('The amount is less than users amount', 400))
  }
  
 
  await senderUser.update({amount: senderUser.amount-amount})
  await receiverUser.update({amount: receiverUser.amount+amount})

  return res.status(200).json({
    status: 'success',
    message: 'The transfer sent successfully'
  })
})

exports.getTransfersuser = catchAsync( async (req, res, next) =>{
  const {id} = req.params

  const transfers = Transfer.findAll({
    where:{
      senderUserId : id
    }
  })

  return res.status(200).json({
    status: 'succes',
    message: 'Transfers found',
    transfers
  })
})