import{o,c,a as e,H as R,L as I,r as h,b as a,w as d,p as O,n as m,g as y,v as g,F as C,x as M,t as l,e as w,s as u,f as P}from"./app.37dee851.js";import{M as H}from"./MainLayout.7f562204.js";import{M as D,C as E,a as K,s as V,u as L,c as A}from"./vue-select.e6427620.js";import{_ as N}from"./TextInput.79ebc5aa.js";import{_ as F}from"./_plugin-vue_export-helper.cdc0426e.js";import{S as j}from"./Sidebar.ff402984.js";const B={},z={class:"loading-spinner px-2 text-center"},X=e("svg",{class:"inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),Y=e("span",{class:"sr-only"},"Loading...",-1),G=[X,Y];function Z(t,s){return o(),c("div",z,G)}const q=F(B,[["render",Z]]);const Q={name:"Index",layout:H,components:{Head:R,Link:I,MySelect:D,TextInput:N,vSelect:E,MyModal:K,InputNumber:V,Spinner:q,Sidebar:j},props:["canLogin","canRegister","currencies","cities","status"],data(){return{EXCHANGE_API:"https://api.exchangerate.host/latest?base=",FIAT_PROFIT:.96,CRYPTA_PROFIT_UA:.98,CRYPTA_PROFIT_EU:.97,CASH_VARSHAVA:.997,v$:L(),user:{},currensCollectionFrom:[],currensCollectionTo:[],currency_1:{},currency_2:{},invoiceAmountMessage:"",RATE_UAHUSD:null,rate_usdpln:null,rate_eurusd:null,isOpenMobileMenu:!1,modalActive:!1,isOpenSelectCity:!1,formOrder:{city:null,phone:null,telegram:null,invoiceAmount:"",withdrawAmount:""},stepOrderSend:!1,stepOrderLoading:!1,stepOrderSendSuccess:!1,itKey:1,selCurrKey:1,resetCityKey:1}},validations(){return{formOrder:{phone:{phoneValid:A.withMessage("\u041D\u0435 \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443",this.validPhone)},telegram:{telegramValid:A.withMessage("\u041D\u0435 \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0438\u0439 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C \u043D\u0456\u043A\u043D\u0435\u0439\u043C",this.validTelegramNik)},invoiceAmount:{needCity:A.withMessage("\u0414\u043B\u044F \u0433\u043E\u0442\u0456\u0432\u043A\u043E\u0432\u043E\u0457 \u0432\u0430\u043B\u044E\u0442\u0438 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u043E\u0431\u0440\u0430\u0442\u0438 \u043C\u0456\u0441\u0442\u043E \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044F",this.validNeedCity),minValue:A.withMessage("\u041C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u0430 \u0441\u0443\u043C\u0430 \u043F\u0435\u0440\u0435\u043A\u0430\u0437\u0443 ",t=>Number(this.fromFormat(t))>=Number(this.currency_1.min_value))}}}},async created(){this.rate_usdpln=await this.getRateCurrency("USD","PLN"),this.rate_eurusd=await this.getRateCurrency("EUR","USD"),this.RATE_UAHUSD=40.35},mounted(){this.currensCollectionFrom=this.currencies.filter(t=>t.from),this.currency_1=this.currensCollectionFrom[1],this.currensCollectionTo=this.currencies.filter(t=>t.to),this.currency_2=this.currensCollectionTo[1]},methods:{startOrder(){this.stepOrderSend=!0,this.modalActive=!this.modalActive},closeModal(){this.modalActive=!this.modalActive},validPhone(t){return/^(\+3|)[0-9]{10,11}$/.test(t)},validTelegramNik(t){return/.*\B@(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*.*/gm.test(t)},validNeedCity(){return!(_.isEmpty(this.formOrder.city)&&this.getSelectedCurrency_1.type==="cash")},focusTelegram(){this.formOrder.telegram===null?this.formOrder.telegram="@":this.formOrder.telegram},blurTelegram(){this.formOrder.telegram.length<2?this.formOrder.telegram=null:this.formOrder.telegram},async getRatesFromGoogleSheet(t){try{return await(await fetch("api/rates/all").then(f=>f)).json()}catch{console.log("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0437 GSheets")}},async getRateCurrency(t,s){const b={headers:{authorization:"7aecaa111c052bc16c93d12daafd3087f1583c7d53d0f50eb6abbf1020b93a66"}};try{return await(await(await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${t}&tsyms=${s}`,b).then(v=>v)).json())[s]}catch{console.log("Error getting data from EXCHANGE_API")}},async submitHandler(){try{this.stepOrderLoading=!this.stepOrderLoading,this.stepOrderSend=!this.stepOrderSend,await axios.post(route("order.store"),{city:this.formOrder.city,currency_from:this.currency_1,currency_to:this.currency_2,invoiceAmount:this.fromFormat(this.formOrder.invoiceAmount),withdrawAmount:this.fromFormat(this.formOrder.withdrawAmount),phone:this.formOrder.phone,telegram:this.formOrder.telegram}).then(t=>{t.statusText==="OK"&&(this.stepOrderLoading=!this.stepOrderLoading,this.stepOrderSendSuccess=!this.stepOrderSendSuccess)}),setTimeout(()=>{this.resetState()},5e3)}catch{}},resetState(){this.modalActive=!1,this.formOrder.invoiceAmount="",this.formOrder.withdrawAmount="",this.stepOrderSend=!1,this.stepOrderSendSuccess=!1,this.v$.$reset()},setSelectedCity(t){this.formOrder.city=t},selectedCurrency_1(t){this.currency_1=t,this.CalcExchange()},selectedCurrency_2(t){this.currency_2=t,this.CalcExchange()},isAllForCalc(){return!(!this.RATE_UAHUSD||!this.FIAT_PROFIT||!this.rate_usdpln||!this.rate_eurusd)},toFormat(t){return t.length&&t.indexOf(",")>-1&&(t=t.split(",").join("")),new Intl.NumberFormat("en").format(Number(t)).toString()},fromFormat(t){return Number(t.split(",").join(""))},CalcHandler(){var s;let t=0;if(this.formOrder.city&&(t=(s=new Proxy(this.formOrder.city,{}).coeff)!=null?s:0),this.rate_usdpln||(this.rate_usdpln=this.getRateCurrency("USD","PLN")),!this.isAllForCalc()){console.log("Error Data fo Calculation");return}this.currency_2.cc==="PLN"&&this.currency_2.type==="bank"?this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.FIAT_PROFIT*this.rate_usdpln),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t/this.RATE_UAHUSD*this.FIAT_PROFIT*this.rate_usdpln),this.itKey++):this.currency_1.cc==="USD"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t*this.FIAT_PROFIT*this.rate_usdpln),this.itKey++):this.currency_1.cc==="EUR"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.rate_eurusd*t*this.FIAT_PROFIT*this.rate_usdpln),this.itKey++):this.currency_1.cc==="USDT"&&this.currency_1.type==="crypto"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.CRYPTA_PROFIT_EU*this.rate_usdpln),this.itKey++):this.currency_2.cc==="PLN"&&this.currency_2.type==="cash"?this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.FIAT_PROFIT*t*this.rate_usdpln*this.CASH_VARSHAVA),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.FIAT_PROFIT*this.rate_usdpln*this.CASH_VARSHAVA),this.itKey++):this.currency_2.cc==="USD"&&this.currency_2.type==="payservice"?this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t/this.RATE_UAHUSD*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="USD"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="EUR"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t/this.rate_eurusd*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="USDT"&&this.currency_1.type==="crypto"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.CRYPTA_PROFIT_EU),this.itKey++):this.currency_2.cc==="EUR"&&this.currency_2.type==="payservice"?this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD/this.rate_eurusd*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*.998/this.RATE_UAHUSD*this.FIAT_PROFIT/this.rate_eurusd),this.itKey++):this.currency_1.cc==="USD"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t/this.rate_eurusd*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="EUR"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="USDT"&&this.currency_1.type==="crypto"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.CRYPTA_PROFIT_EU/this.rate_eurusd),this.itKey++):this.currency_2.cc==="USDT"&&this.currency_2.type==="crypto"?this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t/this.RATE_UAHUSD*this.CRYPTA_PROFIT_UA),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.CRYPTA_PROFIT_UA),this.itKey++):this.currency_1.cc==="USD"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t*this.CRYPTA_PROFIT_UA),this.itKey++):this.currency_1.cc==="EUR"&&this.currency_1.type==="cash"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t/this.rate_eurusd*this.CRYPTA_PROFIT_UA),this.itKey++):this.currency_2.cc==="EUR"&&this.currency_2.type==="bank"&&(this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.rate_eurusd*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t/this.RATE_UAHUSD*this.FIAT_PROFIT/this.rate_eurusd),this.itKey++):this.currency_1.cc==="USD"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t*this.FIAT_PROFIT/this.rate_eurusd),this.itKey++):this.currency_1.cc==="EUR"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="USDT"&&this.currency_1.type==="crypto"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.CRYPTA_PROFIT_EU/this.rate_eurusd),this.itKey++))}},computed:{showInputTelegram(){return!(this.formOrder.phone!==null&&this.formOrder.phone.length>0)},showInputPhone(){return!(this.formOrder.telegram!==null&&this.formOrder.telegram.length>0)},currenciesFrom(){return this.currencies.filter(t=>t.from)},currenciesTo(){return this.currencies.filter(t=>!t.from)},getSelectedCurrency_1(){return{...new Proxy(this.currency_1,{})}},getSelectedCurrency_2(){return{...new Proxy(this.currency_2,{})}},getMinValueC_1(){return new Proxy(this.currency_1,{}).min_value},isGetCalcData(){return!(this.rate_usdpln&&this.rate_eurusd&&this.RATE_UAHUSD)}},watch:{isOpenSelectCity(){this.isOpenSelectCity?this.$refs.selectDiv.classList.add("open"):this.$refs.selectDiv.classList.remove("open")},currency_1(){this.currency_1.type!=="cash"&&(this.formOrder.city={},this.resetCityKey++),this.CalcHandler(),this.formOrder.withdrawAmount=this.toFormat(this.formOrder.withdrawAmount)},currency_2(){this.CalcHandler()},"formOrder.invoiceAmount":function(){this.formOrder.invoiceAmount=this.toFormat(this.formOrder.invoiceAmount),this.CalcHandler()},"formOrder.withdrawAmount":function(){this.formOrder.withdrawAmount=this.toFormat(this.formOrder.withdrawAmount)},"formOrder.city":function(){this.CalcHandler()},RATE_UAHUSD(){this.selCurrKey++},modalActive(){this.modalActive?document.body.style.overflow="hidden":setTimeout(()=>{document.body.style.overflow=""},500)}}},J=e("title",null,"\u041F\u0435\u0440\u0435\u043A\u0430\u0437 \u043A\u043E\u0448\u0442\u0456\u0432 \u0437 \u0423\u043A\u0440\u0430\u0457\u043D\u0438",-1),W=e("meta",{"head-key":"description",name:"description",content:"This is the default description"},null,-1),$=e("link",{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,-1),ee={class:"max-w-7xl mx-auto text-white","x-data":"layout"},te={class:"flex w-full items-center justify-between p-4 pt-8 pb-4 sm:pb-14"},re={class:"logo flex items-center space-x-2 cursor-pointer"},se=["src"],ie=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 stroke-2 hover:stroke-2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"})],-1),oe=[ie],ne={class:"flex"},ce={class:"relative mt-2 py-6 flex flex-col justify-center"},le={class:"flex w-100 justify-end lg:hidden"},ae=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"stroke-blue-900 w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),he=[ae],de=e("i",{class:"mr-2 text-sm"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"})])],-1),ue=e("span",null,"\u041F\u0440 \u043D\u0430\u0441",-1),me=e("i",{class:"mr-2 text-sm"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"})])],-1),_e={class:"w-full p-4 z-0"},fe={class:"mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2"},pe={class:"bg-orion lg:pt-2 pt-3 w-full px-2 text-left shadow-md bg-white shadow-lg rounded-lg"},ye={class:"relative flex flex-col min-w-0 break-words w-full mb-8"},ge=e("div",{class:"px-4 py-1 sm:py-5 flex-auto"},[e("h2",{class:"text-indigo-100 tracking-wide text-3xl font-bold"},"\u0412\u0456\u0434\u0434\u0430\u0454\u0442\u0435")],-1),we={class:"px-1 sm:px-4 py-2 sm:py-5 text-blue-600"},Ae={class:"currency-select justify-center w-90 px-0 md:px-3 py-3 rounded-md text-blue-600 cursor-pointer"},ve={class:"py-3 sm:py-5 flex-auto amountInput relative"},xe=["disabled"],Oe={class:"pb-1 text-sm warning-msg tracking-wide"},be={key:0},Te={key:1},Ce={class:"currencyName block text-gray-200"},Fe={class:"px-8 hidden sm:block relative"},ke=e("div",{class:"mb-1 text-blue-200/75 text-lg"},"\u041A\u0443\u0440\u0441\u0438 \u0432\u0430\u043B\u044E\u0442",-1),Ue={class:"text-gray-100/75 text-xs"},Se=e("div",{class:"title"}," \u041A\u0443\u0440\u0441 UAH/USD:",-1),Re={key:0},Ie={key:1,class:"rate-result px-2"},Me={class:"mb-1 flex"},Pe=e("div",{class:"title"}," \u041A\u0443\u0440\u0441 USD/PLN:",-1),He={key:0},De={key:1,class:"rate-result px-2"},Ee={class:"mb-1 flex"},Ke=e("div",{class:"title"}," \u041A\u0443\u0440\u0441 EUR/USD:",-1),Ve={key:0},Le={key:1,class:"rate-result px-2"},Ne={class:"bg-orion lg:pt-2 pt-3 w-full px-2 text-left shadow-md shadow-lg rounded-lg"},je={class:"relative flex flex-col min-w-0 break-words"},Be=e("div",{class:"px-4 py-1 sm:py-5 flex-auto"},[e("h2",{class:"text-indigo-100 tracking-wide text-3xl font-bold"},"\u041E\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u0435")],-1),ze={class:"px-1 sm:px-4 py-5 flex-auto text-blue-600"},Xe={class:"currency-select justify-center w-90 px-0 md:px-3 py-3 rounded-md text-blue-600 cursor-pointer"},Ye={class:"py-3 sm:py-5 flex-auto amountInput relative"},Ge={class:"currencyName block text-gray-200"},Ze={class:"bottonBlock flex flex-auto justify-center pt-4 pb-6"},qe={key:0},Qe=e("h2",{class:"max-w-[600px] pb-6 pt-6 text-center"},"\u0417\u0430\u043B\u0438\u0448\u0442\u0435 \u0432\u0430\u0448 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443 \u0430\u0431\u043E \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C \u0456 \u043C\u0438 \u0437\u0432'\u044F\u0436\u0435\u043C\u043E\u0441\u044C \u0437 \u0432\u0430\u043C\u0438 \u0434\u043B\u044F \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u043E\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457",-1),Je={class:"w-full max-w-sm mx-auto"},We={key:0,class:"relative z-0 mb-6 w-full group"},$e=e("label",{for:"floating_phone",class:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"\u0422\u0435\u043B\u0435\u0444\u043E\u043D +380 XX XXX XX XX",-1),et={key:0,class:"text-red-600 input-errors pt-2 text-sm warning-msg"},tt={key:1,class:"relative z-0 mb-4 w-full group"},rt=e("div",null,"\u0410\u0411\u041E",-1),st=[rt],it={key:2,class:"relative z-0 mb-6 w-full group"},ot=e("label",{for:"floating_telegram",class:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"\u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C ( @YourTelegramNik )",-1),nt={key:0,class:"text-red-600 input-errors pt-2 text-sm warning-msg"},ct={class:"md:flex justify-center md:items-center pb-6 mt-8"},lt={class:"md:w-1/2 text-center"},at={key:1},ht=e("div",{class:"p-4 flex flex-col items-center"},[e("div",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"text-emerald-500 w-10 h-10"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})])]),e("h2",{class:"max-w-[600px] pb-2 pt-3 text-center text-2xl text-emerald-500"},"\u0414\u044F\u043A\u0443\u0454\u043C\u043E \u0437\u0430 \u0412\u0430\u0448\u0443 \u0437\u0430\u044F\u0432\u043A\u0443! \u041D\u0430\u0448 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0437\u0432'\u044F\u0436\u0435\u0442\u044C\u0441\u044F \u0437 \u0412\u0430\u043C\u0438 \u043D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0438\u043C \u0447\u0430\u0441\u043E\u043C."),e("p",{class:"hidden ax-w-[600px] pb-6 pt-2 text-center text-xl text-black"},"\u041D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430\u0448 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0437\u0432'\u044F\u0436\u0435\u0442\u044C\u0441\u044F \u0437 \u0432\u0430\u043C\u0438...")],-1),dt=[ht];function ut(t,s,f,b,r,n){const v=h("Head"),p=h("Link"),k=h("MySelect"),U=h("Sidebar"),T=h("v-select"),x=h("Spinner"),S=h("my-modal");return o(),c(C,null,[a(v,null,{default:d(()=>[J,W,$]),_:1}),e("main",ee,[e("header",te,[e("div",re,[e("img",{src:"/images/logo.svg"},null,8,se),a(p,{class:"hidden sm:block ml-5 text-3xl sm:text-4xl",href:"/"},{default:d(()=>[w("OrionPay")]),_:1})]),e("div",{ref:"selectDiv",onClick:s[0]||(s[0]=i=>r.isOpenSelectCity=!r.isOpenSelectCity),class:"selectDiv relative"},[(o(),O(k,{contentClasses:["px-3","py-2","rounded-md","text-blue-100","cursor-pointer","appearance-none","round","w-[180px]"],items:f.cities,onUpdateSelect:n.setSelectedCity,placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E",defValue:{},class:m("city-select relative"),key:r.resetCityKey},null,8,["items","onUpdateSelect"]))],512),e("button",{onClick:s[1]||(s[1]=i=>r.isOpenMobileMenu=!r.isOpenMobileMenu),id:"hamburger-botton",class:"-mr-2 mobile-menu-button p-4 focus:outline-none lg:hidden cursor-pointer"},oe)]),e("div",ne,[a(U,null,{menu:d(()=>[e("aside",{class:m([[r.isOpenMobileMenu?["h-screen","z-20","translate-x-0","mob-menu-open","bg-white","text-blue-700"]:["h-96","-translate-x-full"]],"absolute inset-y-0 left-0 transform lg:relative lg:translate-x-0 transition duration-200 ease-in-out md:flex w-80 flex-col space-y-2 bg-transparen p-2"])},[e("div",ce,[e("div",le,[e("button",{class:"flex text-blue-700 text-4xl font-bold opacity-70 hover:opacity-100 duration-300",onClick:s[2]||(s[2]=i=>r.isOpenMobileMenu=!r.isOpenMobileMenu)},he)]),a(p,{href:t.route("home"),class:m([{"active-menu text-white":t.$page.url==="/"},"flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600"])},{default:d(()=>[de,w(" \u041E\u0431\u043C\u0456\u043D ")]),_:1},8,["href","class"]),a(p,{href:"/",class:"hidden flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600"},{default:d(()=>[ue]),_:1}),a(p,{href:t.route("faqs"),class:"flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600"},{default:d(()=>[me,w(" FAQ (\u0427\u0430\u0441\u0442\u0456 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F) ")]),_:1},8,["href"])])],2)]),_:1}),e("div",_e,[e("dl",fe,[e("div",pe,[e("div",ye,[ge,e("div",we,[e("div",Ae,[(o(),O(T,{options:r.currensCollectionFrom,clearable:!1,label:"name",value:n.getSelectedCurrency_1,reduce:i=>i,modelValue:r.currency_1,"onUpdate:modelValue":s[3]||(s[3]=i=>r.currency_1=i),getOptionLabel:i=>i.name,onInput:n.selectedCurrency_1,key:r.selCurrKey},null,8,["options","value","reduce","modelValue","getOptionLabel","onInput"]))])]),e("div",ve,[y(e("input",{"onUpdate:modelValue":s[4]||(s[4]=i=>r.v$.formOrder.invoiceAmount.$model=i),type:"text",disabled:n.isGetCalcData,class:"bg-transparent cursor-text without-spin-btn mt-0 block w-full focus:border-indigo-300 focus:outline-none text-gray-200 border-0 border-b-2 border-gray-200 cursor-pointer focus:ring-0"},null,8,xe),[[g,r.v$.formOrder.invoiceAmount.$model]]),(o(),c("div",{class:"input-errors pt-2",key:r.itKey},[(o(!0),c(C,null,M(r.v$.formOrder.invoiceAmount.$errors,i=>(o(),c("div",Oe,[i.$validator==="minValue"?(o(),c("span",be,l(i.$message)+" "+l(r.currency_1.min_value)+" "+l(r.currency_1.cc),1)):i.$validator==="needCity"?(o(),c("span",Te,l(i.$message),1)):u("",!0)]))),256))])),e("div",Ce,l(r.currency_1.name),1)]),e("div",Fe,[ke,e("ul",Ue,[(o(),c("li",{class:"mb-1 flex",key:r.itKey},[Se,r.RATE_UAHUSD?(o(),c("div",Ie,l(r.RATE_UAHUSD),1)):(o(),c("div",Re,[a(x)]))])),e("li",Me,[Pe,r.rate_usdpln?(o(),c("div",De,l(r.rate_usdpln),1)):(o(),c("div",He,[a(x)]))]),e("li",Ee,[Ke,r.rate_eurusd?(o(),c("div",Le,l(r.rate_eurusd),1)):(o(),c("div",Ve,[a(x)]))])])])])]),e("div",Ne,[e("div",je,[Be,e("div",ze,[e("div",Xe,[(o(),O(T,{options:r.currensCollectionTo,clearable:!1,value:n.getSelectedCurrency_2,reduce:i=>i,modelValue:r.currency_2,"onUpdate:modelValue":s[5]||(s[5]=i=>r.currency_2=i),getOptionLabel:i=>i.name,onInput:n.selectedCurrency_2,key:r.selCurrKey},null,8,["options","value","reduce","modelValue","getOptionLabel","onInput"]))])]),e("div",Ye,[y((o(),c("input",{key:r.itKey,"onUpdate:modelValue":s[6]||(s[6]=i=>r.formOrder.withdrawAmount=i),type:"text",class:"bg-transparent cursor-text without-spin-btn mt-0 block w-full focus:border-indigo-300 focus:outline-none text-gray-200 border-0 border-b-2 border-gray-200 cursor-pointer focus:ring-0"})),[[g,r.formOrder.withdrawAmount]]),e("div",Ge,l(r.currency_2.name),1)]),e("div",Ze,[e("button",{onClick:s[7]||(s[7]=(...i)=>n.startOrder&&n.startOrder(...i)),class:"btn px-10 w-80 py-4 uppercase text-white shadow hover:bg-indigo-700 bg-indigo-800 tracking-wide rounded-lg"},"\u041F\u043E\u0434\u0430\u0442\u0438 \u0437\u0430\u044F\u0432\u043A\u0443")])])])])])]),a(S,{loading:r.stepOrderLoading,modalActive:r.modalActive,onModalClose:n.closeModal},{default:d(()=>[r.stepOrderSend?(o(),c("div",qe,[w(l(n.showInputTelegram)+" "+l(n.showInputPhone)+" ",1),Qe,e("div",Je,[n.showInputPhone?(o(),c("div",We,[y(e("input",{"onUpdate:modelValue":s[8]||(s[8]=i=>r.v$.formOrder.phone.$model=i),type:"text",name:"floating_email",id:"floating_phone",class:m([[r.v$.formOrder.phone.$error?"border-red-600":""],"dark:focus:border-blue-500 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer"]),placeholder:" ",required:""},null,2),[[g,r.v$.formOrder.phone.$model]]),$e,r.v$.formOrder.phone.$error?(o(),c("div",et,l(r.v$.formOrder.phone.phoneValid.$message),1)):u("",!0)])):u("",!0),n.showInputTelegram&&n.showInputPhone?(o(),c("div",tt,st)):u("",!0),n.showInputTelegram?(o(),c("div",it,[y(e("input",{onFocus:s[9]||(s[9]=(...i)=>n.focusTelegram&&n.focusTelegram(...i)),onBlur:s[10]||(s[10]=(...i)=>n.blurTelegram&&n.blurTelegram(...i)),"onUpdate:modelValue":s[11]||(s[11]=i=>r.v$.formOrder.telegram.$model=i),type:"text",id:"floating_telegram",class:m([[r.v$.formOrder.telegram.$error?"border-rose-600":""],"dark:focus:border-blue-500 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer"]),placeholder:" ",required:""},null,34),[[g,r.v$.formOrder.telegram.$model]]),ot,r.v$.formOrder.telegram.$error?(o(),c("div",nt,l(r.v$.formOrder.telegram.telegramValid.$message),1)):u("",!0)])):u("",!0),e("div",ct,[e("div",lt,[e("button",{onClick:s[12]||(s[12]=P((...i)=>n.submitHandler&&n.submitHandler(...i),["prevent"])),class:"shadow bg-indigo-700 hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-10 rounded",type:"button"}," \u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438 ")])])])])):r.stepOrderSendSuccess?(o(),c("div",at,dt)):u("",!0)]),_:1},8,["loading","modalActive","onModalClose"])])],64)}const wt=F(Q,[["render",ut]]);export{wt as default};