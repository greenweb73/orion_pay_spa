import{j as w,g as k,z as x,u as s,o as n,c as b,M as y,K as v,p as c,w as d,b as a,H as V,t as $,s as u,a as r,L as B,e as p,n as C,f as L}from"./app.dfb3b67b.js";import{_ as N}from"./GuestLayout.7fb1830e.js";import{_ as f,a as _}from"./InputLabel.0a545df6.js";import{_ as R}from"./PrimaryButton.e735dedc.js";import{_ as g}from"./TextInput.023cbfc4.js";import"./ApplicationLogo.39f15eef.js";import"./_plugin-vue_export-helper.cdc0426e.js";const S=["value"],U={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},emits:["update:checked"],setup(l,{emit:e}){const i=l,m=w({get(){return i.checked},set(t){e("update:checked",t)}});return(t,o)=>k((n(),b("input",{type:"checkbox",value:l.value,"onUpdate:modelValue":o[0]||(o[0]=h=>y(m)?m.value=h:null),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,8,S)),[[x,s(m)]])}},q={key:0,class:"mb-4 font-medium text-sm text-green-600"},F=["onSubmit"],M={class:"mt-4"},P={class:"block mt-4"},j={class:"flex items-center"},z=r("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),D={class:"flex items-center justify-end mt-4"},J={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(l){const e=v({email:"",password:"",remember:!1}),i=()=>{e.post(route("login"),{onFinish:()=>e.reset("password")})};return(m,t)=>(n(),c(N,null,{default:d(()=>[a(s(V),{title:"Log in"}),l.status?(n(),b("div",q,$(l.status),1)):u("",!0),r("form",{onSubmit:L(i,["prevent"])},[r("div",null,[a(f,{for:"email",value:"Email"}),a(g,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":t[0]||(t[0]=o=>s(e).email=o),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(_,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",M,[a(f,{for:"password",value:"Password"}),a(g,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":t[1]||(t[1]=o=>s(e).password=o),required:"",autocomplete:"current-password"},null,8,["modelValue"]),a(_,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",P,[r("label",j,[a(U,{name:"remember",checked:s(e).remember,"onUpdate:checked":t[2]||(t[2]=o=>s(e).remember=o)},null,8,["checked"]),z])]),r("div",D,[l.canResetPassword?(n(),c(s(B),{key:0,href:m.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:d(()=>[p(" Forgot your password? ")]),_:1},8,["href"])):u("",!0),a(R,{class:C(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:d(()=>[p(" Log in ")]),_:1},8,["class","disabled"])])],40,F)]),_:1}))}};export{J as default};
