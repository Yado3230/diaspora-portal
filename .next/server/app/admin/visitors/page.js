(()=>{var e={};e.id=757,e.ids=[757],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},79257:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>c});var a=r(67096),s=r(16132),n=r(37284),o=r.n(n),i=r(32564),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let c=["",{children:["admin",{children:["visitors",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,32756)),"D:\\Projects\\diaspora-portal\\app\\admin\\visitors\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,5098)),"D:\\Projects\\diaspora-portal\\app\\admin\\visitors\\layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,82458)),"D:\\Projects\\diaspora-portal\\app\\admin\\layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,2297)),"D:\\Projects\\diaspora-portal\\app\\admin\\loading.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,50353)),"D:\\Projects\\diaspora-portal\\app\\admin\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,54910)),"D:\\Projects\\diaspora-portal\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,88734)),"D:\\Projects\\diaspora-portal\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["D:\\Projects\\diaspora-portal\\app\\admin\\visitors\\page.tsx"],u="/admin/visitors/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/admin/visitors/page",pathname:"/admin/visitors",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},68444:(e,t,r)=>{Promise.resolve().then(r.bind(r,62617))},80354:(e,t,r)=>{Promise.resolve().then(r.bind(r,15308))},50706:(e,t,r)=>{"use strict";r.d(t,{LT:()=>s,RH:()=>c,_H:()=>i,jj:()=>n,tm:()=>l,wh:()=>o});let a="https://10.1.177.35:8881/",s=async e=>{try{let t=new URL(`${a}api/v1/accounts`);t.searchParams.append("sortBy","percentage_completed"),t.searchParams.append("sortDirection","desc"),"include"===e?t.searchParams.append("status","INITIAL"):"exclude"===e&&t.searchParams.append("statusToExclude","INITIAL");let r=await fetch(t.toString()),s=await r.json();return s}catch(e){throw console.error("Error:",e),e}},n=async e=>{try{let t=new URL(`${a}api/v1/accounts/dashboard-report`);e&&t.searchParams.append("year",e.toString());let r=await fetch(t.toString()),s=await r.json();return s}catch(e){throw console.error("Error:",e),e}},o=async e=>{try{let t=new URL(`${a}api/v1/accounts/monthly-dashboard-report`);e&&t.searchParams.append("year",e.toString());let r=await fetch(t.toString()),s=await r.json();return s}catch(e){throw console.error("Error:",e),e}},i=async e=>{try{let t=await fetch(`${a}api/v1/accounts/${e}`);return t.json()}catch(e){throw console.error("Error:",e),e}},l=async e=>{try{let t=await fetch(`${a}api/v1/accounts/${e}`,{method:"DELETE"});if(!t.ok)throw Error(`Request failed with status: ${t.status}`);let r=t.ok;return r}catch(e){throw console.error("Error:",e),e}},c=async(e,t)=>{try{let r=await fetch(`${a}api/v1/accounts/${e}/update-status?status=${t}`,{method:"PUT"});if(!r.ok)throw Error(`Request failed with status: ${r.status}`);let s=r.ok;return s}catch(e){throw console.error("Error:",e),e}}},62617:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var a=r(53854),s=r(34218),n=r(51018);function o({children:e}){let t=(0,n.useRouter)(),r=localStorage.getItem("authorities");return(0,s.useEffect)(()=>{r?.includes("READ_VISITORS")||t.push("/admin")},[r]),a.jsx("div",{children:a.jsx("div",{children:e})})}},15308:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>S});var a=r(53854),s=r(7857),n=r(51613),o=r(62634),i=r(59744),l=r(22139),c=r(79908),d=r(73549),u=r(70108),p=r(85256),m=r(34218),h=r(31485),g=r(51018),x=r(50706);let f=({data:e})=>{let t=e=>{navigator.clipboard.writeText(e),p.Am.success("client ID copied to the clipboard")},r=(0,g.useRouter)(),[n,o]=(0,m.useState)(!1),[f,v]=(0,m.useState)(!1),y=async()=>{try{o(!0),await (0,x.tm)(e.id.toString()),r.refresh(),p.Am.success("Account deleted.")}catch(e){p.Am.error("Something went wrong!")}finally{o(!1),v(!1)}};return(0,a.jsxs)(a.Fragment,{children:[a.jsx(h.V,{isOpen:f,onClose:()=>v(!1),onConfirm:y,loading:n}),(0,a.jsxs)(i.h_,{children:[a.jsx(i.$F,{asChild:!0,children:(0,a.jsxs)(s.z,{variant:"ghost",className:"h-8 w-8 p-0",children:[a.jsx("span",{className:"sr-only",children:"Open menu"}),a.jsx(l.Z,{className:"h-4 w-4"})]})}),(0,a.jsxs)(i.AW,{align:"end",children:[a.jsx(i.Ju,{children:"Actions"}),(0,a.jsxs)(i.Xi,{onClick:()=>t(e.id.toString()),children:[a.jsx(c.Z,{className:"mr-2 h-4 w-4"}),"Copy ID"]}),(0,a.jsxs)(i.Xi,{onClick:()=>r.push(`/admin/visitors/${e.id.toString()}`),children:[a.jsx(d.Z,{className:"mr-2 h-4 w-4"}),"Preview"]}),(0,a.jsxs)(i.Xi,{onClick:()=>v(!0),children:[a.jsx(u.Z,{className:"mr-2 h-4 w-4"}),"Delete"]})]})]})]})};var v=r(44728),y=r(39658),b=r(74219);let w=[{id:"select",header:({table:e})=>a.jsx(v.X,{checked:e.getIsAllPageRowsSelected(),onCheckedChange:t=>e.toggleAllPageRowsSelected(!!t),"aria-label":"Select all"}),cell:({row:e})=>a.jsx(v.X,{checked:e.getIsSelected(),onCheckedChange:t=>e.toggleSelected(!!t),"aria-label":"Select row",disabled:"success"===e.original.status||"inprogress"===e.original.status}),enableSorting:!1,enableHiding:!1},{accessorKey:"fullName",header:({column:e})=>(0,a.jsxs)(s.z,{variant:"ghost",onClick:()=>e.toggleSorting("asc"===e.getIsSorted()),children:["Full Name",a.jsx(o.Z,{className:"ml-2 h-4 w-4"})]})},{accessorKey:"phone",header:({column:e})=>(0,a.jsxs)(s.z,{variant:"ghost",onClick:()=>e.toggleSorting("asc"===e.getIsSorted()),children:["Phone Number",a.jsx(o.Z,{className:"ml-2 h-4 w-4"})]})},{accessorKey:"motherName",header:({column:e})=>(0,a.jsxs)(s.z,{variant:"ghost",onClick:()=>e.toggleSorting("asc"===e.getIsSorted()),children:["Mother Name",a.jsx(o.Z,{className:"ml-2 h-4 w-4"})]})},{accessorKey:"email",header:({column:e})=>(0,a.jsxs)(s.z,{variant:"ghost",onClick:()=>e.toggleSorting("asc"===e.getIsSorted()),children:["Email",a.jsx(o.Z,{className:"ml-2 h-4 w-4"})]})},{accessorKey:"sex",header:({column:e})=>(0,a.jsxs)(s.z,{variant:"ghost",onClick:()=>e.toggleSorting("asc"===e.getIsSorted()),children:["Gender",a.jsx(o.Z,{className:"ml-2 h-4 w-4"})]}),cell:({row:e})=>{let t=y.Ot.find(t=>t.value===e.getValue("sex"));return t?a.jsx("div",{className:"flex w-[100px] items-center",style:{color:t.color},children:a.jsx("span",{children:t.label})}):null},filterFn:(e,t,r)=>r.includes(e.getValue(t))},{accessorKey:"percentageCompleted",header:({column:e})=>(0,a.jsxs)(s.z,{variant:"ghost",onClick:()=>e.toggleSorting("asc"===e.getIsSorted()),children:["Completed",a.jsx(o.Z,{className:"ml-2 h-4 w-4"})]}),cell:({row:e})=>{let t=parseFloat(e.getValue("percentageCompleted")),r=(20*t).toString()+"%",s=y.d8.find(e=>e.value===r);return s?(0,a.jsxs)("span",{className:"flex items-center space-x-1 w-[120px]",children:[a.jsx(b.E,{value:20*t}),a.jsx("span",{className:"text-cyan-600 font-semibold",children:s.label})]}):null},filterFn:(e,t,r)=>{let a=parseFloat(e.getValue(t)),s=(20*a).toString()+"%";return r.includes(s)}},{accessorKey:"createdAt",header:({column:e})=>(0,a.jsxs)(s.z,{variant:"ghost",onClick:()=>e.toggleSorting("asc"===e.getIsSorted()),children:["Created At",a.jsx(o.Z,{className:"ml-2 h-4 w-4"})]})},{id:"actions",cell:({row:e})=>a.jsx(f,{data:e.original})}];var j=r(41588),k=r(7599),P=r(69471);let E=({data:e})=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex border-b pb-2 items-center justify-between",children:[a.jsx(k.X,{title:`Visitors (${e.length})`,description:"Manage uncompleted account registrations"}),a.jsx("div",{}),a.jsx("div",{children:(0,a.jsxs)(s.z,{size:"sm",className:"bg-cyan-500",onClick:()=>(0,P.Z)("notfiltered",e),children:[a.jsx(n.Z,{className:"mr-2 h-4 w-4"}),"Export All"]})})]}),a.jsx(j.w,{searchKey:"fullName",clickable:!1,columns:w,data:e})]});var N=r(49246);let S=()=>{let[e,t]=(0,m.useState)([]);(0,m.useEffect)(()=>{let e=async()=>{let e=await (0,x.LT)("include");t(e instanceof Array?e:[])};e()},[]);let r=e.map(e=>({id:e.id,fullName:e.fullName,surname:e.surname,motherName:e.motherName,email:e.email,emailVerified:e.emailVerified,phone:e.phone,streetAddress:e.streetAddress,city:e.city,state:e.state,zipCode:e.zipCode,country:e.country,occupation:e.occupation,initialDeposit:e.initialDeposit,monthlyIncome:e.monthlyIncome,sex:e.sex,branch:e.branch,currency:e.currency,photo:e.photo,residenceCard:e.residenceCard,passport:e.passport,confirmationForm:e.confirmationForm,percentageCompleted:e.percentageCompleted,signature:e.signature,accountType:e.accountType,status:e.status,createdAt:(0,N.Z)(new Date(e.createdAt),"MMMM do, yyyy"),updatedAt:(0,N.Z)(new Date(e.updatedAt),"MMMM do, yyyy")}));return a.jsx("div",{children:a.jsx(E,{data:r})})}},44728:(e,t,r)=>{"use strict";r.d(t,{X:()=>N});var a=r(53854),s=r(34218),n=r(93836),o=r(81951),i=r(65864),l=r(64667),c=r(76026),d=r(50024),u=r(5440),p=r(55572),m=r(59280);let h="Checkbox",[g,x]=(0,i.b)(h),[f,v]=g(h),y=(0,s.forwardRef)((e,t)=>{let{__scopeCheckbox:r,name:a,checked:i,defaultChecked:d,required:u,disabled:p,value:h="on",onCheckedChange:g,...x}=e,[v,y]=(0,s.useState)(null),b=(0,o.e)(t,e=>y(e)),P=(0,s.useRef)(!1),E=!v||!!v.closest("form"),[N=!1,S]=(0,c.T)({prop:i,defaultProp:d,onChange:g}),C=(0,s.useRef)(N);return(0,s.useEffect)(()=>{let e=null==v?void 0:v.form;if(e){let t=()=>S(C.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[v,S]),(0,s.createElement)(f,{scope:r,state:N,disabled:p},(0,s.createElement)(m.WV.button,(0,n.Z)({type:"button",role:"checkbox","aria-checked":j(N)?"mixed":N,"aria-required":u,"data-state":k(N),"data-disabled":p?"":void 0,disabled:p,value:h},x,{ref:b,onKeyDown:(0,l.M)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,l.M)(e.onClick,e=>{S(e=>!!j(e)||!e),E&&(P.current=e.isPropagationStopped(),P.current||e.stopPropagation())})})),E&&(0,s.createElement)(w,{control:v,bubbles:!P.current,name:a,value:h,checked:N,required:u,disabled:p,style:{transform:"translateX(-100%)"}}))}),b=(0,s.forwardRef)((e,t)=>{let{__scopeCheckbox:r,forceMount:a,...o}=e,i=v("CheckboxIndicator",r);return(0,s.createElement)(p.z,{present:a||j(i.state)||!0===i.state},(0,s.createElement)(m.WV.span,(0,n.Z)({"data-state":k(i.state),"data-disabled":i.disabled?"":void 0},o,{ref:t,style:{pointerEvents:"none",...e.style}})))}),w=e=>{let{control:t,checked:r,bubbles:a=!0,...o}=e,i=(0,s.useRef)(null),l=(0,d.D)(r),c=(0,u.t)(t);return(0,s.useEffect)(()=>{let e=i.current,t=window.HTMLInputElement.prototype,s=Object.getOwnPropertyDescriptor(t,"checked"),n=s.set;if(l!==r&&n){let t=new Event("click",{bubbles:a});e.indeterminate=j(r),n.call(e,!j(r)&&r),e.dispatchEvent(t)}},[l,r,a]),(0,s.createElement)("input",(0,n.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:!j(r)&&r},o,{tabIndex:-1,ref:i,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function j(e){return"indeterminate"===e}function k(e){return j(e)?"indeterminate":e?"checked":"unchecked"}var P=r(79931),E=r(56370);let N=s.forwardRef(({className:e,...t},r)=>a.jsx(y,{ref:r,className:(0,E.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",e),...t,children:a.jsx(b,{className:(0,E.cn)("flex items-center justify-center text-current"),children:a.jsx(P.nQG,{className:"h-4 w-4"})})}));N.displayName=y.displayName},74219:(e,t,r)=>{"use strict";r.d(t,{E:()=>w});var a=r(53854),s=r(34218),n=r(93836),o=r(65864),i=r(59280);let l="Progress",[c,d]=(0,o.b)(l),[u,p]=c(l),m=(0,s.forwardRef)((e,t)=>{let{__scopeProgress:r,value:a,max:o,getValueLabel:l=g,...c}=e,d=v(o)?o:100,p=y(a,d)?a:null,m=f(p)?l(p,d):void 0;return(0,s.createElement)(u,{scope:r,value:p,max:d},(0,s.createElement)(i.WV.div,(0,n.Z)({"aria-valuemax":d,"aria-valuemin":0,"aria-valuenow":f(p)?p:void 0,"aria-valuetext":m,role:"progressbar","data-state":x(p,d),"data-value":null!=p?p:void 0,"data-max":d},c,{ref:t})))});m.propTypes={max(e,t,r){let a=e[t],s=String(a);return a&&!v(a)?Error(`Invalid prop \`max\` of value \`${s}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`):null},value(e,t,r){let a=e[t],s=String(a),n=v(e.max)?e.max:100;return null==a||y(a,n)?null:Error(`Invalid prop \`value\` of value \`${s}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`)}};let h=(0,s.forwardRef)((e,t)=>{var r;let{__scopeProgress:a,...o}=e,l=p("ProgressIndicator",a);return(0,s.createElement)(i.WV.div,(0,n.Z)({"data-state":x(l.value,l.max),"data-value":null!==(r=l.value)&&void 0!==r?r:void 0,"data-max":l.max},o,{ref:t}))});function g(e,t){return`${Math.round(e/t*100)}%`}function x(e,t){return null==e?"indeterminate":e===t?"complete":"loading"}function f(e){return"number"==typeof e}function v(e){return f(e)&&!isNaN(e)&&e>0}function y(e,t){return f(e)&&!isNaN(e)&&e<=t&&e>=0}var b=r(56370);let w=s.forwardRef(({className:e,value:t,...r},s)=>a.jsx(m,{ref:s,className:(0,b.cn)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20",e),...r,children:a.jsx(h,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(t||0)}%)`}})}));w.displayName=m.displayName},73549:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(23708);/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,a.Z)("Backpack",[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z",key:"wvr1b5"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}],["path",{d:"M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5",key:"xk3gvk"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}]])},5098:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>l});var a=r(95153);let s=(0,a.createProxy)(String.raw`D:\Projects\diaspora-portal\app\admin\visitors\layout.tsx`),{__esModule:n,$$typeof:o}=s,i=s.default,l=i},32756:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>l});var a=r(95153);let s=(0,a.createProxy)(String.raw`D:\Projects\diaspora-portal\app\admin\visitors\page.tsx`),{__esModule:n,$$typeof:o}=s,i=s.default,l=i}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[271,635,827,273,929,187,398,246,36,953,694],()=>r(79257));module.exports=a})();