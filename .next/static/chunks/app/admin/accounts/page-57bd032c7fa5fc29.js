(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4999],{61579:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(62898);/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,a.Z)("Backpack",[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z",key:"wvr1b5"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}],["path",{d:"M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5",key:"xk3gvk"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}]])},73122:function(e,t,r){Promise.resolve().then(r.bind(r,98868))},68695:function(e,t,r){"use strict";r.d(t,{LT:function(){return n},RH:function(){return i},_H:function(){return o},jj:function(){return s},tm:function(){return l},wh:function(){return c}});let a="https://10.1.177.35:8881/",n=async e=>{try{let t=new URL("".concat(a,"api/v1/accounts"));t.searchParams.append("sortBy","percentage_completed"),t.searchParams.append("sortDirection","desc"),"include"===e?t.searchParams.append("status","INITIAL"):"exclude"===e&&t.searchParams.append("statusToExclude","INITIAL");let r=await fetch(t.toString()),n=await r.json();return n}catch(e){throw console.error("Error:",e),e}},s=async e=>{try{let t=new URL("".concat(a,"api/v1/accounts/dashboard-report"));e&&t.searchParams.append("year",e.toString());let r=await fetch(t.toString()),n=await r.json();return n}catch(e){throw console.error("Error:",e),e}},c=async e=>{try{let t=new URL("".concat(a,"api/v1/accounts/monthly-dashboard-report"));e&&t.searchParams.append("year",e.toString());let r=await fetch(t.toString()),n=await r.json();return n}catch(e){throw console.error("Error:",e),e}},o=async e=>{try{let t=await fetch("".concat(a,"api/v1/accounts/").concat(e));return t.json()}catch(e){throw console.error("Error:",e),e}},l=async e=>{try{let t=await fetch("".concat(a,"api/v1/accounts/").concat(e),{method:"DELETE"});if(!t.ok)throw Error("Request failed with status: ".concat(t.status));let r=t.ok;return r}catch(e){throw console.error("Error:",e),e}},i=async(e,t)=>{try{let r=await fetch("".concat(a,"api/v1/accounts/").concat(e,"/update-status?status=").concat(t),{method:"PUT"});if(!r.ok)throw Error("Request failed with status: ".concat(r.status));let n=r.ok;return n}catch(e){throw console.error("Error:",e),e}}},98868:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return E}});var a=r(57437),n=r(23611),s=r(35817),c=r(24033),o=r(14196),l=r(45487),i=r(17472),d=r(56224),u=r(61579),h=r(4737),m=r(5925),p=r(2265),f=r(83228),g=r(68695);let y=e=>{let{data:t}=e,r=e=>{navigator.clipboard.writeText(e),m.Am.success("client ID copied to the clipboard")},s=(0,c.useRouter)(),[o,y]=(0,p.useState)(!1),[x,w]=(0,p.useState)(!1),b=async()=>{try{y(!0),await (0,g.tm)(t.id.toString()),s.refresh(),m.Am.success("Account deleted.")}catch(e){m.Am.error("Something went wrong!")}finally{y(!1),w(!1)}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f.V,{isOpen:x,onClose:()=>w(!1),onConfirm:b,loading:o}),(0,a.jsxs)(l.h_,{children:[(0,a.jsx)(l.$F,{asChild:!0,children:(0,a.jsxs)(n.z,{variant:"ghost",className:"h-8 w-8 p-0",children:[(0,a.jsx)("span",{className:"sr-only",children:"Open menu"}),(0,a.jsx)(i.Z,{className:"h-4 w-4"})]})}),(0,a.jsxs)(l.AW,{align:"end",children:[(0,a.jsx)(l.Ju,{children:"Actions"}),(0,a.jsxs)(l.Xi,{onClick:()=>r(t.id.toString()),children:[(0,a.jsx)(d.Z,{className:"mr-2 h-4 w-4"}),"Copy ID"]}),(0,a.jsxs)(l.Xi,{onClick:()=>s.push("/admin/accounts/".concat(t.id.toString())),children:[(0,a.jsx)(u.Z,{className:"mr-2 h-4 w-4"}),"Preview"]}),(0,a.jsxs)(l.Xi,{onClick:()=>w(!0),children:[(0,a.jsx)(h.Z,{className:"mr-2 h-4 w-4"}),"Delete"]})]})]})]})};var x=r(55477),w=r(64818);let b=[{id:"select",header:e=>{let{table:t}=e;return(0,a.jsx)(x.X,{checked:t.getIsAllPageRowsSelected(),onCheckedChange:e=>t.toggleAllPageRowsSelected(!!e),"aria-label":"Select all"})},cell:e=>{let{row:t}=e;return(0,a.jsx)(x.X,{checked:t.getIsSelected(),onCheckedChange:e=>t.toggleSelected(!!e),"aria-label":"Select row",disabled:"success"===t.original.status||"inprogress"===t.original.status})},enableSorting:!1,enableHiding:!1},{accessorKey:"fullName",header:e=>{let{column:t}=e;return(0,a.jsxs)(n.z,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),children:["Full Name",(0,a.jsx)(o.Z,{className:"ml-2 h-4 w-4"})]})}},{accessorKey:"phone",header:e=>{let{column:t}=e;return(0,a.jsxs)(n.z,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),children:["Phone Number",(0,a.jsx)(o.Z,{className:"ml-2 h-4 w-4"})]})}},{accessorKey:"email",header:e=>{let{column:t}=e;return(0,a.jsxs)(n.z,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),children:["Email",(0,a.jsx)(o.Z,{className:"ml-2 h-4 w-4"})]})}},{accessorKey:"sex",header:e=>{let{column:t}=e;return(0,a.jsxs)(n.z,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),children:["Gender",(0,a.jsx)(o.Z,{className:"ml-2 h-4 w-4"})]})},cell:e=>{let{row:t}=e,r=w.Ot.find(e=>e.value===t.getValue("sex"));return r?(0,a.jsx)("div",{className:"flex w-[100px] items-center",style:{color:r.color},children:(0,a.jsx)("span",{children:r.label})}):null},filterFn:(e,t,r)=>r.includes(e.getValue(t))},{accessorKey:"accountType",header:e=>{let{column:t}=e;return(0,a.jsxs)(n.z,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),children:["Account Type",(0,a.jsx)(o.Z,{className:"ml-2 h-4 w-4"})]})},cell:e=>{let{row:t}=e,r=w.lq.find(e=>e.value===t.getValue("accountType"));return r?(0,a.jsx)("div",{className:"flex items-center whitespace-nowrap",style:{color:r.color},children:(0,a.jsx)("span",{children:r.label})}):null},filterFn:(e,t,r)=>r.includes(e.getValue(t))},{accessorKey:"status",cell:e=>{let{row:t}=e,r=w.Do.find(e=>e.value===t.getValue("status"));return r?(0,a.jsxs)("div",{className:"flex w-[100px] items-center",style:{color:r.color},children:[r.icon&&(0,a.jsx)(r.icon,{className:"mr-2 h-4 w-4"}),(0,a.jsx)("span",{children:r.label})]}):null},filterFn:(e,t,r)=>r.includes(e.getValue(t))},{accessorKey:"createdAt",header:e=>{let{column:t}=e;return(0,a.jsxs)(n.z,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),children:["Created At",(0,a.jsx)(o.Z,{className:"ml-2 h-4 w-4"})]})}},{id:"actions",cell:e=>{let{row:t}=e;return(0,a.jsx)(y,{data:t.original})}}];var j=r(26224),v=r(56606),k=r(62097),C=e=>{let{data:t}=e;(0,c.useParams)(),(0,c.useRouter)();let r=localStorage.getItem("authorities");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex border-b pb-2 items-center justify-between",children:[(0,a.jsx)(v.X,{title:"Accounts (".concat(t.length,")"),description:"Manage Accounts"}),(0,a.jsx)("div",{}),(0,a.jsx)("div",{className:"".concat(!(null==r?void 0:r.includes("READ_ACCOUNT"))&&"cursor-not-allowed"),title:"".concat(!(null==r?void 0:r.includes("READ_ACCOUNT"))&&"Not Authorized"),children:(0,a.jsxs)(n.z,{disabled:!(null==r?void 0:r.includes("READ_ACCOUNT")),size:"sm",className:"bg-cyan-500",onClick:()=>(0,k.Z)("notfiltered",t),title:"disabled",children:[(0,a.jsx)(s.Z,{className:"mr-2 h-4 w-4"}),"Export All"]})})]}),(0,a.jsx)(j.w,{searchKey:"fullName",clickable:!0,columns:b,data:t})]})},N=r(84301),E=()=>{let[e,t]=(0,p.useState)([]);(0,p.useEffect)(()=>{let e=async()=>{let e=await (0,g.LT)("exclude");t(e instanceof Array?e:[])};e()},[]);let r=e.map(e=>({id:e.id,fullName:e.fullName,surname:e.surname,motherName:e.motherName,email:e.email,emailVerified:e.emailVerified,phone:e.phone,streetAddress:e.streetAddress,city:e.city,state:e.state,zipCode:e.zipCode,country:e.country,occupation:e.occupation,initialDeposit:e.initialDeposit,monthlyIncome:e.monthlyIncome,sex:e.sex,branch:e.branch,currency:e.currency,photo:e.photo,residenceCard:e.residenceCard,passport:e.passport,confirmationForm:e.confirmationForm,percentageCompleted:e.percentageCompleted,signature:e.signature,accountType:e.accountType,status:e.status,createdAt:(0,N.Z)(new Date(e.createdAt),"MMMM do, yyyy"),updatedAt:(0,N.Z)(new Date(e.updatedAt),"MMMM do, yyyy")}));return(0,a.jsx)("div",{children:(0,a.jsx)(C,{data:r})})}},55477:function(e,t,r){"use strict";r.d(t,{X:function(){return l}});var a=r(57437),n=r(2265),s=r(66062),c=r(69394),o=r(81628);let l=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(s.fC,{ref:t,className:(0,o.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",r),...n,children:(0,a.jsx)(s.z$,{className:(0,o.cn)("flex items-center justify-center text-current"),children:(0,a.jsx)(c.nQG,{className:"h-4 w-4"})})})});l.displayName=s.fC.displayName},66062:function(e,t,r){"use strict";r.d(t,{fC:function(){return k},z$:function(){return C}});var a=r(13428),n=r(2265),s=r(42210),c=r(56989),o=r(85744),l=r(73763),i=r(85184),d=r(94977),u=r(85606),h=r(9381);let m="Checkbox",[p,f]=(0,c.b)(m),[g,y]=p(m),x=(0,n.forwardRef)((e,t)=>{let{__scopeCheckbox:r,name:c,checked:i,defaultChecked:d,required:u,disabled:m,value:p="on",onCheckedChange:f,...y}=e,[x,w]=(0,n.useState)(null),k=(0,s.e)(t,e=>w(e)),C=(0,n.useRef)(!1),N=!x||!!x.closest("form"),[E=!1,S]=(0,l.T)({prop:i,defaultProp:d,onChange:f}),A=(0,n.useRef)(E);return(0,n.useEffect)(()=>{let e=null==x?void 0:x.form;if(e){let t=()=>S(A.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[x,S]),(0,n.createElement)(g,{scope:r,state:E,disabled:m},(0,n.createElement)(h.WV.button,(0,a.Z)({type:"button",role:"checkbox","aria-checked":j(E)?"mixed":E,"aria-required":u,"data-state":v(E),"data-disabled":m?"":void 0,disabled:m,value:p},y,{ref:k,onKeyDown:(0,o.M)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,o.M)(e.onClick,e=>{S(e=>!!j(e)||!e),N&&(C.current=e.isPropagationStopped(),C.current||e.stopPropagation())})})),N&&(0,n.createElement)(b,{control:x,bubbles:!C.current,name:c,value:p,checked:E,required:u,disabled:m,style:{transform:"translateX(-100%)"}}))}),w=(0,n.forwardRef)((e,t)=>{let{__scopeCheckbox:r,forceMount:s,...c}=e,o=y("CheckboxIndicator",r);return(0,n.createElement)(u.z,{present:s||j(o.state)||!0===o.state},(0,n.createElement)(h.WV.span,(0,a.Z)({"data-state":v(o.state),"data-disabled":o.disabled?"":void 0},c,{ref:t,style:{pointerEvents:"none",...e.style}})))}),b=e=>{let{control:t,checked:r,bubbles:s=!0,...c}=e,o=(0,n.useRef)(null),l=(0,i.D)(r),u=(0,d.t)(t);return(0,n.useEffect)(()=>{let e=o.current,t=window.HTMLInputElement.prototype,a=Object.getOwnPropertyDescriptor(t,"checked"),n=a.set;if(l!==r&&n){let t=new Event("click",{bubbles:s});e.indeterminate=j(r),n.call(e,!j(r)&&r),e.dispatchEvent(t)}},[l,r,s]),(0,n.createElement)("input",(0,a.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:!j(r)&&r},c,{tabIndex:-1,ref:o,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function j(e){return"indeterminate"===e}function v(e){return j(e)?"indeterminate":e?"checked":"unchecked"}let k=x,C=w}},function(e){e.O(0,[8310,1425,7895,5107,9233,7471,7774,7025,3382,2006,4301,8699,2971,2472,1744],function(){return e(e.s=73122)}),_N_E=e.O()}]);