const { Router } = require("express");

const users = require("./users");
const blogs = require("./blogs");

const router = Router();

router.use("/users", users);
router.use("/blogs", blogs);

module.exports = router;
