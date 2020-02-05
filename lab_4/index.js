const Express  = require("express");
const App = Express();
const port = 80;

const Pokemon = require('json-pokemon')

App.get("/pokemon/id/:id", (req, res) => {
    res.send(req.params.id);
});

App.get("/pokemon/name/:name", (req, res) => {
    res.send(req.params.name);
});

App.get("/:id", (req, res) => {
    res.send(req.params);
});

App.listen(port, () => {
    console.log("Server running!");
});