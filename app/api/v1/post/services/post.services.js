const { BadRequestError, NotfoundError } = require('../../../../error/index')
const { query } = require('express')

const posting = async(req)=>{
    const { path, url } = req.body

    const result = await User.create({ path, url })
    return result
}

const like = async(req)=>{
    
}
module.exports= { posting }