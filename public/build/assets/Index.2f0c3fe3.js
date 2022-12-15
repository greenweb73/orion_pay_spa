import{T as h}from"./TableDropdown.ae1e7a61.js";import{H as g,L as y,d as f,r,o as a,c as d,b as s,w as n,F as i,a as e,e as w,x as k,n as v,t as l}from"./app.6b623368.js";import{_ as L}from"./AuthenticatedLayout.5d6203b1.js";import{_ as D}from"./_plugin-vue_export-helper.cdc0426e.js";import"./ApplicationLogo.70e4a710.js";const I={name:"Index",components:{Head:g,Link:y,AuthenticatedLayout:L,TableDropdown:h},props:["cities"],methods:{destroy(o){confirm("Are you sure you want to Delete")&&f.Inertia.delete(route("city.destroy",o))}}},A={class:"flex flex-column max-w-max min-w-full"},H={class:"py-12 min-w-[70%] mx-auto sm:px-6 lg:px-8"},B={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},C={class:"mt-8 bg-white overflow-hidden shadow-sm sm:rounded-lg"},N={class:"items-center w-full bg-transparent border-collapse"},S=e("thead",{class:"text-xs text-left text-gray-700 uppercase bg-indigo-100 dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"py-3 px-6"},"ID"),e("th",{scope:"col",class:"py-3 px-6"},"\u041D\u0430\u0437\u0432\u0430 \u043C\u0456\u0441\u0442\u0430"),e("th",{class:"py-3 px-6"},"\u041A\u043E\u0435\u0444\u0456\u0446\u0456\u0454\u043D\u0442 \u043C\u0456\u0441\u0442\u0430"),e("th")])],-1),T={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},V={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},$={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"},F={class:"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"};function z(o,E,c,j,q,p){const m=r("Head"),_=r("Link"),x=r("table-dropdown"),u=r("AuthenticatedLayout");return a(),d(i,null,[s(m,{title:"\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F \u041C\u0456\u0441\u0442 \u0437 \u044F\u043A\u0438\u0445 \u043F\u0440\u0438\u0439\u043C\u0430\u044E\u0442\u044C\u0441\u044F \u043F\u0435\u0440\u0435\u043A\u0430\u0437\u0438 "}),s(u,null,{header:n(()=>[]),default:n(()=>[e("div",A,[e("div",H,[e("div",B,[s(_,{href:o.route("city.create"),class:"bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"},{default:n(()=>[w(" \u0414\u043E\u0434\u0430\u0442\u0438 \u043C\u0456\u0441\u0442\u043E ")]),_:1},8,["href"]),e("div",C,[e("table",N,[S,e("tbody",null,[(a(!0),d(i,null,k(c.cities,(t,b)=>(a(),d("tr",{key:t.id,class:v([b%2?["bg-white","border-b","dark:bg-gray-900","dark:border-gray-700"]:["bg-gray-50","border-b","dark:bg-gray-800","dark:border-gray-700"],"hover:bg-gray-50 dark:hover:bg-gray-600"])},[e("td",T,l(t.id),1),e("td",V,l(t.name),1),e("td",$,l(t.coeff),1),e("td",F,[s(x,{edit_route:o.route("city.edit",t.id),destroy_id:t.id,onSelectDestroyId:p.destroy},null,8,["edit_route","destroy_id","onSelectDestroyId"])])],2))),128))])])])])])])]),_:1})],64)}const P=D(I,[["render",z]]);export{P as default};
