const Express = require('express');
const App = Express();
const port = 80;
const cors = require('cors');
App.use(cors());
const Database = require("./Database.js");

let database = new Database();

App.get("/movies/title/:title", (req, res) => {
    let result = {"error": "Could not a movie with that title!"};
    database.findTitle(req.params.title).then((movie) => {
        if(movie != null) {
            result = movie;
        }
        res.json(result);
    });
});
App.listen(port, () => {
    console.log("Server running!")
});
