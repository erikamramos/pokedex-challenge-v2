import callAPI from "./axios";

function getPokemonList( offset , limit){
        return callAPI('get', `pokemon?limit=${offset}&offset=${limit}`);
    }


function getPokemon( id ){
        return callAPI('get', `pokemon/${id}`);
    }

export {
    getPokemonList,
    getPokemon
};