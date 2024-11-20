const { posting } = require('../services/post.services');

const router = require("express").Router();
router.post("/post", posting )

module.exports= router