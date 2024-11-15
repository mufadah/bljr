const { index, hapus, find } = require("../controllers/user.controllers");

const router = require("express").Router();
router.get("/users", index);
router.get("/users/:id", find);
router.delete("/users/:id", hapus);
module.exports = router;
