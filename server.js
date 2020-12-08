const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const path = require("path");
const serveStatic = require('serve-static');
const app = express();
const port = process.env.PORT || 5000;

app.use(
  compression({
    filter: (req, res) => {
      return compression.filter(req, res);
    },
  })
);
app.use(bodyParser.json());
app.use(serveStatic(path.resolve(__dirname, "./dist")))

app.listen(port, () => {
  console.log(`Running on Port http://localhost:${port}`);
});
