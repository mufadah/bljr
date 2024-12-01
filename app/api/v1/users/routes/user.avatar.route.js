const { create } = require("../controllers/user.avatar.controllers");
const upload = require('../../../../middleware/multer')
const router = require("express").Router();

router.post("/avatars", upload.single('avatar'),create)
// router.delete("/avatars", upload.single('avatar'),create)

module.exports = router;
