<template>
    <Head :title="title ? `${title} - My App` : 'My App'">
        <slot />
    </Head>
</template>

<script>
import { Head } from '@inertiajs/inertia-vue3'

export default {
    components: {
        Head,
    },
    props: {
        title: String,
    },
}
</script>
