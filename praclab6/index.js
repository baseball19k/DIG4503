const Express = require("express");
const App = Express();
const chalk = require("chalk");
const port = 80;
const pokemons = require('json-pokemon');
const pokemon = pokemons[0];
const cors = require("cors");

App.use(cors());
App.use("/", Express.static("client/build"));

App.get("/name/:name", (req, res) => {
    let result = {"error": "That's not it chief."}

    pokemons.forEach((value)=> {
        if(value.name == req.params.name) {
            result = value;
        }
    });
    res.json(result);
});

App.get("/id/:id", (req, res) => {
  let result = {"error": "That's not it chief."}

    pokemons.forEach((value)=> {
        if(value.id == req.params.id) {
          result = value;
        }
    });
    res.json(result);
});

App.listen(port, () => {
    console.log("Server running!");
});
