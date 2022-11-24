import{o,c as n,a as e,H as S,L as R,r as y,b as a,w as h,p,n as g,g as w,v as A,F as b,x as I,t as l,s as d,e as m,f as M}from"./app.4428a927.js";import{M as P}from"./MainLayout.334b50cb.js";import{M as H,C as D,a as E,s as K,u as V,c as x}from"./vue-select.01290924.js";import{_ as L}from"./TextInput.34654faa.js";import{_ as F}from"./_plugin-vue_export-helper.cdc0426e.js";const N={},j={class:"loading-spinner px-2 text-center"},z=e("svg",{class:"inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),B=e("span",{class:"sr-only"},"Loading...",-1),X=[z,B];function Y(t,s){return o(),n("div",j,X)}const G=F(N,[["render",Y]]);const Z={name:"Index",layout:P,components:{Head:S,Link:R,MySelect:H,TextInput:L,vSelect:D,MyModal:E,InputNumber:K,Spinner:G},props:["canLogin","canRegister","currencies","cities","status"],data(){return{EXCHANGE_API:"https://api.exchangerate.host/latest?base=",FIAT_PROFIT:.96,CRYPTA_PROFIT_UA:.98,CRYPTA_PROFIT_EU:.97,CASH_VARSHAVA:.997,v$:V(),user:{},currensCollectionFrom:[],currensCollectionTo:[],currency_1:{},currency_2:{},invoiceAmountMessage:"",RATE_UAHUSD:null,rate_usdpln:null,rate_eurusd:null,isOpenMobileMenu:!1,modalActive:!1,isOpenSelectCity:!1,formOrder:{city:null,phone:null,telegram:null,invoiceAmount:"",withdrawAmount:""},stepOrderSend:!1,stepOrderLoading:!1,stepOrderSendSuccess:!1,itKey:1,selCurrKey:1,resetCityKey:1}},validations(){return{formOrder:{phone:{phoneValid:x.withMessage("\u041D\u0435 \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443",this.validPhone)},telegram:{telegramValid:x.withMessage("\u041D\u0435 \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0438\u0439 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C \u043D\u0456\u043A\u043D\u0435\u0439\u043C",this.validTelegramNik)},invoiceAmount:{needCity:x.withMessage("\u0414\u043B\u044F \u0433\u043E\u0442\u0456\u0432\u043A\u043E\u0432\u043E\u0457 \u0432\u0430\u043B\u044E\u0442\u0438 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u043E\u0431\u0440\u0430\u0442\u0438 \u043C\u0456\u0441\u0442\u043E \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044F",this.validNeedCity),minValue:x.withMessage("\u041C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u0430 \u0441\u0443\u043C\u0430 \u043F\u0435\u0440\u0435\u043A\u0430\u0437\u0443 ",t=>Number(this.fromFormat(t))>=Number(this.currency_1.min_value))}}}},async created(){this.rate_usdpln=await this.getRateCurrency("USD","PLN"),this.rate_eurusd=await this.getRateCurrency("EUR","USD"),this.RATE_UAHUSD=40.35},mounted(){this.currensCollectionFrom=this.currencies.filter(t=>t.from),this.currency_1=this.currensCollectionFrom[1],this.currensCollectionTo=this.currencies.filter(t=>t.to),this.currency_2=this.currensCollectionTo[1]},methods:{startOrder(){this.stepOrderSend=!0,this.modalActive=!this.modalActive},closeModal(){this.modalActive=!this.modalActive},validPhone(t){return/^(\+3|)[0-9]{10,11}$/.test(t)},validTelegramNik(t){return/.*\B@(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*.*/gm.test(t)},validNeedCity(){return!(_.isEmpty(this.formOrder.city)&&this.getSelectedCurrency_1.type==="cash")},focusTelegram(){this.formOrder.telegram===null?this.formOrder.telegram="@":this.formOrder.telegram},blurTelegram(){this.formOrder.telegram.length<2?this.formOrder.telegram=null:this.formOrder.telegram},async getRatesFromGoogleSheet(t){try{return await(await fetch("api/rates/all").then(f=>f)).json()}catch{console.log("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0437 GSheets")}},async getRateCurrency(t,s){const T={headers:{authorization:"7aecaa111c052bc16c93d12daafd3087f1583c7d53d0f50eb6abbf1020b93a66"}};try{return await(await(await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${t}&tsyms=${s}`,T).then(v=>v)).json())[s]}catch{console.log("Error getting data from EXCHANGE_API")}},async submitHandler(){try{this.stepOrderLoading=!this.stepOrderLoading,this.stepOrderSend=!this.stepOrderSend,await axios.post(route("order.store"),{city:this.formOrder.city,currency_from:this.currency_1,currency_to:this.currency_2,invoiceAmount:this.fromFormat(this.formOrder.invoiceAmount),withdrawAmount:this.fromFormat(this.formOrder.withdrawAmount),phone:this.formOrder.phone,telegram:this.formOrder.telegram}).then(t=>{t.statusText==="OK"&&(this.stepOrderLoading=!this.stepOrderLoading,this.stepOrderSendSuccess=!this.stepOrderSendSuccess)}),setTimeout(()=>{this.resetState()},5e3)}catch{}},resetState(){this.modalActive=!1,this.formOrder.invoiceAmount="",this.formOrder.withdrawAmount="",this.stepOrderSend=!1,this.stepOrderSendSuccess=!1,this.v$.$reset()},setSelectedCity(t){this.formOrder.city=t},selectedCurrency_1(t){this.currency_1=t,this.CalcExchange()},selectedCurrency_2(t){this.currency_2=t,this.CalcExchange()},isAllForCalc(){return!(!this.RATE_UAHUSD||!this.FIAT_PROFIT||!this.rate_usdpln||!this.rate_eurusd)},toFormat(t){return t.length&&t.indexOf(",")>-1&&(t=t.split(",").join("")),new Intl.NumberFormat("en").format(Number(t)).toString()},fromFormat(t){return Number(t.split(",").join(""))},CalcHandler(){var s;let t=0;if(this.formOrder.city&&(t=(s=new Proxy(this.formOrder.city,{}).coeff)!=null?s:0),this.rate_usdpln||(this.rate_usdpln=this.getRateCurrency("USD","PLN")),!this.isAllForCalc()){console.log("Error Data fo Calculation");return}this.currency_2.cc==="PLN"&&this.currency_2.type==="bank"?this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.FIAT_PROFIT*this.rate_usdpln),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t/this.RATE_UAHUSD*this.FIAT_PROFIT*this.rate_usdpln),this.itKey++):this.currency_1.cc==="USD"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t*this.FIAT_PROFIT*this.rate_usdpln),this.itKey++):this.currency_1.cc==="EUR"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.rate_eurusd*t*this.FIAT_PROFIT*this.rate_usdpln),this.itKey++):this.currency_1.cc==="USDT"&&this.currency_1.type==="crypto"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.CRYPTA_PROFIT_EU*this.rate_usdpln),this.itKey++):this.currency_2.cc==="PLN"&&this.currency_2.type==="cash"?this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.FIAT_PROFIT*t*this.rate_usdpln*this.CASH_VARSHAVA),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.FIAT_PROFIT*this.rate_usdpln*this.CASH_VARSHAVA),this.itKey++):this.currency_2.cc==="USD"&&this.currency_2.type==="payservice"?this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t/this.RATE_UAHUSD*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="USD"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="EUR"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t/this.rate_eurusd*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="USDT"&&this.currency_1.type==="crypto"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.CRYPTA_PROFIT_EU),this.itKey++):this.currency_2.cc==="EUR"&&this.currency_2.type==="payservice"?this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD/this.rate_eurusd*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*.998/this.RATE_UAHUSD*this.FIAT_PROFIT/this.rate_eurusd),this.itKey++):this.currency_1.cc==="USD"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t/this.rate_eurusd*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="EUR"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="USDT"&&this.currency_1.type==="crypto"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.CRYPTA_PROFIT_EU/this.rate_eurusd),this.itKey++):this.currency_2.cc==="USDT"&&this.currency_2.type==="crypto"?this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t/this.RATE_UAHUSD*this.CRYPTA_PROFIT_UA),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.CRYPTA_PROFIT_UA),this.itKey++):this.currency_1.cc==="USD"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t*this.CRYPTA_PROFIT_UA),this.itKey++):this.currency_1.cc==="EUR"&&this.currency_1.type==="cash"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t/this.rate_eurusd*this.CRYPTA_PROFIT_UA),this.itKey++):this.currency_2.cc==="EUR"&&this.currency_2.type==="bank"&&(this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.rate_eurusd*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t/this.RATE_UAHUSD*this.FIAT_PROFIT/this.rate_eurusd),this.itKey++):this.currency_1.cc==="USD"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t*this.FIAT_PROFIT/this.rate_eurusd),this.itKey++):this.currency_1.cc==="EUR"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="USDT"&&this.currency_1.type==="crypto"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.CRYPTA_PROFIT_EU/this.rate_eurusd),this.itKey++))}},computed:{showInputTelegram(){return!(this.formOrder.phone!==null&&this.formOrder.phone.length>0)},showInputPhone(){return!(this.formOrder.telegram!==null&&this.formOrder.telegram.length>0)},currenciesFrom(){return this.currencies.filter(t=>t.from)},currenciesTo(){return this.currencies.filter(t=>!t.from)},getSelectedCurrency_1(){return{...new Proxy(this.currency_1,{})}},getSelectedCurrency_2(){return{...new Proxy(this.currency_2,{})}},getMinValueC_1(){return new Proxy(this.currency_1,{}).min_value},isGetCalcData(){return!(this.rate_usdpln&&this.rate_eurusd&&this.RATE_UAHUSD)}},watch:{isOpenSelectCity(){this.isOpenSelectCity?this.$refs.selectDiv.classList.add("open"):this.$refs.selectDiv.classList.remove("open")},currency_1(){this.currency_1.type!=="cash"&&(this.formOrder.city={},this.resetCityKey++),this.CalcHandler(),this.formOrder.withdrawAmount=this.toFormat(this.formOrder.withdrawAmount)},currency_2(){this.CalcHandler()},"formOrder.invoiceAmount":function(){this.formOrder.invoiceAmount=this.toFormat(this.formOrder.invoiceAmount),this.CalcHandler()},"formOrder.withdrawAmount":function(){this.formOrder.withdrawAmount=this.toFormat(this.formOrder.withdrawAmount)},"formOrder.city":function(){this.CalcHandler()},RATE_UAHUSD(){this.selCurrKey++},modalActive(){this.modalActive?document.body.style.overflow="hidden":setTimeout(()=>{document.body.style.overflow=""},500)}}},q=e("title",null,"\u041F\u0435\u0440\u0435\u043A\u0430\u0437 \u043A\u043E\u0448\u0442\u0456\u0432 \u0437 \u0423\u043A\u0440\u0430\u0457\u043D\u0438",-1),Q=e("meta",{"head-key":"description",name:"description",content:"This is the default description"},null,-1),J=e("link",{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,-1),W={class:"max-w-7xl mx-auto min-h-screen text-white","x-data":"layout"},$={class:"flex w-full items-center justify-between p-4 pt-8 pb-4 sm:pb-14"},ee={class:"logo flex items-center space-x-2 cursor-pointer"},te=["src"],re=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 stroke-2 hover:stroke-2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"})],-1),se=[re],ie={class:"flex"},oe={class:"relative py-6 flex flex-col justify-center"},ne={class:"flex w-100 justify-end lg:hidden"},ce=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"stroke-blue-900 w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),le=[ce],ae=e("span",null,"\u041F\u0440 \u043D\u0430\u0441",-1),he={class:"w-full p-4 z-0"},de={class:"mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2"},ue={class:"bg-orion lg:pt-2 pt-3 w-full px-2 text-left shadow-md bg-white shadow-lg rounded-lg"},me={class:"relative flex flex-col min-w-0 break-words w-full mb-8"},fe=e("div",{class:"px-4 py-1 sm:py-5 flex-auto"},[e("h2",{class:"text-indigo-100 tracking-wide text-3xl font-bold"},"\u0412\u0456\u0434\u0434\u0430\u0454\u0442\u0435")],-1),_e={class:"px-1 sm:px-4 py-2 sm:py-5 text-blue-600"},ye={class:"currency-select justify-center w-90 px-0 md:px-3 py-3 rounded-md text-blue-600 cursor-pointer"},pe={class:"py-3 sm:py-5 flex-auto amountInput relative"},ge=["disabled"],we={class:"pb-1 text-sm warning-msg tracking-wide"},Ae={key:0},xe={key:1},ve={class:"currencyName block text-gray-200"},Oe={class:"px-8 hidden sm:block relative"},be=e("div",{class:"mb-1 text-blue-200/75 text-lg"},"\u041A\u0443\u0440\u0441\u0438 \u0432\u0430\u043B\u044E\u0442",-1),Te={class:"text-gray-100/75 text-xs"},Ce=e("div",{class:"title"}," \u041A\u0443\u0440\u0441 UAH/USD:",-1),Fe={key:0},ke={key:1,class:"rate-result px-2"},Ue={class:"mb-1 flex"},Se=e("div",{class:"title"}," \u041A\u0443\u0440\u0441 USD/PLN:",-1),Re={key:0},Ie={key:1,class:"rate-result px-2"},Me={class:"mb-1 flex"},Pe=e("div",{class:"title"}," \u041A\u0443\u0440\u0441 EUR/USD:",-1),He={key:0},De={key:1,class:"rate-result px-2"},Ee={class:"bg-orion lg:pt-2 pt-3 w-full px-2 text-left shadow-md shadow-lg rounded-lg"},Ke={class:"relative flex flex-col min-w-0 break-words"},Ve=e("div",{class:"px-4 py-1 sm:py-5 flex-auto"},[e("h2",{class:"text-indigo-100 tracking-wide text-3xl font-bold"},"\u041E\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u0435")],-1),Le={class:"px-1 sm:px-4 py-5 flex-auto text-blue-600"},Ne={class:"currency-select justify-center w-90 px-0 md:px-3 py-3 rounded-md text-blue-600 cursor-pointer"},je={class:"py-3 sm:py-5 flex-auto amountInput relative"},ze={class:"currencyName block text-gray-200"},Be={class:"bottonBlock flex flex-auto justify-center pt-4 pb-6"},Xe={key:0},Ye=e("h2",{class:"max-w-[600px] pb-6 pt-6 text-center"},"\u0417\u0430\u043B\u0438\u0448\u0442\u0435 \u0432\u0430\u0448 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443 \u0430\u0431\u043E \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C \u0456 \u043C\u0438 \u0437\u0432'\u044F\u0436\u0435\u043C\u043E\u0441\u044C \u0437 \u0432\u0430\u043C\u0438 \u0434\u043B\u044F \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u043E\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457",-1),Ge={class:"w-full max-w-sm mx-auto"},Ze={key:0,class:"relative z-0 mb-6 w-full group"},qe=e("label",{for:"floating_phone",class:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"\u0422\u0435\u043B\u0435\u0444\u043E\u043D +380 XX XXX XX XX",-1),Qe={key:0,class:"text-red-600 input-errors pt-2 text-sm warning-msg"},Je={key:1,class:"relative z-0 mb-4 w-full group"},We=e("div",null,"\u0410\u0411\u041E",-1),$e=[We],et={key:2,class:"relative z-0 mb-6 w-full group"},tt=e("label",{for:"floating_telegram",class:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"\u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C ( @YourTelegramNik )",-1),rt={key:0,class:"text-red-600 input-errors pt-2 text-sm warning-msg"},st={class:"md:flex justify-center md:items-center pb-6 mt-8"},it={class:"md:w-1/2 text-center"},ot={key:1},nt=e("div",{class:"p-4 flex flex-col items-center"},[e("div",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"text-emerald-500 w-10 h-10"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})])]),e("h2",{class:"max-w-[600px] pb-2 pt-3 text-center text-2xl text-emerald-500"},"\u0414\u044F\u043A\u0443\u0454\u043C\u043E \u0437\u0430 \u0412\u0430\u0448\u0443 \u0437\u0430\u044F\u0432\u043A\u0443! \u041D\u0430\u0448 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0437\u0432'\u044F\u0436\u0435\u0442\u044C\u0441\u044F \u0437 \u0412\u0430\u043C\u0438 \u043D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0438\u043C \u0447\u0430\u0441\u043E\u043C."),e("p",{class:"hidden ax-w-[600px] pb-6 pt-2 text-center text-xl text-black"},"\u041D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430\u0448 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0437\u0432'\u044F\u0436\u0435\u0442\u044C\u0441\u044F \u0437 \u0432\u0430\u043C\u0438...")],-1),ct=[nt],lt={key:0,class:"fixed bottom-0 right-0 px-6 py-4 sm:block"};function at(t,s,f,T,r,c){const v=y("Head"),u=y("Link"),k=y("MySelect"),C=y("v-select"),O=y("Spinner"),U=y("my-modal");return o(),n(b,null,[a(v,null,{default:h(()=>[q,Q,J]),_:1}),e("main",W,[e("header",$,[e("div",ee,[e("img",{src:"/images/logo.svg"},null,8,te),a(u,{class:"hidden sm:block ml-5 text-3xl sm:text-4xl",href:"/"},{default:h(()=>[m("OrionPay")]),_:1})]),e("div",{ref:"selectDiv",onClick:s[0]||(s[0]=i=>r.isOpenSelectCity=!r.isOpenSelectCity),class:"selectDiv relative"},[(o(),p(k,{contentClasses:["px-3","py-2","rounded-md","text-blue-100","cursor-pointer","appearance-none","round","w-[180px]"],items:f.cities,onUpdateSelect:c.setSelectedCity,placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E",defValue:{},class:g("city-select relative"),key:r.resetCityKey},null,8,["items","onUpdateSelect"]))],512),e("button",{onClick:s[1]||(s[1]=i=>r.isOpenMobileMenu=!r.isOpenMobileMenu),id:"hamburger-botton",class:"-mr-2 mobile-menu-button p-4 focus:outline-none lg:hidden cursor-pointer"},se)]),e("div",ie,[e("aside",{class:g([[r.isOpenMobileMenu?["h-screen","z-20","translate-x-0","mob-menu-open","bg-white","text-blue-700"]:["h-96","-translate-x-full"]],"absolute inset-y-0 left-0 transform lg:relative lg:translate-x-0 transition duration-200 ease-in-out md:flex w-72 flex-col space-y-2 bg-transparen p-2"])},[e("div",oe,[e("div",ne,[e("button",{class:"flex text-blue-700 text-4xl font-bold opacity-70 hover:opacity-100 duration-300",onClick:s[2]||(s[2]=i=>r.isOpenMobileMenu=!r.isOpenMobileMenu)},le)]),a(u,{href:t.route("home.index"),class:g([{"active-menu text-white":t.$page.url==="/"},"flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600"])},{default:h(()=>[m("\u041E\u0431\u043C\u0456\u043D")]),_:1},8,["href","class"]),a(u,{href:"/",class:"hidden flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600"},{default:h(()=>[ae]),_:1}),a(u,{href:t.route("faq.index"),class:"flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600"},{default:h(()=>[m("FAQ (\u0427\u0430\u0441\u0442\u0456 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F)")]),_:1},8,["href"])])],2),e("div",he,[e("dl",de,[e("div",ue,[e("div",me,[fe,e("div",_e,[e("div",ye,[(o(),p(C,{options:r.currensCollectionFrom,clearable:!1,label:"name",value:c.getSelectedCurrency_1,reduce:i=>i,modelValue:r.currency_1,"onUpdate:modelValue":s[3]||(s[3]=i=>r.currency_1=i),getOptionLabel:i=>i.name,onInput:c.selectedCurrency_1,key:r.selCurrKey},null,8,["options","value","reduce","modelValue","getOptionLabel","onInput"]))])]),e("div",pe,[w(e("input",{"onUpdate:modelValue":s[4]||(s[4]=i=>r.v$.formOrder.invoiceAmount.$model=i),type:"text",disabled:c.isGetCalcData,class:"bg-transparent cursor-text without-spin-btn mt-0 block w-full focus:border-indigo-300 focus:outline-none text-gray-200 border-0 border-b-2 border-gray-200 cursor-pointer focus:ring-0"},null,8,ge),[[A,r.v$.formOrder.invoiceAmount.$model]]),(o(),n("div",{class:"input-errors pt-2",key:r.itKey},[(o(!0),n(b,null,I(r.v$.formOrder.invoiceAmount.$errors,i=>(o(),n("div",we,[i.$validator==="minValue"?(o(),n("span",Ae,l(i.$message)+" "+l(r.currency_1.min_value)+" "+l(r.currency_1.cc),1)):i.$validator==="needCity"?(o(),n("span",xe,l(i.$message),1)):d("",!0)]))),256))])),e("div",ve,l(r.currency_1.name),1)]),e("div",Oe,[be,e("ul",Te,[(o(),n("li",{class:"mb-1 flex",key:r.itKey},[Ce,r.RATE_UAHUSD?(o(),n("div",ke,l(r.RATE_UAHUSD),1)):(o(),n("div",Fe,[a(O)]))])),e("li",Ue,[Se,r.rate_usdpln?(o(),n("div",Ie,l(r.rate_usdpln),1)):(o(),n("div",Re,[a(O)]))]),e("li",Me,[Pe,r.rate_eurusd?(o(),n("div",De,l(r.rate_eurusd),1)):(o(),n("div",He,[a(O)]))])])])])]),e("div",Ee,[e("div",Ke,[Ve,e("div",Le,[e("div",Ne,[(o(),p(C,{options:r.currensCollectionTo,clearable:!1,value:c.getSelectedCurrency_2,reduce:i=>i,modelValue:r.currency_2,"onUpdate:modelValue":s[5]||(s[5]=i=>r.currency_2=i),getOptionLabel:i=>i.name,onInput:c.selectedCurrency_2,key:r.selCurrKey},null,8,["options","value","reduce","modelValue","getOptionLabel","onInput"]))])]),e("div",je,[w((o(),n("input",{key:r.itKey,"onUpdate:modelValue":s[6]||(s[6]=i=>r.formOrder.withdrawAmount=i),type:"text",class:"bg-transparent cursor-text without-spin-btn mt-0 block w-full focus:border-indigo-300 focus:outline-none text-gray-200 border-0 border-b-2 border-gray-200 cursor-pointer focus:ring-0"})),[[A,r.formOrder.withdrawAmount]]),e("div",ze,l(r.currency_2.name),1)]),e("div",Be,[e("button",{onClick:s[7]||(s[7]=(...i)=>c.startOrder&&c.startOrder(...i)),class:"btn px-10 w-80 py-4 uppercase text-white shadow hover:bg-indigo-700 bg-indigo-800 tracking-wide rounded-lg"},"\u041F\u043E\u0434\u0430\u0442\u0438 \u0437\u0430\u044F\u0432\u043A\u0443")])])])])])]),a(U,{loading:r.stepOrderLoading,modalActive:r.modalActive,onModalClose:c.closeModal},{default:h(()=>[r.stepOrderSend?(o(),n("div",Xe,[m(l(c.showInputTelegram)+" "+l(c.showInputPhone)+" ",1),Ye,e("div",Ge,[c.showInputPhone?(o(),n("div",Ze,[w(e("input",{"onUpdate:modelValue":s[8]||(s[8]=i=>r.v$.formOrder.phone.$model=i),type:"text",name:"floating_email",id:"floating_phone",class:g([[r.v$.formOrder.phone.$error?"border-red-600":""],"dark:focus:border-blue-500 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer"]),placeholder:" ",required:""},null,2),[[A,r.v$.formOrder.phone.$model]]),qe,r.v$.formOrder.phone.$error?(o(),n("div",Qe,l(r.v$.formOrder.phone.phoneValid.$message),1)):d("",!0)])):d("",!0),c.showInputTelegram&&c.showInputPhone?(o(),n("div",Je,$e)):d("",!0),c.showInputTelegram?(o(),n("div",et,[w(e("input",{onFocus:s[9]||(s[9]=(...i)=>c.focusTelegram&&c.focusTelegram(...i)),onBlur:s[10]||(s[10]=(...i)=>c.blurTelegram&&c.blurTelegram(...i)),"onUpdate:modelValue":s[11]||(s[11]=i=>r.v$.formOrder.telegram.$model=i),type:"text",id:"floating_telegram",class:g([[r.v$.formOrder.telegram.$error?"border-rose-600":""],"dark:focus:border-blue-500 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer"]),placeholder:" ",required:""},null,34),[[A,r.v$.formOrder.telegram.$model]]),tt,r.v$.formOrder.telegram.$error?(o(),n("div",rt,l(r.v$.formOrder.telegram.telegramValid.$message),1)):d("",!0)])):d("",!0),e("div",st,[e("div",it,[e("button",{onClick:s[12]||(s[12]=M((...i)=>c.submitHandler&&c.submitHandler(...i),["prevent"])),class:"shadow bg-indigo-700 hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-10 rounded",type:"button"}," \u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438 ")])])])])):r.stepOrderSendSuccess?(o(),n("div",ot,ct)):d("",!0)]),_:1},8,["loading","modalActive","onModalClose"]),f.canLogin?(o(),n("div",lt,[t.$page.props.auth.user?(o(),p(u,{key:0,href:t.route("dashboard"),class:"text-sm text-white dark:text-gray-500 underline"},{default:h(()=>[m("Dashboard")]),_:1},8,["href"])):(o(),n(b,{key:1},[a(u,{href:t.route("login"),class:"text-sm text-white dark:text-gray-500 underline"},{default:h(()=>[m("Log in")]),_:1},8,["href"]),f.canRegister?(o(),p(u,{key:0,href:t.route("register"),class:"ml-4 text-sm text-white dark:text-gray-500 underline"},{default:h(()=>[m("Register")]),_:1},8,["href"])):d("",!0)],64))])):d("",!0)])],64)}const _t=F(Z,[["render",at]]);export{_t as default};
