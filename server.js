const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🌍 Hello! This is my ONLINE API!");
});

app.listen(10000, () => {
  console.log("Server running...");
});
