<template>
    <div class="pokedex__list--empty">
        <h1 class="welcome__header">Uh-oh!</h1>
        <p class="welcome__description pa-1"> You look lost on your journey!</p>
        <poke-button
            text="Go back home"
            width="150px"
        >
        </poke-button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import PokeButton from '../Button/Button.vue'
export default defineComponent({
    components:{
        PokeButton
    }
})
</script>