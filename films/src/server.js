const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(cors(
    {
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204
      }
))

server.use(morgan("dev"));
server.use(express.json());

server.use(require("./routes"));

module.exports = server;