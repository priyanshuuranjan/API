const express = require("express");
const app = express();
// const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

app.use(cors());

const apiData = require("./data.json");

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/products", (req, res) => {
    res.send(apiData);
  });

// Start the server
app.listen(PORT, () => {
  console.log("im live");
  console.log(`Server is running on port ${PORT}`);
});