var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/all", function (req, res, next) {
  console.log("get request, sending response");
  res.send("here you will get a tasks!");
});

module.exports = router;
