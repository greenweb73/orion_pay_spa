<template>

        <Head title="Сторінки" />

        <AuthenticatedLayout>
            <template #header> </template>

            <div class="flex flex-column max-w-max min-w-full">
                <div class="py-12 min-w-[70%] mx-auto sm:px-6 lg:px-8">
                    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <Link :href="route('admin.page.create')"
                              class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150">
                            + Нова Сторінка
                        </Link>
                        <div class="mt-8 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <table class="items-center w-full bg-transparent border-collapse">
                                <thead class="text-xs text-left text-gray-700 uppercase bg-indigo-100 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="py-3 px-6">ID</th>
                                        <th class="py-3 px-6">Назва сторінки</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(page, index) in pages" :key="page.id"
                                        :class="(index % 2) ? ['bg-white', 'border-b', 'dark:bg-gray-900', 'dark:border-gray-700']: ['bg-gray-50', 'border-b', 'dark:bg-gray-800', 'dark:border-gray-700']"
                                        class="hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td
                                            class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-2"
                                        >
                                            {{page.id}}
                                        </td>
                                        <td
                                            class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-2"
                                        >
                                            {{page.data_values.title}}
                                        </td>

                                        <td
                                            class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 text-right"
                                        >
                                            <table-dropdown :edit_route="route('admin.page.edit', page.id)" :destroy_id="page.id" @selectDestroyId="destroy"/>
                                        </td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>



</template>


<script>
    import  TableDropdown from '@/Components/UI/TableDropdown.vue'
    import { Inertia } from '@inertiajs/inertia'
    import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

    export default {
        name: "Index",
        components: {
            Head,
            Link,
            AuthenticatedLayout,
            TableDropdown,
        },
        props: [
            'pages'
        ],
        methods: {
            destroy(id) {

                if (confirm("Are you sure you want to Delete")) {
                    Inertia.delete(route('admin.page.destroy', id))
                }

            }
        }

    }
</script>

<style scoped>

</style>
