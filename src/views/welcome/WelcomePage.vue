<template>
    <div class="app-bg">
        <div>
            <div class="welcome__picture">
                <img src="@/assets/pikachu.png" />
            </div>
            <h1 class="welcome__header">Welcome to Pokédex</h1>
            <p class="welcome__description pa-2"> The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the Pokémon world. </p>
            <poke-button
                @click="redirect"
                text="Get started"
                width="150px"
            >
            </poke-button>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import PokeButton from '../../components/Button/Button.vue'
import { usePokemons } from "../../composables/pokemons";
import { useRouter } from 'vue-router';
export default defineComponent({
    components:{
        PokeButton
    },
    setup() {
        const router = useRouter();
        const { setLoader } = usePokemons();
        function redirect(){
            setLoader(true)
            setTimeout(() => setLoader(false), 4000);
            
            router.push({name:'pokedex'})
        }
        return {
            redirect,
            setLoader
        }
    }
})
</script>

<style scoped>
#bottomBar{
    position: fixed;
    bottom: 0;
    width: 100%;

}
</style>
