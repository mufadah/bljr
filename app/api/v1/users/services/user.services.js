const getAllUsers = async (req) => {
  const { keyword, username, email, phone } = req.query;
  console.log(keyword, username, email, phone);

  const result = [
    { id: 1, username: "test", email: "test@gmail.com", phone: 12131314313 },
  ];
  return result;
};
module.exports = { getAllUsers };