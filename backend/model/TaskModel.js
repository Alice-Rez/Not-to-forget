let mongoose = require("mongoose");

let TaskSchema = new mongoose.Schema({
  index: { type: Number, unique: true, required: true },
  title: { type: String, required: true },
  deadline: { type: String, required: true },
  importance: { type: String, required: true, enum: ["1", "2", "3", "4"] },
  description: String,
  finished: Boolean,
  user: { type: String, required: true },
});

let TaskModel = mongoose.model("tasks", TaskSchema);

module.exports = TaskModel;
