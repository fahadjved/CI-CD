const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello From lambda server form first time !" });
});

// ❌ NO app.listen
module.exports.handler = serverless(app);
