const { index, hapus, find, create } = require("../controllers/user.controllers");

const router = require("express").Router();
router.get("/users", index);
router.get("/users/:id", find);
router.delete("/users/:id", hapus);
router.post("/users", create);
module.exports = router;
