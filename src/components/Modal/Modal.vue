<template>
    <div v-if="open" class="modal">
        <div class="modal__overlay">
            <slot />
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        open: {
            type: Boolean,
            default: true,
        },
    }
})
</script>
