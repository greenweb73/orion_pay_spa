import{o,c as n,a as e,H as C,L as R,y as k,s as h,d as l,w as u,n as m,b,h as f,z as _,t as a,k as v,F as S,f as g,g as I}from"./app.eec6802d.js";import{M}from"./MainLayout.c320c9cd.js";import{M as H,C as P,a as D,s as E,u as K,c as w}from"./vue-select.81276602.js";import{_ as N}from"./TextInput.dff9d817.js";import{_ as U}from"./_plugin-vue_export-helper.cdc0426e.js";const V={},L={class:"loading-spinner px-2 text-center"},j=e("svg",{class:"inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),z=e("span",{class:"sr-only"},"Loading...",-1),B=[j,z];function X(r,s){return o(),n("div",L,B)}const Y=U(V,[["render",X]]);const G={name:"Index",layout:M,components:{Head:C,Link:R,MySelect:H,TextInput:N,vSelect:P,MyModal:D,InputNumber:E,Spinner:Y},data(){return{EXCHANGE_API:"https://api.exchangerate.host/latest?base=",FIAT_PROFIT:.96,CRYPTA_PROFIT_UA:.98,CRYPTA_PROFIT_EU:.97,CASH_VARSHAVA:.997,v$:K(),user:{},curFrom:[],curTo:[],currency_1:{},currency_2:{},invoiceAmountMessage:"",RATE_UAHUSD:null,rate_usdpln:null,rate_eurusd:null,isOpenMobileMenu:!1,modalActive:!1,isOpenSelectCity:!1,formOrder:{city:null,phone:null,telegram:null,invoiceAmount:"",withdrawAmount:""},cities:[{id:1,name:"\u0412\u0456\u043D\u043D\u0438\u0446\u044F",coeff:.995},{id:2,name:"\u0414\u043D\u0456\u043F\u0440\u043E",coeff:.995},{id:3,name:"\u0416\u0438\u0442\u043E\u043C\u0438\u0440",coeff:.995},{id:4,name:"\u0417\u0430\u043F\u043E\u0440\u0456\u0436\u0436\u044F",coeff:.995},{id:5,name:"\u0406\u0432\u0430\u043D\u043E-\u0424\u0440\u0430\u043D\u043A\u0456\u0432\u0441\u044C\u043A",coeff:.995},{id:6,name:"\u041A\u0438\u0457\u0432",coeff:.998}],currencies:[{id:1,name:"UAH (\u0433\u043E\u0442\u0456\u0432\u043A\u0430)",cc:"UAH",type:"cash",from:!0,to:!1,min_value:4e4},{id:2,name:"UAH (\u0431\u0435\u0437\u0433\u043E\u0442\u0456\u0432\u043A\u043E\u0432\u0430)",cc:"UAH",type:"bank",from:!0,to:!1,min_value:4e4},{id:3,name:"USD (\u0433\u043E\u0442\u0456\u0432\u043A\u0430)",cc:"USD",type:"cash",from:!0,to:!1,min_value:1e3},{id:4,name:"EUR (\u0433\u043E\u0442\u0456\u0432\u043A\u0430)",cc:"EUR",type:"cash",from:!0,to:!1,min_value:1e3},{id:5,name:"USDT (TRC-20)",cc:"USDT",type:"crypto",from:!0,to:!0,min_value:0},{id:6,name:"PLN (\u0433\u043E\u0442\u0456\u0432\u043A\u0430, \u0412\u0430\u0440\u0448\u0430\u0432\u0430)",cc:"PLN",type:"cash",from:!1,to:!1,min_value:0},{id:7,name:"PLN (\u0431\u0435\u0437\u0433\u043E\u0442\u0456\u0432\u043A\u0430 \u043D\u0430 IBAN)",cc:"PLN",type:"bank",from:!1,to:!0,min_value:0},{id:8,name:"USD (\u043D\u0430 Revolut, Wise...)",cc:"USD",type:"payservice",from:!1,to:!0,min_value:0},{id:9,name:"EUR (\u043D\u0430 Revolut, Wise...)",cc:"EUR",type:"payservice",from:!1,to:!0,min_value:0},{id:10,name:"EUR (\u0431\u0435\u0437\u0433\u043E\u0442\u0456\u0432\u043A\u0430 \u043D\u0430 IBAN)",cc:"EUR",type:"bank",from:!1,to:!0,min_value:0}],itKey:1,selCurrKey:1}},validations(){return{formOrder:{phone:{phoneValid:w.withMessage("\u041D\u0435 \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443",this.validPhone)},telegram:{telegramValid:w.withMessage("\u041D\u0435 \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u0438\u0439 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C \u043D\u0456\u043A\u043D\u0435\u0439\u043C",this.validTelegramNik)},invoiceAmount:{minValue:w.withMessage(`\u041C\u0456\u043D\u0456\u043C\u0430\u043B\u044C\u043D\u0430 \u0441\u0443\u043C\u0430 \u043F\u0435\u0440\u0435\u043A\u0430\u0437\u0443 ${this.getSelectedCurrency_1.min_value}`,r=>Number(this.fromFormat(r))>=Number(this.getSelectedCurrency_1.min_value))}}}},async created(){this.rate_usdpln=await this.getRateCurrency("USD","PLN"),this.rate_eurusd=await this.getRateCurrency("EUR","USD");let r=await this.getRatesFromGoogleSheet("UAH_USD");this.RATE_UAHUSD=r.UAH_USD},mounted(){this.curFrom=this.currencies.filter(r=>r.from),this.currency_1=this.curFrom[1],this.curTo=this.currencies.filter(r=>r.to),this.currency_2=this.curTo[1]},methods:{toggleModal(){this.modalActive=!this.modalActive},validPhone(r){return/^(\+3|)[0-9]{10,11}$/.test(r)},validTelegramNik(r){return/.*\B@(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*.*/gm.test(r)},async getRatesFromGoogleSheet(r){try{return await(await fetch("api/rates/all").then(y=>y)).json()}catch{console.log("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u0438\u0437 GSheets")}},async getRateCurrency(r,s){const O={headers:{authorization:"7aecaa111c052bc16c93d12daafd3087f1583c7d53d0f50eb6abbf1020b93a66"}};try{return await(await(await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${r}&tsyms=${s}`,O).then(p=>p)).json())[s]}catch{console.log("\u041E\u0448\u0438\u0431\u043A\u0430 \u0432 EXCHANGE_API")}},async submitHandler(){try{await k.Inertia.post("/orders",{city:this.formOrder.city,currency_from:this.currency_1,currency_to:this.currency_2,invoiceAmount:this.formOrder.invoiceAmount,withdrawAmount:this.formOrder.withdrawAmount,phone:this.formOrder.phone,telegram:this.formOrder.telegram}),this.modalActive=!1,this.formOrder.invoiceAmount="",this.formOrder.withdrawAmount="",this.v$.reset()}catch{}},setSelectedCity(r){this.formOrder.city=r},selectedCurrency_1(r){this.currency_1=r,this.CalcExchange()},selectedCurrency_2(r){this.currency_2=r,this.CalcExchange()},isAllForCalc(){return!(!this.RATE_UAHUSD||!this.FIAT_PROFIT||!this.rate_usdpln||!this.rate_eurusd)},toFormat(r){return r.length&&r.indexOf(",")>-1&&(r=r.split(",").join("")),new Intl.NumberFormat("en").format(Number(r)).toString()},fromFormat(r){return Number(r.split(",").join(""))},CalcHandler(){if(this.rate_usdpln||(this.rate_usdpln=this.getRateCurrency("USD","PLN")),!this.isAllForCalc()){console.log("Error Data fo Calculation");return}this.currency_2.cc==="PLN"&&this.currency_2.type==="bank"?this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.FIAT_PROFIT*this.rate_usdpln),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff/this.RATE_UAHUSD*this.FIAT_PROFIT*this.rate_usdpln),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="USD"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff*this.FIAT_PROFIT*this.rate_usdpln),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="EUR"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.rate_eurusd*this.formOrder.city.coeff*this.FIAT_PROFIT*this.rate_usdpln),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="USDT"&&this.currency_1.type==="crypto"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.CRYPTA_PROFIT_EU*this.rate_usdpln),this.itKey++):this.currency_2.cc==="PLN"&&this.currency_2.type==="cash"?this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.FIAT_PROFIT*this.formOrder.city.coeff*this.rate_usdpln*this.CASH_VARSHAVA),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.FIAT_PROFIT*this.rate_usdpln*this.CASH_VARSHAVA),this.itKey++):this.currency_2.cc==="USD"&&this.currency_2.type==="payservice"?this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff/this.RATE_UAHUSD*this.FIAT_PROFIT),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="USD"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff*this.FIAT_PROFIT),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="EUR"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff/this.rate_eurusd*this.FIAT_PROFIT),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="USDT"&&this.currency_1.type==="crypto"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.CRYPTA_PROFIT_EU),this.itKey++):this.currency_2.cc==="EUR"&&this.currency_2.type==="payservice"?this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD/this.rate_eurusd*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*.998/this.RATE_UAHUSD*this.FIAT_PROFIT/this.rate_eurusd),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="USD"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff/this.rate_eurusd*this.FIAT_PROFIT),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="EUR"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff*this.FIAT_PROFIT),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="USDT"&&this.currency_1.type==="crypto"&&(this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.CRYPTA_PROFIT_EU/this.rate_eurusd),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E")):this.currency_2.cc==="USDT"&&this.currency_2.type==="crypto"?this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff/this.RATE_UAHUSD*this.CRYPTA_PROFIT_UA),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.CRYPTA_PROFIT_UA),this.itKey++):this.currency_1.cc==="USD"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff*this.CRYPTA_PROFIT_UA),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="EUR"&&this.currency_1.type==="cash"&&(this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff/this.rate_eurusd*this.CRYPTA_PROFIT_UA),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E")):this.currency_2.cc==="EUR"&&this.currency_2.type==="bank"&&(this.currency_1.cc==="UAH"&&this.currency_1.type==="bank"?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)/this.RATE_UAHUSD*this.rate_eurusd*this.FIAT_PROFIT),this.itKey++):this.currency_1.cc==="UAH"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff/this.RATE_UAHUSD*this.FIAT_PROFIT/this.rate_eurusd),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="USD"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff*this.FIAT_PROFIT/this.rate_eurusd),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="EUR"&&this.currency_1.type==="cash"?this.formOrder.city?(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.formOrder.city.coeff*this.FIAT_PROFIT),this.itKey++):alert("\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E"):this.currency_1.cc==="USDT"&&this.currency_1.type==="crypto"&&(this.formOrder.withdrawAmount=Math.round(this.fromFormat(this.formOrder.invoiceAmount)*this.CRYPTA_PROFIT_EU/this.rate_eurusd),this.itKey++))}},computed:{currenciesFrom(){return this.currencies.filter(r=>r.from)},currenciesTo(){return this.currencies.filter(r=>!r.from)},getSelectedCurrency_1(){return{...new Proxy(this.currency_1,{})}},getSelectedCurrency_2(){return{...new Proxy(this.currency_2,{})}}},watch:{isOpenSelectCity(){this.isOpenSelectCity?this.$refs.selectDiv.classList.add("open"):this.$refs.selectDiv.classList.remove("open")},currency_1(){this.CalcHandler(),this.formOrder.withdrawAmount=this.toFormat(this.formOrder.withdrawAmount)},currency_2(){this.CalcHandler()},"formOrder.invoiceAmount":function(){this.formOrder.invoiceAmount=this.toFormat(this.formOrder.invoiceAmount),this.CalcHandler()},"formOrder.withdrawAmount":function(){this.formOrder.withdrawAmount=this.toFormat(this.formOrder.withdrawAmount)},"formOrder.city":function(){this.CalcHandler()},RATE_UAHUSD(){this.selCurrKey++},modalActive(){this.modalActive?document.body.style.overflow="hidden":setTimeout(()=>{document.body.style.overflow=""},500)}}},Z=e("title",null,"\u041F\u0435\u0440\u0435\u043A\u0430\u0437 \u043A\u043E\u0448\u0442\u0456\u0432 \u0437 \u0423\u043A\u0440\u0430\u0457\u043D\u0438",-1),q=e("meta",{"head-key":"description",name:"description",content:"This is the default description"},null,-1),W=e("link",{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,-1),Q={class:"max-w-7xl mx-auto min-h-screen text-white","x-data":"layout"},J={class:"flex w-full items-center justify-between p-4 pt-8 pb-4 sm:pb-14"},$={class:"logo flex items-center space-x-2 cursor-pointer"},ee=["src"],te=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 stroke-2 hover:stroke-2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"})],-1),re=[te],se={class:"flex"},ie={class:"relative py-6 flex flex-col justify-center"},oe={class:"flex w-100 justify-end lg:hidden"},ne=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"stroke-blue-900 w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),ce=[ne],le=e("span",null,"\u041F\u0440 \u043D\u0430\u0441",-1),ae={class:"w-full p-4 z-0"},he={class:"mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2"},ue={class:"bg-orion lg:pt-2 pt-3 w-full px-2 text-left shadow-md bg-white shadow-lg rounded-lg"},de={class:"relative flex flex-col min-w-0 break-words w-full mb-8"},me=e("div",{class:"px-4 py-1 sm:py-5 flex-auto"},[e("h2",{class:"text-indigo-100 tracking-wide text-3xl font-bold"},"\u0412\u0456\u0434\u0434\u0430\u0454\u0442\u0435")],-1),fe={class:"px-1 sm:px-4 py-2 sm:py-5 text-blue-600"},_e={class:"currency-select justify-center w-90 px-0 md:px-3 py-3 rounded-md text-blue-600 cursor-pointer"},ye={class:"py-3 sm:py-5 flex-auto amountInput relative"},pe={key:0,class:"pt-2 text-sm warning-msg tracking-wide"},Ae={class:"currencyName block text-gray-200"},ve={class:"px-8 hidden sm:block relative"},ge=e("div",{class:"mb-1 text-blue-200/75 text-lg"},"\u041A\u0443\u0440\u0441\u0438 \u0432\u0430\u043B\u044E\u0442",-1),we={class:"text-gray-100/75 text-xs"},Oe=e("div",{class:"title"}," \u041A\u0443\u0440\u0441 UAH/USD:",-1),xe={key:0},be={key:1,class:"rate-result px-2"},Ue={class:"mb-1 flex"},Te=e("div",{class:"title"}," \u041A\u0443\u0440\u0441 USD/PLN:",-1),Fe={key:0},Ce={key:1,class:"rate-result px-2"},Re={class:"mb-1 flex"},ke=e("div",{class:"title"}," \u041A\u0443\u0440\u0441 EUR/USD:",-1),Se={key:0},Ie={key:1,class:"rate-result px-2"},Me={class:"bg-orion lg:pt-2 pt-3 w-full px-2 text-left shadow-md shadow-lg rounded-lg"},He={class:"relative flex flex-col min-w-0 break-words"},Pe=e("div",{class:"px-4 py-1 sm:py-5 flex-auto"},[e("h2",{class:"text-indigo-100 tracking-wide text-3xl font-bold"},"\u041E\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u0435")],-1),De={class:"px-1 sm:px-4 py-5 flex-auto text-blue-600"},Ee={class:"currency-select justify-center w-90 px-0 md:px-3 py-3 rounded-md text-blue-600 cursor-pointer"},Ke={class:"py-3 sm:py-5 flex-auto amountInput relative"},Ne={class:"currencyName block text-gray-200"},Ve={class:"bottonBlock flex flex-auto justify-center pt-4 pb-6"},Le=e("h2",{class:"max-w-[600px] pb-6 pt-6 text-center"},"\u0417\u0430\u043B\u0438\u0448\u0442\u0435 \u0432\u0430\u0448 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443 \u0430\u0431\u043E \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C \u0456 \u043C\u0438 \u0437\u0432'\u044F\u0436\u0435\u043C\u043E\u0441\u044C \u0437 \u0432\u0430\u043C\u0438 \u0434\u043B\u044F \u043D\u0430\u0434\u0430\u043D\u043D\u044F \u0434\u0435\u0442\u0430\u043B\u044C\u043D\u043E\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 ",-1),je={class:"w-full max-w-sm mx-auto"},ze={class:"relative z-0 mb-6 w-full group"},Be=e("label",{for:"floating_phone",class:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"\u0422\u0435\u043B\u0435\u0444\u043E\u043D +380 XX XXX XX XX",-1),Xe={key:0,class:"text-red-600 input-errors pt-2 text-sm warning-msg"},Ye={class:"relative z-0 mb-6 w-full group"},Ge=e("label",{for:"floating_telegram",class:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"\u0422\u0435\u043B\u0435\u0433\u0440\u0430\u043C ( @YourTelegramNik )",-1),Ze={key:0,class:"text-red-600 input-errors pt-2 text-sm warning-msg"},qe={class:"md:flex justify-center md:items-center pb-6 mt-8"},We={class:"md:w-1/2 text-center"};function Qe(r,s,y,O,t,c){const p=h("Head"),d=h("Link"),T=h("MySelect"),x=h("v-select"),A=h("Spinner"),F=h("my-modal");return o(),n(S,null,[l(p,null,{default:u(()=>[Z,q,W]),_:1}),e("main",Q,[e("header",J,[e("div",$,[e("img",{src:"/images/logo.svg"},null,8,ee),l(d,{class:"hidden sm:block ml-5 text-3xl sm:text-4xl",href:"/"},{default:u(()=>[g("OrionPay")]),_:1})]),e("div",{ref:"selectDiv",onClick:s[0]||(s[0]=i=>t.isOpenSelectCity=!t.isOpenSelectCity),class:"selectDiv relative"},[l(T,{contentClasses:["px-3","py-2","rounded-md","text-blue-100","cursor-pointer","appearance-none","round","w-[180px]"],items:t.cities,onUpdateSelect:c.setSelectedCity,placeholder:"\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u0456\u0441\u0442\u043E",defValue:{},class:m("city-select relative")},null,8,["items","onUpdateSelect"])],512),e("button",{onClick:s[1]||(s[1]=i=>t.isOpenMobileMenu=!t.isOpenMobileMenu),id:"hamburger-botton",class:"-mr-2 mobile-menu-button p-4 focus:outline-none lg:hidden cursor-pointer"},re)]),e("div",se,[e("aside",{class:m([[t.isOpenMobileMenu?["h-screen","z-20","translate-x-0","mob-menu-open","bg-white","text-blue-700"]:["h-96","-translate-x-full"]],"absolute inset-y-0 left-0 transform lg:relative lg:translate-x-0 transition duration-200 ease-in-out md:flex w-72 flex-col space-y-2 bg-transparen p-2"])},[e("div",ie,[e("div",oe,[e("button",{class:"flex text-blue-700 text-4xl font-bold opacity-70 hover:opacity-100 duration-300",onClick:s[2]||(s[2]=i=>t.isOpenMobileMenu=!t.isOpenMobileMenu)},ce)]),l(d,{href:"/",class:"flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600"},{default:u(()=>[g("\u041F\u043E\u0441\u043B\u0443\u0433\u0438")]),_:1}),l(d,{href:"/",class:"flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600"},{default:u(()=>[le]),_:1}),l(d,{href:r.route("faq.index"),class:"flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600"},{default:u(()=>[g("FAQ (\u0427\u0430\u0441\u0442\u0456 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F)")]),_:1},8,["href"])])],2),e("div",ae,[e("dl",he,[e("div",ue,[e("div",de,[me,e("div",fe,[e("div",_e,[(o(),b(x,{options:t.curFrom,clearable:!1,label:"name",value:c.getSelectedCurrency_1,reduce:i=>i,modelValue:t.currency_1,"onUpdate:modelValue":s[3]||(s[3]=i=>t.currency_1=i),getOptionLabel:i=>i.name,onInput:c.selectedCurrency_1,key:t.selCurrKey},null,8,["options","value","reduce","modelValue","getOptionLabel","onInput"]))])]),e("div",ye,[f(e("input",{"onUpdate:modelValue":s[4]||(s[4]=i=>t.v$.formOrder.invoiceAmount.$model=i),type:"text",class:"bg-transparent cursor-text without-spin-btn mt-0 block w-full focus:border-indigo-300 focus:outline-none text-gray-200 border-0 border-b-2 border-gray-200 cursor-pointer focus:ring-0"},null,512),[[_,t.v$.formOrder.invoiceAmount.$model]]),(o(),n("div",{class:"input-errors",key:t.itKey},[t.v$.formOrder.invoiceAmount.$error?(o(),n("div",pe,a(t.v$.formOrder.invoiceAmount.minValue.$message)+" "+a(c.getSelectedCurrency_1.name),1)):v("",!0)])),e("div",Ae,a(t.currency_1.name),1)]),e("div",ve,[ge,e("ul",we,[(o(),n("li",{class:"mb-1 flex",key:t.itKey},[Oe,t.RATE_UAHUSD?(o(),n("div",be,a(t.RATE_UAHUSD),1)):(o(),n("div",xe,[l(A)]))])),e("li",Ue,[Te,t.rate_usdpln?(o(),n("div",Ce,a(t.rate_usdpln),1)):(o(),n("div",Fe,[l(A)]))]),e("li",Re,[ke,t.rate_eurusd?(o(),n("div",Ie,a(t.rate_eurusd),1)):(o(),n("div",Se,[l(A)]))])])])])]),e("div",Me,[e("div",He,[Pe,e("div",De,[e("div",Ee,[(o(),b(x,{options:t.curTo,clearable:!1,value:c.getSelectedCurrency_2,reduce:i=>i,modelValue:t.currency_2,"onUpdate:modelValue":s[5]||(s[5]=i=>t.currency_2=i),getOptionLabel:i=>i.name,onInput:c.selectedCurrency_2,key:t.selCurrKey},null,8,["options","value","reduce","modelValue","getOptionLabel","onInput"]))])]),e("div",Ke,[f((o(),n("input",{key:t.itKey,"onUpdate:modelValue":s[6]||(s[6]=i=>t.formOrder.withdrawAmount=i),type:"text",class:"bg-transparent cursor-text without-spin-btn mt-0 block w-full focus:border-indigo-300 focus:outline-none text-gray-200 border-0 border-b-2 border-gray-200 cursor-pointer focus:ring-0"})),[[_,t.formOrder.withdrawAmount]]),e("div",Ne,a(t.currency_2.name),1)]),e("div",Ve,[e("button",{onClick:s[7]||(s[7]=(...i)=>c.toggleModal&&c.toggleModal(...i)),class:"btn px-10 w-80 py-4 uppercase text-white shadow hover:bg-indigo-700 bg-indigo-800 tracking-wide rounded-lg"},"\u041F\u043E\u0434\u0430\u0442\u0438 \u0437\u0430\u044F\u0432\u043A\u0443")])])])])])]),l(F,{modalActive:t.modalActive,onModalClose:c.toggleModal},{default:u(()=>[Le,e("div",je,[e("div",ze,[f(e("input",{"onUpdate:modelValue":s[8]||(s[8]=i=>t.v$.formOrder.phone.$model=i),type:"text",name:"floating_email",id:"floating_phone",class:m([[t.v$.formOrder.phone.$error?"border-red-600":""],"dark:focus:border-blue-500 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer"]),placeholder:" ",required:""},null,2),[[_,t.v$.formOrder.phone.$model]]),Be,t.v$.formOrder.phone.$error?(o(),n("div",Xe,a(t.v$.formOrder.phone.phoneValid.$message),1)):v("",!0)]),e("div",Ye,[f(e("input",{"onUpdate:modelValue":s[9]||(s[9]=i=>t.v$.formOrder.telegram.$model=i),type:"text",id:"floating_telegram",class:m([[t.v$.formOrder.telegram.$error?"border-rose-600":""],"dark:focus:border-blue-500 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 peer"]),placeholder:" ",required:""},null,2),[[_,t.v$.formOrder.telegram.$model]]),Ge,t.v$.formOrder.telegram.$error?(o(),n("div",Ze,a(t.v$.formOrder.telegram.telegramValid.$message),1)):v("",!0)]),e("div",qe,[e("div",We,[e("button",{onClick:s[10]||(s[10]=I((...i)=>c.submitHandler&&c.submitHandler(...i),["prevent"])),class:"shadow bg-indigo-700 hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white font-bold py-3 px-10 rounded",type:"button"}," \u0412\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438 ")])])])]),_:1},8,["modalActive","onModalClose"])])],64)}const st=U(G,[["render",Qe]]);export{st as default};
