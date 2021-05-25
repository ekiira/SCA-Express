const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.redirect("/products");
});

app.get("/products", (req, res) => {
  res.send("This is the products route");
});

app.get("/products/:id", (req, res) => {
  res.send("This is the single product route");
});

app.listen(port, () => {
  process.stdout.write(`server is running at port ${port}`);
});
