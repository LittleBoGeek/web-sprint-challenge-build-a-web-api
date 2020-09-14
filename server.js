const express = require('express')

const actionRouter = require("./data/actionRouter/actionRouter")
const projectRouter = require("./data/projectRouter/projectRouter")

const helmet = require('helmet')
const server = express();

server.use (express.json());

server.use(helmet());


server.get("/", (req, res) => {
    res.status(200).json({message:"Server is running"})
});

server.use("/api/project", projectRouter);

server.use("/api/action", actionRouter)


module.exports = server;