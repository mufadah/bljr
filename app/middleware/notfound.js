const {StatusCodes} = require('http-status-codes')

module.exports=(req,res) => res.status(StatusCodes.NOT_FOUND).json({staus:'error', message:'Route Does not exists'})