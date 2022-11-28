<template>
    <Head title="FAQ - Питання - відповіді" />
    <main class="max-w-7xl mx-auto text-white" x-data="layout">
        <!-- header page -->
        <header class="flex w-full items-center justify-between  p-4 pt-8 pb-14">
            <!-- logo -->
            <div class="logo flex items-center space-x-2 cursor-pointer">
                <img :src="'/images/logo.svg'" /><Link class="hidden sm:block ml-5 text-3xl sm:text-4xl" href="/">OrionPay</Link>
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
                                  class="flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600">FAQ (Часті запитання)</Link>

                        </div>

                    </aside>
                </template>

            </Sidebar>
            <!-- main content page -->
            <div class="w-full p-4">
                <div class="bg-orion max-h-[570px] min-h-[520px] lg:py-8 pt-3 w-full sm:px-10 px-6 shadow-md shadow-lg rounded-lg overflow-y-auto">
                    <h1 class="text-indigo-100 tracking-wide text-3xl font-bold">FAQ: Питання-відповіді</h1>
                    <div class="pt-8 text-indigo-100 text-left">
                        <MyAccordion v-for="(faq, index) in faqs" class="mb-4">
                            <template v-slot:title>
                                <span class="max-w-[90%] font-semibold text-xl">{{ faq.question }}</span>
                            </template>
                            <template v-slot:content >
                                <div v-html="faq.answer"></div>

                            </template>
                        </MyAccordion>


                    </div>
                </div>



            </div>
        </div>
    </main>

</template>

<script>
    import {Link, Head} from '@inertiajs/inertia-vue3'
    import MainLayout from "@/Layouts/MainLayout.vue";
    import Sidebar from "@/Components/Frontend/Sidebar.vue";
    import MyAccordion from "@/Components/UI/MyAccordion.vue";
    export default {
        name: "Index",
        layout: MainLayout,
        components: {
            Link,
            Head,
            Sidebar,
            MyAccordion
        },
        props: [
            'faqs'
        ],
        data() {
            return {
                isOpenMobileMenu: false,
            }
        }
    }
</script>

<style scoped>

</style>
