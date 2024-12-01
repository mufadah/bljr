const User = require('../models/user.models')
const { BadRequest, NotFound } = require("../../../../error/index")
const { query } = require('express')

const getAllUsers = async(req) => {
    const { limit=10, page=1, username, email } = req.query
    const condition = {}

    if(username) condition['username'] = { $regex: username, options: 'i' }
    if(email) condition['email'] = { $regex: email, options: 'i' }

    const result = await User.find(condition)
    .populate({ path: 'avatar', select: 'path url' })
    .select('username email bio role avatar')
    .limit(limit)
    .skip(limit * (page - 1))

    const count = await User.countDocuments(condition)
    return { users: result, page: Math.ceil(page/limit), total: count }
}

const getOneUsers = async(req) => {
    const { id } = req.params

    const result = await User.findOne({ _id: id, role: 'user' })
    .populate({ path: 'avatar', select: 'path url' })
    .select('username email bio role avatar')
    if(!result) throw new NotFound(`user dengan id ${id} tidak ditemukan.`)

    return result
}

const createUsers = async(req) => {
    const { username, email, password, confirmPassword } = req.body
    if(password !== confirmPassword) throw new BadRequest( 'password tidak sesuai')
    const result = await User.create({ username, email, password, confirmPassword })

    delete result._doc.password //supaya pass tidak ditampilkan

    return result
}

const updateUsers = async(req) => {
    const { id } = req.params
    const { username, email, bio, avatar } = req.body

    const result = await User.findOneAndUpdate({_id: id, role:'user'}, {username, email, bio, avatar})
    if(!result) throw new NotFound(`user dengan id ${id} tidak ditemukan.`)
    return result
}

const deleteUsers = async(req) => {
    const {username} = req.params

    const result = await User.deleteOne({ username })
    if(!result) throw new NotfoundError(`user dengan id ${id} tidak ditemukan.`)
    return result
}

module.exports = { getAllUsers, getOneUsers, createUsers, updateUsers, deleteUsers }