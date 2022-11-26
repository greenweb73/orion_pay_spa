import{h as M,i as S,j as v,k as L,o as c,c as x,a as e,l as m,g as y,m as k,b as r,w as n,n as u,u as h,T as j,p as w,L as g,r as $,e as d,q as G,t as _,s as z}from"./app.e7826125.js";import{A as V}from"./ApplicationLogo.a178b64e.js";import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";const N={class:"relative"},A={__name:"Dropdown",props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:()=>["py-1","bg-white"]}},setup(o){const t=o,s=p=>{l.value&&p.key==="Escape"&&(l.value=!1)};M(()=>document.addEventListener("keydown",s)),S(()=>document.removeEventListener("keydown",s));const i=v(()=>({48:"w-48"})[t.width.toString()]),f=v(()=>t.align==="left"?"origin-top-left left-0":t.align==="right"?"origin-top-right right-0":"origin-top"),l=L(!1);return(p,a)=>(c(),x("div",N,[e("div",{onClick:a[0]||(a[0]=b=>l.value=!l.value)},[m(p.$slots,"trigger")]),y(e("div",{class:"fixed inset-0 z-40",onClick:a[1]||(a[1]=b=>l.value=!1)},null,512),[[k,l.value]]),r(j,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:n(()=>[y(e("div",{class:u(["absolute z-50 mt-2 rounded-md shadow-lg",[h(i),h(f)]]),style:{display:"none"},onClick:a[2]||(a[2]=b=>l.value=!1)},[e("div",{class:u(["rounded-md ring-1 ring-black ring-opacity-5",o.contentClasses])},[m(p.$slots,"content")],2)],2),[[k,l.value]])]),_:3})]))}},D={__name:"DropdownLink",setup(o){return(t,s)=>(c(),w(h(g),{class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:n(()=>[m(t.$slots,"default")]),_:3}))}},E={__name:"NavLink",props:["href","active"],setup(o){const t=o,s=v(()=>t.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition  duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(i,f)=>(c(),w(h(g),{href:o.href,class:u(h(s))},{default:n(()=>[m(i.$slots,"default")]),_:3},8,["href","class"]))}},C={__name:"ResponsiveNavLink",props:["href","active"],setup(o){const t=o,s=v(()=>t.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(i,f)=>(c(),w(h(g),{href:o.href,class:u(h(s))},{default:n(()=>[m(i.$slots,"default")]),_:3},8,["href","class"]))}},O={data(){return{collapseShow:"hidden",isActive:!0}},methods:{toggleCollapseShow:function(o){this.collapseShow=o}},components:{ApplicationLogo:V,Link:g}},P={class:"md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"},T={class:"md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"},q=e("i",{class:"fas fa-bars"},null,-1),F=[q],H={class:"logo flex items-center space-x-2 cursor-pointer"},Q={class:"md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"},R={class:"flex flex-wrap"},U=e("div",{class:"w-6/12"},[e("a",{class:"md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0",href:"/"}," Vue Notus ")],-1),I={class:"w-6/12 flex justify-end"},J=e("i",{class:"fas fa-times"},null,-1),K=[J],W=G('<form class="mt-6 mb-4 md:hidden"><div class="mb-3 pt-0"><input type="text" placeholder="Search" class="border-0 px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"></div></form><hr class="my-4 md:min-w-full"><h6 class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"> \u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F </h6>',3),X={class:"md:flex-col md:min-w-full flex flex-col list-none"},Y={class:"items-center"},Z=e("i",{class:"mr-2 text-sm"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})])],-1),ee={class:"items-center"},te=e("i",{class:"mr-2 text-sm"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"})])],-1),se={class:"items-center"},oe=e("i",{class:"mr-2 text-sm"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"})])],-1),ne=G('<hr class="my-4 md:min-w-full"><h6 class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"> \u0423\u043F\u0440\u0430\u0432\u043B\u0456\u043D\u043D\u044F \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u043E\u043C </h6><ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4"><li class="items-center"><a class="text-blueGray-700 hover:text-blueGray-500 text-xs py-3 font-bold block" href="/profile"><i class="fas fa-user-circle text-blueGray-300 mr-2 text-sm"></i> \u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0438 </a></li></ul><hr class="my-4 md:min-w-full"><h6 class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"> \u041A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456 </h6><ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4"><li class="items-center"><a class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block" href="/profile"><i class="fas fa-user-circle text-blueGray-300 mr-2 text-sm"></i> Profile Page </a></li></ul>',6);function re(o,t,s,i,f,l){const p=$("ApplicationLogo"),a=$("Link");return c(),x("nav",P,[e("div",T,[e("button",{class:"cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent",type:"button",onClick:t[0]||(t[0]=b=>l.toggleCollapseShow("bg-white m-2 py-3 px-6"))},F),e("div",H,[r(p,{class:"block h-9 w-auto"}),r(a,{href:o.route("dashboard"),class:"hidden sm:block ml-5 text-3xl sm:text-3xl"},{default:n(()=>[d(" OrionPay ")]),_:1},8,["href"])]),e("div",{class:u(["md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded",f.collapseShow])},[e("div",Q,[e("div",R,[U,e("div",I,[e("button",{type:"button",class:"cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent",onClick:t[1]||(t[1]=b=>l.toggleCollapseShow("hidden"))},K)])])]),W,e("ul",X,[e("li",Y,[r(a,{href:o.route("currency.index"),class:"p-3 max-w-sm mx-auto bg-white flex items-center space-x-4"},{default:n(()=>[Z,d(" \u0412\u0430\u043B\u044E\u0442\u0430 ")]),_:1},8,["href"])]),e("li",ee,[r(a,{href:o.route("city.index"),class:"p-3 max-w-sm mx-auto bg-white flex items-center space-x-4"},{default:n(()=>[te,d(" \u041C\u0456\u0441\u0442\u0430 ")]),_:1},8,["href"])]),e("li",se,[r(a,{href:o.route("faq.index"),class:"p-3 max-w-sm mx-auto bg-white flex items-center space-x-4"},{default:n(()=>[oe,d(" FAQ ")]),_:1},8,["href"])])]),ne],2)])])}const le=B(O,[["render",re]]),ae={class:"min-h-screen bg-gray-100"},ie={class:"bg-white border-b border-gray-100"},de={class:"relative md:ml-64 bg-blueGray-100"},ce={class:"flex justify-between h-16"},ue={class:"flex"},me={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},he={class:"hidden sm:flex sm:items-center sm:ml-6"},fe={class:"ml-3 relative"},pe={class:"inline-flex rounded-md"},xe={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},be=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),ve={class:"-mr-2 flex items-center sm:hidden"},ge={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},_e={class:"pt-2 pb-3 space-y-1"},we={class:"pt-4 pb-1 border-t border-gray-200"},ye={class:"px-4"},ke={class:"font-medium text-base text-gray-800"},$e={class:"font-medium text-sm text-gray-500"},Ce={class:"mt-3 space-y-1"},Le={key:0,class:"bg-white shadow"},Ge={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ze={__name:"AuthenticatedLayout",setup(o){const t=L(!1);return(s,i)=>(c(),x("div",null,[e("div",ae,[e("nav",ie,[e("div",de,[e("div",ce,[e("div",ue,[e("div",me,[r(E,{href:s.route("dashboard"),active:s.route().current("dashboard")},{default:n(()=>[d(" Dashboard ")]),_:1},8,["href","active"])])]),e("div",he,[e("div",fe,[r(A,{align:"right",width:"48"},{trigger:n(()=>[e("span",pe,[e("button",xe,[d(_(s.$page.props.auth.user.name)+" ",1),be])])]),content:n(()=>[r(D,{href:s.route("logout"),method:"post",as:"button"},{default:n(()=>[d(" Log Out ")]),_:1},8,["href"])]),_:1})])]),e("div",ve,[e("button",{onClick:i[0]||(i[0]=f=>t.value=!t.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(c(),x("svg",ge,[e("path",{class:u({hidden:t.value,"inline-flex":!t.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:u({hidden:!t.value,"inline-flex":t.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:u([{block:t.value,hidden:!t.value},"sm:hidden"])},[e("div",_e,[r(C,{href:s.route("dashboard"),active:s.route().current("dashboard")},{default:n(()=>[d(" Dashboard ")]),_:1},8,["href","active"])]),e("div",we,[e("div",ye,[e("div",ke,_(s.$page.props.auth.user.name),1),e("div",$e,_(s.$page.props.auth.user.email),1)]),e("div",Ce,[r(C,{href:s.route("logout"),method:"post",as:"button"},{default:n(()=>[d(" Log Out ")]),_:1},8,["href"])])])],2)]),s.$slots.header?(c(),x("header",Le,[e("div",Ge,[m(s.$slots,"header")])])):z("",!0),e("main",null,[r(le),m(s.$slots,"default")])])]))}};export{ze as _};
