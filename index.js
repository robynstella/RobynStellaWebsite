const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");

//Routers section
const mainRouter = require('./routes/mainRoute.js')
const paperRouter = require('./routes/paperRoute.js')


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", mainRouter);
app.use("/papers", paperRouter);
app.use(express.static("scripts"));
app.use(express.static('styling'));
app.use(express.static('pictures'));

let server = http.createServer(app);

server.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
