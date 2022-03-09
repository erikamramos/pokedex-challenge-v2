<template>
    <div class="search__input">
        <div class="search__icon">
            <slot name="search-icon"/>
        </div>
        <input
            :placeholder="placeholder"
            :value="modelValue"
            @input="onChangeModel($event.target.value)"
        />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        placeholder: {
            type: String,
            default: '',
        },
        modelValue: {
            type: String,
            default: '',
        }
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {

        function onChangeModel(value){
            console.log(value)
            emit('update:modelValue', value)
        }

        return {
            onChangeModel
        }
    },
})
</script>