<template>

    <div class=" min-h-screen sm:items-center sm:pt-0 bg-re bg-repeat-y "
         style="background-image: url('/images/orion-constellation.jpg');">
        <div class="container-fluid md:container mx-auto">
            <slot />
        </div>

    </div>
</template>
<script>
    export default {
        name: "MainLayout"
    }
</script>

