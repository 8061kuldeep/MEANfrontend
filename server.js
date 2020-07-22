const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const port = 3000;
const app = express();
const api = require("./server/Routes/api");
app.use(express.static(path.join(__dirname, "dist")));
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use("/api", api);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});
app.listen(port, function () {
  console.log("server running on port" + port);
});
