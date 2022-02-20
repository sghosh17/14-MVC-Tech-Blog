const { Router } = require("express");

const {
  renderLoginPage,
  renderHomePage,
  renderSignupPage,
  renderDashboardPage,
  renderCreateBlogPage,
  renderUpdateBlogPage,
} = require("../../controllers/view/publicController");

const router = Router();

router.get("/login", renderLoginPage);
router.get("/signup", renderSignupPage);
router.get("/", renderHomePage);
router.get("/dashboard", renderDashboardPage);
router.get("/blog", renderCreateBlogPage);
router.get("/blog/:id", renderUpdateBlogPage);

module.exports = router;
