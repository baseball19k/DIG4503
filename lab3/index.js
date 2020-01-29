const Express = require("express");
const App = Express();
const port = 8080;


App.use(Express.static("public"));

//App.get('/public', function(Request, Response) {
  //      Response.send("Hello World!");
//});
App.get('/', function(Request, Response) {
        Response.send("Hello World!");
});

App.listen(port, function(){
        console.log("Server running!");
});
