<template>

    <Head title="Додати валюту" />

    <AuthenticatedLayout>
        <template #header> Редагування Питання - Відповіді...</template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">

                <div class="p-6 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    <form @submit.prevent="update">
                        <div class="flex flex-wrap">
                            <div class="w-full lg:w-12/12 px-4">
                                <div class="relative w-full mb-3">
                                    <label
                                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Питання
                                    </label>
                                    <input
                                        type="text"
                                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                        v-model="form.question"
                                    />
                                </div>
                                <div class="relative w-full mb-3">
                                    <label
                                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                        htmlFor="grid-password"
                                    >
                                        Відповідь
                                    </label>
                                    <editor
                                        :api-key="apiKey"
                                        v-model="form.answer"
                                        :init="{
                                            plugins: 'advlist autolink code lists link image charmap print preview hr ancor pagebreak media table',
                                            toolbar_mode: 'floating',
                                            relative_urls: false,
                                            height: 300
                                        }"
                                    />

                                </div>
                            </div>
                        </div>
                        <div class="px-4 pt-8 ml-auto">
                            <button type="submit"
                                    class=" bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150">
                                Оновити
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
    import Editor from '@tinymce/tinymce-vue'

    export default {
        name: "Edit",
        components: {
            Head,
            Link,
            AuthenticatedLayout,
            Editor
        },
        props: [
            'faq'
        ],
        data() {
            return {
                apiKeyEditor: 'hyfqdus1dwgnfd0dmjpdjyab4fgfk1x1m0yw9ip7h9es74xc',
                form: {
                    question: this.faq.question,
                    answer: this.faq.answer,
                }
            }
        },

        methods: {

            update() {
                Inertia.patch(route('admin.faq.update', this.faq.id), this.form)
            }
        },

    }
</script>

<style scoped>

</style>
