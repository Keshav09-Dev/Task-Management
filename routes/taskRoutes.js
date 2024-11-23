const express = require("express");
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  markTaskCompleted,
} = require("../controllers/taskController");

const router = express.Router();

router.get("/getTasks", getTasks);
router.post("/createTask", createTask);
router.put("/:id", updateTask);
router.put("/:id/complete", markTaskCompleted);
router.delete("/:id", deleteTask);

module.exports = router;
