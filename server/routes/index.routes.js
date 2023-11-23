const router = require("express").Router();

//! all the routes starts with /api

router.use("/phones", require("./phones.routes"));

module.exports = router;
