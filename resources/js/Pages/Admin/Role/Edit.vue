<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import TextInput from '@/Components/UI/TextInput.vue';
import PrimaryButton from '@/Components/UI/PrimaryButton.vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';



const props = defineProps({
    role: Object,
    permissions: Array,
    rolePermissions: {}
});

const form = useForm({
    role: props.role,
    permissions: Object.values(props.rolePermissions)
});

const submit = () => {
    form.patch(route('admin.role.update', form.role.id), { });
};


</script>

<template>
    <Head title="Редагування Групи користувачів" />

    <AuthenticatedLayout>

        <template #header>

            <span v-if="$page.props.flash.success " class="bg-green-100 text-green-800 text-base font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                {{ $page.props.flash.success }}
            </span>
            <span v-if="Object.keys($page.props.errors).length" class="bg-red-100 text-red-800 text-base font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">
                <template v-for="error in $page.props.errors">
                    {{ error }}
                </template>

            </span>

        </template>
        <div class="flex flex-column max-w-max min-w-full">

            <div class="py-12 min-w-[70%] mx-auto sm:px-6 lg:px-8">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <form @submit.prevent="submit">
                        <div class="p-6 relative flex flex-col min-w-0 break-words w-full mb-6 bg-blueGray-100 border-0">
                            <TextInput id="name" v-model="form.role.name"></TextInput>
                        </div>
                        <div class="p-6 relative gap-2 flex flex-col min-w-0 break-words w-full mb-6 bg-blueGray-100 border-0">
                            <div v-for="permission in permissions" :key="permission.id">
                                <input
                                    type="checkbox"
                                    :value="permission.id"
                                    v-model="form.permissions"
                                    class="mr-2"
                                />
                                {{ permission.name}}
                            </div>

                        </div>
                        <div class="flex items-center justify-end mt-4">

                            <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                Зберегти
                            </PrimaryButton>
                        </div>
                    </form>

                </div>
            </div>


        </div>


    </AuthenticatedLayout>
</template>

