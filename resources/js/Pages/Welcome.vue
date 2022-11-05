<template>
    <Head title="Welcome" />

    <!-- page -->
    <main class="max-w-7xl mx-auto min-h-screen   text-white" x-data="layout">
        <!-- header page -->
        <header class="flex w-full items-center justify-between  p-4 pt-8 pb-4 sm:pb-14">
            <!-- logo -->
            <div class="logo flex items-center space-x-2 cursor-pointer">
                <img :src="'/images/logo.svg'" /><Link class="hidden sm:block ml-5 text-3xl sm:text-4xl" href="/">OrionPay</Link>
            </div>
            <div ref="selectDiv" @click="isOpenSelectCity = !isOpenSelectCity" class="selectDiv relative">
                <MySelect
                    :contentClasses="['px-3', 'py-2', 'rounded-md', 'text-blue-100', 'cursor-pointer', 'appearance-none', 'round', 'w-[180px]']"
                    :items="cities" @updateSelect="setSelectedCity"
                    :placeholder="'Оберіть місто'"
                    :defValue = "{}"
                    :class="'city-select relative'"
                />
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
                    <Link :href="'/'" class="flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600">Послуги</Link>

                    <Link :href="'/'" class="flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600">
                          <span>Пр нас</span>
                    </Link>

                    <Link :href="route('faq.index')" class="flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600">FAQ (Часті запитання)</Link>

                </div>




            </aside>

            <!-- main content page -->
            <div class="w-full p-4 z-0">

                <dl class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">

                    <div class="bg-orion lg:pt-2 pt-3 w-full  px-2 text-left shadow-md bg-white shadow-lg rounded-lg">
                        <div class="relative flex flex-col min-w-0 break-words  w-full mb-8">
                            <div class="px-4 py-1 sm:py-5 flex-auto">
                                <h2 class="text-indigo-100 tracking-wide text-3xl font-bold">Віддаєте</h2>
                            </div>

                            <div class="px-1 sm:px-4 py-2 sm:py-5 text-blue-600">
                                <div class="currency-select justify-center w-90 px-0 md:px-3 py-3 rounded-md text-blue-600 cursor-pointer">
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
                            <div class="py-3 sm:py-5 flex-auto amountInput relative">
                                <input v-model="v$.formOrder.invoiceAmount.$model" type="text"
                                       class="bg-transparent cursor-text without-spin-btn mt-0 block w-full focus:border-indigo-300 focus:outline-none text-gray-200 border-0 border-b-2 border-gray-200 cursor-pointer focus:ring-0"/>
                                <div class="input-errors" :key="itKey">
                                    <div v-if="v$.formOrder.invoiceAmount.$error" class="pt-2 text-sm warning-msg tracking-wide">
                                        {{ v$.formOrder.invoiceAmount.minValue.$message }} {{ getSelectedCurrency_1.name }}
                                    </div>
                                </div>
                                <div class="currencyName block text-gray-200">{{ currency_1.name }}</div>
                            </div>

                            <div class="px-8 hidden sm:block relative">
                                <div class="mb-1 text-blue-200/75 text-lg">Курси валют</div>
                                <ul class="text-gray-100/75 text-xs">
                                    <li class="mb-1">Курс UAH/USD: {{RATE_UAHUSD}}</li>
                                    <li class="mb-1">Курс USD/PLN: {{rate_usdpln}}</li>
                                    <li class="mb-1">Курс EUR/USD: {{rate_eurusd}}</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                    <div class="bg-orion lg:pt-2 pt-3 w-full px-2 text-left shadow-md shadow-lg rounded-lg">
                        <div class="relative flex flex-col min-w-0 break-words ">
                            <div class="px-4 py-1 sm:py-5 flex-auto">
                                <h2 class="text-indigo-100 tracking-wide text-3xl font-bold">Отримуєте</h2>
                            </div>
                            <div class=" px-1 sm:px-4 py-5 flex-auto text-blue-600">
                                <div class="currency-select justify-center w-90 px-0 md:px-3 py-3 rounded-md text-blue-600 cursor-pointer">

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
                            <div class="py-3 sm:py-5 flex-auto amountInput relative">
                                <input :key="itKey" v-model="formOrder.withdrawAmount" type="text"
                                       class="bg-transparent cursor-text without-spin-btn mt-0 block w-full focus:border-indigo-300 focus:outline-none text-gray-200 border-0 border-b-2 border-gray-200 cursor-pointer focus:ring-0"/>
                                <div class="currencyName block text-gray-200">{{ currency_2.name }}</div>
                            </div>
                            <div class="bottonBlock flex flex-auto justify-center pt-4 pb-6">
                                <button @click = "toggleModal" class="btn px-10 w-80 py-4 uppercase text-white shadow  hover:bg-indigo-700 bg-indigo-800 tracking-wide rounded-lg">Подати заявку</button>
                            </div>
                        </div>
                    </div>
                </dl>
            </div>
        </div>
        <my-modal :modalActive="modalActive" @modalClose="toggleModal">
            <h2 class="max-w-[600px] pb-6 pt-6 text-center">Залиште ваш номер телефону або телеграм і ми зв'яжемось з вами для надання детальної інформації
            </h2>
            <div class="w-full max-w-sm mx-auto">
                <div class="relative z-0 mb-6 w-full group">
                    <input v-model="v$.formOrder.phone.$model" type="text" name="floating_email" id="floating_phone"
                           :class="[v$.formOrder.phone.$error ? 'border-red-600' : ''   ]"
                           class="dark:focus:border-blue-500 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 peer" placeholder=" " required />
                    <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Телефон +380 XX XXX XX XX</label>
                    <div v-if="v$.formOrder.phone.$error" class="text-red-600 input-errors pt-2 text-sm warning-msg">
                            {{ v$.formOrder.phone.phoneValid.$message }}
                    </div>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <input v-model="v$.formOrder.telegram.$model" type="text"  id="floating_telegram"
                           :class="[v$.formOrder.telegram.$error ? 'border-rose-600' : ''   ]"
                           class="dark:focus:border-blue-500 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-0 peer" placeholder=" " required />
                    <label for="floating_telegram" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Телеграм ( @YourTelegramNik )</label>
                    <div v-if="v$.formOrder.telegram.$error" class="text-red-600 input-errors pt-2 text-sm warning-msg">
                        {{ v$.formOrder.telegram.telegramValid.$message }}
                    </div>
                </div>


                <div class="md:flex justify-center md:items-center pb-6 mt-8">

                    <div class="md:w-1/2 text-center">
                        <button @click.prevent="submitHandler" class="shadow bg-indigo-700 hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-10 rounded" type="button">
                            Відправити
                        </button>
                    </div>
                </div>
            </div>
        </my-modal>
    </main>



</template>

<script>
    // const EXCHANGE_API = 'https://api.exchangerate.host/latest?base=';
    // const FIAT_PROFIT = 0.96;
    // const CRYPTA_PROFIT_UA = 0.98;
    // const CRYPTA_PROFIT_EU = 0.97;
    // const CASH_VARSHAVA = 0.997

    import { Inertia } from '@inertiajs/inertia'
    import { Head, Link } from '@inertiajs/inertia-vue3';
    import MainLayout from "@/Layouts/MainLayout.vue";
    import MySelect from "@/Components/MySelect.vue";
    import TextInput from "@/Components/TextInput.vue";
    import vSelect from 'vue-select'
    import MyModal from "@/Components/MyModal.vue";
    import InputNumber from 'primevue/inputnumber';
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
            TextInput,
            vSelect,
            MyModal,
            InputNumber
        },
        data() {
            return {
                EXCHANGE_API: 'https://api.exchangerate.host/latest?base=',
                FIAT_PROFIT: 0.96,
                CRYPTA_PROFIT_UA: 0.98,
                CRYPTA_PROFIT_EU: 0.97,
                CASH_VARSHAVA: 0.997,
                v$: useVuelidate(),
                user: {},
                curFrom: [],
                curTo: [],
                currency_1: {},
                currency_2: {},
                invoiceAmountMessage: '',
                RATE_UAHUSD: 40.6,
                rate_usdpln: null,
                rate_eurusd: null,
                isOpenMobileMenu: false,
                modalActive: false,
                isOpenSelectCity: false,
                formOrder: {
                    city: null,
                    phone: null,
                    telegram: null,
                    invoiceAmount: '',
                    withdrawAmount: '',
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
                        to: false,
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
                formOrder: {
                    phone: {
                        phoneValid: helpers.withMessage('Не коректний номер телефону', this.validPhone)
                    },
                    telegram: {
                        telegramValid: helpers.withMessage('Не коректний телеграм нікнейм', this.validTelegramNik)
                    },
                    invoiceAmount: {
                        minValue: helpers.withMessage(`Мінімальна сума переказу ${this.getSelectedCurrency_1.min_value}`,
                            minValue(Number(this.getSelectedCurrency_1.min_value)))
                    },
                }
            }
        },
        async beforeMount() {
            // this.rate_usdpln = await this.getRateCurrency('USD', 'PLN')
            // this.rate_eurusd = await this.getRateCurrency('EUR', 'USD')
        },
        async mounted() {
            this.rate_usdpln = await this.getRateCurrency('USD', 'PLN')
            this.rate_eurusd = await this.getRateCurrency('EUR', 'USD')
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
            toggleModal() {
               this.modalActive = !this.modalActive
            },
            validPhone(value) {
                let regexp = /^(\+3|)[0-9]{10,11}$/;
                return regexp.test(value)
            },
            validTelegramNik(value) {

                let regexp2 = /.*\B@(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*.*/gm;
                return regexp2.test(value)
            },

            async getRatesData(baseCurrency) {
               // const EXCHANGE_API = 'https://api.exchangerate.host/latest?base=baseCurrency';
                //const EXCHANGE_API = 'http://api.nbp.pl/api/exchangerates/rates/c/usd/today/?format=json';
                try {
                    const response2 = await fetch(this.EXCHANGE_API + baseCurrency).then(data => {
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
            async submitHandler() {

                try {
                    await Inertia.post('/orders', {
                        city: this.formOrder.city,
                        currency_from: this.currency_1,
                        currency_to: this.currency_2,
                        invoiceAmount: this.formOrder.invoiceAmount,
                        withdrawAmount: this.formOrder.withdrawAmount,
                        phone: this.formOrder.phone,
                        telegram: this.formOrder.telegram
                    })
                    this.modalActive = false
                    this.formOrder.invoiceAmount = ''
                    this.formOrder.withdrawAmount = ''
                } catch (e) {

                }


            },
            setSelectedCity(city) {
               this.formOrder.city = city
            },
            selectedCurrency_1(currency) {
                this.currency_1 = currency
                this.CalcExchange()
            },
            selectedCurrency_2(currency) {
                this.currency_2 = currency
                this.CalcExchange()
            },

            isAllForCalc() {
                if (!this.RATE_UAHUSD || !this.FIAT_PROFIT || !this.rate_usdpln || !this.rate_eurusd) return false
                return true
            },
            toFormat(value) {
                if (value.length && value.indexOf(',') > -1) value = value.split(',').join('')
                return (new Intl.NumberFormat("en").format(Number(value))).toString()
            },
            fromFormat(value) {
                return Number(value.split(',').join(''))
            },
            CalcHandler() {

                if (!this.rate_usdpln) {
                    this.rate_usdpln =  this.getRateCurrency('USD', 'PLN')
                }

                if(this.isAllForCalc()) {

                    if (this.currency_2.cc === 'PLN' && this.currency_2.type === 'bank') {
                        if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'bank') {

                            this.formOrder.withdrawAmount = Math.round(((this.fromFormat(this.formOrder.invoiceAmount) / this.RATE_UAHUSD) * this.FIAT_PROFIT * this.rate_usdpln))

                            this.itKey++


                        } else if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'cash') {
                            if (this.formOrder.city) {
                                this.formOrder.withdrawAmount = Math.round((((this.fromFormat(this.formOrder.invoiceAmount)  * this.formOrder.city.coeff) / this.RATE_UAHUSD) * this.FIAT_PROFIT) * this.rate_usdpln)
                                this.itKey++
                            } else {
                                alert('Оберіть місто')
                            }
                        } else if (this.currency_1.cc === 'USD' && this.currency_1.type === 'cash') {
                            if (this.formOrder.city) {
                                this.formOrder.withdrawAmount = Math.round(((this.fromFormat(this.formOrder.invoiceAmount)  * this.formOrder.city.coeff) * this.FIAT_PROFIT) * this.rate_usdpln)
                                this.itKey++
                            } else {
                                alert('Оберіть місто')
                            }
                        } else if (this.currency_1.cc === 'EUR' && this.currency_1.type === 'cash') {
                            if (this.formOrder.city) {

                                this.formOrder.withdrawAmount = Math.round(((this.fromFormat(this.formOrder.invoiceAmount)  / this.rate_eurusd * this.formOrder.city.coeff) * this.FIAT_PROFIT) * this.rate_usdpln)
                                //this.formOrder.withdrawAmount = Math.round(((this.formOrder.invoiceAmount / 0.983218 * 0.998 ) * 0.96) * 4.779335)
                                this.itKey++
                            } else {
                                alert('Оберіть місто')
                            }
                        } else if (this.currency_1.cc === 'USDT' && this.currency_1.type === 'crypto') {
                            this.formOrder.withdrawAmount = Math.round(((this.fromFormat(this.formOrder.invoiceAmount)  * this.CRYPTA_PROFIT_EU) * this.rate_usdpln))
                            this.itKey++
                        }
                    } else if (this.currency_2.cc === 'PLN' && this.currency_2.type === 'cash') {

                        if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'cash') {
                            if (this.formOrder.city) {
                                this.formOrder.withdrawAmount = Math.round((((this.fromFormat(this.formOrder.invoiceAmount)  / this.RATE_UAHUSD) * this.FIAT_PROFIT) * this.formOrder.city.coeff * this.rate_usdpln * this.CASH_VARSHAVA))
                                this.itKey++

                            } else {
                                alert('Оберіть місто')
                            }
                        } else if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'bank') {
                            this.formOrder.withdrawAmount = Math.round(((this.fromFormat(this.formOrder.invoiceAmount)  / this.RATE_UAHUSD) * this.FIAT_PROFIT) * this.rate_usdpln * this.CASH_VARSHAVA)
                            this.itKey++
                        }
                    } else if (this.currency_2.cc === 'USD' && this.currency_2.type === 'payservice') {

                        if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'bank') {
                            this.formOrder.withdrawAmount = Math.round((this.fromFormat(this.formOrder.invoiceAmount)  / this.RATE_UAHUSD) * this.FIAT_PROFIT)
                            this.itKey++
                        } else if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'cash') {

                            if (this.formOrder.city) {
                                this.formOrder.withdrawAmount = Math.round(((this.fromFormat(this.formOrder.invoiceAmount)  * this.formOrder.city.coeff) / this.RATE_UAHUSD) * this.FIAT_PROFIT)
                                this.itKey++
                            } else {
                                alert('Оберіть місто')
                            }

                        } else if (this.currency_1.cc === 'USD' && this.currency_1.type === 'cash') {

                            if (this.formOrder.city) {
                                this.formOrder.withdrawAmount = Math.round((this.fromFormat(this.formOrder.invoiceAmount)  * this.formOrder.city.coeff) * this.FIAT_PROFIT)
                                this.itKey++
                            } else {
                                alert('Оберіть місто')
                            }

                        } else if (this.currency_1.cc === 'EUR' && this.currency_1.type === 'cash') {

                            if (this.formOrder.city) {
                                this.formOrder.withdrawAmount = Math.round(((this.fromFormat(this.formOrder.invoiceAmount)  * this.formOrder.city.coeff) / this.rate_eurusd) * this.FIAT_PROFIT)
                                this.itKey++
                            } else {
                                alert('Оберіть місто')
                            }

                        } else if (this.currency_1.cc === 'USDT' && this.currency_1.type === 'crypto') {

                            this.formOrder.withdrawAmount = Math.round(this.fromFormat(this.formOrder.invoiceAmount)  * this.CRYPTA_PROFIT_EU)
                            this.itKey++

                        }

                    } else if (this.currency_2.cc === 'EUR' && this.currency_2.type === 'payservice') {

                        if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'bank') {

                            //this.formOrder.withdrawAmount = Math.round((this.formOrder.invoiceAmount / this.RATE_UAHUSD ) * this.rate_eurusd * this.FIAT_PROFIT )
                            this.formOrder.withdrawAmount = Math.round((this.fromFormat(this.formOrder.invoiceAmount)  / this.RATE_UAHUSD) / this.rate_eurusd * this.FIAT_PROFIT)
                            this.itKey++

                        } else if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'cash') {

                            if (this.formOrder.city) {
                                //this.formOrder.withdrawAmount = Math.round((this.formOrder.invoiceAmount * this.formOrder.city.coeff ) / this.RATE_UAHUSD * this.FIAT_PROFIT)
                                this.formOrder.withdrawAmount = Math.round((this.fromFormat(this.formOrder.invoiceAmount)  * 0.998) / 40.6 * this.FIAT_PROFIT / this.rate_eurusd)
                                this.itKey++
                            } else {
                                alert('Оберіть місто')
                            }

                        } else if (this.currency_1.cc === 'USD' && this.currency_1.type === 'cash') {
                            if (this.formOrder.city) {
                                this.formOrder.withdrawAmount = Math.round(((this.fromFormat(this.formOrder.invoiceAmount)  * this.formOrder.city.coeff) * this.rate_eurusd) * this.FIAT_PROFIT)
                                this.itKey++
                            } else {
                                alert('Оберіть місто')
                            }
                        } else if (this.currency_1.cc === 'EUR' && this.currency_1.type === 'cash') {

                            if (this.formOrder.city) {
                                this.formOrder.withdrawAmount = Math.round((this.fromFormat(this.formOrder.invoiceAmount)  * this.formOrder.city.coeff) * this.FIAT_PROFIT)
                                this.itKey++
                            } else {
                                alert('Оберіть місто')
                            }

                        } else if (this.currency_1.cc === 'USDT' && this.currency_1.type === 'crypto') {

                            if (this.formOrder.city) {
                                this.formOrder.withdrawAmount = Math.round((this.fromFormat(this.formOrder.invoiceAmount)  * this.CRYPTA_PROFIT_EU) * this.rate_eurusd)
                                this.itKey++
                            } else {
                                alert('Оберіть місто')
                            }

                        }

                    } else if (this.currency_2.cc === 'USDT' && this.currency_2.type === 'crypto') {

                        if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'cash') {
                            if (this.formOrder.city) {
                                this.formOrder.withdrawAmount = Math.round(((this.fromFormat(this.formOrder.invoiceAmount)  * this.formOrder.city.coeff) / this.RATE_UAHUSD) * this.CRYPTA_PROFIT_UA)
                                this.itKey++
                            } else {
                                alert('Оберіть місто')
                            }

                        } else if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'bank') {

                            this.formOrder.withdrawAmount = Math.round((this.fromFormat(this.formOrder.invoiceAmount)  / this.RATE_UAHUSD) * this.CRYPTA_PROFIT_UA)
                            this.itKey++

                        } else if (this.currency_1.cc === 'USD' && this.currency_1.type === 'cash') {
                            if (this.formOrder.city) {
                                this.formOrder.withdrawAmount = Math.round((this.fromFormat(this.formOrder.invoiceAmount)  * this.formOrder.city.coeff) * this.CRYPTA_PROFIT_UA)
                                this.itKey++
                            } else {
                                alert('Оберіть місто')
                            }

                        } else if (this.currency_1.cc === 'EUR' && this.currency_1.type === 'cash') {
                            if (this.formOrder.city) {
                                this.formOrder.withdrawAmount = Math.round(((this.fromFormat(this.formOrder.invoiceAmount)   * this.formOrder.city.coeff) / this.rate_eurusd) * this.CRYPTA_PROFIT_UA)
                                this.itKey++
                            } else {
                                alert('Оберіть місто')
                            }
                        }

                    } else if (this.currency_2.cc === 'EUR' && this.currency_2.type === 'bank') {

                        if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'bank') {

                            this.formOrder.withdrawAmount = Math.round((this.fromFormat(this.formOrder.invoiceAmount)  / this.RATE_UAHUSD) * this.rate_eurusd * this.FIAT_PROFIT)
                            this.itKey++

                        } else if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'cash') {

                            if (this.formOrder.city) {
                                this.formOrder.withdrawAmount = Math.round(((this.fromFormat(this.formOrder.invoiceAmount)  * this.formOrder.city.coeff) / this.RATE_UAHUSD) * this.FIAT_PROFIT / this.rate_eurusd)
                                this.itKey++
                            } else {
                                alert('Оберіть місто')
                            }

                        } else if (this.currency_1.cc === 'USD' && this.currency_1.type === 'cash') {
                            if (this.formOrder.city) {
                                this.formOrder.withdrawAmount = Math.round(((this.fromFormat(this.formOrder.invoiceAmount)  * this.formOrder.city.coeff) * this.FIAT_PROFIT) / this.rate_eurusd)
                                this.itKey++
                            } else {
                                alert('Оберіть місто')
                            }
                        } else if (this.currency_1.cc === 'EUR' && this.currency_1.type === 'cash') {

                            if (this.formOrder.city) {
                                this.formOrder.withdrawAmount = Math.round((this.fromFormat(this.formOrder.invoiceAmount)  * this.formOrder.city.coeff) * this.FIAT_PROFIT)
                                this.itKey++
                            } else {
                                alert('Оберіть місто')
                            }

                        } else if (this.currency_1.cc === 'USDT' && this.currency_1.type === 'crypto') {

                            this.formOrder.withdrawAmount = Math.round((this.fromFormat(this.formOrder.invoiceAmount)  * this.CRYPTA_PROFIT_EU) / this.rate_eurusd)
                            this.itKey++

                        }
                    }
                } else {
                    console.log('Error Data fo Calculation')
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
                return {... new Proxy(this.currency_1, {})}
            },
            getSelectedCurrency_2() {
                return {... new Proxy(this.currency_2, {})}
            },

        },
        watch: {
            isOpenSelectCity() {
                if (this.isOpenSelectCity) {
                    this.$refs.selectDiv.classList.add('open');
                } else {
                    this.$refs.selectDiv.classList.remove('open');
                }
            },
            currency_1() {
                this.CalcHandler()
                this.formOrder.withdrawAmount = this.toFormat(this.formOrder.withdrawAmount)
            },
            currency_2() {
                this.CalcHandler()
            },
            "formOrder.invoiceAmount": function () {
               this.formOrder.invoiceAmount = this.toFormat(this.formOrder.invoiceAmount)
               this.CalcHandler()
            },
            "formOrder.withdrawAmount": function () {
                this.formOrder.withdrawAmount = this.toFormat(this.formOrder.withdrawAmount)
            },
            "formOrder.city": function () {
                this.CalcHandler()
            },
            modalActive() {
                if (this.modalActive) {
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

<style >

    .currency-select .v-select .vs__open-indicator {
        fill: rgb(255 255 255 / 82%) !important;
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
    .currency-select .v-select .vs__dropdown-toggle {
        background: #726d9f;
        padding: 7px;
        cursor: pointer !important;
    }
    .currency-select .v-select .vs__selected {
        color: #ffffff !important;

    }
    .bg-orion {
        background-color: rgb(23 33 82 / 80%);
    }
    .warning-msg {
        color: #ff4646 !important;
    }

</style>
