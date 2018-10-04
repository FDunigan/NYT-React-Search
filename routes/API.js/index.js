const router = require("express").Router();
const articleRoutes = require("./articles");

router.use("/article", articleRoutes);

module.exports = router;
