const express = require("express");
const path = require("path");
const { join } = require("path");
const cvRouter = express.Router();

cvRouter.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '../resources/robynMurrayCV.pdf'));
  });

  module.exports = cvRouter;