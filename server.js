const express = require("express");
const app = express();

app.use(express.json());

let tasks = [
  { id: 1, title: "Learn API", completed: false },
  { id: 2, title: "Drink Water", completed: true }
];

app.get("/", (req, res) => {
  res.send("🎉 Hello! This is my API!");
});

// GET all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// ADD new task
app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false
  };
  tasks.push(newTask);
  res.json(newTask);
});

// DELETE a task
app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  tasks = tasks.filter(t => t.id !== id);
  res.json({ message: "Task deleted" });
});

app.listen(3000, () => {
  console.log("API running on http://localhost:3000");
});     
// UPDATE a task
app.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  task.title = req.body.title || task.title;
  task.completed = req.body.completed ?? task.completed;

  res.json(task);
});

