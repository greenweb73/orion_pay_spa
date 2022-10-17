<template>
    <main class="max-w-7xl mx-auto min-h-screen   text-white" x-data="layout">
        <!-- header page -->
        <header class="flex w-full items-center justify-between  p-4 pt-8 pb-14">
            <!-- logo -->
            <div class="flex items-center space-x-2">

                <div>OrionPay</div>
            </div>


        </header>

        <div class="flex">
            <!-- aside -->
            <aside class="flex w-72 flex-col space-y-2 bg-transparen p-2" style="height: 90.5vh"
                   x-show="asideOpen">

                <a href="#" class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                    <span class="text-2xl"><i class="bx bx-cart"></i></span>
                    <span>Послуги</span>
                </a>
                <a href="#" class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                    <span class="text-2xl"><i class="bx bx-cart"></i></span>
                    <span>Пр нас</span>
                </a>

                <a href="#" class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                    <span class="text-2xl"><i class="bx bx-shopping-bag"></i></span>
                    <span>FAQ (Часті запитання)</span>
                </a>



            </aside>

            <!-- main content page -->
            <div class="w-full p-4">
                <h1>Про нас</h1>

            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>

</style>
