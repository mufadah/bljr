const {model, Schema} = require('mongoose')

const avatarSchema = Schema({
    path:{
        type: String,
        required: [true, 'Path is required'],
    },
    url:{
        type:String,
        required: [true, 'Url is required'],
    }
},
 { timestamps: true }
)

module.exports = model('Avatar' , avatarSchema)