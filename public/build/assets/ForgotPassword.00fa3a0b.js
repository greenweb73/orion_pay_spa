import{K as u,o as i,p as d,w as r,b as a,u as e,H as c,c as _,t as f,s as p,a as t,e as w,n as g,f as b}from"./app.433d4af2.js";import{_ as y,a as x}from"./PrimaryButton.e2384221.js";import{_ as k,a as h}from"./InputLabel.c23bb24d.js";import{_ as V}from"./TextInput.8b809557.js";import"./ApplicationLogo.a3ebe575.js";import"./_plugin-vue_export-helper.cdc0426e.js";const v=t("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},$=["onSubmit"],B={class:"flex items-center justify-end mt-4"},q={__name:"ForgotPassword",props:{status:String},setup(o){const s=u({email:""}),m=()=>{s.post(route("password.email"))};return(F,l)=>(i(),d(y,null,{default:r(()=>[a(e(c),{title:"Forgot Password"}),v,o.status?(i(),_("div",N,f(o.status),1)):p("",!0),t("form",{onSubmit:b(m,["prevent"])},[t("div",null,[a(k,{for:"email",value:"Email"}),a(V,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":l[0]||(l[0]=n=>e(s).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(h,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",B,[a(x,{class:g({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:r(()=>[w(" Email Password Reset Link ")]),_:1},8,["class","disabled"])])],40,$)]),_:1}))}};export{q as default};
