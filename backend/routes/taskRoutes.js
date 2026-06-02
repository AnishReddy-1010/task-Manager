const express = require("express");
const router = express.Router();

const Task = require("../models/Task");

// GET all tasks

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();

    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// CREATE task

router.post("/", async (req, res) => {
  try {
    const newTask = new Task({
      title: req.body.title,
    });

    const savedTask =
      await newTask.save();

    res.status(201).json(
      savedTask
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;