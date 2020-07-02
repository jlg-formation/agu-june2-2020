import express from "express";
import serveIndex from "serve-index";
import cors from "cors";

const articles = [
  { name: 'Tournevis', price: 2.34, qty: 123 },
  { name: 'Tournevis Cruciforme', price: 2.34, qty: 1000 },
  { name: 'Pince', price: 12.34, qty: 45 },
  { name: 'Scie', price: 34, qty: 12 },
  { name: 'Tondeuse', price: 340, qty: 20 },
];

const app = express();

app.use(cors());

// middleware for logging url
app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.get('/ws/articles', (req, res) => {
  res.json(articles);
});

app.use(express.static("www"));
app.use(serveIndex("www", { icons: true }));

app.listen(3000, () => {
  console.log("Server successfully started on port 3000");
});
