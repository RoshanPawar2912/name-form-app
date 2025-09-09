const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/save-name", (req, res) => {
  const username = req.body.username;
  console.log("Received name:", username);
  res.send(`Hello, ${username}! Your name has been saved.`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
