const { v4: uuidv4 } = require('uuid');
const { BadRequest } = require('../../../../error/index');
const getAllUsers = async (req) => {
  const { keyword, username, email, phone } = req.query;

if (!username) throw new BadRequest('Username Harus Diisi')

  const result = [
    { id: uuidv4(), username: "test", email: "test@gmail.com", phone: 12131314313 },
  ];
  return result;
};
module.exports = { getAllUsers };