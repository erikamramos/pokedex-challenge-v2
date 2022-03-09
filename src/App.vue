<template>
  <router-view/>
  <loader />
  <div id="modal"></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Loader from "@/components/Loader/Loader.vue";

export default defineComponent({
  name: 'App',

  components:{
    Loader
  },

  // setup(){

  // }

});
</script>
<style>

#modal {
  position: fixed;
  z-index: 40;
}
</style>
