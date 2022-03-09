<template>
    <div class="pokedex__item">
        <div class="pokedex__item--text" @click="$emit('show-detail')">
            {{capitalize(name)}}
        </div>
        <div @click="addFavorite">
            <img v-if="favorite" src="@/assets/favorite.svg" class="btn__favorite">
            <img v-else src="@/assets/non-favorite.svg" class="btn__favorite">
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { capitalize } from '../../utils/capitalize'

export default defineComponent({
    props:{
        name: {
            type: String,
            default: '',
        }, 
        id: {
            type: String,
            default: '',
        },
        favorite:{
            type: Boolean,
            default: false,
        }
    },
    setup(props,{emit} ) {

        const addFavorite = (event) =>{
            emit('add-favorite');
        }
        return {
            addFavorite,
            capitalize
        }
    },
})
</script>
