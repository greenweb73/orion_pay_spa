import{u as c,o as f,b as w,w as n,d as a,e,H as _,a as t,f as V,n as g,g as b}from"./app.d6d35c1d.js";import{_ as k,a as v}from"./PrimaryButton.20cd9c6f.js";import{_ as l,a as i,b as m}from"./TextInput.db6f2169.js";import"./ApplicationLogo.05fbae64.js";import"./_plugin-vue_export-helper.cdc0426e.js";const x=["onSubmit"],y={class:"mt-4"},P={class:"mt-4"},$={class:"flex items-center justify-end mt-4"},U={__name:"ResetPassword",props:{email:String,token:String},setup(u){const d=u,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),p=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(S,o)=>(f(),w(k,null,{default:n(()=>[a(e(_),{title:"Reset Password"}),t("form",{onSubmit:b(p,["prevent"])},[t("div",null,[a(l,{for:"email",value:"Email"}),a(i,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":o[0]||(o[0]=r=>e(s).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(m,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",y,[a(l,{for:"password",value:"Password"}),a(i,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":o[1]||(o[1]=r=>e(s).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(m,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),t("div",P,[a(l,{for:"password_confirmation",value:"Confirm Password"}),a(i,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":o[2]||(o[2]=r=>e(s).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(m,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),t("div",$,[a(v,{class:g({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:n(()=>[V(" Reset Password ")]),_:1},8,["class","disabled"])])],40,x)]),_:1}))}};export{U as default};
