console.log("try to start a web server");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.use(express.static("."));

app.listen(3000, () => {
  console.log("Server successfully started on port 3000");
});
