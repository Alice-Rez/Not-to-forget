var express = require("express");
var router = express.Router();
const TaskModel = require("../model/TaskModel");

/* GET users listing. */
router.get("/all", function (req, res, next) {
  console.log("get request, sending response");
  TaskModel.find()
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
  //   res.send("here you will get a tasks!");
});

module.exports = router;
