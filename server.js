const express = require("express");

var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  //   res.send("<h1>Hello Express</h1>");
  res.send({
    name: "Andrew",
    likes: ["Biking", "coding"]
  });
});

app.get("/about", (req, res) => {
  res.send("<h1> About Page </h1>");
});

app.listen(8888, () => {
  console.log(`App listening on port 8888`);
});
