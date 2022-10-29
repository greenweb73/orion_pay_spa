<template>
    <Head title="Welcome" />

    <!-- page -->
    <main class="max-w-7xl mx-auto min-h-screen   text-white" x-data="layout">
        <!-- header page -->
        <header class="flex w-full items-center justify-between  p-4 pt-8 pb-14">
            <!-- logo -->
            <div class="logo flex items-center space-x-2 cursor-pointer">
                <img :src="'/images/logo.svg'" /><Link class="ml-5 text-3xl sm:text-4xl" href="/">OrionPay</Link>
            </div>
            <MySelect
                :contentClasses="['px-3', 'py-3', 'rounded-md', 'text-blue-600', 'cursor-pointer']"
                :items="cities" @updateSelect="setSelectedCity"
                :placeholder="'Оберіть місто'"
                :defValue = "{}"
                :class="'city-select'"
            />

            <!-- mobile menu button -->
            <button @click="isOpenMobileMenu = !isOpenMobileMenu" id="hamburger-botton" class="mobile-menu-button p-4 focus:outline-none lg:hidden cursor-pointer">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-2 hover:stroke-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>

            </button>



        </header>

        <div class="flex">
            <!-- aside -->
            <aside :class="[isOpenMobileMenu ? ['h-screen','z-20','translate-x-0', 'mob-menu-open','bg-white', 'text-blue-700'] : ['h-96','-translate-x-full']]" class="absolute inset-y-0 left-0 transform  lg:relative lg:translate-x-0 transition duration-200 ease-in-out md:flex w-72 flex-col space-y-2 bg-transparen p-2" >
                <div class="relative py-6 flex flex-col justify-center">
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
                    <Link :href="'/'" class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">Послуги</Link>

                    <Link :href="'/'" class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                          <span>Пр нас</span>
                    </Link>

                    <Link :href="route('faq.index')" class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">FAQ (Часті запитання)</Link>

                </div>




            </aside>

            <!-- main content page -->
            <div class="w-full p-4 z-0">

                <dl class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">

                    <div class="lg:pt-2 pt-3 w-full  px-2 text-left shadow-md bg-white shadow-lg rounded-lg">
                        <div class="relative flex flex-col min-w-0 break-words  w-full mb-8">
                            <div class="px-4 py-5 flex-auto">
                                <h2 class="text-blue-700/75 text-2xl font-bold">Віддаєте</h2>
                            </div>

                            <div class="px-4 py-5 flex-auto text-blue-600">
                                <div class="justify-center w-90 px-3 py-3 rounded-md text-blue-600 cursor-pointer">
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
                                <input v-model.number="v$.invoiceAmount.$model" type="text" class="cursor-text without-spin-btn mt-0 block w-full focus:border-black focus:outline-none text-gray-700 border-0 border-b-2 border-gray-200 cursor-pointer focus:ring-0"/>
                                <div class="input-errors" :key="itKey">
                                    <div v-if="v$.invoiceAmount.$invalid" style="color: red" class="pt-2 text-sm warning-msg">
                                        {{ v$.invoiceAmount.minValue.$message }} {{ getSelectedCurrency_1.name }}
                                    </div>
                                </div>
                                <div class="currencyName block text-black">{{ currency_1.name }}</div>
                            </div>

                            <div>
                                <div class="px-4 mb-1 text-blue-700/75 text-lg">Курси валют</div>
                                <ul class="text-gray-700/75 text-sm px-4">
                                    <li>Курс UAH/USD: {{RATE_UAHUSD}}</li>
                                    <li>Курс USD/PLN: {{rate_usdpln}}</li>
                                    <li>Курс EUR/USD: {{rate_eurusd}}</li>
                                </ul>
                            </div>



                        </div>

                    </div>
                    <div class="lg:pt-2 pt-3 w-full px-2 text-left shadow-md bg-white shadow-lg rounded-lg">
                        <div class="relative flex flex-col min-w-0 break-words ">
                            <div class="px-4 py-5 flex-auto">
                                <h2 class="text-blue-700/75 text-2xl font-bold">Отримуєте</h2>
                            </div>
                            <div class="px-4 py-5 flex-auto text-blue-600">
                                <div class="justify-center w-90 px-4 py-3 rounded-md text-blue-600 cursor-pointer">

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
                                <button @click.prevent = "isModalOrder = !isModalOrder" class="btn px-10 w-80 py-4 uppercase text-white hover:bg-indigo-800 bg-indigo-900 tracking-wide rounded-lg">Подати заявку</button>
                            </div>
                        </div>
                    </div>
                </dl>
            </div>
        </div>
        <my-modal :isModalOpen="isModalOrder" @modalClose="isModalOrder = isModalClose">
            <h2 class="max-w-[600px] pb-6 pt-6 text-center">Залиште ваш номер телефону або телеграм і ми зв'яжемось з вами для надання детальної інформації
            </h2>
            <form class="w-full max-w-sm mx-auto">
                <div class="relative z-0 mb-6 w-full group">
                    <input v-model="v$.formOrder.phone.$model" type="text" name="floating_email" id="floating_phone"
                           :class="[v$.formOrder.phone.$error ? 'dark:focus:border-red' : 'dark:focus:border-blue-500'   ]"
                           class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 peer" placeholder=" " required />
                    <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Телефон +380 XX XXX XX XX</label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input v-model="formOrder.telegram_nik" type="text"  id="floating_telegram" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_telegram" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Телеграм ( @MyTelegramNik )</label>
                </div>


                <div class="md:flex justify-center md:items-center pb-6 mt-8">

                    <div class="md:w-1/2 text-center">
                        <button class="shadow bg-indigo-700 hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-10 rounded" type="button">
                            Відправити
                        </button>
                    </div>
                </div>
            </form>
        </my-modal>
    </main>



</template>

<script>
    const EXCHANGE_API = 'https://api.exchangerate.host/latest?base=';
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
    import MyModal from "@/Components/MyModal.vue";
    import { useVuelidate } from '@vuelidate/core'

    import { minValue , helpers} from '@vuelidate/validators'

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
            vSelect,
            MyModal
        },
        data() {
            return {
                v$: useVuelidate(),
                user: {},
                curFrom: [],
                curTo: [],
                city: null,
                currency_1: {},
                currency_2: {},
                invoiceAmount: 0.00,
                withdrawAmount: 0.00,
                invoiceAmountMessage: '',
                RATE_UAHUSD: 40.6,
                rate_usdpln: null,
                rate_eurusd: null,
                isOpenMobileMenu: false,
                isModalOrder: false,
                formOrder: {
                    phone: null,
                    telegram_nik: null,
                },
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
                        min_value: 40000
                    },
                    {
                        id: 2,
                        name: 'UAH (безготівкова)',
                        cc: 'UAH',
                        type: 'bank',
                        from: true,
                        to: false,
                        min_value: 40000
                    },
                    {
                        id: 3,
                        name: 'USD (готівка)',
                        cc: 'USD',
                        type: 'cash',
                        from: true,
                        to: false,
                        min_value: 1000
                    },
                    {
                        id: 4,
                        name: 'EUR (готівка)',
                        cc: 'EUR',
                        type: 'cash',
                        from: true,
                        to: false,
                        min_value: 1000
                    },
                    {
                        id: 5,
                        name: 'USDT (TRC-20)',
                        cc: 'USDT',
                        type: 'crypto',
                        from: true,
                        to: true,
                        min_value: 0
                    },
                    {
                        id: 6,
                        name: 'PLN (готівка, Варшава)',
                        cc: 'PLN',
                        type: 'cash',
                        from: false,
                        to: true,
                        min_value: 0
                    },
                    {
                        id: 7,
                        name: 'PLN (безготівка на IBAN)',
                        cc: 'PLN',
                        type: 'bank',
                        from: false,
                        to: true,
                        min_value: 0
                    },
                    {
                        id: 8,
                        name: 'USD (на Revolut, Wise...)',
                        cc: 'USD',
                        type: 'payservice',
                        from: false,
                        to: true,
                        min_value: 0
                    },
                    {
                        id: 9,
                        name: 'EUR (на Revolut, Wise...)',
                        cc: 'EUR',
                        type: 'payservice',
                        from: false,
                        to: true,
                        min_value: 0
                    },
                    {
                        id: 10,
                        name: 'EUR (безготівка на IBAN)',
                        cc: 'EUR',
                        type: 'bank',
                        from: false,
                        to: true,
                        min_value: 0
                    }
                ],
                itKey: 1
            }
        },
        validations () {
            return {
                invoiceAmount: {
                    minValue: helpers.withMessage(`Мінімальна сума переказу ${this.getSelectedCurrency_1.min_value}`, minValue(this.getSelectedCurrency_1.min_value))
                },
                formOrder: {
                    phone: {
                        phoneValid: this.validPhone
                    }
                }

            }
        },
        async beforeMount() {
            this.rate_usdpln = await this.getRateCurrency('USD', 'PLN')

            this.rate_eurusd = await this.getRateCurrency('EUR', 'USD')
        },
        async mounted() {

            this.curFrom = this.currencies.filter(currency => {
                return currency.from
            })
            this.currency_1 = this.curFrom[1]

            this.curTo = this.currencies.filter(currency => {
                return currency.to
            })
            this.currency_2 = this.curTo[1]



        },
        methods: {

            validPhone(value) {
                const regexp = /^(\+3|)[0-9]{10,11}$/;
                return regexp.test(value)
            },

            async getRatesData(baseCurrency) {
               // const EXCHANGE_API = 'https://api.exchangerate.host/latest?base=baseCurrency';
                //const EXCHANGE_API = 'http://api.nbp.pl/api/exchangerates/rates/c/usd/today/?format=json';
                try {
                    const response2 = await fetch(EXCHANGE_API + baseCurrency).then(data => {

                        return data;
                    })

                    return await response2.json();
                } catch (e) {
                    console.log('Ошибка в EXCHANGE_API')
                }
            },
            async getRateCurrency(base_currency, rate_currency ) {

                const ratesData = await this.getRatesData(base_currency)

                return ratesData.rates[rate_currency]
            },

            setSelectedCity(city) {
               this.city = city
            },
            selectedCurrency_1(currency) {
                this.currency_1 = currency
                this.CalcExchange()
            },
            selectedCurrency_2(currency) {
                this.currency_2 = currency
                this.CalcExchange()
            },
            SetInvoiceAmount(value) {
                this.invoiceAmount = value
            },
            async CalcHandler() {
                if (!this.rate_usdpln) {
                    this.rate_usdpln = await this.getRateCurrency('USD', 'PLN')
                }

                    if( this.currency_2.cc === 'PLN' && this.currency_2.type === 'bank') {
                        if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'bank') {

                                this.withdrawAmount = ((this.invoiceAmount / this.RATE_UAHUSD) * FIAT_PROFIT * this.rate_usdpln)

                        } else if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'cash') {
                            if(this.city) {
                                this.withdrawAmount = ((((this.invoiceAmount * this.city.coeff ) / this.RATE_UAHUSD ) * FIAT_PROFIT) * this.rate_usdpln).toFixed(2)
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

                        if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'cash') {
                            if(this.city) {
                                this.withdrawAmount = (((this.invoiceAmount / this.RATE_UAHUSD) * FIAT_PROFIT) * this.city.coeff * this.rate_usdpln * CASH_VARSHAVA).toFixed(2)
                                this.itKey++

                            } else {
                                alert('Оберіть місто')
                            }
                        } else if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'bank') {
                            this.withdrawAmount = (((this.invoiceAmount / this.RATE_UAHUSD ) * FIAT_PROFIT) * this.rate_usdpln * CASH_VARSHAVA).toFixed(2)
                            this.itKey++
                        }
                    } else if (this.currency_2.cc === 'USD' && this.currency_2.type === 'payservice') {

                        if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'bank') {
                            this.withdrawAmount = ((this.invoiceAmount / this.RATE_UAHUSD ) * FIAT_PROFIT ).toFixed(2)
                            this.itKey++
                        } else if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'cash') {

                            if(this.city) {
                                this.withdrawAmount = (((this.invoiceAmount * this.city.coeff ) / this.RATE_UAHUSD) * FIAT_PROFIT).toFixed(2)
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

                            this.withdrawAmount = ((this.invoiceAmount / this.RATE_UAHUSD ) * this.rate_eurusd * FIAT_PROFIT ).toFixed(2)
                            this.itKey++

                        } else if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'cash') {

                            if(this.city) {
                                this.withdrawAmount = (((this.invoiceAmount * this.city.coeff ) / this.RATE_UAHUSD) * FIAT_PROFIT).toFixed(2)
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
                                console.log(this.getSelectedCurrency_1())
                            }

                        }

                    } else if (this.currency_2.cc === 'USDT' && this.currency_2.type === 'crypto') {

                        if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'cash') {

                            this.withdrawAmount = ((this.invoiceAmount / this.RATE_UAHUSD) * CRYPTA_PROFIT_UA).toFixed(2)
                            this.itKey++

                        } else if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'bank') {

                            this.withdrawAmount = ((this.invoiceAmount / this.RATE_UAHUSD) * CRYPTA_PROFIT_UA).toFixed(2)
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

                            this.withdrawAmount = ((this.invoiceAmount / this.RATE_UAHUSD ) * this.rate_eurusd * FIAT_PROFIT ).toFixed(2)
                            this.itKey++

                        } else if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'cash') {

                            if(this.city) {
                                this.withdrawAmount = (((this.invoiceAmount * this.city.coeff ) / this.RATE_UAHUSD) * FIAT_PROFIT).toFixed(2)
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
            },
            getSelectedCurrency_1() {
                console.log(this.currency_1)
                return {... new Proxy(this.currency_1, {})}
            },
            getSelectedCurrency_2() {
                return {... new Proxy(this.currency_2, {})}
            },
            invoiceAmountValidate()  {
                return {... new Proxy(this.v$.invoiceAmount, {})}
            }
        },
        watch: {
            invoiceAmount() {
                this.CalcHandler()
            },
            currency_1() {
                //console.log(JSON.parse(JSON.stringify(this.v$.invoiceAmount)).minValue.$message)

                this.CalcHandler()
            },
            currency_2() {
                this.CalcHandler()
            },
            city() {
                this.CalcHandler()
            },
            isModalOrder() {
                if (this.isModalOrder) {
                    document.body.style.overflow = 'hidden'
                } else {
                    setTimeout(()=>{
                        document.body.style.overflow = ''
                    }, 500)

                }
            }

        }

    }
</script>

<style  scoped>
    .vs__open-indicator {
        fill: rgb(49 46 129) !important;
    }
    >>> {
        --vs-border-radius: 0.375rem;
        --vs-line-height: 2;
        /* Actions: house the component controls */
        --vs-actions-padding: 8px 15px 0;
        /* Component Controls: Clear, Open Indicator */
        --vs-controls-color: var(--vs-colors--light);
        --vs-controls-size: 0.8;


    }

</style>
