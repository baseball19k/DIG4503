/*const Express  = require("express");
const App = Express();
const port = 80;
const chalk = require('chalk');
const Pokemon = require('json-pokemon/getPokemon')

App.get("/id/:id", (req, resp) => {
    let reup = getPokemons.getPokemonById(parseInt(req.params.id));

    if (result === null) {
        res.send("<h2 style=\"color:red;\">Wrong</h2>");
        console.log(chalk.red(req.Path));
    } else {
        console.log(chalk.green(getPath(req)));
        res.send(result);
    }
});

App.get("/name/:name", (req, resp) => {
    let reup = getPokemons.getPokemonByName(req.params.name);

    if (result === null) {
        console.log(chalk.red(req.url));
        res.send(
            '<h2>ERROR <span style="color:red;">' + req.params.name + "</span>" + " isn't a choice.</h2>"
        );
    } else {
        res.send(reup);
        console.log(chalk.green(getPath(req)));
    }
});

App.get("*", function (req, resp) {
    res.status(404).send("<h2 style=\"color:red\">404 - INVALID URL</h2>");
    console.log(chalk.keyword(ERROR_COLOR)(getFullPath(req)));
});

App.listen(port, () => {
    console.log("Server running!");
});*/



const Express = require("express");
const App = Express();
const port = 80;
const pokemons = require('json-pokemon');
const pokemon = pokemons[0];


App.get("/name/:name", (req, res) => {
    pokemons.forEach(value=> {
        if(value.name == req.params.name) {
            res.send(value);
            console.log(chalk.green(req.Path));
        }
    });
    res.send("<h2 style=\"color:red;\">Invalid!</h2>");
    console.log(chalk.red(req.Path));

});
App.get("/id/:id", (req, res) => {
    pokemons.forEach(value=> {
        if(value.id == req.params.id) {
            res.send(value);
            console.log(chalk.green(req.Path));
        }
    });
    res.send("<h2 style=\"color:red;\">Invalid!</h2>");
    console.log(chalk.red(req.Path));

});

App.listen(port, () => {
    console.log("Server running!");
});

function getPath(request) {
    return request.protocol + '://' + request.get('host') + request.originalUrl;
}
