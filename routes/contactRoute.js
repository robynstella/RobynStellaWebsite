const express = require("express");
const path = require("path");
const { join } = require("path");
const contactRouter = express.Router();

contactRouter.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, '../views/contact.html'));
  });

  module.exports = contactRouter;