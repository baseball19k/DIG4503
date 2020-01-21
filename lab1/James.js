const Person = require("./Person.js");

class James extends Person{
    constructor(name, favoriteColor){
        super(name, favoriteColor);
    }
}
module.exports = James;