const { User, Blog } = require("../../models");

const renderLoginPage = (req, res) => {
  if (req.session.loggedIn) {
    return res.redirect("/");
  }

  return res.render("login");
};

const renderSignupPage = (req, res) => {
  if (req.session.loggedIn) {
    return res.redirect("/");
  }

  return res.render("signup");
};

const renderHomePage = async (req, res) => {
  try {
    const blogsFromDB = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const blogs = blogsFromDB.map((blog) => blog.get({ plain: true }));

    return res.render("homepage", {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(`[ERROR]: Failed to load home page | ${err.message}`);
    return res.render("error");
  }
};

const renderDashboardPage = async (req, res) => {
  try {
    const blogsFromDB = await Blog.findAll({
      where: { user_id: req.session.userid },
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const blogs = blogsFromDB.map((blog) => blog.get({ plain: true }));

    return res.render("dashboard", {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(`[ERROR]: Failed to load home page | ${err.message}`);
    return res.render("error");
  }
};

const renderCreateBlogPage = (req, res) => {
  if (req.session.loggedIn) {
    return res.render("createBlog");
  }

  return res.render("login");
};

const renderUpdateBlogPage = async (req, res) => {
  try {
    const blogFromDB = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["id", "username"],
        },
      ],
    });

    const blog = blogFromDB.get({ plain: true });

    let blogUserSame = false;
    if (req.session.userid == blog.user.id) {
      blogUserSame = true;
    }

    return res.render("updateBlog", {
      ...blog,
      loggedIn: req.session.loggedIn,
      blogUserSame: blogUserSame,
    });
  } catch (err) {
    console.log(`[ERROR]: Failed to load home page | ${err.message}`);
    return res.render("error");
  }
};

module.exports = {
  renderLoginPage,
  renderSignupPage,
  renderHomePage,
  renderDashboardPage,
  renderCreateBlogPage,
  renderUpdateBlogPage,
};
