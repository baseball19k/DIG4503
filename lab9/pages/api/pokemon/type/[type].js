import getPokemon from 'json-pokemon/getPokemon';

export default (req, res) => {

    let result = {"error": "Could not find that type."};

    let pokemon = getPokemon.getPokemonBytypeList(req.query.typeList);

    if(pokemon !== null) {
        result = pokemon;
    }

    res.json(result);

}
