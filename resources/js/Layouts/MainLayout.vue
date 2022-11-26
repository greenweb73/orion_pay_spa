<template>

    <div class=" min-h-screen sm:items-center sm:pt-0 bg-re bg-repeat-y flex flex-col justify-between"
         style="background-image: url('/images/orion-constellation.jpg');">
        <div class="container-fluid md:container mx-auto">
            <slot />
        </div>

        <footer class="container-fluid max-w-7xl xs:container mx-auto">
            <div></div>
            <div class="bottom-footer flex justify-between text-white pt-4 pb-4">
                <div class="left-side mr-auto"></div>
                <div class="right-side ml-auto">
                    <a class="text-white px-3" href="/terms-of-use">Користувацька угода</a>
                    <a class="text-white px-3" href="/privacy">Політика конфіденційності</a>
                </div>
            </div>
        </footer>

    </div>
</template>
<script>
    import Sidebar from "@/Components/Frontend/Sidebar.vue";
    export default {
        name: "MainLayout",
    }
</script>

