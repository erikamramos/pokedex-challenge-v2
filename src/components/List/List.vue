<template>
    <div ref="pokedexList" class="pokedex__list">
        <slot/>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue'
import { templateRef } from '@vueuse/core';

export default defineComponent({
    props:{
        
    },
    emits: ["refresh-list"],
    setup(props, { emit }) {

        const pokeList = templateRef('pokedexList');

        onMounted(() => {
            window.addEventListener('scroll', onscroll);
        });
        onUnmounted(() => {
            window.removeEventListener('scroll', onscroll);
        });
        const onscroll = () => {
            let element = pokeList.value;
            if ( Math.floor(element && element.getBoundingClientRect().bottom) <= Math.floor(window.innerHeight)) {
                emit("refresh-list");
            }
        }
        return {
        }
    },
})
</script>