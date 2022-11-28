import{o as r,c as p,a as e,l as _,n as l,g as k,m as M,L as y,H as O,r as d,b as i,w as n,F as f,x as L,e as u,p as $,t as C}from"./app.3e55967e.js";import{M as A}from"./MainLayout.40e01299.js";import{S as j}from"./Sidebar.5e774a8b.js";import{_ as w}from"./_plugin-vue_export-helper.cdc0426e.js";const B={name:"MyAccordion",data(){return{isOpen:!1}},methods:{toggleAccordion(){this.isOpen=!this.isOpen}}},H={class:"border-b border-indigo-100"},S=["aria-expanded","aria-controls"],F=e("path",{d:"M15 1.2l-7 7-7-7","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),q=[F],N=["id"];function Q(s,o,h,g,t,m){return r(),p("div",H,[e("button",{onClick:o[0]||(o[0]=x=>m.toggleAccordion()),class:l([{"text-white":t.isOpen},"w-full justify-between flex items-center space-x-3 pt-2 pb-4 text-left"]),"aria-expanded":t.isOpen,"aria-controls":`collapse${s._uid}`},[_(s.$slots,"title"),(r(),p("svg",{class:l(["w-3 transition-all duration-200 transform",{"rotate-180":t.isOpen,"rotate-0":!t.isOpen}]),fill:"none",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 10","aria-hidden":"true"},q,2))],10,S),k(e("div",{class:"text-indigo-100 pb-6",id:`collapse${s._uid}`},[_(s.$slots,"content")],8,N),[[M,t.isOpen]])])}const T=w(B,[["render",Q]]),V={name:"Index",layout:A,components:{Link:y,Head:O,Sidebar:j,MyAccordion:T},props:["faqs"],data(){return{isOpenMobileMenu:!1}}},z={class:"max-w-7xl mx-auto text-white","x-data":"layout"},D={class:"flex w-full items-center justify-between p-4 pt-8 pb-14"},I={class:"logo flex items-center space-x-2 cursor-pointer"},E=["src"],P=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6 stroke-2 hover:stroke-2"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"})],-1),G=[P],J={class:"flex"},K={class:"relative mt-2 py-6 flex flex-col justify-center"},R={class:"flex w-100 justify-end lg:hidden"},U=e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"stroke-blue-900 w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),W=[U],X=e("i",{class:"mr-2 text-sm"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"})])],-1),Y=e("span",null,"\u041F\u0440 \u043D\u0430\u0441",-1),Z={class:"w-full p-4"},ee={class:"bg-orion max-h-[570px] min-h-[520px] lg:py-8 pt-3 w-full sm:px-10 px-6 shadow-md shadow-lg rounded-lg overflow-y-auto"},te=e("h1",{class:"text-indigo-100 tracking-wide text-3xl font-bold"},"FAQ: \u041F\u0438\u0442\u0430\u043D\u043D\u044F-\u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0456",-1),se={class:"pt-8 text-indigo-100 text-left"},oe={class:"max-w-[90%] font-semibold text-xl"},ne=["innerHTML"];function ie(s,o,h,g,t,m){const x=d("Head"),a=d("Link"),b=d("Sidebar"),v=d("MyAccordion");return r(),p(f,null,[i(x,{title:"FAQ - \u041F\u0438\u0442\u0430\u043D\u043D\u044F - \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0456"}),e("main",z,[e("header",D,[e("div",I,[e("img",{src:"/images/logo.svg"},null,8,E),i(a,{class:"hidden sm:block ml-5 text-3xl sm:text-4xl",href:"/"},{default:n(()=>[u("OrionPay")]),_:1})]),e("button",{onClick:o[0]||(o[0]=c=>t.isOpenMobileMenu=!t.isOpenMobileMenu),id:"hamburger-botton",class:"-mr-2 mobile-menu-button p-4 focus:outline-none lg:hidden cursor-pointer"},G)]),e("div",J,[i(b,null,{menu:n(()=>[e("aside",{class:l([[t.isOpenMobileMenu?["h-screen","z-20","translate-x-0","mob-menu-open","bg-white","text-blue-700"]:["h-96","-translate-x-full"]],"absolute inset-y-0 left-0 transform lg:relative lg:translate-x-0 transition duration-200 ease-in-out md:flex w-80 flex-col space-y-2 bg-transparen p-2"])},[e("div",K,[e("div",R,[e("button",{class:"flex text-blue-700 text-4xl font-bold opacity-70 hover:opacity-100 duration-300",onClick:o[1]||(o[1]=c=>t.isOpenMobileMenu=!t.isOpenMobileMenu)},W)]),i(a,{href:s.route("home"),class:l([{"active-menu text-white":s.$page.url==="/"},"flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600"])},{default:n(()=>[X,u(" \u041E\u0431\u043C\u0456\u043D")]),_:1},8,["href","class"]),i(a,{href:"/",class:"hidden flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600"},{default:n(()=>[Y]),_:1}),i(a,{href:s.route("faqs"),class:l([{"active-menu text-white":s.$page.url==="/faqs"},"flex items-center space-x-1 rounded-md px-3 py-3 hover:bg-gray-100 hover:text-blue-600"])},{default:n(()=>[u("FAQ (\u0427\u0430\u0441\u0442\u0456 \u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F)")]),_:1},8,["href","class"])])],2)]),_:1}),e("div",Z,[e("div",ee,[te,e("div",se,[(r(!0),p(f,null,L(h.faqs,(c,re)=>(r(),$(v,{class:"mb-4"},{title:n(()=>[e("span",oe,C(c.question),1)]),content:n(()=>[e("div",{innerHTML:c.answer},null,8,ne)]),_:2},1024))),256))])])])])])],64)}const pe=w(V,[["render",ie]]);export{pe as default};