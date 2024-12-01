const { BadRequest } = require('../../../../error')
const { uploadToCloudinary } = require('../../../../utils/cloudinary')
const Avatar = require('../models/user.avatar.models')

const createAvatar = async(req)=>{
    if(!req.file) throw new BadRequest('harap pilih file')

    const file = await uploadToCloudinary (req.file.buffer, 'avatar')
    const result = await Avatar.create({path: file.public_id, url: file.secure_url})
    return result
}


module.exports = {createAvatar}