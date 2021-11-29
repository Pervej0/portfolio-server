const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sjbgh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log(uri);
const run = async () => {
  try {
    await client.connect();
    console.log("user is connected");
  } finally {
    //   await client.close();
  }
};

run().catch(console.dir);
app.get("/", (req, res) => {
  res.send("WELCOME TO SERVER");
});

app.listen(port, () => {
  console.log("Your server is running on port", port);
});
