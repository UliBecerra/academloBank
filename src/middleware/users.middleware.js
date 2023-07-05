const User = require("../models/users.model");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

exports.validUser = catchAsync( async(req, res, next) => {
  const {receiverUserId} = req.body
  console.log(receiverUserId)

  const receiverUser = await User.findOne({
    where:{
      status: 'active',
      id: receiverUserId
    }
  })

  if (!receiverUser) {
    return next( new AppError('The count / user not found', 404))
  }

  req.receiverUser = receiverUser

  next()

})