const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const api = require("./server/routes/api");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "dist")));
app.use("/api", api);
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});
app.listen(process.env.PORT || "3000", function () {
  console.log("server is running on port");
});
