<template>

    <Head title="Створення сторінки FAQ" />

    <AuthenticatedLayout>
        <template #header>Створення сторінки FAQ</template>

        <div class="flex flex-column max-w-max min-w-full">
            <div class="py-12 min-w-[70%] mx-auto sm:px-6 lg:px-8">

                <div class="p-6 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    <form @submit.prevent="submitHandler">

                        <div class="flex flex-wrap">
                            <div class="w-full lg:w-12/12 px-4">
                                <div class="relative w-full mb-3">
                                    <label
                                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Назва сторінки *
                                    </label>
                                    <input
                                        type="text"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        v-model="form.title"
                                    />
                                </div>

                                <div class="relative w-full mb-3">
                                    <label
                                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        SEO URL
                                    </label>
                                    <input
                                        type="text"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        v-model="form.slug"
                                    />
                                </div>
                                <div class="relative w-full mb-3">
                                    <label
                                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Мета-тег Title
                                    </label>
                                    <input
                                        type="text"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        v-model="form.meta_title"
                                    />
                                </div>
                                <div class="relative w-full mb-3">
                                    <label
                                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Мета-тег Description
                                    </label>
                                    <textarea
                                        type="text"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        aria-placeholder="Мета-тег Description"
                                        v-model="form.meta_description"
                                    ></textarea>
                                </div>
                                <div class="relative w-full mb-3">
                                    <label
                                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Мета-тег Keywords
                                    </label>
                                    <textarea
                                        type="text"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        v-model="form.meta_keywords"
                                    ></textarea>
                                </div>

                            </div>
                        </div>
                        <div class="px-4 pt-8 ml-auto">
                            <button type="submit"
                                  class=" bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150">
                                Зберегти
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    </AuthenticatedLayout>



</template>


<script>
    import { Inertia } from '@inertiajs/inertia'
    import { Head, Link } from '@inertiajs/inertia-vue3';
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import Editor from "@tinymce/tinymce-vue";

    export default {
        name: "Index",
        components: {
            Head,
            Link,
            AuthenticatedLayout,
            Editor
        },
        data() {
            return {
                apiKeyEditor: 'hyfqdus1dwgnfd0dmjpdjyab4fgfk1x1m0yw9ip7h9es74xc',
                form: {
                    title: '',
                    description: '',
                    slug: '',
                    meta_title: '',
                    meta_description: '',
                    meta_keywords: '',
                }
            }
        },
        methods: {
            submitHandler() {
                Inertia.post(route('admin.faq.page.store'), this.form)
            }
        }
    }
</script>

<style scoped>

</style>
