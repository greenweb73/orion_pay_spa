<template>
    <div class="border-b border-indigo-100">
        <button
            @click="toggleAccordion()"
            :class="{ 'text-white': isOpen}"
            class="w-full justify-between flex items-center space-x-3 pt-2 pb-4 text-left"
            :aria-expanded="isOpen"
            :aria-controls="`collapse${_uid}`"
        >
            <slot name="title" />
            <svg
                class="w-3 transition-all duration-200 transform"
                :class="{
          'rotate-180': isOpen,
          'rotate-0': !isOpen,
        }"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 10"
                aria-hidden="true"
            >
                <path
                    d="M15 1.2l-7 7-7-7"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </button>

        <div class=" text-indigo-100 pb-6" v-show="isOpen" :id="`collapse${_uid}`">
            <slot name="content" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "MyAccordion",
        data() {
            return {
                isOpen: false,
            };
        },
        methods: {
            toggleAccordion() {
                this.isOpen = !this.isOpen;
            },
        },
    }
</script>

<style scoped>

</style>
