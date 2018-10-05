const router = require("express").Router();
const articleRoutes = require("./articles.js");

router.use("/article", articleRoutes);

module.exports = router;
