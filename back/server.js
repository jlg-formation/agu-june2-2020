console.log("try to start a web server");

const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.send("Coucou JL !");
});

app.listen(3000, () => {
  console.log("Server successfully started on port 3000");
});
