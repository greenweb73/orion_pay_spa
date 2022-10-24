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
                :items="cities" @updateSelect="setSelectedCity"
                :placeholder="'Оберіть місто'"
                :defValue = "{}"
                :class="'city-select'"
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

                            <div class="px-4 py-5 flex-auto text-blue-600">
                                <div class="justify-center w-80 px-4 py-3 rounded-full text-blue-600 cursor-pointer">
                                    <v-select :options="curFrom"
                                              :clearable="false"
                                              label="name"
                                              :value="getSelectedCurrency_1"
                                              :reduce="currency => currency"
                                              v-model="currency_1"
                                              :getOptionLabel="currency_1 => currency_1.name"
                                              @input="selectedCurrency_1"
                                    />
                                </div>

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
                            <div class="px-4 py-5 flex-auto text-blue-600">
                                <div class="justify-center w-80 px-4 py-3 rounded-full text-blue-600 cursor-pointer">

                                    <v-select :options="curTo"
                                              :clearable="false"

                                              :value="getSelectedCurrency_2"
                                              :reduce="currency => currency"
                                              v-model="currency_2"
                                              :getOptionLabel="currency_2 => currency_2.name"
                                              @input="selectedCurrency_2"
                                    />
                                </div>
                            </div>
                            <div class="px-4 py-5 flex-auto amountInput relative">
                                <input :key="itKey" v-model="withdrawAmount" type="number" class="cursor-text without-spin-btn mt-0 block w-full focus:border-black focus:outline-none text-gray-700 border-0 border-b-2 border-gray-200 cursor-pointer focus:ring-0"/>
                                <div class="currencyName block text-black">{{ currency_2.name }}</div>
                            </div>
                            <div class="bottonBlock flex flex-auto justify-center pt-4 pb-6">
                                <button class="btn px-10 w-80 py-4 uppercase text-white hover:bg-indigo-800 bg-indigo-900 tracking-wide rounded-lg">Подати заявку</button>
                            </div>
                        </div>
                    </div>
                </dl>
            </div>
        </div>
    </main>


</template>

<script>
    const EXCHANGE_API = 'https://api.exchangerate.host/latest?base=baseCurrency';
    const RATE_UAHUSD = 40.6
    const FIAT_PROFIT = 0.96;
    const CRYPTA_PROFIT_UA = 0.98;
    const CRYPTA_PROFIT_EU = 0.97;
    const CASH_VARSHAVA = 0.997

    import { Head, Link } from '@inertiajs/inertia-vue3';
    import MainLayout from "@/Layouts/MainLayout.vue";
    import MySelect from "@/Components/MySelect.vue";
    import NumberInput from "@/Components/NumberInput.vue";
    import TextInput from "@/Components/TextInput.vue";
    import vSelect from 'vue-select'

    import 'vue-select/dist/vue-select.css';


    export default {
        name: "Welcome",
        layout: MainLayout,
        components: {
            Head,
            Link,
            MySelect,
            NumberInput,
            TextInput,
            vSelect
        },
        data() {
            return {
                user: {},
                curFrom: [],
                curTo: [],
                city: null,
                currency_1: {},
                currency_2: {},
                invoiceAmount: null,
                withdrawAmount: null,
                rate_usdpln: 1,
                rate_eurusd: 1,
                cities: [
                    {
                        id: 1,
                        name: 'Вінниця',
                        coeff: 0.995
                    },
                    {
                        id: 2,
                        name: 'Дніпро',
                        coeff: 0.995
                    },
                    {
                        id: 3,
                        name: 'Житомир',
                        coeff: 0.995
                    },
                    {
                        id: 4,
                        name: 'Запоріжжя',
                        coeff: 0.995
                    },
                    {
                        id: 5,
                        name: 'Івано-Франківськ',
                        coeff: 0.995
                    },
                    {
                        id: 6,
                        name: 'Київ',
                        coeff: 0.998
                    },
                ],
                currencies: [
                    {
                        id: 1,
                        name: 'UAH (готівка)',
                        cc: 'UAH',
                        type: 'cash',
                        from: true,
                        to: false,
                    },
                    {
                        id: 2,
                        name: 'UAH (безготівкова)',
                        cc: 'UAH',
                        type: 'bank',
                        from: true,
                        to: false
                    },
                    {
                        id: 3,
                        name: 'USD (готівка)',
                        cc: 'USD',
                        type: 'cash',
                        from: true,
                        to: false
                    },
                    {
                        id: 4,
                        name: 'EUR (готівка)',
                        cc: 'EUR',
                        type: 'cash',
                        from: true,
                        to: false
                    },
                    {
                        id: 5,
                        name: 'USDT (TRC-20)',
                        cc: 'USDT',
                        type: 'crypto',
                        from: true,
                        to: true
                    },
                    {
                        id: 6,
                        name: 'PLN (готівка, Варшава)',
                        cc: 'PLN',
                        type: 'cash',
                        from: false,
                        to: true
                    },
                    {
                        id: 7,
                        name: 'PLN (безготівка на IBAN)',
                        cc: 'PLN',
                        type: 'bank',
                        from: false,
                        to: true
                    },
                    {
                        id: 8,
                        name: 'USD (на Revolut, Wise...)',
                        cc: 'USD',
                        type: 'payservice',
                        from: false,
                        to: true
                    },
                    {
                        id: 9,
                        name: 'EUR (на Revolut, Wise...)',
                        cc: 'EUR',
                        type: 'payservice',
                        from: false,
                        to: true
                    },
                    {
                        id: 10,
                        name: 'EUR (безготівка на IBAN)',
                        cc: 'EUR',
                        type: 'bank',
                        from: false,
                        to: true
                    }
                ],
                itKey: 1
            }
        },
        async mounted() {

            this.curFrom = this.currencies.filter(currency => {
                return currency.from
            })
            this.currency_1 = this.curFrom[1]

            this.curTo = this.currencies.filter(currency => {
                return !currency.from
            })
            this.currency_2 = this.curTo[1]

            this.rate_usdpln = await this.getRateCurrency('USD', 'PLN')
            this.rate_eurusd = await this.getRateCurrency('EUR', 'USD')
            //console.log(await this.getRateCurrency('USD', 'PLN'))
            //console.log(this.getSelectedCurrency_1())
        },
        methods: {
            async getRatesData(baseCurrency) {
               // const EXCHANGE_API = 'https://api.exchangerate.host/latest?base=baseCurrency';
                //const EXCHANGE_API = 'http://api.nbp.pl/api/exchangerates/rates/c/usd/today/?format=json';

                const response2 = await fetch(EXCHANGE_API).then(data => {
                    return data;
                })
                return await response2.json();
            },
            async getRateCurrency(base_currency, rate_currency ) {
                const ratesData = await this.getRatesData(base_currency)
                return ratesData.rates[rate_currency]
            },

            setSelectedCity(city) {
                this.city = city
                this.city = city
            },
            selectedCurrency_1(currency) {
                this.currency_1 = currency
                this.CalcExchange()
            },
            selectedCurrency_2(currency) {
                this.currency_2 = currency
            },
            getSelectedCurrency_1() {
                const currency_1 = {...this.currency_1}
                return currency_1
            },
            getSelectedCurrency_2() {
                const currency_2 = {...this.currency_2}
                return currency_2
            },
            SetInvoiceAmount(value) {
                this.invoiceAmount = value
            },
            CalcHandler() {
            //     if (this.currency_1.cc === 'UAH'
            //         && this.currency_1.type === 'bank'
            //         && this.currency_2.cc === 'PLN'
            //         && this.currency_2.type === 'bank') {
            //             this.withdrawAmount = (this.invoiceAmount / RATE_UAHUSD) * FIAT_PROFIT * this.rate_usdpln;
            //     } else if (this.currency_1.cc === 'UAH'
            //         && this.currency_1.type === 'cash'
            //         && this.currency_2.cc === 'PLN'
            //         && this.currency_2.type === 'bank') {
            //         if(this.city) {
            //             this.withdrawAmount = (((this.invoiceAmount * this.city.coeff ) / RATE_UAHUSD ) * FIAT_PROFIT) * this.rate_usdpln
            //             this.itKey++
            //         } else {
            //             alert('Оберіть місто')
            //         }
            //     } else if (this.currency_1.cc === 'USD'
            //         && this.currency_1.type === 'cash'
            //         && this.currency_2.cc === 'PLN'
            //         && this.currency_2.type === 'bank') {
            //             if(this.city) {
            //                 this.withdrawAmount = (((this.invoiceAmount * this.city.coeff ) * FIAT_PROFIT) * this.rate_usdpln)
            //                 this.itKey++
            //             } else {
            //                 alert('Оберіть місто')
            //             }
            //     } else if (this.currency_1.cc === 'EUR'
            //         && this.currency_1.type === 'cash'
            //         && this.currency_2.cc === 'PLN'
            //         && this.currency_2.type === 'bank') {
            //         if(this.city) {
            //             this.withdrawAmount = (((this.invoiceAmount * this.rate_eurusd * this.city.coeff ) * FIAT_PROFIT) * this.rate_usdpln)
            //             this.itKey++
            //         } else {
            //             alert('Оберіть місто')
            //         }
            //     } else if (this.currency_1.cc === 'USDT'
            //         && this.currency_1.type === 'crypto'
            //         && this.currency_2.cc === 'PLN'
            //         && this.currency_2.type === 'bank') {
            //             this.withdrawAmount = ((this.invoiceAmount * CRYPTA_PROFIT_EU) * this.rate_usdpln)
            //             this.itKey++
            //     }
            // }
                if( this.currency_2.cc === 'PLN' && this.currency_2.type === 'bank') {
                    if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'bank') {
                            this.withdrawAmount = ((this.invoiceAmount / RATE_UAHUSD) * FIAT_PROFIT * this.rate_usdpln).toFixed(2);
                    } else if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'cash') {
                        if(this.city) {
                            this.withdrawAmount = ((((this.invoiceAmount * this.city.coeff ) / RATE_UAHUSD ) * FIAT_PROFIT) * this.rate_usdpln).toFixed(2)
                            this.itKey++
                        } else {
                            alert('Оберіть місто')
                        }
                    } else if (this.currency_1.cc === 'USD' && this.currency_1.type === 'cash') {
                            if(this.city) {
                                this.withdrawAmount = (((this.invoiceAmount * this.city.coeff ) * FIAT_PROFIT) * this.rate_usdpln).toFixed(2)
                                this.itKey++
                            } else {
                                alert('Оберіть місто')
                            }
                    } else if (this.currency_1.cc === 'EUR' && this.currency_1.type === 'cash') {
                        if(this.city) {
                            this.withdrawAmount = (((this.invoiceAmount * this.rate_eurusd * this.city.coeff ) * FIAT_PROFIT) * this.rate_usdpln).toFixed(2)
                            this.itKey++
                        } else {
                            alert('Оберіть місто')
                        }
                    } else if (this.currency_1.cc === 'USDT' && this.currency_1.type === 'crypto') {
                            this.withdrawAmount = ((this.invoiceAmount * CRYPTA_PROFIT_EU) * this.rate_usdpln).toFixed(2)
                            this.itKey++
                    }
                } else if (this.currency_2.cc === 'PLN' && this.currency_2.type === 'cash') {
                    console.log('pln cash')
                    if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'cash') {
                        if(this.city) {
                            this.withdrawAmount = (((this.invoiceAmount / RATE_UAHUSD) * FIAT_PROFIT) * this.city.coeff * this.rate_usdpln * CASH_VARSHAVA).toFixed(2)
                            this.itKey++

                        } else {
                            alert('Оберіть місто')
                        }
                    } else if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'bank') {
                        this.withdrawAmount = (((this.invoiceAmount / RATE_UAHUSD ) * FIAT_PROFIT) * this.rate_usdpln * CASH_VARSHAVA).toFixed(2)
                        this.itKey++
                    }
                } else if (this.currency_2.cc === 'USD' && this.currency_2.type === 'payservice') {

                    if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'bank') {
                        this.withdrawAmount = ((this.invoiceAmount / RATE_UAHUSD ) * FIAT_PROFIT ).toFixed(2)
                        this.itKey++
                    } else if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'cash') {

                        if(this.city) {
                            this.withdrawAmount = (((this.invoiceAmount * this.city.coeff ) / RATE_UAHUSD) * FIAT_PROFIT).toFixed(2)
                            this.itKey++
                        } else {
                            alert('Оберіть місто')
                        }

                    } else if (this.currency_1.cc === 'USD' && this.currency_1.type === 'cash') {

                        if(this.city) {
                            this.withdrawAmount = ((this.invoiceAmount * this.city.coeff) * FIAT_PROFIT).toFixed(2)
                            this.itKey++
                        } else {
                            alert('Оберіть місто')
                        }

                    } else if (this.currency_1.cc === 'EUR' && this.currency_1.type === 'cash') {

                        if(this.city) {
                            this.withdrawAmount = ((this.invoiceAmount * this.rate_eurusd) * this.city.coeff * FIAT_PROFIT).toFixed(2)
                            this.itKey++
                        } else {
                            alert('Оберіть місто')
                        }

                    } else if (this.currency_1.cc === 'USDT' && this.currency_1.type === 'crypto') {

                        if(this.city) {
                            this.withdrawAmount = (this.invoiceAmount * CRYPTA_PROFIT_EU).toFixed(2)
                            this.itKey++
                        } else {
                            alert('Оберіть місто')
                        }

                    }

                } else if (this.currency_2.cc === 'EUR' && this.currency_2.type === 'payservice') {

                    if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'bank') {

                        this.withdrawAmount = ((this.invoiceAmount / RATE_UAHUSD ) * this.rate_eurusd * FIAT_PROFIT ).toFixed(2)
                        this.itKey++

                    } else if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'cash') {

                        if(this.city) { // ?? Why
                            this.withdrawAmount = (((this.invoiceAmount * this.city.coeff ) / RATE_UAHUSD) * FIAT_PROFIT).toFixed(2)
                            this.itKey++
                        } else {
                            alert('Оберіть місто')
                        }

                    } else if (this.currency_1.cc === 'USD' && this.currency_1.type === 'cash') {
                        if(this.city) {
                            this.withdrawAmount = (((this.invoiceAmount * this.city.coeff) * this.rate_eurusd) * FIAT_PROFIT).toFixed(2)
                            this.itKey++
                        } else {
                            alert('Оберіть місто')
                        }
                    } else if (this.currency_1.cc === 'EUR' && this.currency_1.type === 'cash') {

                        if(this.city) {
                            this.withdrawAmount = ((this.invoiceAmount * this.city.coeff) * FIAT_PROFIT).toFixed(2)
                            this.itKey++
                        } else {
                            alert('Оберіть місто')
                        }

                    } else if (this.currency_1.cc === 'USDT' && this.currency_1.type === 'crypto') {

                        if(this.city) {
                            this.withdrawAmount = ((this.invoiceAmount * CRYPTA_PROFIT_EU) * this.rate_eurusd).toFixed(2)
                            this.itKey++
                        } else {
                            alert('Оберіть місто')
                        }

                    }

                } else if (this.currency_2.cc === 'USDT' && this.currency_2.type === 'crypto') {

                    if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'cash') {

                        this.withdrawAmount = ((this.invoiceAmount / RATE_UAHUSD) * CRYPTA_PROFIT_UA).toFixed(2)
                        this.itKey++

                    } else if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'bank') {

                        this.withdrawAmount = ((this.invoiceAmount / RATE_UAHUSD) * CRYPTA_PROFIT_UA).toFixed(2)
                        this.itKey++

                    } else if (this.currency_1.cc === 'USD' && this.currency_1.type === 'cash') {

                        this.withdrawAmount = (this.invoiceAmount * CRYPTA_PROFIT_UA).toFixed(2)
                        this.itKey++

                    } else if (this.currency_1.cc === 'EUR' && this.currency_1.type === 'cash') {

                        this.withdrawAmount = ((this.invoiceAmount * this.rate_eurusd) * CRYPTA_PROFIT_UA).toFixed(2)
                        this.itKey++

                    }

                } else if (this.currency_2.cc === 'EUR' && this.currency_2.type === 'bank') {

                    if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'bank') {

                        this.withdrawAmount = ((this.invoiceAmount / RATE_UAHUSD ) * this.rate_eurusd * FIAT_PROFIT ).toFixed(2)
                        this.itKey++

                    } else if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'cash') {

                        if(this.city) { // ?? Why
                            this.withdrawAmount = (((this.invoiceAmount * this.city.coeff ) / RATE_UAHUSD) * FIAT_PROFIT).toFixed(2)
                            this.itKey++
                        } else {
                            alert('Оберіть місто')
                        }

                    } else if (this.currency_1.cc === 'USD' && this.currency_1.type === 'cash') {
                        if(this.city) {
                            this.withdrawAmount = (((this.invoiceAmount * this.city.coeff) * this.rate_eurusd) * FIAT_PROFIT).toFixed(2)
                            this.itKey++
                        } else {
                            alert('Оберіть місто')
                        }
                    } else if (this.currency_1.cc === 'EUR' && this.currency_1.type === 'cash') {

                        if(this.city) {
                            this.withdrawAmount = ((this.invoiceAmount * this.city.coeff) * FIAT_PROFIT).toFixed(2)
                            this.itKey++
                        } else {
                            alert('Оберіть місто')
                        }

                    } else if (this.currency_1.cc === 'USDT' && this.currency_1.type === 'crypto') {

                        if(this.city) {
                            this.withdrawAmount = ((this.invoiceAmount * CRYPTA_PROFIT_EU) * this.rate_eurusd).toFixed(2)
                            this.itKey++
                        } else {
                            alert('Оберіть місто')
                        }

                    }
                }
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
        },
        watch: {
            invoiceAmount() {
                this.CalcHandler()
            },
            currency_1() {
                this.CalcHandler()
            },
            currency_2() {
                this.CalcHandler()
            }

        }

    }
</script>

<style scoped>
    .vs__open-indicator {
        fill: rgb(49 46 129) !important;
    }
    >>> {
        --vs-border-radius: 25px;
        --vs-line-height: 2;
        /* Actions: house the component controls */
        --vs-actions-padding: 8px 15px 0;
        /* Component Controls: Clear, Open Indicator */
        --vs-controls-color: var(--vs-colors--light);
        --vs-controls-size: 0.8;


    }

</style>
