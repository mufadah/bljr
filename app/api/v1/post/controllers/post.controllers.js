const { StatusCodes } = require('http-status-codes');
const { posting } = require("../services/post.services");

const post = async(req, res, next) => {
    try {
        const result = await posting(req);
        res.status(StatusCodes.OK).json({ status: "success", data: result });
    } catch (error) {
        next(error)
    }
}

module.exports = { post }