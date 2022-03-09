import { getPokemonList, getPokemon } from '../api/index'

export default {
    GetAllPokemon({ commit }, { offset, limit }) {
        return getPokemonList(offset, limit)
            .then(({ data }) => {
                data.results.forEach(poke => {
                    const pokeSplit = poke.url.split('/')
                    poke.id = pokeSplit[pokeSplit.length - 2]
                })
                console.log(data)
                commit('setPokeList', data.results)
            })
            .catch(err => console.log(err))
    },
    GetPokemonInfo({ commit }, id) {
        return getPokemon(id)
            .then(res => {
                console.log(res)
                commit('setPokeInfo', res.data)
            })
            .catch(err => {
                console.log(err)
                throw err
            })
    },
}