const express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`Hello World`);
});

app.get("/help", (req, res) => {
  res.status(404).send({
    error: "Page not found",
    name: "Todo App v1.0"
  });
});

var users = [
  {
    name: "aip1",
    age: 25
  },
  {
    name: "aip2",
    age: 26
  },
  {
    name: "aip3",
    age: 27
  }
];
app.get("/users", (req, res) => {
  res.status(200).json({ users });
});

app.listen(5000, () => {
  console.log(`App listening on port 5000`);
});

module.exports = { app };
