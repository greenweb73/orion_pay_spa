<template>

    <div class=" min-h-screen sm:items-center sm:pt-0 bg-re bg-repeat-y flex flex-col justify-between"
         style="background-image: url('/images/orion-constellation.jpg');">
        <div class="container-fluid md:container mx-auto">
            <slot />
        </div>

        <footer class="container-fluid text-base max-w-7xl md:container mx-auto">
            <div class="top-footer flex  sm:justify-start justify-center text-white pt-2 pb-0">
                <div class="block-copyright pl-3">
                    {{ currentYear }} © OrionPay
                </div>
            </div>
            <div class="bottom-footer flex sm:flex-row flex-col  justify-between text-white pt-1 pb-4">
                <div class="left-side sm:mr-auto text-center pb-3"><a class="text-white px-3" href="mailto:support@orionpay.com.ua">support@orionpay.com.ua</a></div>
                <div class="right-side flex flex-col sm:flex-row sm:ml-auto sm:justify-center text-center">
                    <a class="text-white px-3 pb-1" href="/terms-of-use">Користувацька угода</a>
                    <a class="text-white px-3" href="/privacy">Політика конфіденційності</a>
                </div>
            </div>
        </footer>

    </div>
</template>
<script>

    export default {
        name: "MainLayout",
        data() {
            return {
                currentYear: new Date().getFullYear()
            }
        }
    }
</script>

