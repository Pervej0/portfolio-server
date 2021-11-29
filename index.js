const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("WELCOME TO SERVER");
});

app.listen(port, () => {
  console.log("Your server is running on port", port);
});
