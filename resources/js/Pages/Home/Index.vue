<template>
    <Head>
        <title>Переказ коштів з України</title>
        <meta head-key="description" name="description" content="This is the default description" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    </Head>

    <!-- page -->
    <main class="max-w-full md:max-w-7xl mx-auto text-white" x-data="layout">
        <!-- header page -->
        <header class="relative flex w-full items-center justify-between  p-4 pt-14 lg:pt-8 pb-4 sm:pb-14">

            <div class="logo-info-wrap w-full flex flex-row gap-7 justify-between">
                <!-- logo -->
                <div class="logo flex items-center space-x-2 cursor-pointer">
                    <img :src="'/images/logo.svg'" /><Link class="hidden sm:block ml-5 text-3xl sm:text-4xl" href="/">OrionPay</Link>
                </div>
                <!-- info -->
                <div class="time-works absolute top-0 py-2 left-0 justify-center lg:justify-end w-full bg-indigo-800 lg:bg-transparent lg:relative flex items-center text-red-500">
                    <div class="message-content text-white flex">
                        <i class="mr-2 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </i>
                        години роботи 10:00 - 19:00, Пн - Пт
                    </div>

                </div>

            </div>

            <div ref="selectDiv" @click="isOpenSelectCity = !isOpenSelectCity" class="selectDiv relative ml-8">
                <MySelect
                    :contentClasses="['px-3', 'py-2', 'rounded-md', 'text-blue-100', 'cursor-pointer', 'appearance-none', 'round', 'w-[180px]']"
                    :items="cities" @updateSelect="setSelectedCity"
                    :placeholder="'Оберіть місто'"
                    :defValue = "{}"
                    :class="'city-select relative'"
                    :key="resetCityKey"
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
                                Обмін
                            </Link>

                            <Link :href="'/'" class="hidden flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600">
                                <span>Пр нас</span>
                            </Link>

                            <Link :href="route('faqs')" class="flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600">
                                <i class="mr-2 text-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                                    </svg>

                                </i>
                                FAQ (Часті запитання)
                            </Link>

                        </div>




                    </aside>
                </template>

            </Sidebar>

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
                                    <v-select :options="currensCollectionFrom"
                                              :clearable="false"
                                              label="name"
                                              :value="getSelectedCurrency_1"
                                              :reduce="currency => currency"
                                              v-model="currency_1"
                                              :getOptionLabel="currency_1 => currency_1.name"
                                              @input="selectedCurrency_1"
                                              :key="selCurrKey"
                                    />
                                </div>

                            </div>
                            <div class="py-3 sm:py-5 flex-auto amountInput relative">
                                <input v-model="v$.formOrder.invoiceAmount.$model" type="text"
                                       :disabled="isGetCalcData"
                                       class="bg-transparent cursor-text without-spin-btn mt-0 block w-full focus:border-indigo-300 focus:outline-none text-gray-200 border-0 border-b-2 border-gray-200 cursor-pointer focus:ring-0"/>
                                <div class="input-errors pt-2" :key="itKey">
                                    <div v-for="error in v$.formOrder.invoiceAmount.$errors" class="pb-1 text-sm warning-msg tracking-wide">
                                        <span v-if="error.$validator === 'minValue'"> {{ error.$message }} {{ currency_1.min_value }} {{ currency_1.cc }}</span>
                                        <span v-else-if="error.$validator === 'needCity'"> {{ error.$message }} </span>
                                    </div>
                                </div>
                                <div class="currencyName block text-gray-200">{{ currency_1.name }}</div>
                            </div>

                            <div class="px-8 hidden sm:block relative">
                                <div class="mb-1 text-blue-200/75 text-lg">Курси валют</div>
                                <ul class="text-gray-100/75 text-xs">
                                    <li class="mb-1 flex" :key="itKey">
                                        <div class="title"> Курс UAH/USD:</div>
                                        <div v-if="!RATE_UAHUSD">
                                            <Spinner/>
                                        </div>
                                        <div v-else class="rate-result px-2">{{RATE_UAHUSD}} </div>

                                    </li>
                                    <li class="mb-1 flex">
                                        <div class="title"> Курс USD/PLN:</div>
                                        <div v-if="!rate_usdpln">
                                            <Spinner/>
                                        </div>
                                        <div v-else class="rate-result px-2">{{rate_usdpln}} </div>
                                    </li>
                                    <li class="mb-1 flex">
                                        <div class="title"> Курс EUR/USD:</div>
                                        <div v-if="!rate_eurusd">
                                            <Spinner/>
                                        </div>
                                        <div v-else class="rate-result px-2">{{rate_eurusd}} </div>
                                    </li>
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

                                    <v-select :options="currensCollectionTo"
                                              :clearable="false"
                                              :value="getSelectedCurrency_2"
                                              :reduce="currency => currency"
                                              v-model="currency_2"
                                              :getOptionLabel="currency_2 => currency_2.name"
                                              @input="selectedCurrency_2"
                                              :key="selCurrKey"
                                    />
                                </div>
                            </div>
                            <div class="py-3 sm:py-5 flex-auto amountInput relative">
                                <input :key="itKey" v-model="formOrder.withdrawAmount" type="text"
                                       class="bg-transparent cursor-text without-spin-btn mt-0 block w-full focus:border-indigo-300 focus:outline-none text-gray-200 border-0 border-b-2 border-gray-200 cursor-pointer focus:ring-0"/>
                                <div class="currencyName block text-gray-200">{{ currency_2.name }}</div>
                            </div>
                            <div class="bottonBlock flex flex-auto justify-center pt-4 pb-6">
                                <button @click = "startOrder" class="btn px-10 w-80 py-4 uppercase text-white shadow  hover:bg-indigo-700 bg-indigo-800 tracking-wide rounded-lg">Подати заявку</button>
                            </div>
                        </div>
                    </div>
                </dl>
            </div>
        </div>

        <my-modal :loading="stepOrderLoading" :modalActive="modalActive" @modalClose="closeModal" :key="orderModalKey">

            <template v-if="stepOrderSend">

                <h2 class="max-w-[600px] pb-6 pt-6 text-center">Залиште ваш номер телефону або телеграм і ми зв'яжемось з вами для надання детальної інформації</h2>
                <div class="w-full max-w-sm mx-auto">
                    <div v-if="showInputPhone"
                         class="relative z-0 mb-6 w-full group">
                        <input
                            @focus="focusPhone"
                            @blur="blurPhone"
                            v-model="v$.formOrder.phone.$model" type="text" name="floating_email" id="floating_phone"
                            :class="[v$.formOrder.phone.$error ? 'border-red-600' : ''   ]"
                            class="dark:focus:border-blue-500 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" " required />
                        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Телефон +380 XX XXX XX XX</label>
                        <div v-if="v$.formOrder.phone.$error" class="text-red-600 input-errors pt-2 text-sm warning-msg">
                            {{ v$.formOrder.phone.phoneValid.$message }}
                        </div>
                    </div>
                    <div v-if="(showInputTelegram && showInputPhone)" class="relative z-0 mb-4 w-full group">
                            <div>АБО</div>
                    </div>
                    <div v-if="showInputTelegram" class="relative z-0 mb-6 w-full group">
                        <input
                            @focus="focusTelegram"
                            @blur="blurTelegram"
                            v-model="v$.formOrder.telegram.$model" type="text"  id="floating_telegram"
                            :class="[v$.formOrder.telegram.$error ? 'border-rose-600' : ''   ]"
                            class="dark:focus:border-blue-500 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600  focus:outline-none focus:ring-0 peer" placeholder=" " required />
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
            </template>

            <template v-else-if="stepOrderSendSuccess">
                <div class="p-4 flex flex-col items-center ">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-emerald-500 w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>

                    </div>
                    <h2 class="max-w-[600px] pb-2 pt-3 text-center text-2xl text-emerald-500">Дякуємо за Вашу заявку! Наш менеджер зв'яжеться з Вами найближчим часом.</h2>
                    <p class="hidden ax-w-[600px] pb-6 pt-2 text-center text-xl text-black">Найближчим часом наш менеджер зв'яжеться з вами...</p>
                </div>

            </template>

        </my-modal>

    </main>

</template>

<script>

    import { Inertia } from '@inertiajs/inertia'
    import { Head, Link } from '@inertiajs/inertia-vue3';
    import MainLayout from "@/Layouts/MainLayout.vue";
    import MySelect from "@/Components/UI/MySelect.vue";
    import TextInput from "@/Components/UI/TextInput.vue";
    import vSelect from 'vue-select'
    import MyModal from "@/Components/UI/MyModal.vue";
    import InputNumber from 'primevue/inputnumber';
    import Spinner from '@/Components/UI/Spinner.vue'
    import Sidebar from "@/Components/Frontend/Sidebar.vue";
    import { useVuelidate } from '@vuelidate/core'

    import { helpers} from '@vuelidate/validators'

    import 'vue-select/dist/vue-select.css';

    export default {
        inheritAttrs: true,
        name: "Index",
        layout: MainLayout,
        components: {
            Head,
            Link,
            MySelect,
            TextInput,
            vSelect,
            MyModal,
            InputNumber,
            Spinner,
            Sidebar
        },
        props: [
            'canLogin',
            'canRegister',
            'currencies',
            'cities',
            'status',
            'errors'
        ],
        data() {
            return {
                EXCHANGE_API: 'https://api.exchangerate.host/latest?base=',
                FIAT_PROFIT: 0.96,
                CRYPTA_PROFIT_UA: 0.98,
                CRYPTA_PROFIT_EU: 0.97,
                CASH_VARSHAVA: 0.997,
                v$: useVuelidate(),
                user: {},
                currensCollectionFrom: [],
                currensCollectionTo: [],
                currency_1: {},
                currency_2: {},
                invoiceAmountMessage: '',
                RATE_UAHUSD: null,
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
                stepOrderSend: false,
                stepOrderLoading: false,
                stepOrderSendSuccess: false,
                itKey: 1,
                selCurrKey: 1,
                resetCityKey: 1,
                orderModalKey: 1,
                showInputTelegram: true,
                showInputPhone: true
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
                        needCity: helpers.withMessage(`Для готівкової валюти потрібно обрати місто відправлення`, this.validNeedCity),
                        minValue: helpers.withMessage(`Мінімальна сума переказу `,
                            (value) => {
                                return Number(this.fromFormat(value)) >= Number(this.currency_1.min_value)
                            })

                    },
                }
            }
        },

        async created() {
            this.rate_usdpln = await this.getRateCurrency('USD', 'PLN')
            this.rate_eurusd = await this.getRateCurrency('EUR', 'USD')

            let res = await this.getRatesFromGoogleSheet('UAH_USD')

            this.RATE_UAHUSD = res['UAH_USD']
        },
        mounted() {
            this.currensCollectionFrom = this.currencies.filter(currency => {
                return currency.from
            })
            this.currency_1 = this.currensCollectionFrom[1]

            this.currensCollectionTo = this.currencies.filter(currency => {
                return currency.to
            })
            this.currency_2 = this.currensCollectionTo[1]

        },
        methods: {

            startOrder() {
              this.stepOrderSend = true
              this.modalActive = !this.modalActive
            },
            closeModal() {
               this.modalActive = !this.modalActive
            },
            validPhone(value) {
                let regexp = /^(\+3|)[0-9]{11}$/;
                return regexp.test(value)
            },
            validTelegramNik(value) {
                let regexp2 = /.*\B@(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*.*/gm;
                return regexp2.test(value)
            },
            validNeedCity() {
               return !(_.isEmpty(this.formOrder.city) && this.getSelectedCurrency_1.type === 'cash')
            },
            focusTelegram() {
                if (this.formOrder.telegram === null) {
                    this.v$.formOrder.telegram.$model = '@'
                }
                this.showInputTelegram = true
                this.showInputPhone = false
            },
            blurTelegram() {
               if (this.v$.formOrder.telegram.$model.length < 2) {
                   this.formOrder.telegram = null
                   this.v$.formOrder.telegram.$reset()
                   this.showInputTelegram = true
                   this.showInputPhone = true
               }
            },
            focusPhone() {
                if (this.v$.formOrder.phone.$model === null) {
                    this.v$.formOrder.phone.$model = '+380'
                }
                this.showInputTelegram = false
                this.showInputPhone = true
            },
            blurPhone() {
                if (this.v$.formOrder.phone.$error && this.v$.formOrder.phone.$model.length < 5) {

                    this.formOrder.phone = null
                    this.v$.formOrder.phone.$reset()

                    this.showInputTelegram = true
                    this.showInputPhone = true
                }


            },
            async getRatesFromGoogleSheet(currencyPare) {
                try {
                    const response = await fetch('api/rates/all').then(data => {
                        console.log('data', data)
                        return data;
                    })

                    return await response.json()

                } catch (e) {
                    console.log('Ошибка получения данных из GSheets')
                }
            },

            async getRateCurrency(base_currency, rate_currency ) {
                const Apikey = '7aecaa111c052bc16c93d12daafd3087f1583c7d53d0f50eb6abbf1020b93a66'
                const config = {
                    headers: {
                        authorization: Apikey
                    },
                }
                try {
                    const response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${base_currency}&tsyms=${rate_currency}`, config).then(data => {
                        return data;
                    })
                    const resultRate = await response.json();
                    return await resultRate[rate_currency]
                } catch (e) {
                    console.log('Error getting data from EXCHANGE_API')
                }
            },
            async submitHandler() {

                if (this.v$.$invalid) {
                    this.v$.$touch() // показываем все сообщения об ошибке
                    if (this.v$.formOrder.invoiceAmount.$error || !this.v$.formOrder.invoiceAmount.$model.length) {
                        this.modalActive = false
                        return null
                    } else if (this.v$.formOrder.phone.$error && this.v$.formOrder.telegram.$error) {
                        this.modalActive = true
                        return null
                    }
                }

                try {
                    this.stepOrderLoading = !this.stepOrderLoading
                    this.stepOrderSend = !this.stepOrderSend

                    await axios.post(route('order.store'), {
                            city: this.formOrder.city,
                            currency_from: this.currency_1,
                            currency_to: this.currency_2,
                            invoiceAmount: this.fromFormat(this.formOrder.invoiceAmount),
                            withdrawAmount: this.fromFormat(this.formOrder.withdrawAmount),
                            phone: this.formOrder.phone,
                            telegram: this.formOrder.telegram
                    }).then(res => {
                        console.log('res.statusText', res.statusText)
                        if (res.statusText === 'OK') {
                            this.stepOrderLoading = !this.stepOrderLoading
                            this.stepOrderSendSuccess = !this.stepOrderSendSuccess
                        }

                    })
                    setTimeout(() => {
                        this.resetState()

                    }, 3000)

                } catch (e) {

                }

            },
            resetState() {
                this.modalActive = false
                this.formOrder.invoiceAmount = ''
                this.formOrder.withdrawAmount = ''
                this.formOrder.phone = null
                this.formOrder.telegram = null
                this.stepOrderSend = false
                this.stepOrderSendSuccess = false
                this.v$.$reset()
                this.showInputTelegram = true
                this.showInputPhone = true
                this.orderModalKey++

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

                let cityCoeff = 0
                if (this.formOrder.city) {
                    cityCoeff = (new Proxy(this.formOrder.city, {}).coeff) ?? 0
                }

                if (!this.rate_usdpln) {
                    this.rate_usdpln =  this.getRateCurrency('USD', 'PLN')
                }

                if(!this.isAllForCalc()) {
                    console.log('Error Data for Calculate')
                    return
                }


                if (this.currency_2.cc === 'PLN' && this.currency_2.type === 'bank') {
                        if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'bank') {

                            this.formOrder.withdrawAmount = Math.round(((this.fromFormat(this.formOrder.invoiceAmount) / this.RATE_UAHUSD) * this.FIAT_PROFIT * this.rate_usdpln))
                            this.itKey++

                        } else if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'cash') {

                                this.formOrder.withdrawAmount = Math.round((((this.fromFormat(this.formOrder.invoiceAmount)  * cityCoeff) / this.RATE_UAHUSD) * this.FIAT_PROFIT) * this.rate_usdpln)
                                this.itKey++

                        } else if (this.currency_1.cc === 'USD' && this.currency_1.type === 'cash') {

                                this.formOrder.withdrawAmount = Math.round(((this.fromFormat(this.formOrder.invoiceAmount)  * cityCoeff) * this.FIAT_PROFIT) * this.rate_usdpln)
                                this.itKey++

                        } else if (this.currency_1.cc === 'EUR' && this.currency_1.type === 'cash') {

                                this.formOrder.withdrawAmount = Math.round(((this.fromFormat(this.formOrder.invoiceAmount)  / this.rate_eurusd * cityCoeff) * this.FIAT_PROFIT) * this.rate_usdpln)
                                //this.formOrder.withdrawAmount = Math.round(((this.formOrder.invoiceAmount / 0.983218 * 0.998 ) * 0.96) * 4.779335)
                                this.itKey++

                        } else if (this.currency_1.cc === 'USDT' && this.currency_1.type === 'crypto') {
                            this.formOrder.withdrawAmount = Math.round(((this.fromFormat(this.formOrder.invoiceAmount)  * this.CRYPTA_PROFIT_EU) * this.rate_usdpln))
                            this.itKey++
                        }

                } else if (this.currency_2.cc === 'PLN' && this.currency_2.type === 'cash') {

                        if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'cash') {

                                this.formOrder.withdrawAmount = Math.round((((this.fromFormat(this.formOrder.invoiceAmount)  / this.RATE_UAHUSD) * this.FIAT_PROFIT) * cityCoeff * this.rate_usdpln * this.CASH_VARSHAVA))
                                this.itKey++

                        } else if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'bank') {

                            this.formOrder.withdrawAmount = Math.round(((this.fromFormat(this.formOrder.invoiceAmount)  / this.RATE_UAHUSD) * this.FIAT_PROFIT) * this.rate_usdpln * this.CASH_VARSHAVA)
                            this.itKey++

                        }
                } else if (this.currency_2.cc === 'USD' && this.currency_2.type === 'payservice') {

                        if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'bank') {
                            this.formOrder.withdrawAmount = Math.round((this.fromFormat(this.formOrder.invoiceAmount)  / this.RATE_UAHUSD) * this.FIAT_PROFIT)
                            this.itKey++
                        } else if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'cash') {

                                this.formOrder.withdrawAmount = Math.round(((this.fromFormat(this.formOrder.invoiceAmount)  * cityCoeff) / this.RATE_UAHUSD) * this.FIAT_PROFIT)
                                this.itKey++

                        } else if (this.currency_1.cc === 'USD' && this.currency_1.type === 'cash') {

                                this.formOrder.withdrawAmount = Math.round((this.fromFormat(this.formOrder.invoiceAmount)  * cityCoeff) * this.FIAT_PROFIT)
                                this.itKey++

                        } else if (this.currency_1.cc === 'EUR' && this.currency_1.type === 'cash') {

                                this.formOrder.withdrawAmount = Math.round(((this.fromFormat(this.formOrder.invoiceAmount)  * cityCoeff) / this.rate_eurusd) * this.FIAT_PROFIT)
                                this.itKey++

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

                                //this.formOrder.withdrawAmount = Math.round((this.formOrder.invoiceAmount * this.formOrder.city.coeff ) / this.RATE_UAHUSD * this.FIAT_PROFIT)
                                this.formOrder.withdrawAmount = Math.round((this.fromFormat(this.formOrder.invoiceAmount)  * 0.998) / this.RATE_UAHUSD * this.FIAT_PROFIT / this.rate_eurusd)
                                this.itKey++

                        } else if (this.currency_1.cc === 'USD' && this.currency_1.type === 'cash') {

                                this.formOrder.withdrawAmount = Math.round(((this.fromFormat(this.formOrder.invoiceAmount)  * cityCoeff) / this.rate_eurusd) * this.FIAT_PROFIT)
                                this.itKey++

                        } else if (this.currency_1.cc === 'EUR' && this.currency_1.type === 'cash') {

                                this.formOrder.withdrawAmount = Math.round((this.fromFormat(this.formOrder.invoiceAmount)  * cityCoeff) * this.FIAT_PROFIT)
                                this.itKey++

                        } else if (this.currency_1.cc === 'USDT' && this.currency_1.type === 'crypto') {

                            this.formOrder.withdrawAmount = Math.round((this.fromFormat(this.formOrder.invoiceAmount)  * this.CRYPTA_PROFIT_EU) / this.rate_eurusd)
                            this.itKey++

                        }

                } else if (this.currency_2.cc === 'USDT' && this.currency_2.type === 'crypto') {

                        if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'cash') {

                            this.formOrder.withdrawAmount = Math.round(((this.fromFormat(this.formOrder.invoiceAmount)  * cityCoeff) / this.RATE_UAHUSD) * this.CRYPTA_PROFIT_UA)
                            this.itKey++

                        } else if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'bank') {

                            this.formOrder.withdrawAmount = Math.round((this.fromFormat(this.formOrder.invoiceAmount)  / this.RATE_UAHUSD) * this.CRYPTA_PROFIT_UA)
                            this.itKey++

                        } else if (this.currency_1.cc === 'USD' && this.currency_1.type === 'cash') {

                            this.formOrder.withdrawAmount = Math.round((this.fromFormat(this.formOrder.invoiceAmount)  * cityCoeff) * this.CRYPTA_PROFIT_UA)
                            this.itKey++

                        } else if (this.currency_1.cc === 'EUR' && this.currency_1.type === 'cash') {

                            this.formOrder.withdrawAmount = Math.round(((this.fromFormat(this.formOrder.invoiceAmount)   * cityCoeff) / this.rate_eurusd) * this.CRYPTA_PROFIT_UA)
                            this.itKey++

                        }

                } else if (this.currency_2.cc === 'EUR' && this.currency_2.type === 'bank') {

                        if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'bank') {

                            this.formOrder.withdrawAmount = Math.round((this.fromFormat(this.formOrder.invoiceAmount)  / this.RATE_UAHUSD) * this.rate_eurusd * this.FIAT_PROFIT)
                            this.itKey++

                        } else if (this.currency_1.cc === 'UAH' && this.currency_1.type === 'cash') {

                            this.formOrder.withdrawAmount = Math.round(((this.fromFormat(this.formOrder.invoiceAmount)  * cityCoeff) / this.RATE_UAHUSD) * this.FIAT_PROFIT / this.rate_eurusd)
                            this.itKey++

                        } else if (this.currency_1.cc === 'USD' && this.currency_1.type === 'cash') {

                            this.formOrder.withdrawAmount = Math.round(((this.fromFormat(this.formOrder.invoiceAmount)  * cityCoeff) * this.FIAT_PROFIT) / this.rate_eurusd)
                            this.itKey++

                        } else if (this.currency_1.cc === 'EUR' && this.currency_1.type === 'cash') {

                            this.formOrder.withdrawAmount = Math.round((this.fromFormat(this.formOrder.invoiceAmount)  * cityCoeff) * this.FIAT_PROFIT)
                            this.itKey++

                        } else if (this.currency_1.cc === 'USDT' && this.currency_1.type === 'crypto') {

                            this.formOrder.withdrawAmount = Math.round((this.fromFormat(this.formOrder.invoiceAmount)  * this.CRYPTA_PROFIT_EU) / this.rate_eurusd)
                            this.itKey++

                        }
                }
            }
        },

        computed: {

            showInputTelegram1() {
                return !((this.formOrder.phone !== null) ? this.formOrder.phone.length > 0 : false)
            },
            showInputPhone1() {
                return !((this.formOrder.telegram !== null) ? this.formOrder.telegram.length > 0 : false)
            },
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
            getMinValueC_1() {
                return new Proxy(this.currency_1, {}).min_value
            },
            isGetCalcData() {
                return !(this.rate_usdpln && this.rate_eurusd && this.RATE_UAHUSD);
            }
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
                if (this.currency_1.type !== 'cash') {
                    this.formOrder.city = {}
                    this.resetCityKey++
                }
                this.CalcHandler()
                this.formOrder.withdrawAmount = this.toFormat(this.formOrder.withdrawAmount)

            },
            currency_2() {
                this.CalcHandler()
            },
            "formOrder.invoiceAmount": function () {
               this.formOrder.invoiceAmount = this.toFormat(this.formOrder.invoiceAmount)
               this.CalcHandler()
               // console.log({... new Proxy(this.v$.formOrder.invoiceAmount, {})} )
            },
            "formOrder.withdrawAmount": function () {
                this.formOrder.withdrawAmount = this.toFormat(this.formOrder.withdrawAmount)
            },
            "formOrder.city": function () {
                this.CalcHandler()
            },
            RATE_UAHUSD() {
                this.selCurrKey++
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

<style>

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
