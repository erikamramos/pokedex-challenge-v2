<template>
    <div class="pokedex__bar">
        <poke-button
            text="All"
            width="170px"
            @click="all"
            :inactive="list=='favorites'"
        >
            <template #btn-icon>
                <i class="fas fa-list-ul"></i>
            </template>
        </poke-button>
        <poke-button
            text="Favorites"
            width="170px"
            @click="favorite"
            :inactive="list=='all'"
        >
            <template #btn-icon>
                <i class="fas fa-star"></i>
            </template>
        </poke-button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import  PokeButton from '../Button/Button.vue' 

export default defineComponent({
    components:{
        PokeButton,
    },
    props:{
        list: {
            type: String,
            default: 'all'
        }
    },
    emits: ['get-all','get-favorite'],
    setup(props, { emit }) {

        function all(){
            emit('get-all')
        }
        
        function favorite(){
            emit('get-favorite')
        }

        return {
            all,
            favorite
        }
    },
})
</script>