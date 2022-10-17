<template>
    <Head title="Welcome" />

        <!-- page -->
        <main class="max-w-7xl mx-auto min-h-screen   text-white" x-data="layout">
            <!-- header page -->
            <header class="flex w-full items-center justify-between  p-4 pt-8 pb-14">
                <!-- logo -->
                <div class="flex items-center space-x-2 cursor-pointer">

                    <img :src="'/images/logo.svg'" style="width: 55px; height: auto"/><Link class="ml-5 text-4xl" href="/">OrionPay</Link>
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

                    <Link :href="route('faq.index')" class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">FAQ (Часті запитання)</Link>




                </aside>

                <!-- main content page -->
                <div class="w-full p-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita quam odit officiis
                    magni doloribus ipsa dolore, dolores nihil accusantium labore, incidunt autem iure quae vitae voluptate,
                    esse asperiores aliquam repellat. Harum aliquid non officiis porro at cumque eaque inventore iure. Modi sunt
                    optio mollitia repellat sed ab quibusdam quos harum!</div>
            </div>
        </main>


</template>

<script>
    import { Head, Link } from '@inertiajs/inertia-vue3';
    import MainLayout from "@/Layouts/MainLayout.vue";


    export default {
        name: "Welcome",
        layout: MainLayout,
        components: {
            Head,
            Link
        }

    }
</script>
