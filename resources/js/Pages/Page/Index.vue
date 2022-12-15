<template>
    <AppHead :title="content.title"></AppHead>
    <!-- page -->
    <main class="max-w-full md:max-w-7xl mx-auto text-white" x-data="layout">


        <!-- header page -->
        <header class="relative flex w-full items-center justify-between  p-4 pt-14 lg:pt-8 pb-4 sm:pb-14">

            <div class="logo-info-wrap w-full flex flex-row gap-7 justify-between">
                <!-- logo -->
                <div class="logo flex items-center space-x-2 cursor-pointer">
                    <img :src="'/images/logo.svg'" /><Link class="hidden sm:block ml-5 text-3xl sm:text-4xl" href="/">OrionPay</Link>
                </div>
                <!-- info -->
                <div class="time-works absolute top-0 py-2 left-0 justify-center lg:justify-end w-full bg-indigo-800 lg:bg-transparent lg:relative flex items-center text-red-500">
                    <div class="message-content text-white flex">
                        <i class="mr-2 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </i>
                        години роботи 10:00 - 19:00, Пн - Пт
                    </div>

                </div>

            </div>

            <!-- mobile menu button -->
            <button @click="isOpenMobileMenu = !isOpenMobileMenu" id="hamburger-botton" class="-mr-2 mobile-menu-button p-4 focus:outline-none lg:hidden cursor-pointer">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-2 hover:stroke-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>

            </button>



        </header>

        <div class="flex">
            <!-- aside -->
            <Sidebar>
                <template v-slot:menu>
                    <aside :class="[isOpenMobileMenu ? ['h-screen','z-20','translate-x-0', 'mob-menu-open','bg-white', 'text-blue-700'] : ['h-96','-translate-x-full']]" class="absolute inset-y-0 left-0 transform  lg:relative lg:translate-x-0 transition duration-200 ease-in-out md:flex w-80 flex-col space-y-2 bg-transparen p-2" >
                        <div class="relative mt-2 py-6 flex flex-col justify-center">
                            <div class="flex w-100 justify-end lg:hidden">
                                <button class="flex text-blue-700 text-4xl font-bold opacity-70 hover:opacity-100 duration-300"
                                        @click="isOpenMobileMenu = !isOpenMobileMenu">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                         stroke="currentColor"
                                         class="stroke-blue-900 w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                </button>
                            </div>
                            <Link :href="route('home')"
                                  :class="{ 'active-menu text-white': $page.url === '/' }"
                                  class="flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600">
                                <i class="mr-2 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                                    </svg>
                                </i>


                                Обмін</Link>

                            <Link :href="'/'" class="hidden flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600">
                                <span>Пр нас</span>
                            </Link>

                            <Link :href="route('faqs')"
                                  :class="{ 'active-menu text-white': $page.url === '/faqs' }"
                                  class="flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600">
                                <i class="mr-2 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                    </svg>

                                </i>
                                FAQ (Часті запитання)
                            </Link>

                        </div>

                    </aside>
                </template>

            </Sidebar>
            <!-- main content page -->
            <div class="w-full p-4">

                <div class="bg-orion max-h-[570px] min-h-[520px] lg:py-8 pt-3 w-full sm:px-10 px-6 shadow-md shadow-lg rounded-lg overflow-y-auto">
                    <h1 class="text-indigo-100 tracking-wide text-3xl font-bold"> {{ content.title }}</h1>
                    <div class="page-content pt-8 text-indigo-100 text-left" v-html="content.description"></div>
                </div>



            </div>
        </div>
    </main>

</template>

<script>
    import AppHead from "@/Components/Frontend/AppHead.vue";
    import { Link } from '@inertiajs/inertia-vue3'
    import MainLayout from "@/Layouts/MainLayout.vue";
    import Sidebar from "@/Components/Frontend/Sidebar.vue";
    import MyAccordion from "@/Components/UI/MyAccordion.vue";
    export default {
        name: "Index",
        layout: MainLayout,
        components: {
            Link,
            AppHead,
            Sidebar,
            MyAccordion
        },
        props: [
            'content',
            'meta'
        ],
        mounted() {
            console.log(typeof this.meta)
            console.log('global toast property: ', this.$description);
        },
        data() {
            return {
                isOpenMobileMenu: false,
            }
        }
    }
</script>

<style scoped>

</style>
