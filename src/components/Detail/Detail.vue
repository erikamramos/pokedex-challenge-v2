<template>
    <div class="modalDetail" v-if="pokemon">
        <span class="modalDetail__close" @click="$emit('close')">
            <i class="fas fa-times-circle"></i>
        </span>
        <div class="modalDetail__picture" v-if="pokemon.sprites">
            <img
                class="modalDetail__background"
                src="@/assets/pokemon_background.png"
            />
            <img
                class="modalDetail__image"
                :src=" getArtWork(pokemon.sprites.other) "
            />
        </div>
        <div class="modalDetail__content">
            <div class="modalDetail__info">
                <span class="text-bold text-base">Name: &nbsp;</span>
                <span class="text-base">{{capitalize(pokemon.name)}}</span>
            </div>
            <div class="modalDetail__divider"></div>
            <div class="modalDetail__info">
                <span class="text-bold text-base">Weight: &nbsp;</span>
                <span class="text-base">{{pokemon.weight}}</span>
            </div>
            <div class="modalDetail__divider"></div>
            <div class="modalDetail__info">
                <span class="text-bold text-base">Height: &nbsp;</span>
                <span class="text-base">{{pokemon.height}}</span>
            </div>
            <div class="modalDetail__divider"></div>
            <div class="modalDetail__info" v-if="pokemon.types">
                <span class="text-bold text-base">Types: &nbsp;</span>
                <span class="text-base">{{types}}</span>
            </div>
        </div>
        <div class="modalDetail__bottom">
            <div class="modalDetail__bottom-grid">
                <poke-button
                    text="Share to my friends"
                    width="170px"
                    :inactive="false"
                    @click="copy(clipboard)"
                >
                </poke-button>
            </div>
            <div @click="addFavorite">
                <img v-if="favorite" src="@/assets/favorite.svg" class="btn__favorite">
                <img v-else src="@/assets/non-favorite.svg" class="btn__favorite">
            </div>
        </div>
        
    </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import  PokeButton from '../Button/Button.vue' 
import { useClipboard } from '@vueuse/core';
import { usePokemons } from "../../composables/pokemons";
import { capitalize } from '../../utils/capitalize'

export default defineComponent({
    components:{
        PokeButton,
    },
    props:{
        favorite:{
            type: Boolean,
            default: false,
        }
    },
    emits: [],
    setup(props, { emit }) {
        const {pokemon, isPokemonFavorite } = usePokemons();
        const { copy, copied } = useClipboard();
        const type = ref('');

        const clipboard = computed(() =>
            `Nombre: ${pokemon.value.name}, Peso: ${pokemon.value?.weight}, Altura: ${pokemon.value?.height}`
        );

        function getArtWork(other) {
            return other['official-artwork'].front_default;
        }

        const types = computed(() =>
            pokemon.value?.types.reduce((acum, { type }) => `${acum}, ${capitalize(type.name)}`, '').substring(1) .trim()
        );

        const addFavorite = (event) =>{
            emit('add-favorite');
        }
        return {
            capitalize,
            clipboard,
            pokemon,
            copied,
            types,
            copy,
            isPokemonFavorite,
            getArtWork,
            addFavorite
        }
    },
})
</script>