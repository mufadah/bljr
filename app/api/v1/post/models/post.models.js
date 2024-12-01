const { Schema, model, Types } = require("mongoose") 
const user = require('../../users/models/user.models')

const postSchema = Schema({
    Media:{
        type: Types.ObjectId,
        ref: 'Media',
        default: null
    },
    description:{
        type:String,
        required : [true, 'Description is required'],
    },
    Like:{
        type:String,
        default: null
    },
    Comment:{
        type: Types.ObjectId,
        ref:'Comment',
        default: null
    },
    user:{
        type: Types.ObjectId,
        ref:user,
        required: [true, 'User is required']
    }
})

module.exports= model('Post', postSchema)
