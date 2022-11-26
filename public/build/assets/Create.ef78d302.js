import{H as c,L as p,d as f,r as l,o as x,c as b,b as r,w as n,F as _,e as w,a as e,f as h,g as i,v as d}from"./app.e96233a5.js";import{_ as v}from"./AuthenticatedLayout.e54e1d66.js";import{_ as y}from"./_plugin-vue_export-helper.cdc0426e.js";import"./ApplicationLogo.136b3894.js";const g={name:"Index",components:{Head:c,Link:p,AuthenticatedLayout:v},data(){return{form:{question:"",answer:""}}},methods:{submitHandler(){f.Inertia.post(route("admin.faq.store"),this.form)}}},G={class:"py-12"},H={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},k={class:"p-6 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"},L={class:"flex flex-wrap"},V={class:"w-full lg:w-12/12 px-4"},q={class:"relative w-full mb-3"},F=e("label",{class:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password"}," \u041F\u0438\u0442\u0430\u043D\u043D\u044F ",-1),A={class:"relative w-full mb-3"},B=e("label",{class:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password"}," \u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C ",-1),C=e("div",{class:"px-4 pt-8 ml-auto"},[e("button",{type:"submit",class:"bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"}," \u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 ")],-1);function N(I,t,M,T,s,a){const u=l("Head"),m=l("AuthenticatedLayout");return x(),b(_,null,[r(u,{title:"\u0414\u043E\u0434\u0430\u0442\u0438 \u0432\u0430\u043B\u044E\u0442\u0443"}),r(m,null,{header:n(()=>[w("\u041D\u043E\u0432\u0435 \u041F\u0438\u0442\u0430\u043D\u043D\u044F - \u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C")]),default:n(()=>[e("div",G,[e("div",H,[e("div",k,[e("form",{onSubmit:t[2]||(t[2]=h((...o)=>a.submitHandler&&a.submitHandler(...o),["prevent"]))},[e("div",L,[e("div",V,[e("div",q,[F,i(e("input",{type:"text",class:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150","onUpdate:modelValue":t[0]||(t[0]=o=>s.form.question=o)},null,512),[[d,s.form.question]])]),e("div",A,[B,i(e("textarea",{"onUpdate:modelValue":t[1]||(t[1]=o=>s.form.answer=o),type:"text",class:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",rows:"4"},`
                                    `,512),[[d,s.form.answer]])])])]),C],32)])])])]),_:1})],64)}const j=y(g,[["render",N]]);export{j as default};