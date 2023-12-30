"use strict";(()=>{var e={};e.id=959,e.ids=[959],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},57147:e=>{e.exports=require("fs")},29722:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>g,originalPathname:()=>P,patchFetch:()=>Z,requestAsyncStorage:()=>h,routeModule:()=>w,serverHooks:()=>y,staticGenerationAsyncStorage:()=>f,staticGenerationBailout:()=>j});var a={};r.r(a),r.d(a,{GET:()=>d,PATCH:()=>m,POST:()=>p});var i=r(10884),s=r(16132),n=r(21040),o=r(95798),u=r(57147),l=r.n(u);let c=async()=>{try{let e=await l().promises.readFile("email.json","utf8");return JSON.parse(e)}catch(e){return console.error(e),[]}};async function p(e,{params:t}){try{let t=await e.json(),{id:r,title:a,body:i,subject:s}=t;if(!a)return new o.Z("title is required",{status:400});if(!i)return new o.Z("email body is required",{status:400});if(!s)return new o.Z("subject is required",{status:400});let n=await c();return t.id=Math.random().toString(),n.push(t),await l().promises.writeFile("email.json",JSON.stringify(n)),o.Z.json("success")}catch(e){return console.log("[email_post]",e),new o.Z("Internal error",{status:500})}}async function d(e){try{let e=await c();return o.Z.json(e)}catch(e){return console.log("[email_get]",e),new o.Z("Internal error",{status:500})}}async function m(e){try{let t=await e.json(),r=await c(),a=r.findIndex(e=>e.id===t.id);return a>-1?(r[a]=t,await l().promises.writeFile("email.json",JSON.stringify(r))):console.error(`Template with ID ${t.id} not found`),o.Z.json("success")}catch(e){return console.error("[email_patch]",e),new o.Z("Internal error",{status:500})}}let w=new i.AppRouteRouteModule({definition:{kind:s.x.APP_ROUTE,page:"/api/emails/route",pathname:"/api/emails",filename:"route",bundlePath:"app/api/emails/route"},resolvedPagePath:"D:\\Projects\\diaspora-portal\\app\\api\\emails\\route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:h,staticGenerationAsyncStorage:f,serverHooks:y,headerHooks:g,staticGenerationBailout:j}=w,P="/api/emails/route";function Z(){return(0,n.patchFetch)({serverHooks:y,staticGenerationAsyncStorage:f})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[271,107],()=>r(29722));module.exports=a})();