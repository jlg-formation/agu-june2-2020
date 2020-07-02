import express from "express";
import serveIndex from "serve-index";
import cors from "cors";

const app = express();

app.use(cors());

// middleware for logging url
app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.use(express.static("www"));
app.use(serveIndex("www", { icons: true }));

app.listen(3000, () => {
  console.log("Server successfully started on port 3000");
});
