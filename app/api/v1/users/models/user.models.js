const { Schema, model, Types } = require('mongoose')
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
        },
        role:{
            type : String,
            enum:['super admin', 'user'],
            default:'user'
        },
        avatar:{
            type: Types.ObjectId,
            ref: 'Avatar',
        }
    },
    { timestamps: true }
)

userSchema.pre('save', async  next =>{
    const user = this
    if(user.isModified('password')){
        await bcrypt.hash(user.password, 10) 
    }
    next()
})


userSchema.method.comparePassword = async candidatePassword =>{
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}


module.exports= model( 'User', userSchema )