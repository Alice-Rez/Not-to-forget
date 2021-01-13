var express = require("express");
var router = express.Router();
const TaskModel = require("../model/TaskModel");

/* GET users listing. */
router.get("/:user/all", function (req, res, next) {
  console.log("get request, sending response");
  let user = req.params.user;
  TaskModel.find({ user: user })
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
  //   res.send("here you will get a tasks!");
});

router.post("/add", function (req, res, next) {
  let addedTask = new TaskModel(req.body);

  addedTask
    .save()
    .then((result) => res.send(result))
    .catch((err) => res.send(err));
});

router.put("/check", (req, res, next) => {
  let { uuid } = req.body;
  TaskModel.findById(uuid)
    .then((task) => {
      task.finished = !task.finished;
      task
        .save()
        .then((result) => res.send(result))
        .catch((err) => res.send(err));
    })
    .catch((err) => res.send(err));
});

module.exports = router;
