import{o as i,c as n,a as e,H as I,L as R,r as u,b as h,w as a,p as y,n as f,g,v as w,F as O,x as M,t as l,q as P,e as b,s as d,f as H}from"./app.d00bdad9.js";import{M as D}from"./MainLayout.94867c8a.js";import{M as E,C as K,a as V,s as L,u as N,c as v}from"./vue-select.9029ca23.js";import{_ as j}from"./TextInput.71ec15e7.js";import{_ as k}from"./_plugin-vue_export-helper.cdc0426e.js";import{S as B}from"./Sidebar.d549e474.js";const z={},X={class:"loading-spinner px-2 text-center"},Y=e("svg",{class:"inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),$=e("span",{class:"sr-only"},"Loading...",-1),G=[Y,$];function Z(t,s){return i(),n("div",X,G)}const q=k(z,[["render",Z]]);const Q={inheritAttrs:!0,name:"Index",layout:D,components:{Head:I,Link:R,MySelect:E,TextInput:j,vSelect:K,MyModal:V,InputNumber:L,Spinner:q,Sidebar:B},props:["canLogin","canRegister","currencies","cities","status","errors"],data(){return{EXCHANGE_API:"https://api.exchangerate.host/latest?base=",FIAT_PROFIT:.96,CRYPTA_PROFIT_UA:.98,CRYPTA_PROFIT_EU:.97,CASH_VARSHAVA:.997,v$:N(),user:{},currensCollectionFrom:[],currensCollectionTo:[],currency_1:{},currency_2:{},invoiceAmountMessage:"",RATE_UAHUSD:null,rate_usdpln:null,rate_eurusd:null,isOpenMobileMenu:!1,modalActive:!1,isOpenSelectCity:!1,formOrder:{city:null,phone:null,telegram:null,invoiceAmount:"",withdrawAmount:""},stepOrderSend:!1,stepOrderLoading:!1,stepOrderSendSuccess:!1,itKey:1,selCurrKey:1,resetCityKey:1,orderModalKey:1,showInputTelegram:!0,showInputPhone:!0}},validations(){return{formOrder:{phone:{phoneValid:v.withMessage("\u041D\u0435 \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443",this.validPhone)},telegram:{telegramValid:v.withMessage("\u041D\u0435 \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0438\u0439 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C \u043D\u0456\u043A\u043D\u0435\u0439\u043C",this.validTelegramNik)},invoiceAmount:{needCity:v.withMessage("\u0414\u043B\u044F \u0433\u043E\u0442\u0456\u0432\u043A\u043E\u0432\u043E\u0457 \u0432\u0430\u043B\u044E\u0442\u0438 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u043E\u0431\u0440\u0430\u0442\u0438 \u043C\u0456\u0441\u0442\u043E \u0432\u0456\u0434\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044F",this.validNeedCity),minValue:v.withMessage("\u041C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u0430 \u0441\u0443\u043C\u0430 \u043F\u0435\u0440\u0435\u043A\u0430\u0437\u0443 ",t=>Number(this.fromFormat(t))>=Number(this.currency_1.min_value))}}}},async created(){this.rate_usdpln=await this.getRateCurrency("USD","PLN"),this.rate_eurusd=await this.getRateCurrency("EUR","USD");let t=await this.getRatesFromGoogleSheet("UAH_USD");this.RATE_UAHUSD=t.UAH_USD},mounted(){this.currensCollectionFrom=this.currencies.filter(t=>t.from),this.currency_1=this.currensCollectionFrom[1],this.currensCollectionTo=this.currencies.filter(t=>t.to),this.currency_2=this.currensCollectionTo[1]},methods:{startOrder(){this.stepOrderSend=!0,this.modalActive=!this.modalActive},closeModal(){this.modalActive=!this.modalActive},validPhone(t){return/^(\+3|)[0-9]{11}$/.test(t)},validTelegramNik(t){return/.*\B@(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*.*/gm.test(t)},validNeedCity(){return!(_.isEmpty(this.formOrder.city)&&this.getSelectedCurrency_1.type==="cash")},focusTelegram(){this.formOrder.telegram===null&&(this.v$.formOrder.telegram.$model="@"),this.showInputTelegram=!0,this.showInputPhone=!1},blurTelegram(){this.v$.formOrder.telegram.$model.length<2&&(this.formOrder.telegram=null,this.v$.formOrder.telegram.$reset(),this.showInputTelegram=!0,this.showInputPhone=!0)},focusPhone(){this.v$.formOrder.phone.$model===null&&(this.v$.formOrder.phone.$model="+380"),this.showInputTelegram=!1,this.showInputPhone=!0},blurPhone(){this.v$.formOrder.phone.$error&&this.v$.formOrder.phone.$model.length<5&&(this.formOrder.phone=null,this.v$.formOrder.phone.$reset(),this.showInputTelegram=!0,this.showInputPhone=!0)},async getRatesFromGoogleSheet(t){try{return await(await fetch("api/rates/all").then(m=>(console.log("data resp",m),m))).json()}catch{console.log("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0437 GSheets")}},async getRateCurrency(t,s){const T={headers:{authorization:"7aecaa111c052bc16c93d12daafd3087f1583c7d53d0f50eb6abbf1020b93a66"}};try{return await(await(await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${t}&tsyms=${s}`,T).then(A=>A)).json())[s]}catch{console.log("Error getting data from EXCHANGE_API")}},async submitHandler(){if(this.v$.$invalid){if(this.v$.$touch(),this.v$.formOrder.invoiceAmount.$error||!this.v$.formOrder.invoiceAmount.$model.length)return this.modalActive=!1,null;if(this.v$.formOrder.phone.$error&&this.v$.formOrder.telegram.$error)return this.modalActive=!0,null}try{this.stepOrderLoading=!this.stepOrderLoading,this.stepOrderSend=!this.stepOrderSend,await axios.post(route("order.store"),{city:this.formOrder.city,currency_from:this.currency_1,currency_to:this.currency_2,invoiceAmount:this.fromFormat(this.formOrder.invoiceAmount),withdrawAmount:this.fromFormat(this.formOrder.withdrawAmount),phone:this.formOrder.phone,telegram:this.formOrder.telegram}).then(t=>{console.log("res.statusText",t.statusText),t.statusText==="OK"&&(this.stepOrderLoading=!this.stepOrderLoading,this.stepOrderSendSuccess=!this.stepOrderSendSuccess)}),setTimeout(()=>{this.resetState()},3e3)}catch{}},resetState(){this.modalActive=!1,this.formOrder.invoiceAmount="",this.formOrder.withdrawAmount="",this.formOrder.phone=null,this.formOrder.telegram=null,this.stepOrderSend=!1,this.stepOrderSendSuccess=!1,this.v$.$reset(),this.showInputTelegram=!0,this.showInputPhone=!0,this.orderModalKey++},setSelectedCity(t){this.formOrder.city=t},selectedCurrency_1(t){this.currency_1=t,this.CalcExchange()},selectedCurrency_2(t){this.currency_2=t,this.CalcExchange()},isAllForCalc(){return!(!this.RATE_UAHUSD||!this.FIAT_PROFIT||!this.rate_usdpln||!this.rate_eurusd)},toFormat(t){return t.length&&t.indexOf(",")>-1&&(t=t.split(",").join("")),new Intl.NumberFormat("en").format(Number(t)).toString()},fromFormat(t){return Number(t.split(",").join(""))},CalcHandler(){var s;let t=0;if(this.formOrder.city&&(t=(s=new Proxy(this.formOrder.city,{}).coeff)!=null?s:0),this.rate_usdpln||(this.rate_usdpln=this.getRateCurrency("USD","PLN")),!this.isAllForCalc()){console.log("Error Data for Calculate");return}this.currency_2.cc==="PLN"&&this.currency_2.type==="bank"?this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.FIAT_PROFIT*this.rate_usdpln),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t/this.RATE_UAHUSD*this.FIAT_PROFIT*this.rate_usdpln),this.itKey++):this.currency_1.cc==="USD"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t*this.FIAT_PROFIT*this.rate_usdpln),this.itKey++):this.currency_1.cc==="EUR"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.rate_eurusd*t*this.FIAT_PROFIT*this.rate_usdpln),this.itKey++):this.currency_1.cc==="USDT"&&this.currency_1.type==="crypto"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.CRYPTA_PROFIT_EU*this.rate_usdpln),this.itKey++):this.currency_2.cc==="PLN"&&this.currency_2.type==="cash"?this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.FIAT_PROFIT*t*this.rate_usdpln*this.CASH_VARSHAVA),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.FIAT_PROFIT*this.rate_usdpln*this.CASH_VARSHAVA),this.itKey++):this.currency_2.cc==="USD"&&this.currency_2.type==="payservice"?this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t/this.RATE_UAHUSD*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="USD"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="EUR"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t/this.rate_eurusd*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="USDT"&&this.currency_1.type==="crypto"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.CRYPTA_PROFIT_EU),this.itKey++):this.currency_2.cc==="EUR"&&this.currency_2.type==="payservice"?this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD/this.rate_eurusd*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*.998/this.RATE_UAHUSD*this.FIAT_PROFIT/this.rate_eurusd),this.itKey++):this.currency_1.cc==="USD"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t/this.rate_eurusd*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="EUR"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="USDT"&&this.currency_1.type==="crypto"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.CRYPTA_PROFIT_EU/this.rate_eurusd),this.itKey++):this.currency_2.cc==="USDT"&&this.currency_2.type==="crypto"?this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t/this.RATE_UAHUSD*this.CRYPTA_PROFIT_UA),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.CRYPTA_PROFIT_UA),this.itKey++):this.currency_1.cc==="USD"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t*this.CRYPTA_PROFIT_UA),this.itKey++):this.currency_1.cc==="EUR"&&this.currency_1.type==="cash"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t/this.rate_eurusd*this.CRYPTA_PROFIT_UA),this.itKey++):this.currency_2.cc==="EUR"&&this.currency_2.type==="bank"&&(this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.rate_eurusd*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t/this.RATE_UAHUSD*this.FIAT_PROFIT/this.rate_eurusd),this.itKey++):this.currency_1.cc==="USD"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t*this.FIAT_PROFIT/this.rate_eurusd),this.itKey++):this.currency_1.cc==="EUR"&&this.currency_1.type==="cash"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*t*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="USDT"&&this.currency_1.type==="crypto"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.CRYPTA_PROFIT_EU/this.rate_eurusd),this.itKey++))}},computed:{showInputTelegram1(){return!(this.formOrder.phone!==null&&this.formOrder.phone.length>0)},showInputPhone1(){return!(this.formOrder.telegram!==null&&this.formOrder.telegram.length>0)},currenciesFrom(){return this.currencies.filter(t=>t.from)},currenciesTo(){return this.currencies.filter(t=>!t.from)},getSelectedCurrency_1(){return{...new Proxy(this.currency_1,{})}},getSelectedCurrency_2(){return{...new Proxy(this.currency_2,{})}},getMinValueC_1(){return new Proxy(this.currency_1,{}).min_value},isGetCalcData(){return!(this.rate_usdpln&&this.rate_eurusd&&this.RATE_UAHUSD)}},watch:{isOpenSelectCity(){this.isOpenSelectCity?this.$refs.selectDiv.classList.add("open"):this.$refs.selectDiv.classList.remove("open")},currency_1(){this.currency_1.type!=="cash"&&(this.formOrder.city={},this.resetCityKey++),this.CalcHandler(),this.formOrder.withdrawAmount=this.toFormat(this.formOrder.withdrawAmount)},currency_2(){this.CalcHandler()},"formOrder.invoiceAmount":function(){this.formOrder.invoiceAmount=this.toFormat(this.formOrder.invoiceAmount),this.CalcHandler()},"formOrder.withdrawAmount":function(){this.formOrder.withdrawAmount=this.toFormat(this.formOrder.withdrawAmount)},"formOrder.city":function(){this.CalcHandler()},RATE_UAHUSD(){this.selCurrKey++},modalActive(){this.modalActive?document.body.style.overflow="hidden":setTimeout(()=>{document.body.style.overflow=""},500)}}},J=e("title",null,"\u041F\u0435\u0440\u0435\u043A\u0430\u0437 \u043A\u043E\u0448\u0442\u0456\u0432 \u0437 \u0423\u043A\u0440\u0430\u0457\u043D\u0438",-1),W=e("meta",{"head-key":"description",name:"description",content:"This is the default description"},null,-1),ee=e("link",{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,-1),te={class:"max-w-full md:max-w-7xl mx-auto text-white","x-data":"layout"},re={class:"relative flex w-full items-center justify-between p-4 pt-14 lg:pt-8 pb-4 sm:pb-14"},se={class:"logo-info-wrap w-full flex flex-row gap-7 justify-between"},oe={class:"logo flex items-center space-x-2 cursor-pointer"},ie=["src"],ne=P('<div class="time-works absolute top-0 py-2 left-0 justify-center lg:justify-end w-full bg-indigo-800 lg:bg-transparent lg:relative flex items-center text-red-500"><div class="message-content text-white flex"><i class="mr-2 text-sm"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></i> \u0433\u043E\u0434\u0438\u043D\u0438 \u0440\u043E\u0431\u043E\u0442\u0438 10:00 - 19:00, \u041F\u043D - \u041F\u0442 </div></div>',1),ce=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 stroke-2 hover:stroke-2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"})],-1),le=[ce],he={class:"flex"},ue={class:"relative mt-2 py-6 flex flex-col justify-center"},ae={class:"flex w-100 justify-end lg:hidden"},de=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"stroke-blue-900 w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),me=[de],fe=e("i",{class:"mr-2 text-sm"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"})])],-1),pe=e("span",null,"\u041F\u0440 \u043D\u0430\u0441",-1),_e=e("i",{class:"mr-2 text-sm"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"})])],-1),ye={class:"w-full p-4 z-0"},ge={class:"mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2"},we={class:"bg-orion lg:pt-2 pt-3 w-full px-2 text-left shadow-md bg-white shadow-lg rounded-lg"},ve={class:"relative flex flex-col min-w-0 break-words w-full mb-8"},Ae=e("div",{class:"px-4 py-1 sm:py-5 flex-auto"},[e("h2",{class:"text-indigo-100 tracking-wide text-3xl font-bold"},"\u0412\u0456\u0434\u0434\u0430\u0454\u0442\u0435")],-1),xe={class:"px-1 sm:px-4 py-2 sm:py-5 text-blue-600"},Oe={class:"currency-select justify-center w-90 px-0 md:px-3 py-3 rounded-md text-blue-600 cursor-pointer"},be={class:"py-3 sm:py-5 flex-auto amountInput relative"},Te=["disabled"],Ce={class:"pb-1 text-sm warning-msg tracking-wide"},ke={key:0},Fe={key:1},Ue={class:"currencyName block text-gray-200"},Se={class:"px-8 hidden sm:block relative"},Ie=e("div",{class:"mb-1 text-blue-200/75 text-lg"},"\u041A\u0443\u0440\u0441\u0438 \u0432\u0430\u043B\u044E\u0442",-1),Re={class:"text-gray-100/75 text-xs"},Me=e("div",{class:"title"}," \u041A\u0443\u0440\u0441 UAH/USD:",-1),Pe={key:0},He={key:1,class:"rate-result px-2"},De={class:"mb-1 flex"},Ee=e("div",{class:"title"}," \u041A\u0443\u0440\u0441 USD/PLN:",-1),Ke={key:0},Ve={key:1,class:"rate-result px-2"},Le={class:"mb-1 flex"},Ne=e("div",{class:"title"}," \u041A\u0443\u0440\u0441 EUR/USD:",-1),je={key:0},Be={key:1,class:"rate-result px-2"},ze={class:"bg-orion lg:pt-2 pt-3 w-full px-2 text-left shadow-md shadow-lg rounded-lg"},Xe={class:"relative flex flex-col min-w-0 break-words"},Ye=e("div",{class:"px-4 py-1 sm:py-5 flex-auto"},[e("h2",{class:"text-indigo-100 tracking-wide text-3xl font-bold"},"\u041E\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u0435")],-1),$e={class:"px-1 sm:px-4 py-5 flex-auto text-blue-600"},Ge={class:"currency-select justify-center w-90 px-0 md:px-3 py-3 rounded-md text-blue-600 cursor-pointer"},Ze={class:"py-3 sm:py-5 flex-auto amountInput relative"},qe={class:"currencyName block text-gray-200"},Qe={class:"bottonBlock flex flex-auto justify-center pt-4 pb-6"},Je=e("h2",{class:"max-w-[600px] pb-6 pt-6 text-center"},"\u0417\u0430\u043B\u0438\u0448\u0442\u0435 \u0432\u0430\u0448 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443 \u0430\u0431\u043E \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C \u0456 \u043C\u0438 \u0437\u0432'\u044F\u0436\u0435\u043C\u043E\u0441\u044C \u0437 \u0432\u0430\u043C\u0438 \u0434\u043B\u044F \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u043E\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457",-1),We={class:"w-full max-w-sm mx-auto"},et={key:0,class:"relative z-0 mb-6 w-full group"},tt=e("label",{for:"floating_phone",class:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"\u0422\u0435\u043B\u0435\u0444\u043E\u043D +380 XX XXX XX XX",-1),rt={key:0,class:"text-red-600 input-errors pt-2 text-sm warning-msg"},st={key:1,class:"relative z-0 mb-4 w-full group"},ot=e("div",null,"\u0410\u0411\u041E",-1),it=[ot],nt={key:2,class:"relative z-0 mb-6 w-full group"},ct=e("label",{for:"floating_telegram",class:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"\u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C ( @YourTelegramNik )",-1),lt={key:0,class:"text-red-600 input-errors pt-2 text-sm warning-msg"},ht={class:"md:flex justify-center md:items-center pb-6 mt-8"},ut={class:"md:w-1/2 text-center"},at={key:1,class:"p-4 flex flex-col items-center"},dt=e("div",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"text-emerald-500 w-10 h-10"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 12.75l6 6 9-13.5"})])],-1),mt=e("h2",{class:"max-w-[600px] pb-2 pt-3 text-center text-2xl text-emerald-500"},"\u0414\u044F\u043A\u0443\u0454\u043C\u043E \u0437\u0430 \u0412\u0430\u0448\u0443 \u0437\u0430\u044F\u0432\u043A\u0443! \u041D\u0430\u0448 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0437\u0432'\u044F\u0436\u0435\u0442\u044C\u0441\u044F \u0437 \u0412\u0430\u043C\u0438 \u043D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0438\u043C \u0447\u0430\u0441\u043E\u043C.",-1),ft=e("p",{class:"hidden ax-w-[600px] pb-6 pt-2 text-center text-xl text-black"},"\u041D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0438\u043C \u0447\u0430\u0441\u043E\u043C \u043D\u0430\u0448 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0437\u0432'\u044F\u0436\u0435\u0442\u044C\u0441\u044F \u0437 \u0432\u0430\u043C\u0438...",-1),pt=[dt,mt,ft];function _t(t,s,m,T,r,c){const A=u("Head"),p=u("Link"),F=u("MySelect"),U=u("Sidebar"),C=u("v-select"),x=u("Spinner"),S=u("my-modal");return i(),n(O,null,[h(A,null,{default:a(()=>[J,W,ee]),_:1}),e("main",te,[e("header",re,[e("div",se,[e("div",oe,[e("img",{src:"/images/logo.svg"},null,8,ie),h(p,{class:"hidden sm:block ml-5 text-3xl sm:text-4xl",href:"/"},{default:a(()=>[b("OrionPay")]),_:1})]),ne]),e("div",{ref:"selectDiv",onClick:s[0]||(s[0]=o=>r.isOpenSelectCity=!r.isOpenSelectCity),class:"selectDiv relative ml-8"},[(i(),y(F,{contentClasses:["px-3","py-2","rounded-md","text-blue-100","cursor-pointer","appearance-none","round","w-[180px]"],items:m.cities,onUpdateSelect:c.setSelectedCity,placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E",defValue:{},class:f("city-select relative"),key:r.resetCityKey},null,8,["items","onUpdateSelect"]))],512),e("button",{onClick:s[1]||(s[1]=o=>r.isOpenMobileMenu=!r.isOpenMobileMenu),id:"hamburger-botton",class:"-mr-2 mobile-menu-button p-4 focus:outline-none lg:hidden cursor-pointer"},le)]),e("div",he,[h(U,null,{menu:a(()=>[e("aside",{class:f([[r.isOpenMobileMenu?["h-screen","z-20","translate-x-0","mob-menu-open","bg-white","text-blue-700"]:["h-96","-translate-x-full"]],"absolute inset-y-0 left-0 transform lg:relative lg:translate-x-0 transition duration-200 ease-in-out md:flex w-80 flex-col space-y-2 bg-transparen p-2"])},[e("div",ue,[e("div",ae,[e("button",{class:"flex text-blue-700 text-4xl font-bold opacity-70 hover:opacity-100 duration-300",onClick:s[2]||(s[2]=o=>r.isOpenMobileMenu=!r.isOpenMobileMenu)},me)]),h(p,{href:t.route("home"),class:f([{"active-menu text-white":t.$page.url==="/"},"flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600"])},{default:a(()=>[fe,b(" \u041E\u0431\u043C\u0456\u043D ")]),_:1},8,["href","class"]),h(p,{href:"/",class:"hidden flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600"},{default:a(()=>[pe]),_:1}),h(p,{href:t.route("faqs"),class:"flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600"},{default:a(()=>[_e,b(" FAQ (\u0427\u0430\u0441\u0442\u0456 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F) ")]),_:1},8,["href"])])],2)]),_:1}),e("div",ye,[e("dl",ge,[e("div",we,[e("div",ve,[Ae,e("div",xe,[e("div",Oe,[(i(),y(C,{options:r.currensCollectionFrom,clearable:!1,label:"name",value:c.getSelectedCurrency_1,reduce:o=>o,modelValue:r.currency_1,"onUpdate:modelValue":s[3]||(s[3]=o=>r.currency_1=o),getOptionLabel:o=>o.name,onInput:c.selectedCurrency_1,key:r.selCurrKey},null,8,["options","value","reduce","modelValue","getOptionLabel","onInput"]))])]),e("div",be,[g(e("input",{"onUpdate:modelValue":s[4]||(s[4]=o=>r.v$.formOrder.invoiceAmount.$model=o),type:"text",disabled:c.isGetCalcData,class:"bg-transparent cursor-text without-spin-btn mt-0 block w-full focus:border-indigo-300 focus:outline-none text-gray-200 border-0 border-b-2 border-gray-200 cursor-pointer focus:ring-0"},null,8,Te),[[w,r.v$.formOrder.invoiceAmount.$model]]),(i(),n("div",{class:"input-errors pt-2",key:r.itKey},[(i(!0),n(O,null,M(r.v$.formOrder.invoiceAmount.$errors,o=>(i(),n("div",Ce,[o.$validator==="minValue"?(i(),n("span",ke,l(o.$message)+" "+l(r.currency_1.min_value)+" "+l(r.currency_1.cc),1)):o.$validator==="needCity"?(i(),n("span",Fe,l(o.$message),1)):d("",!0)]))),256))])),e("div",Ue,l(r.currency_1.name),1)]),e("div",Se,[Ie,e("ul",Re,[(i(),n("li",{class:"mb-1 flex",key:r.itKey},[Me,r.RATE_UAHUSD?(i(),n("div",He,l(r.RATE_UAHUSD),1)):(i(),n("div",Pe,[h(x)]))])),e("li",De,[Ee,r.rate_usdpln?(i(),n("div",Ve,l(r.rate_usdpln),1)):(i(),n("div",Ke,[h(x)]))]),e("li",Le,[Ne,r.rate_eurusd?(i(),n("div",Be,l(r.rate_eurusd),1)):(i(),n("div",je,[h(x)]))])])])])]),e("div",ze,[e("div",Xe,[Ye,e("div",$e,[e("div",Ge,[(i(),y(C,{options:r.currensCollectionTo,clearable:!1,value:c.getSelectedCurrency_2,reduce:o=>o,modelValue:r.currency_2,"onUpdate:modelValue":s[5]||(s[5]=o=>r.currency_2=o),getOptionLabel:o=>o.name,onInput:c.selectedCurrency_2,key:r.selCurrKey},null,8,["options","value","reduce","modelValue","getOptionLabel","onInput"]))])]),e("div",Ze,[g((i(),n("input",{key:r.itKey,"onUpdate:modelValue":s[6]||(s[6]=o=>r.formOrder.withdrawAmount=o),type:"text",class:"bg-transparent cursor-text without-spin-btn mt-0 block w-full focus:border-indigo-300 focus:outline-none text-gray-200 border-0 border-b-2 border-gray-200 cursor-pointer focus:ring-0"})),[[w,r.formOrder.withdrawAmount]]),e("div",qe,l(r.currency_2.name),1)]),e("div",Qe,[e("button",{onClick:s[7]||(s[7]=(...o)=>c.startOrder&&c.startOrder(...o)),class:"btn px-10 w-80 py-4 uppercase text-white shadow hover:bg-indigo-700 bg-indigo-800 tracking-wide rounded-lg"},"\u041F\u043E\u0434\u0430\u0442\u0438 \u0437\u0430\u044F\u0432\u043A\u0443")])])])])])]),(i(),y(S,{loading:r.stepOrderLoading,modalActive:r.modalActive,onModalClose:c.closeModal,key:r.orderModalKey},{default:a(()=>[r.stepOrderSend?(i(),n(O,{key:0},[Je,e("div",We,[r.showInputPhone?(i(),n("div",et,[g(e("input",{onFocus:s[8]||(s[8]=(...o)=>c.focusPhone&&c.focusPhone(...o)),onBlur:s[9]||(s[9]=(...o)=>c.blurPhone&&c.blurPhone(...o)),"onUpdate:modelValue":s[10]||(s[10]=o=>r.v$.formOrder.phone.$model=o),type:"text",name:"floating_email",id:"floating_phone",class:f([[r.v$.formOrder.phone.$error?"border-red-600":""],"dark:focus:border-blue-500 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"]),placeholder:" ",required:""},null,34),[[w,r.v$.formOrder.phone.$model]]),tt,r.v$.formOrder.phone.$error?(i(),n("div",rt,l(r.v$.formOrder.phone.phoneValid.$message),1)):d("",!0)])):d("",!0),r.showInputTelegram&&r.showInputPhone?(i(),n("div",st,it)):d("",!0),r.showInputTelegram?(i(),n("div",nt,[g(e("input",{onFocus:s[11]||(s[11]=(...o)=>c.focusTelegram&&c.focusTelegram(...o)),onBlur:s[12]||(s[12]=(...o)=>c.blurTelegram&&c.blurTelegram(...o)),"onUpdate:modelValue":s[13]||(s[13]=o=>r.v$.formOrder.telegram.$model=o),type:"text",id:"floating_telegram",class:f([[r.v$.formOrder.telegram.$error?"border-rose-600":""],"dark:focus:border-blue-500 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer"]),placeholder:" ",required:""},null,34),[[w,r.v$.formOrder.telegram.$model]]),ct,r.v$.formOrder.telegram.$error?(i(),n("div",lt,l(r.v$.formOrder.telegram.telegramValid.$message),1)):d("",!0)])):d("",!0),e("div",ht,[e("div",ut,[e("button",{onClick:s[14]||(s[14]=H((...o)=>c.submitHandler&&c.submitHandler(...o),["prevent"])),class:"shadow bg-indigo-700 hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-10 rounded",type:"button"}," \u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438 ")])])])],64)):r.stepOrderSendSuccess?(i(),n("div",at,pt)):d("",!0)]),_:1},8,["loading","modalActive","onModalClose"]))])],64)}const Ot=k(Q,[["render",_t]]);export{Ot as default};
