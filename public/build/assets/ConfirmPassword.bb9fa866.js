import{u as m,o as d,b as l,w as t,d as o,e as a,H as c,a as e,f as p,n as u,g as f}from"./app.3075576c.js";import{_,a as w}from"./PrimaryButton.1af427ce.js";import{_ as b,a as g}from"./InputLabel.db08af9b.js";import{_ as h}from"./TextInput.0fd61930.js";import"./ApplicationLogo.951c1631.js";import"./_plugin-vue_export-helper.cdc0426e.js";const x=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),V=["onSubmit"],v={class:"flex justify-end mt-4"},H={__name:"ConfirmPassword",setup(y){const s=m({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(C,r)=>(d(),l(_,null,{default:t(()=>[o(a(c),{title:"Confirm Password"}),x,e("form",{onSubmit:f(i,["prevent"])},[e("div",null,[o(b,{for:"password",value:"Password"}),o(h,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(s).password,"onUpdate:modelValue":r[0]||(r[0]=n=>a(s).password=n),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),o(g,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),e("div",v,[o(w,{class:u(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:t(()=>[p(" Confirm ")]),_:1},8,["class","disabled"])])],40,V)]),_:1}))}};export{H as default};