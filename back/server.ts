import express from "express";
import serveIndex from "serve-index";
import cors from "cors";

const articles = [
  { id: 'a1', name: "Tournevis", price: 2.34, qty: 123 },
  { id: 'a2', name: "Tournevis Cruciforme", price: 2.34, qty: 1000 },
  { id: 'a3', name: "Pince", price: 12.34, qty: 45 },
  { id: 'a4', name: "Scie", price: 34, qty: 12 },
  { id: 'a5', name: "Tondeuse", price: 340, qty: 20 },
];

let lastId = 5;

const app = express();

app.use(cors());
app.use(express.json());


// middleware for logging url
app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.get("/ws/articles", (req, res) => {
  res.json(articles);
});

app.post("/ws/articles", (req, res) => {
  const article = req.body;
  lastId++;
  article.id = 'a' + lastId;
  articles.push(article);
  res.status(201).json(article);
});

app.use(express.static("www"));
app.use(serveIndex("www", { icons: true }));

app.listen(3000, () => {
  console.log("Server successfully started on port 3000");
});
