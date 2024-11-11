const { index, hapus } = require("../controllers/user.controllers");

const router = require("express").Router();
router.get("/users", index);
router.delete("/users/:id", hapus);
module.exports = router;
