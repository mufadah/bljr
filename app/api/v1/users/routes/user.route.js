const { index, hapus, find, create, update } = require("../controllers/user.controllers");

const router = require("express").Router();
router.get("/users", index);
router.get("/users/:id", find);
router.delete("/users/:username", hapus);
router.post("/users", create);
router.put("/users/:id", update);
module.exports = router;
