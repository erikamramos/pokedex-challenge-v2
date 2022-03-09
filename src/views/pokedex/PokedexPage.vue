<template>
    <div class="pokedex__container">
        <div class="pokedex__content">
            <search-bar
                placeholder="Search"
                v-model="search"
            >
                <template #search-icon>
                    <i class="fa fa-search"></i>
                </template>
            </search-bar>
            <poke-list
                @refresh-list="next"
                v-if="pokemons.length > 0"
            >
                <poke-item 
                    v-for="poke in pokemons"
                    :key="poke.name"
                    :id="poke.id"
                    :name="poke.name"
                    :favorite="isPokemonFavorite(poke)"
                    @show-detail="getPokemon(poke)"
                    @add-favorite="onFavoritePokemon(poke)"
                />
            </poke-list>
            <empty-list v-else/>
        </div>
        <div id="bottomBar">
            <bottom-bar
                :list="filter"
                @get-all="setFilter('all')"
                @get-favorite="setFilter('favorites')"
            />
        </div>
        
            <teleport to="#modal">
                <modal 
                    :open="isOpen">
                    <pokemon-detail
                        :favorite="isPokemonFavorite(pokemon)"
                        @add-favorite="onFavoritePokemon(pokemon)"
                        @close="closeModal"
                    >
                    </pokemon-detail>
                </modal>
            </teleport>
        
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { mapActions  } from 'vuex';

import { computed } from "vue";
import { useStore } from "vuex";
import { usePokemons } from "../../composables/pokemons";

import BottomBar from '../../components/BottomBar/bottomBar.vue'
import SearchBar from '../../components/SearchBar/SearchBar.vue'
import PokeList from '../../components/List/List.vue'
import PokeItem from '../../components/ListItem/ListItem.vue'
import EmptyList from '../../components/Empty/Empty.vue'
import Modal from '../../components/Modal/Modal.vue';
import PokemonDetail from '../../components/Detail/Detail.vue';

export default defineComponent({
    components:{
        BottomBar,
        SearchBar,
        PokeList,
        PokeItem,
        EmptyList,
        Modal,
        PokemonDetail
    },
    setup() {
        const store = useStore();
        const offset = ref(0); 
        const limit = ref(100); 
        const search = ref('');
        const isOpen = ref(false);
        const { list, pokemon,favorite, filter, setFilter, getPokemonsList, getPokemonInfo, onFavoritePokemon, isPokemonFavorite } = usePokemons();

        function getList() {
            getPokemonsList({ offset: offset.value, limit: limit.value });
        }

        function next() {
            offset.value += limit.value;
            getList();
        }

        const getPokemon = async (pokemon) => {
            await getPokemonInfo(pokemon.id);
            isOpen.value = true;
        }

        const pokemons = computed(() => {
            return list.value.filter((pokemon) => 
                pokemon.name.includes(search.value.toLowerCase())
            );
        });

        const closeModal = () =>{
            isOpen.value = false;
        }

        onMounted(getList)

        return {
            isOpen,
            list,
            favorite,
            pokemons,
            pokemon,
            filter,
            search,
            setFilter,
            getPokemonsList,
            onFavoritePokemon,
            isPokemonFavorite,
            getList,
            next,
            getPokemonInfo,
            getPokemon,
            closeModal
        }
    },
})
</script>

<style scoped>
#bottomBar{
    position: fixed;
    bottom: 0;
    width: 100%;

}

</style>