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
                <MySelect
                    :contentClasses="['px-4', 'py-3', 'rounded-full', 'text-blue-600', 'cursor-pointer']"
                    :items="cities" @updateSelect="selectedCity"
                    :placeholder="'Оберіть місто'"
                    :defValue = "{}"
                />



            </header>

            <div class="flex">
                <!-- aside -->
                <aside class="flex w-72 flex-col space-y-2 bg-transparen p-2" style="height: 90.5vh"
                       x-show="asideOpen">
                    <Link :href="'/'" class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">Послуги</Link>

                    <a href="#" class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                        <span class="text-2xl"><i class="bx bx-cart"></i></span>
                        <span>Пр нас</span>
                    </a>

                    <Link :href="route('faq.index')" class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">FAQ (Часті запитання)</Link>




                </aside>

                <!-- main content page -->
                <div class="w-full p-4">

                    <dl class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">

                        <div class="lg:pt-2 pt-3 w-full  px-2 text-left shadow-md bg-white shadow-lg rounded-lg">
                            <div class="relative flex flex-col min-w-0 break-words  w-full mb-8">
                                <div class="px-4 py-5 flex-auto">
                                    <h2 class="text-blue-700/75 text-2xl font-bold">Віддаєте</h2>
                                </div>

                                <div class="px-4 py-5 flex-auto ">

                                    <MySelect v-if="curFrom"
                                        :contentClasses="['justify-center','w-80','px-4', 'py-3', 'rounded-full', 'text-blue-600', 'cursor-pointer']"
                                        :items="curFrom"
                                        :placeholder="currency_1.name"
                                        :defValue = "getSelectedCurrency_1"
                                        @updateSelect="selectedCurrency_1"
                                    />

                                </div>
                                <div class="px-4 py-5 flex-auto amountInput relative">
                                    <input v-model.number="invoiceAmount" type="text" class="cursor-text without-spin-btn mt-0 block w-full focus:border-black focus:outline-none text-gray-700 border-0 border-b-2 border-gray-200 cursor-pointer focus:ring-0"/>

                                    <div class="currencyName block text-black">{{ currency_1.name }}</div>
                                </div>



                            </div>

                        </div>
                        <div class="lg:pt-2 pt-3 w-full px-2 text-left shadow-md bg-white shadow-lg rounded-lg">
                            <div class="relative flex flex-col min-w-0 break-words ">
                                <div class="px-4 py-5 flex-auto">
                                    <h2 class="text-blue-700/75 text-2xl font-bold">Отримуєте</h2>
                                </div>
                                <div class="px-4 py-5 flex-auto">
                                    <MySelect v-if="curTo"
                                        :contentClasses="['justify-center','w-80','px-4', 'py-3', 'rounded-full', 'text-blue-600', 'cursor-pointer']"
                                        :items="curTo"
                                        :placeholder="currency_2.name"
                                        :defValue = "currency_2"
                                        @updateSelect="selectedCurrency_2"
                                    />
                                </div>
                                <div class="px-4 py-5 flex-auto amountInput relative">
                                    <input v-model="withdrawAmount" type="number" class="cursor-text without-spin-btn mt-0 block w-full focus:border-black focus:outline-none text-gray-700 border-0 border-b-2 border-gray-200 cursor-pointer focus:ring-0"/>
                                    <div class="currencyName block text-black">{{ currency_2.name }}</div>
                                </div>
                            </div>
                        </div>
                    </dl>
                </div>
            </div>
        </main>


</template>

<script>
    import { Head, Link } from '@inertiajs/inertia-vue3';
    import MainLayout from "@/Layouts/MainLayout.vue";
    import MySelect from "@/Components/MySelect.vue";
    import NumberInput from "@/Components/NumberInput.vue";
    import TextInput from "@/Components/TextInput.vue";


    export default {
        name: "Welcome",
        layout: MainLayout,
        components: {
            Head,
            Link,
            MySelect,
            NumberInput,
            TextInput
        },
        data() {
            return {
                curFrom: [],
                curTo: [],
                city: null,
                currency_1: {},
                currency_2: {},
                invoiceAmount: null,
                withdrawAmount: null,
                cities: [
                    {
                        id: 1,
                        name: 'Вінниця'
                    },
                    {
                        id: 2,
                        name: 'Дніпро'
                    },
                    {
                        id: 3,
                        name: 'Житомир'
                    },
                    {
                        id: 4,
                        name: 'Запоріжжя'

                    },
                    {
                        id: 5,
                        name: 'Івано-Франківськ'
                    },
                    {
                        id: 6,
                        name: 'Київ'
                    },
                ],
                currencies: [
                    {
                        id: 1,
                        name: 'UAH (готівка)',
                        from: true,
                        to: false,
                    },
                    {
                        id: 2,
                        name: 'UAH (безготівкова)',
                        from: true,
                        to: false
                    },
                    {
                        id: 3,
                        name: 'USD (готівка)',
                        from: true,
                        to: false
                    },
                    {
                        id: 4,
                        name: 'EUR (готівка)',
                        from: true,
                        to: false
                    },
                    {
                        id: 5,
                        name: 'USDT (TRC-20)',
                        from: true,
                        to: true
                    },
                    {
                        id: 6,
                        name: 'PLZ (готівка, Варшава)',
                        from: false,
                        to: true
                    },
                    {
                        id: 7,
                        name: 'PLZ (безготівка на IBAN)',
                        from: false,
                        to: true
                    },
                    {
                        id: 8,
                        name: 'USD (на Revolut, Wise...)',
                        from: false,
                        to: true
                    },
                    {
                        id: 9,
                        name: 'EUR (на Revolut, Wise...)',
                        from: false,
                        to: true
                    },
                    {
                        id: 10,
                        name: 'EUR (безготівка на IBAN)',
                        from: false,
                        to: true
                    }
                ]
            }
        },
        mounted() {

            this.curFrom = this.currencies.filter(currency => {
                return currency.from
            })
            this.currency_1 = this.curFrom[1]

            this.curTo = this.currencies.filter(currency => {
                return !currency.from
            })
            this.currency_2 = this.curTo[1]

        },
        methods: {

            selectedCity(city) {
                this.city = city

            },
            selectedCurrency_1(currency) {
                this.currency_1 = currency

            },
            selectedCurrency_2(currency) {
                this.currency_2 = currency
            },
            getSelectedCurrency_1() {
                const currency_1 = {...this.currency_1}
                return currency_1
            } ,
            SetInvoiceAmount(value) {
                this.invoiceAmount = value
            }
        },
        computed: {

            currenciesFrom() {
                return this.currencies.filter(currency => {
                    return currency.from
                })
            },
            currenciesTo() {
                return this.currencies.filter(currency => {
                    return !currency.from
                })
            }
        }

    }
</script>
