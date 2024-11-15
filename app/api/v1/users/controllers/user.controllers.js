const { StatusCodes } = require("http-status-codes");
const { getAllUsers, getOneUsers } = require("../services/user.services");

const index = async (req, res, next) => {
  try {
    const result = await getAllUsers(req);
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    next(error);
  }
};

const find = async (req, res, next) => {
  try {
    const result = await getOneUsers(req);
    res.status(StatusCodes.OK).json({ status: "success", user: result });
  } catch (error) {
    next(error);
  }
};

const hapus = async (req, res, next) => {
  try {
      res.status(200).json({status:'success', message: `User  ${req.params.id} deleted` });
  } catch (error) {
    next(error);
  }
};


module.exports = { index, hapus, find };