<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/inertia-vue3';
import {Inertia} from "@inertiajs/inertia";

defineProps({
    errors: Object,
    roles: Object,
    user_can: Object,
});

function destroy(id) {
    console.log(id)
    if (confirm("Are you sure you want to Delete")) {
        Inertia.delete(route('admin.role.destroy', id))
    }

}
</script>

<template>
    <Head title="Групи користувачів" />

    <AuthenticatedLayout>
        <template #header>
            <span v-if="$page.props.flash.success" class="bg-green-100 text-green-800 text-base font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                {{ $page.props.flash.success }}
            </span>
            <span v-if="$page.props.errors" class="bg-green-100 text-green-800 text-base font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                <template v-for="error in $page.props.errors">
                    {{ error }}
                </template>

            </span>

        </template>


        <div class="flex flex-column max-w-max min-w-full">
            <div class="py-12 min-w-[70%] mx-auto sm:px-6 lg:px-8">


                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Link :href="route('admin.role.create')"
                          class="bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150">
                        Створити нову групу (роль)
                    </Link>
                    <div class="mt-8 bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <table class="items-center w-full bg-transparent border-collapse">
                            <thead class="text-xs text-left text-gray-700 uppercase bg-indigo-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="py-3 px-6">ID</th>
                                <th scope="col" class="py-3 px-6">Назва</th>
                                <th class="py-3 px-6"></th>
                                <th></th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr v-for="(role, index) in roles.data" :key="role.id"
                                :class="(index % 2) ? ['bg-white', 'border-b', 'dark:bg-gray-900', 'dark:border-gray-700']: ['bg-gray-50', 'border-b', 'dark:bg-gray-800', 'dark:border-gray-700']"
                                class="hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4"
                                >
                                    {{ role.id }}
                                </td>

                                <td
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4"
                                >
                                    {{role.name}}
                                </td>


                                <td
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4"
                                >

                                </td>
                                <td
                                    class=" flex flex-wrap justify-end gap-4 border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
                                >
                                    <template v-if="user_can['edit']">
                                        <Link :href="route('admin.role.edit', role.id)"
                                              class=" flex h-7 w-7 items-center justify-center rounded-md shadow ring-1 ring-slate-900/10 hover:text-indigo-600 hover:bg-indigo-50 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                                            </svg>

                                        </Link>
                                    </template>
                                    <template v-if="user_can['delete']">
                                        <Link @click="destroy(role.id)"
                                            class=" flex h-7 w-7 items-center justify-center rounded-md shadow ring-1 ring-slate-900/10 hover:text-red-600 hover:bg-red-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>


                                        </Link>
                                    </template>


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

