import{A as u,l as f,o,s as _,w as s,b as i,u as e,H as p,c as g,y as h,a,e as n,q as y,L as b,f as v}from"./app.dd3f10ac.js";import{_ as k,a as x}from"./PrimaryButton.92fbbcd5.js";import"./ApplicationLogo.4f9decce.js";import"./_plugin-vue_export-helper.cdc0426e.js";const w=a("div",{class:"mb-4 text-sm text-gray-600"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),V={key:0,class:"mb-4 font-medium text-sm text-green-600"},B=["onSubmit"],E={class:"mt-4 flex items-center justify-between"},A={__name:"VerifyEmail",props:{status:String},setup(r){const c=r,t=u(),d=()=>{t.post(route("verification.send"))},l=f(()=>c.status==="verification-link-sent");return(m,L)=>(o(),_(k,null,{default:s(()=>[i(e(p),{title:"Email Verification"}),w,e(l)?(o(),g("div",V," A new verification link has been sent to the email address you provided during registration. ")):h("",!0),a("form",{onSubmit:v(d,["prevent"])},[a("div",E,[i(x,{class:y({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:s(()=>[n(" Resend Verification Email ")]),_:1},8,["class","disabled"]),i(e(b),{href:m.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:s(()=>[n("Log Out")]),_:1},8,["href"])])],40,B)]),_:1}))}};export{A as default};
