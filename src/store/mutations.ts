export default {
    setPokeList(state, data){
        state.list = [...state.list, ...data];
    },
    setFavoriteList(state, data){
        state.favorites = data;//[...state.favorites, ...data];
    },
    setPokeInfo(state, data){
        state.info = data;
        state.showModal = true;
    },
    showModalInfo(state, toggle){
        state.showModal = toggle;
    },
    removeFavoritesList(state, indx){
        console.log(indx)
    }
}