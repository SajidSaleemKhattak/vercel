const express = require("express");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;
