require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(
      "MongoDB Connected Successfully 🚀"
    );
  })
  .catch((err) => {
    console.error(
      "MongoDB Connection Error:"
    );
    console.error(err);
  });

// Home Route
app.get("/", (req, res) => {
  res.send(
    "Task Manager API Running 🚀"
  );
});

// Task Routes
app.use(
  "/api/tasks",
  taskRoutes
);

// Start Server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});