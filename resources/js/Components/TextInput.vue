<script setup>
import { onMounted, ref } from 'vue';

defineProps(['modelValue']);

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});
</script>

<template>
    <input class="mt-0 block w-full text-gray-700
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:outline-none focus:border-black" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" ref="input">
</template>
