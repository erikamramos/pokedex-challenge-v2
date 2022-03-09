const getters = {
    pokemonsList(state){
        return state.list;
    },
    favoritesList(state){
        return state.favorites;
    },
    pokemonInfo(state){
        return state.info;
    }
}

export default getters