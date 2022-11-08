import{H as b,L as U,y as T,s as u,o as l,c as a,d as n,a as e,w as h,n as m,h as f,z as y,t as c,k as p,F,f as A,g as R}from"./app.f9bcdf38.js";import{M as k}from"./MainLayout.55245dd5.js";import{M as C,C as I,a as S,s as M,u as P,c as v}from"./vue-select.d8f87922.js";import{_ as H}from"./TextInput.73c20ccc.js";import{_ as D}from"./_plugin-vue_export-helper.cdc0426e.js";const E={name:"Welcome",layout:k,components:{Head:b,Link:U,MySelect:C,TextInput:H,vSelect:I,MyModal:S,InputNumber:M},data(){return{EXCHANGE_API:"https://api.exchangerate.host/latest?base=",FIAT_PROFIT:.96,CRYPTA_PROFIT_UA:.98,CRYPTA_PROFIT_EU:.97,CASH_VARSHAVA:.997,v$:P(),user:{},curFrom:[],curTo:[],currency_1:{},currency_2:{},invoiceAmountMessage:"",RATE_UAHUSD:40.6,rate_usdpln:null,rate_eurusd:null,isOpenMobileMenu:!1,modalActive:!1,isOpenSelectCity:!1,formOrder:{city:null,phone:null,telegram:null,invoiceAmount:"",withdrawAmount:""},cities:[{id:1,name:"\u0412\u0456\u043D\u043D\u0438\u0446\u044F",coeff:.995},{id:2,name:"\u0414\u043D\u0456\u043F\u0440\u043E",coeff:.995},{id:3,name:"\u0416\u0438\u0442\u043E\u043C\u0438\u0440",coeff:.995},{id:4,name:"\u0417\u0430\u043F\u043E\u0440\u0456\u0436\u0436\u044F",coeff:.995},{id:5,name:"\u0406\u0432\u0430\u043D\u043E-\u0424\u0440\u0430\u043D\u043A\u0456\u0432\u0441\u044C\u043A",coeff:.995},{id:6,name:"\u041A\u0438\u0457\u0432",coeff:.998}],currencies:[{id:1,name:"UAH (\u0433\u043E\u0442\u0456\u0432\u043A\u0430)",cc:"UAH",type:"cash",from:!0,to:!1,min_value:4e4},{id:2,name:"UAH (\u0431\u0435\u0437\u0433\u043E\u0442\u0456\u0432\u043A\u043E\u0432\u0430)",cc:"UAH",type:"bank",from:!0,to:!1,min_value:4e4},{id:3,name:"USD (\u0433\u043E\u0442\u0456\u0432\u043A\u0430)",cc:"USD",type:"cash",from:!0,to:!1,min_value:1e3},{id:4,name:"EUR (\u0433\u043E\u0442\u0456\u0432\u043A\u0430)",cc:"EUR",type:"cash",from:!0,to:!1,min_value:1e3},{id:5,name:"USDT (TRC-20)",cc:"USDT",type:"crypto",from:!0,to:!0,min_value:0},{id:6,name:"PLN (\u0433\u043E\u0442\u0456\u0432\u043A\u0430, \u0412\u0430\u0440\u0448\u0430\u0432\u0430)",cc:"PLN",type:"cash",from:!1,to:!1,min_value:0},{id:7,name:"PLN (\u0431\u0435\u0437\u0433\u043E\u0442\u0456\u0432\u043A\u0430 \u043D\u0430 IBAN)",cc:"PLN",type:"bank",from:!1,to:!0,min_value:0},{id:8,name:"USD (\u043D\u0430 Revolut, Wise...)",cc:"USD",type:"payservice",from:!1,to:!0,min_value:0},{id:9,name:"EUR (\u043D\u0430 Revolut, Wise...)",cc:"EUR",type:"payservice",from:!1,to:!0,min_value:0},{id:10,name:"EUR (\u0431\u0435\u0437\u0433\u043E\u0442\u0456\u0432\u043A\u0430 \u043D\u0430 IBAN)",cc:"EUR",type:"bank",from:!1,to:!0,min_value:0}],itKey:1}},validations(){return{formOrder:{phone:{phoneValid:v.withMessage("\u041D\u0435 \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443",this.validPhone)},telegram:{telegramValid:v.withMessage("\u041D\u0435 \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0438\u0439 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C \u043D\u0456\u043A\u043D\u0435\u0439\u043C",this.validTelegramNik)},invoiceAmount:{minValue:v.withMessage(`\u041C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u0430 \u0441\u0443\u043C\u0430 \u043F\u0435\u0440\u0435\u043A\u0430\u0437\u0443 ${this.getSelectedCurrency_1.min_value}`,r=>Number(this.fromFormat(r))>=Number(this.getSelectedCurrency_1.min_value))}}}},async mounted(){this.rate_usdpln=await this.getRateCurrency("USD","PLN"),this.rate_eurusd=await this.getRateCurrency("EUR","USD"),this.curFrom=this.currencies.filter(r=>r.from),this.currency_1=this.curFrom[1],this.curTo=this.currencies.filter(r=>r.to),this.currency_2=this.curTo[1]},methods:{toggleModal(){this.modalActive=!this.modalActive},validPhone(r){return/^(\+3|)[0-9]{10,11}$/.test(r)},validTelegramNik(r){return/.*\B@(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*.*/gm.test(r)},async getRatesData(r){try{return await(await fetch(this.EXCHANGE_API+r).then(_=>_)).json()}catch{console.log("\u041E\u0448\u0438\u0431\u043A\u0430 \u0432 EXCHANGE_API")}},async getRateCurrency(r,s){return(await this.getRatesData(r)).rates[s]},async submitHandler(){try{await T.Inertia.post("/orders",{city:this.formOrder.city,currency_from:this.currency_1,currency_to:this.currency_2,invoiceAmount:this.formOrder.invoiceAmount,withdrawAmount:this.formOrder.withdrawAmount,phone:this.formOrder.phone,telegram:this.formOrder.telegram}),this.modalActive=!1,this.formOrder.invoiceAmount="",this.formOrder.withdrawAmount="",this.v$.reset()}catch{}},setSelectedCity(r){this.formOrder.city=r},selectedCurrency_1(r){this.currency_1=r,this.CalcExchange()},selectedCurrency_2(r){this.currency_2=r,this.CalcExchange()},isAllForCalc(){return!(!this.RATE_UAHUSD||!this.FIAT_PROFIT||!this.rate_usdpln||!this.rate_eurusd)},toFormat(r){return r.length&&r.indexOf(",")>-1&&(r=r.split(",").join("")),new Intl.NumberFormat("en").format(Number(r)).toString()},fromFormat(r){return Number(r.split(",").join(""))},CalcHandler(){if(this.rate_usdpln||(this.rate_usdpln=this.getRateCurrency("USD","PLN")),!this.isAllForCalc()){console.log("Error Data fo Calculation");return}this.currency_2.cc==="PLN"&&this.currency_2.type==="bank"?this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.FIAT_PROFIT*this.rate_usdpln),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff/this.RATE_UAHUSD*this.FIAT_PROFIT*this.rate_usdpln),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="USD"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff*this.FIAT_PROFIT*this.rate_usdpln),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="EUR"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.rate_eurusd*this.formOrder.city.coeff*this.FIAT_PROFIT*this.rate_usdpln),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="USDT"&&this.currency_1.type==="crypto"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.CRYPTA_PROFIT_EU*this.rate_usdpln),this.itKey++):this.currency_2.cc==="PLN"&&this.currency_2.type==="cash"?this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.FIAT_PROFIT*this.formOrder.city.coeff*this.rate_usdpln*this.CASH_VARSHAVA),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.FIAT_PROFIT*this.rate_usdpln*this.CASH_VARSHAVA),this.itKey++):this.currency_2.cc==="USD"&&this.currency_2.type==="payservice"?this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff/this.RATE_UAHUSD*this.FIAT_PROFIT),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="USD"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff*this.FIAT_PROFIT),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="EUR"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff/this.rate_eurusd*this.FIAT_PROFIT),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="USDT"&&this.currency_1.type==="crypto"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.CRYPTA_PROFIT_EU),this.itKey++):this.currency_2.cc==="EUR"&&this.currency_2.type==="payservice"?this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD/this.rate_eurusd*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*.998/40.6*this.FIAT_PROFIT/this.rate_eurusd),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="USD"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff*this.rate_eurusd*this.FIAT_PROFIT),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="EUR"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff*this.FIAT_PROFIT),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="USDT"&&this.currency_1.type==="crypto"&&(this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.CRYPTA_PROFIT_EU*this.rate_eurusd),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E")):this.currency_2.cc==="USDT"&&this.currency_2.type==="crypto"?this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff/this.RATE_UAHUSD*this.CRYPTA_PROFIT_UA),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.CRYPTA_PROFIT_UA),this.itKey++):this.currency_1.cc==="USD"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff*this.CRYPTA_PROFIT_UA),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="EUR"&&this.currency_1.type==="cash"&&(this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff/this.rate_eurusd*this.CRYPTA_PROFIT_UA),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E")):this.currency_2.cc==="EUR"&&this.currency_2.type==="bank"&&(this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.rate_eurusd*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff/this.RATE_UAHUSD*this.FIAT_PROFIT/this.rate_eurusd),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="USD"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff*this.FIAT_PROFIT/this.rate_eurusd),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="EUR"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff*this.FIAT_PROFIT),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="USDT"&&this.currency_1.type==="crypto"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.CRYPTA_PROFIT_EU/this.rate_eurusd),this.itKey++))}},computed:{currenciesFrom(){return this.currencies.filter(r=>r.from)},currenciesTo(){return this.currencies.filter(r=>!r.from)},getSelectedCurrency_1(){return{...new Proxy(this.currency_1,{})}},getSelectedCurrency_2(){return{...new Proxy(this.currency_2,{})}}},watch:{isOpenSelectCity(){this.isOpenSelectCity?this.$refs.selectDiv.classList.add("open"):this.$refs.selectDiv.classList.remove("open")},currency_1(){this.CalcHandler(),this.formOrder.withdrawAmount=this.toFormat(this.formOrder.withdrawAmount)},currency_2(){this.CalcHandler()},"formOrder.invoiceAmount":function(){this.formOrder.invoiceAmount=this.toFormat(this.formOrder.invoiceAmount),this.CalcHandler(),console.log({...new Proxy(this.v$.formOrder.invoiceAmount,{})})},"formOrder.withdrawAmount":function(){this.formOrder.withdrawAmount=this.toFormat(this.formOrder.withdrawAmount)},"formOrder.city":function(){this.CalcHandler()},modalActive(){this.modalActive?document.body.style.overflow="hidden":setTimeout(()=>{document.body.style.overflow=""},500)}}},K={class:"max-w-7xl mx-auto min-h-screen text-white","x-data":"layout"},N={class:"flex w-full items-center justify-between p-4 pt-8 pb-4 sm:pb-14"},V={class:"logo flex items-center space-x-2 cursor-pointer"},L=["src"],j=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 stroke-2 hover:stroke-2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"})],-1),X=[j],Y={class:"flex"},z={class:"relative py-6 flex flex-col justify-center"},B={class:"flex w-100 justify-end lg:hidden"},W=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"stroke-blue-900 w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),q=[W],G=e("span",null,"\u041F\u0440 \u043D\u0430\u0441",-1),Z={class:"w-full p-4 z-0"},Q={class:"mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2"},J={class:"bg-orion lg:pt-2 pt-3 w-full px-2 text-left shadow-md bg-white shadow-lg rounded-lg"},$={class:"relative flex flex-col min-w-0 break-words w-full mb-8"},ee=e("div",{class:"px-4 py-1 sm:py-5 flex-auto"},[e("h2",{class:"text-indigo-100 tracking-wide text-3xl font-bold"},"\u0412\u0456\u0434\u0434\u0430\u0454\u0442\u0435")],-1),te={class:"px-1 sm:px-4 py-2 sm:py-5 text-blue-600"},re={class:"currency-select justify-center w-90 px-0 md:px-3 py-3 rounded-md text-blue-600 cursor-pointer"},se={class:"py-3 sm:py-5 flex-auto amountInput relative"},ie={key:0,class:"pt-2 text-sm warning-msg tracking-wide"},oe={class:"currencyName block text-gray-200"},ne={class:"px-8 hidden sm:block relative"},ce=e("div",{class:"mb-1 text-blue-200/75 text-lg"},"\u041A\u0443\u0440\u0441\u0438 \u0432\u0430\u043B\u044E\u0442",-1),le={class:"text-gray-100/75 text-xs"},ae={class:"mb-1"},ue={class:"mb-1"},he={class:"mb-1"},de={class:"bg-orion lg:pt-2 pt-3 w-full px-2 text-left shadow-md shadow-lg rounded-lg"},me={class:"relative flex flex-col min-w-0 break-words"},fe=e("div",{class:"px-4 py-1 sm:py-5 flex-auto"},[e("h2",{class:"text-indigo-100 tracking-wide text-3xl font-bold"},"\u041E\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u0435")],-1),ye={class:"px-1 sm:px-4 py-5 flex-auto text-blue-600"},_e={class:"currency-select justify-center w-90 px-0 md:px-3 py-3 rounded-md text-blue-600 cursor-pointer"},pe={class:"py-3 sm:py-5 flex-auto amountInput relative"},Ae={class:"currencyName block text-gray-200"},ve={class:"bottonBlock flex flex-auto justify-center pt-4 pb-6"},Oe=e("h2",{class:"max-w-[600px] pb-6 pt-6 text-center"},"\u0417\u0430\u043B\u0438\u0448\u0442\u0435 \u0432\u0430\u0448 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443 \u0430\u0431\u043E \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C \u0456 \u043C\u0438 \u0437\u0432'\u044F\u0436\u0435\u043C\u043E\u0441\u044C \u0437 \u0432\u0430\u043C\u0438 \u0434\u043B\u044F \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u043E\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 ",-1),we={class:"w-full max-w-sm mx-auto"},ge={class:"relative z-0 mb-6 w-full group"},xe=e("label",{for:"floating_phone",class:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"\u0422\u0435\u043B\u0435\u0444\u043E\u043D +380 XX XXX XX XX",-1),be={key:0,class:"text-red-600 input-errors pt-2 text-sm warning-msg"},Ue={class:"relative z-0 mb-6 w-full group"},Te=e("label",{for:"floating_telegram",class:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"\u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C ( @YourTelegramNik )",-1),Fe={key:0,class:"text-red-600 input-errors pt-2 text-sm warning-msg"},Re={class:"md:flex justify-center md:items-center pb-6 mt-8"},ke={class:"md:w-1/2 text-center"};function Ce(r,s,_,Ie,t,o){const w=u("Head"),d=u("Link"),g=u("MySelect"),O=u("v-select"),x=u("my-modal");return l(),a(F,null,[n(w,{title:"Welcome"}),e("main",K,[e("header",N,[e("div",V,[e("img",{src:"/images/logo.svg"},null,8,L),n(d,{class:"hidden sm:block ml-5 text-3xl sm:text-4xl",href:"/"},{default:h(()=>[A("OrionPay")]),_:1})]),e("div",{ref:"selectDiv",onClick:s[0]||(s[0]=i=>t.isOpenSelectCity=!t.isOpenSelectCity),class:"selectDiv relative"},[n(g,{contentClasses:["px-3","py-2","rounded-md","text-blue-100","cursor-pointer","appearance-none","round","w-[180px]"],items:t.cities,onUpdateSelect:o.setSelectedCity,placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E",defValue:{},class:m("city-select relative")},null,8,["items","onUpdateSelect"])],512),e("button",{onClick:s[1]||(s[1]=i=>t.isOpenMobileMenu=!t.isOpenMobileMenu),id:"hamburger-botton",class:"-mr-2 mobile-menu-button p-4 focus:outline-none lg:hidden cursor-pointer"},X)]),e("div",Y,[e("aside",{class:m([[t.isOpenMobileMenu?["h-screen","z-20","translate-x-0","mob-menu-open","bg-white","text-blue-700"]:["h-96","-translate-x-full"]],"absolute inset-y-0 left-0 transform lg:relative lg:translate-x-0 transition duration-200 ease-in-out md:flex w-72 flex-col space-y-2 bg-transparen p-2"])},[e("div",z,[e("div",B,[e("button",{class:"flex text-blue-700 text-4xl font-bold opacity-70 hover:opacity-100 duration-300",onClick:s[2]||(s[2]=i=>t.isOpenMobileMenu=!t.isOpenMobileMenu)},q)]),n(d,{href:"/",class:"flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600"},{default:h(()=>[A("\u041F\u043E\u0441\u043B\u0443\u0433\u0438")]),_:1}),n(d,{href:"/",class:"flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600"},{default:h(()=>[G]),_:1}),n(d,{href:r.route("faq.index"),class:"flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600"},{default:h(()=>[A("FAQ (\u0427\u0430\u0441\u0442\u0456 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F)")]),_:1},8,["href"])])],2),e("div",Z,[e("dl",Q,[e("div",J,[e("div",$,[ee,e("div",te,[e("div",re,[n(O,{options:t.curFrom,clearable:!1,label:"name",value:o.getSelectedCurrency_1,reduce:i=>i,modelValue:t.currency_1,"onUpdate:modelValue":s[3]||(s[3]=i=>t.currency_1=i),getOptionLabel:i=>i.name,onInput:o.selectedCurrency_1},null,8,["options","value","reduce","modelValue","getOptionLabel","onInput"])])]),e("div",se,[f(e("input",{"onUpdate:modelValue":s[4]||(s[4]=i=>t.v$.formOrder.invoiceAmount.$model=i),type:"text",class:"bg-transparent cursor-text without-spin-btn mt-0 block w-full focus:border-indigo-300 focus:outline-none text-gray-200 border-0 border-b-2 border-gray-200 cursor-pointer focus:ring-0"},null,512),[[y,t.v$.formOrder.invoiceAmount.$model]]),(l(),a("div",{class:"input-errors",key:t.itKey},[t.v$.formOrder.invoiceAmount.$error?(l(),a("div",ie,c(t.v$.formOrder.invoiceAmount.minValue.$message)+" "+c(o.getSelectedCurrency_1.name),1)):p("",!0)])),e("div",oe,c(t.currency_1.name),1)]),e("div",ne,[ce,e("ul",le,[e("li",ae,"\u041A\u0443\u0440\u0441 UAH/USD: "+c(t.RATE_UAHUSD),1),e("li",ue,"\u041A\u0443\u0440\u0441 USD/PLN: "+c(t.rate_usdpln),1),e("li",he,"\u041A\u0443\u0440\u0441 EUR/USD: "+c(t.rate_eurusd),1)])])])]),e("div",de,[e("div",me,[fe,e("div",ye,[e("div",_e,[n(O,{options:t.curTo,clearable:!1,value:o.getSelectedCurrency_2,reduce:i=>i,modelValue:t.currency_2,"onUpdate:modelValue":s[5]||(s[5]=i=>t.currency_2=i),getOptionLabel:i=>i.name,onInput:o.selectedCurrency_2},null,8,["options","value","reduce","modelValue","getOptionLabel","onInput"])])]),e("div",pe,[f((l(),a("input",{key:t.itKey,"onUpdate:modelValue":s[6]||(s[6]=i=>t.formOrder.withdrawAmount=i),type:"text",class:"bg-transparent cursor-text without-spin-btn mt-0 block w-full focus:border-indigo-300 focus:outline-none text-gray-200 border-0 border-b-2 border-gray-200 cursor-pointer focus:ring-0"})),[[y,t.formOrder.withdrawAmount]]),e("div",Ae,c(t.currency_2.name),1)]),e("div",ve,[e("button",{onClick:s[7]||(s[7]=(...i)=>o.toggleModal&&o.toggleModal(...i)),class:"btn px-10 w-80 py-4 uppercase text-white shadow hover:bg-indigo-700 bg-indigo-800 tracking-wide rounded-lg"},"\u041F\u043E\u0434\u0430\u0442\u0438 \u0437\u0430\u044F\u0432\u043A\u0443")])])])])])]),n(x,{modalActive:t.modalActive,onModalClose:o.toggleModal},{default:h(()=>[Oe,e("div",we,[e("div",ge,[f(e("input",{"onUpdate:modelValue":s[8]||(s[8]=i=>t.v$.formOrder.phone.$model=i),type:"text",name:"floating_email",id:"floating_phone",class:m([[t.v$.formOrder.phone.$error?"border-red-600":""],"dark:focus:border-blue-500 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer"]),placeholder:" ",required:""},null,2),[[y,t.v$.formOrder.phone.$model]]),xe,t.v$.formOrder.phone.$error?(l(),a("div",be,c(t.v$.formOrder.phone.phoneValid.$message),1)):p("",!0)]),e("div",Ue,[f(e("input",{"onUpdate:modelValue":s[9]||(s[9]=i=>t.v$.formOrder.telegram.$model=i),type:"text",id:"floating_telegram",class:m([[t.v$.formOrder.telegram.$error?"border-rose-600":""],"dark:focus:border-blue-500 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer"]),placeholder:" ",required:""},null,2),[[y,t.v$.formOrder.telegram.$model]]),Te,t.v$.formOrder.telegram.$error?(l(),a("div",Fe,c(t.v$.formOrder.telegram.telegramValid.$message),1)):p("",!0)]),e("div",Re,[e("div",ke,[e("button",{onClick:s[10]||(s[10]=R((...i)=>o.submitHandler&&o.submitHandler(...i),["prevent"])),class:"shadow bg-indigo-700 hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-10 rounded",type:"button"}," \u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438 ")])])])]),_:1},8,["modalActive","onModalClose"])])],64)}const Ee=D(E,[["render",Ce]]);export{Ee as default};
