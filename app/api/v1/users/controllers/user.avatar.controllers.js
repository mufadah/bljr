const { StatusCodes } = require("http-status-codes");
const {createAvatar} = require('../services/user.avatar.services')

const create = async (req, res, next) => {
    try {
      const result = await createAvatar(req);
      res.status(StatusCodes.CREATED).json({ status: "success", avatar: result });
    } catch (error) {
      next(error);
    }
  };

module.exports = {create}