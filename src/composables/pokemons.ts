import { computed, ref } from "vue";
import { useStore } from "vuex";

export function usePokemons(){
    const store = useStore();
    const filter = ref("all");

    function setFilter(value) {
        filter.value = value;
    }

    const list = computed(() => {
        switch(filter.value){
            case "all":
                return store.getters['pokemonsList'];
            case "favorites":
                return store.getters['favoritesList'];
            default:
                return store.state.list;
        }
    });

    const favorite = computed(() => {
        return store.getters['favoritesList'];
    });

    const pokemon = computed(() => {
        return store.getters['pokemonInfo'];
    });

    const onFavoritePokemon = (pokemon) => {
        const favorites = store.getters['favoritesList'];
        if ( favorites.findIndex((element) => element.name == pokemon.name) == -1 ){
            favorites.push(pokemon);
        }
        else {
            const indx = favorites.findIndex((element) => element.name == pokemon.name);
            favorites.splice(indx, 1)
        }
        store.commit('setFavoriteList', favorites);

    };

    const isPokemonFavorite = (pokemon) => {
        const favorites = store.getters['favoritesList']
        const indx = favorites.findIndex((element) => element.name == pokemon.name)
        return indx == -1 ? false : true
    };

    function getPokemonsList(query) {
        store.dispatch('GetAllPokemon', query)
    }

    function getPokemonInfo(query) {
        store.dispatch('GetPokemonInfo', query)
    }

    function setLoader(value) {
        store.commit('setLoader', value);
    }
    return {
        pokemon,
        list,
        favorite,
        filter,
        onFavoritePokemon,
        isPokemonFavorite,
        setFilter,
        getPokemonsList,
        getPokemonInfo,
        setLoader
    }
}