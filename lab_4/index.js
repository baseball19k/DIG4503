const Express  = require("express");
const App = Express();
const port = 80;
const chalk = require('chalk');
const Pokemon = require('json-pokemon/getPokemon')

App.get("/id/:id", (req, resp) => {
    let reup = getPokemons.getPokemonById(parseInt(req.params.id));

    if (result === null) {
        resp.send("<h2 style=\"color:red;\">Wrong</h2>");
        console.log(chalk.red(getPath(req)));
    } else {
        console.log(chalk.green(getPath(req)));
        resp.send(result);
    }
});

App.get("/name/:name", (req, resp) => {
    let reup = getPokemons.getPokemonByName(req.params.name);

    if (result === null) {
        console.log(chalk.red(req.url));
        resp.send(
            '<h2>ERROR <span style="color:red;">' + req.params.name + "</span>" + " isn't a choice.</h2>"
        );
    } else {
        resp.send(reup);
        console.log(chalk.green(getPath(req)));
    }
});

App.get("*", function (req, resp) {
    resp.status(404).send("<h2 style=\"color:red\">404 - INVALID URL</h2>");
    console.log(chalk.keyword(ERROR_COLOR)(getFullPath(req)));
});

App.listen(port, () => {
    console.log("Server running!");
});

function getPath(request) {
    return request.protocol + '://' + request.get('host') + request.originalUrl;
}
