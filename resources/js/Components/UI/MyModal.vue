<template>
    <Teleport to="body">
        <Transition name="modal">
            <div v-if="modalActive" class="modal z-50">
                <div class="modal-bg fixed bg-gray-800/75 flex justify-center items-center " >
                    <div :class="loading ? ['relative', 'bg-transparent', 'py-3', 'px-4'] : ''">
                        <PulseLoader :loading="loading" :color="'#ffffff'"></PulseLoader>
                    </div>

                    <div :class="!loading ? ['modal-content', 'relative', 'bg-white', 'py-3', 'px-4', 'rounded-lg', 'shadow-lg', 'shadow-indigo-500/40'] : ''">

                        <button class="absolute right-3" type="button" @click="modalClose">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor"
                                 class="stroke-blue-900 w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <slot></slot>
                    </div>
                </div>
            </div>
        </Transition>

    </Teleport>
</template>

<script>
    import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
    export default {
        name: "MyModal",
        components: {
            PulseLoader
        },
        props: {
            modalActive: Boolean,
            loading: {
                type: Boolean,
                default: false
            }
        },
        emits: ["modalClose"],
        setup(props, { emit }) {
            const modalClose = () => {
                emit("modalClose")
            }
            return { modalClose }
        }
    }
</script>

<style lang="scss" scoped>
    .modal-bg {
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        overflow-y: hidden;
    }

</style>
