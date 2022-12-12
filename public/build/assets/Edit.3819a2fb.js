import{H as m,L as c,d as b,r as i,o as f,c as x,b as d,w as n,F as _,e as h,a as e,f as w,g as l,v as a}from"./app.b01c4bfe.js";import{_ as g}from"./AuthenticatedLayout.ba756c37.js";import{E as y}from"./Editor.4bc38e93.js";import{_ as v}from"./_plugin-vue_export-helper.cdc0426e.js";import"./ApplicationLogo.e1e82ea0.js";const G={name:"Index",components:{Head:m,Link:c,AuthenticatedLayout:g,Editor:y},props:["page"],data(){return{apiKeyEditor:"hyfqdus1dwgnfd0dmjpdjyab4fgfk1x1m0yw9ip7h9es74xc",form:{title:this.page.data_values.title,description:this.page.data_values.description,slug:this.page.data_values.slug,meta_title:this.page.data_values.meta_title,meta_description:this.page.data_values.meta_description,meta_keywords:this.page.data_values.meta_keywords}}},beforeCreate(){console.log(this.page.id)},methods:{submitHandler(){b.Inertia.patch(route("admin.faq.page.update",this.page.id),this.form)}}},k={class:"py-12"},F={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},V={class:"p-6 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"},H={class:"flex flex-wrap"},E={class:"w-full lg:w-12/12 px-4"},L={class:"relative w-full mb-3"},U=e("label",{class:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password"}," \u041D\u0430\u0437\u0432\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 * ",-1),A={class:"relative w-full mb-3"},B=e("label",{class:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password"}," SEO URL ",-1),C={class:"relative w-full mb-3"},D=e("label",{class:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password"}," \u041C\u0435\u0442\u0430-\u0442\u0435\u0433 Title ",-1),N={class:"relative w-full mb-3"},T=e("label",{class:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password"}," \u041C\u0435\u0442\u0430-\u0442\u0435\u0433 Description ",-1),j={class:"relative w-full mb-3"},q=e("label",{class:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password"}," \u041C\u0435\u0442\u0430-\u0442\u0435\u0433 Keywords ",-1),I=e("div",{class:"px-4 pt-8 ml-auto"},[e("button",{type:"submit",class:"bg-emerald-500 active:bg-emerald-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"}," \u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 ")],-1);function K(M,t,Q,S,s,r){const u=i("Head"),p=i("AuthenticatedLayout");return f(),x(_,null,[d(u,{title:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 FAQ"}),d(p,null,{header:n(()=>[h("\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438 FAQ")]),default:n(()=>[e("div",k,[e("div",F,[e("div",V,[e("form",{onSubmit:t[5]||(t[5]=w((...o)=>r.submitHandler&&r.submitHandler(...o),["prevent"]))},[e("div",H,[e("div",E,[e("div",L,[U,l(e("input",{type:"text",class:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150","onUpdate:modelValue":t[0]||(t[0]=o=>s.form.title=o)},null,512),[[a,s.form.title]])]),e("div",A,[B,l(e("input",{type:"text",class:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150","onUpdate:modelValue":t[1]||(t[1]=o=>s.form.slug=o)},null,512),[[a,s.form.slug]])]),e("div",C,[D,l(e("input",{type:"text",class:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150","onUpdate:modelValue":t[2]||(t[2]=o=>s.form.meta_title=o)},null,512),[[a,s.form.meta_title]])]),e("div",N,[T,l(e("textarea",{type:"text",class:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150","aria-placeholder":"\u041C\u0435\u0442\u0430-\u0442\u0435\u0433 Description","onUpdate:modelValue":t[3]||(t[3]=o=>s.form.meta_description=o)},null,512),[[a,s.form.meta_description]])]),e("div",j,[q,l(e("textarea",{type:"text",class:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150","onUpdate:modelValue":t[4]||(t[4]=o=>s.form.meta_keywords=o)},null,512),[[a,s.form.meta_keywords]])])])]),I],32)])])])]),_:1})],64)}const W=v(G,[["render",K]]);export{W as default};