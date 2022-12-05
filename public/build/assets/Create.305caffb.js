import{H as c,L as b,d as f,r as a,o as x,c as _,b as i,w as d,F as w,e as h,a as e,f as y,g as s,v as r}from"./app.aa03c4c6.js";import{_ as g}from"./AuthenticatedLayout.bf7d6205.js";import{E as v}from"./Editor.dd72526a.js";import{_ as k}from"./_plugin-vue_export-helper.cdc0426e.js";import"./ApplicationLogo.7a2c9a1b.js";const G={name:"Index",components:{Head:c,Link:b,AuthenticatedLayout:g,Editor:v},data(){return{apiKeyEditor:"hyfqdus1dwgnfd0dmjpdjyab4fgfk1x1m0yw9ip7h9es74xc",form:{title:"",description:"",slug:"",meta_title:"",meta_description:"",meta_keywords:""}}},methods:{submitHandler(){f.Inertia.post(route("admin.page.store"),this.form)}}},V={class:"py-12"},F={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},H={class:"p-6 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"},U={class:"flex flex-wrap"},E={class:"w-full lg:w-12/12 px-4"},L={class:"relative w-full mb-3"},A=e("label",{class:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password"}," \u041D\u0430\u0437\u0432\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 * ",-1),B={class:"relative w-full mb-3"},C=e("label",{class:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password"}," \u041A\u043E\u043D\u0442\u0435\u043D\u0442 * ",-1),D={class:"relative w-full mb-3"},K=e("label",{class:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password"}," SEO URL ",-1),N={class:"relative w-full mb-3"},T=e("label",{class:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password"}," \u041C\u0435\u0442\u0430-\u0442\u0435\u0433 Title ",-1),j={class:"relative w-full mb-3"},I=e("label",{class:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password"}," \u041C\u0435\u0442\u0430-\u0442\u0435\u0433 Description ",-1),M={class:"relative w-full mb-3"},S=e("label",{class:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password"}," \u041C\u0435\u0442\u0430-\u0442\u0435\u0433 Keywords ",-1),q=e("div",{class:"px-4 pt-8 ml-auto"},[e("button",{type:"submit",class:"bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"}," \u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 ")],-1);function O(R,t,z,J,o,n){const u=a("Head"),m=a("editor"),p=a("AuthenticatedLayout");return x(),_(w,null,[i(u,{title:"\u0414\u043E\u0434\u0430\u0442\u0438 \u041D\u043E\u0432\u0435 \u041F\u0438\u0442\u0430\u043D\u043D\u044F - \u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C"}),i(p,null,{header:d(()=>[h("\u041D\u043E\u0432\u0430 \u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0430")]),default:d(()=>[e("div",V,[e("div",F,[e("div",H,[e("form",{onSubmit:t[6]||(t[6]=y((...l)=>n.submitHandler&&n.submitHandler(...l),["prevent"]))},[e("div",U,[e("div",E,[e("div",L,[A,s(e("input",{type:"text",class:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150","onUpdate:modelValue":t[0]||(t[0]=l=>o.form.title=l)},null,512),[[r,o.form.title]])]),e("div",B,[C,i(m,{"api-key":o.apiKeyEditor,modelValue:o.form.description,"onUpdate:modelValue":t[1]||(t[1]=l=>o.form.description=l),init:{plugins:"advlist autolink code lists link image charmap print preview hr ancor pagebreak media table",toolbar_mode:"floating",relative_urls:!1,toolbar:"code link image lists advlist numlist bullist charmap print preview hr ancor pagebreak media table",height:300}},null,8,["api-key","modelValue"])]),e("div",D,[K,s(e("input",{type:"text",class:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150","onUpdate:modelValue":t[2]||(t[2]=l=>o.form.slug=l)},null,512),[[r,o.form.slug]])]),e("div",N,[T,s(e("input",{type:"text",class:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150","onUpdate:modelValue":t[3]||(t[3]=l=>o.form.meta_title=l)},null,512),[[r,o.form.meta_title]])]),e("div",j,[I,s(e("textarea",{type:"text",class:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150","aria-placeholder":"\u041C\u0435\u0442\u0430-\u0442\u0435\u0433 Description","onUpdate:modelValue":t[4]||(t[4]=l=>o.form.meta_description=l)},null,512),[[r,o.form.meta_description]])]),e("div",M,[S,s(e("textarea",{type:"text",class:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150","onUpdate:modelValue":t[5]||(t[5]=l=>o.form.meta_keywords=l)},null,512),[[r,o.form.meta_keywords]])])])]),q],32)])])])]),_:1})],64)}const Z=k(G,[["render",O]]);export{Z as default};