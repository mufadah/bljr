const { v4: uuidv4 } = require('uuid');
const { BadRequest, NotFound } = require('../../../../error/index');
const user = require('../models/user.models')


const getAllUsers = async (req) => {
  const {limit=10, page=1, username, email } = req.query
  const condition = {}
  if (username) condition['username'] = { $regex: username, options:'i' }
  if (email) condition['email'] = { $regex: email, options:'i' }
  
  const result = await user.find(condition)
  .limit(limit)
  .skip(limit * (page - 1))

  const count = await user.countDocuments(condition)
  return { users: result, page: Math.ceil(page/limit),total: count }
};

const getOneUsers = async (req) => {
 const { id } = req.params
  
 const result = await user.findOne({id, role:'user'})
if(!result) throw new NotFound(`user dengan id ${id} tidak ditemukan.`)

 return result
};

const updateUser = async(req)=>{

}

const createUser = async(req)=>{
  const { username, email, password } = req.body
  
  if (!username || !email || !password){
    throw new BadRequest('Username, email, dan password wajib diisi.')
  }

  const userBaru ={
    id: uuidv4(),
    username,
    email,
    role:'user',
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  const result = await user.create(userBaru);

  return result
}
const deleteUser = async(req)=>{

}


module.exports = { getAllUsers, getOneUsers, createUser, updateUser, deleteUser };