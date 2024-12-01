const { Schema, model, Types } = require("mongoose") 
const bcrypt = require('bcryptjs')

const userSchema = Schema(
    {
        username:{
            type : String,
            minlenght: [3, 'Username must be at least 3 characters long'],
            unique : [true, 'Username already exists'],
            required : [true, 'Username is required'],
        },
        email:{
            type : String,
            unique : [true, 'Email already exists'],
            required : [true, 'Username is required'],
        },
        password:{
            type : String,
            minlenght: [6, 'Username must be at least 6 characters long'],
            unique : [true, 'Username already exists'],
            required : [true, 'Username is required'],
        },
        bio:{
            type : String,
            default:''
        },
        role:{
            type : String,
            enum:['super admin', 'user'],
            default:'user'
        },
        avatar:{
            type: Types.ObjectId,
            ref: 'Avatar',
            default: null
        }
    },
    { timestamps: true }
)

userSchema.pre('save', async function(next) {
    const user = this
    if(user.isModified('password')){
      user.password = await bcrypt.hash(user.password, 12) 
    }
    next()
})

userSchema.method.comparePassword = async function(candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}


module.exports= model('User', userSchema)