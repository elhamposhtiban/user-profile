const path = require("path");
const router = require("express").Router();
const userApiRoutes = require("./userRoutes");

router.use("/api", userApiRoutes);

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
