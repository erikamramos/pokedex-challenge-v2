<template>
  <router-view/>
  
  <div id="modal">
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',

  components:{

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
