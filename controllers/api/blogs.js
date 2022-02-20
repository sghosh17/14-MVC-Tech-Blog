const { Blog } = require("../../models");
const { getPayloadWithValidFieldsOnly } = require("../../utils");

const add = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ["title", "description"],
      req.body
    );

    if (Object.keys(payload).length !== 2) {
      return res.status(400).json({ error: "Please provide valid fields" });
    }

    payload.user_id = req.session.userid;

    await Blog.create(payload);

    return res.json({ message: "Blog created successfully" });
  } catch (error) {
    console.log(`[ERROR]: Failed to sign up | ${error.message}`);
    return res.status(500).json({ error: "Failed to create blog" });
  }
};

const update = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ["title", "description"],
      req.body
    );

    if (Object.keys(payload).length !== 2) {
      return res.status(400).json({ error: "Please provide valid fields" });
    }

    //await Blog.put(payload);

    try {
      const updateBlog = await Blog.update(
        { title: req.body.title, description: req.body.description },
        { where: { id: req.params.id } }
      );
      res.status(200).json(updateBlog);
    } catch (err) {
      console.log(err);
      res.sendStatus(500).send(err);
    }

    return res.json({ message: "Blog updated successfully" });
  } catch (error) {
    console.log(`[ERROR]: Failed to sign up | ${error.message}`);
    return res.status(500).json({ error: "Failed to update blog" });
  }
};

const delete_id = async (req, res) => {
  try {
    const delBlog = await Blog.destroy({ where: { id: req.params.id } });
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
    res.sendStatus(500).send(err);
  }
};

module.exports = {
  add,
  update,
  delete_id,
};
