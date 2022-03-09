<template>
    <button
        :style="{width}"
        :class="['btn', inactive && '--disabled']">
        <div class="btn__icon">
            <slot name="btn-icon" />
        </div>
        <div class="btn__name">
            {{text}}
        </div>
    </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        text: {
            type: String,
            default: '',
        },
        width: {
            type: String,
            default: 'auto',
        },
        inactive:{
            type: Boolean,
            default: false,
        }
    }
})
</script>