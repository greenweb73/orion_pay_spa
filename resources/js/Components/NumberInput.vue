<script setup>
import { onMounted, ref } from 'vue';

defineProps(['modelValue', 'contentClasses']);

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {

    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});
</script>

<template>
    <input type='number' :class="[...contentClasses]" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" ref="input">
</template>
