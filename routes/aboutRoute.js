const express = require("express");
const path = require("path");
const { join } = require("path");
const aboutRouter = express.Router();

aboutRouter.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '../views/about.html'));
  });

  module.exports = aboutRouter;