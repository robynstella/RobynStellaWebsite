const express = require("express");
const path = require("path");
const { join } = require("path");
const paperRouter = express.Router();

paperRouter.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '../views/papers.html'));
  });

module.exports = paperRouter;