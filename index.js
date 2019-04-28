const express = require("express");

const app = express();
const bp = require('body-parser')

app.use(bp.json())

app.get("/", (req, res) => {
  const testing = [1,2,3,4,5,6]
  return res.status(200).json({ testing })
});

app.get("/test", (req, res) => {
  return res.status(200).json({ test:'test route' })
});

app.get("/adsf", (req, res) => {
  return res.status(200).json({ test: "adsf route" });
});

const server = app.listen(3000, () => {
  console.log("App running on port 3000");
});

module.exports = server;
