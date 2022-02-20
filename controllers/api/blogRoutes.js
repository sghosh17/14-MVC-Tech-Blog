const router = require("express").Router();
const { Blog } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const Blogs = await Blog.findAll();
    res.json(Blogs);
  } catch (err) {
    res.sendStatus(500).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    res.status(200).json(newBlog);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const delBlog = await Blog.destroy({ where: { id: req.params.id } });
    res.status(200).json(delBlog);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updateBlog = await Blog.update(
      { Blog_title: req.body.Blog_title },
      { where: { id: req.params.id } }
    );
    res.status(200).json(updateBlog);
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
});

module.exports = router;
