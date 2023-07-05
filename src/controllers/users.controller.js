const User = require("../models/users.model")
const AppError = require("../utils/AppError")
const catchAsync = require("../utils/catchAsync")



exports.createUser = catchAsync( async (req, res, next) =>{
  const {name, password, amount} = req.body

  if(amount<1000) return next( new AppError('Amount must start at $1000', 404))

  const accountNumber = Math.floor(Math.random() * (100000000 - 100000) + 1000000)

  const user = await User.create({
    name, password, amount, accountNumber
  })

  return res.status(200).json({
    status: 'succes',
    message: "User created succesfully",
    user
  })  


})
exports.loginUser = catchAsync( async (req, res, next) =>{
  const {accountNumber, password} = req.body
    const user = await User.findOne({
      where:{
        status: 'active',
        accountNumber, password
      }
    })

  if(!user) return next( new AppError('Oops, there is an error with the account or password'))
  return res.status(200).json({
    status: 'succes',
    message: 'Logged'
  })
})


