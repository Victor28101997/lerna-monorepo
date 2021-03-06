const express = require("express");

const port = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("I'm a backend server");
});

app.listen(port, (err) => {
  if (err) {
    console.log("err", err);
    return;
  }
  console.log("listening on port", port);
});
