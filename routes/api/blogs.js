const { Router } = require("express");

const { add } = require("../../controllers/api/blogs");
const { update } = require("../../controllers/api/blogs");
const { delete_id } = require("../../controllers/api/blogs");

const router = Router();

router.post("/add", add);
router.put("/update/:id", update);
router.get("/delete/:id", delete_id);

module.exports = router;
