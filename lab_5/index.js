const Express = require("express");
const App = Express();
const port = 80;
const pokemons = require('json-pokemon');
const pokemon = pokemons[0];

App.use("/", Express.static("public"));

App.get("/name/:name", (req, res) => {
    pokemons.forEach(value=> {
        if(value.name == req.params.name) {
            res.json(value);
            console.log(chalk.green(req.Path));
        } else {
          res.json(value);
          console.log(chalk.red(req.Path));
        }
    });
});

App.get("/id/:id", (req, res) => {
    pokemons.forEach(value=> {
        if(value.id == req.params.id) {
          res.json(value);
          console.log(chalk.green(req.Path));
        }else{
          res.json(value);
          console.log(chalk.red(req.Path));
        }
    });
});

App.get("/api/:value", (req, res) => {
    pokemons.forEach(value=> {
      if(value.value == req.params.value) {
        res.json(value);
        console.log(chalk.green(req.Path));
      } else {
        res.json(value);
        console.log(chalk.red(req.Path));
      }
    });
  });

App.listen(port, () => {
    console.log("Server running!");
});

function getPath(request) {
    return request.protocol + '://' + request.get('host') + request.originalUrl;
}
