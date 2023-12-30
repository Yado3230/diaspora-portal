(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9674],{9883:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(62898);/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=(0,n.Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},64683:function(e,t,r){Promise.resolve().then(r.bind(r,85021))},55641:function(e,t,r){"use strict";r.d(t,{Aq:function(){return i},Rd:function(){return l},fA:function(){return o},mZ:function(){return a},xJ:function(){return s}});let n="https://10.1.177.35:8881/",s=async()=>{try{let e=await fetch("".concat(n,"api/v1/roles")),t=await e.json();return t}catch(e){throw console.error("Error:",e),e}},a=async()=>{try{let e=await fetch("".concat(n,"api/v1/authorities")),t=await e.json();return t}catch(e){throw console.error("Error:",e),e}},o=async e=>{try{let t=await fetch("".concat(n,"api/v1/roles"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),r=await t.json();return r}catch(e){throw console.error("Error:",e),e}},l=async e=>{try{let t=await fetch("".concat(n,"api/v1/roles/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}),r=await t.json();return r}catch(e){throw console.error("Error:",e),e}},i=async(e,t)=>{try{let r=await fetch("".concat(n,"api/v1/roles/").concat(t,"/set-authorities"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),s=await r.json();return s}catch(e){throw console.error("Error:",e),e}}},61662:function(e,t,r){"use strict";r.d(t,{AW:function(){return s},Md:function(){return o},r4:function(){return a}});let n="https://10.1.177.35:8881/",s=async()=>{try{let e=await fetch("".concat(n,"api/v1/users")),t=await e.json();return t}catch(e){throw console.error("Error:",e),e}},a=async e=>{try{let t=await fetch("".concat(n,"api/v1/users"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw Error("Request failed with status: ".concat(t.status));let r=await t.json();return r}catch(e){throw console.error("Error:",e),e}},o=async e=>{try{let t=await fetch("".concat(n,"login"),{method:"POST",body:JSON.stringify(e)});if(!t.ok){if(401===t.status)throw Error("Please check your username and password.");throw Error("Request failed with status: ".concat(t.status))}let r=await t.json();return r}catch(e){if(e instanceof TypeError)throw Error("Network error: Unable to connect to the server.");throw console.error("Error:",e),e}}},85021:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return D}});var n=r(57437),s=r(23611),a=r(9883),o=r(14196),l=r(45487),i=r(17472),c=r(56224),u=r(4737),d=r(5925),h=r(2265),f=r(83228),y=r(24033),j=r(94660);let p=(0,j.Ue)(e=>({isOpen:!1,onOpen:()=>e({isOpen:!0}),onClose:()=>e({isOpen:!1})}));var m=r(74578),x=r(61865),w=r(38110),g=r(25539),v=r(89179),S=r(35831),b=r(7532),E=r(55641),N=r(61662);let C=m.Ry({fullName:m.Z_().min(1),email:m.Z_().default(""),password:m.Z_().default(""),roleId:m.Z_()}),O=()=>{let e=p(),[t,r]=(0,h.useState)([]),[a,o]=(0,h.useState)(!1);(0,h.useEffect)(()=>{let e=async()=>{let e=await (0,E.xJ)();r(e instanceof Array?e:[])};e()},[]);let l=(0,x.cI)({resolver:(0,w.F)(C),defaultValues:{fullName:"",email:"",password:"",roleId:""}}),i=async t=>{try{o(!0);let r=await (0,N.r4)(t);r&&(d.Am.success("User Created"),window.location.reload()),e.onClose()}catch(e){d.Am.error("Something went wrong!")}finally{o(!1)}};return(0,n.jsx)(g.u,{title:"Add User",description:"Add a new user",isOpen:e.isOpen,onClose:e.onClose,children:(0,n.jsx)("div",{className:"spaye-y-4 py-2 pb-4 w-96",children:(0,n.jsx)(v.l0,{...l,children:(0,n.jsxs)("form",{onSubmit:l.handleSubmit(i),children:[(0,n.jsx)(v.Wi,{name:"fullName",control:l.control,render:e=>{let{field:t}=e;return(0,n.jsxs)(v.xJ,{children:[(0,n.jsx)(v.lX,{children:"Full Name:"}),(0,n.jsx)(v.NI,{children:(0,n.jsx)(S.I,{placeholder:"fullname",...t})}),(0,n.jsx)(v.zG,{})]})}}),(0,n.jsx)(v.Wi,{name:"email",control:l.control,render:e=>{let{field:t}=e;return(0,n.jsxs)(v.xJ,{children:[(0,n.jsx)(v.lX,{children:"Email:"}),(0,n.jsx)(v.NI,{children:(0,n.jsx)(S.I,{type:"email",placeholder:"email",...t})}),(0,n.jsx)(v.zG,{})]})}}),(0,n.jsx)(v.Wi,{name:"password",control:l.control,render:e=>{let{field:t}=e;return(0,n.jsxs)(v.xJ,{children:[(0,n.jsx)(v.lX,{children:"Password:"}),(0,n.jsx)(v.NI,{children:(0,n.jsx)(S.I,{type:"password",placeholder:"password",...t})}),(0,n.jsx)(v.zG,{})]})}}),(0,n.jsx)(v.Wi,{control:l.control,name:"roleId",render:e=>{let{field:r}=e;return(0,n.jsxs)(v.xJ,{children:[(0,n.jsx)(v.lX,{children:"Role:"}),(0,n.jsxs)(b.Ph,{disabled:a,onValueChange:r.onChange,value:r.value.toString(),defaultValue:r.value.toString(),children:[(0,n.jsx)(v.NI,{children:(0,n.jsx)(b.i4,{children:(0,n.jsx)(b.ki,{defaultValue:r.value,placeholder:"Select a role"})})}),(0,n.jsx)(b.Bw,{children:t.filter(e=>"SUPER-ADMIN"!==e.roleName).map(e=>{var t;return(0,n.jsx)(b.Ql,{value:(null===(t=e.id)||void 0===t?void 0:t.toString())||"",children:e.roleName},e.id)})})]}),(0,n.jsx)(v.zG,{})]})}}),(0,n.jsxs)("div",{className:"pt-6 space-x-2 flex items-center justify-end w-full",children:[(0,n.jsx)(s.z,{variant:"outline",type:"button",onClick:e.onClose,children:"Cancel"}),(0,n.jsx)(s.z,{type:"submit",disabled:a,className:"bg-cyan-500",children:"Continue"})]})]})})})})},A=e=>{let{data:t}=e,r=e=>{navigator.clipboard.writeText(e),d.Am.success("client ID copied to the clipboard")};(0,y.useRouter)();let[a,o]=(0,h.useState)(!1),[j,m]=(0,h.useState)(!1);p();let x=async()=>{};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.V,{isOpen:j,onClose:()=>m(!1),onConfirm:x,loading:a}),(0,n.jsx)(O,{}),(0,n.jsxs)(l.h_,{children:[(0,n.jsx)(l.$F,{asChild:!0,children:(0,n.jsxs)(s.z,{variant:"ghost",className:"h-8 w-8 p-0",children:[(0,n.jsx)("span",{className:"sr-only",children:"Open menu"}),(0,n.jsx)(i.Z,{className:"h-4 w-4"})]})}),(0,n.jsxs)(l.AW,{align:"end",children:[(0,n.jsx)(l.Ju,{children:"Actions"}),(0,n.jsxs)(l.Xi,{onClick:()=>r(t.userId.toString()),children:[(0,n.jsx)(c.Z,{className:"mr-2 h-4 w-4"}),"Copy ID"]}),(0,n.jsxs)(l.Xi,{onClick:()=>m(!0),children:[(0,n.jsx)(u.Z,{className:"mr-2 h-4 w-4"}),"Delete"]})]})]})]})},I=[{accessorKey:"fullName",header:e=>{let{column:t}=e;return(0,n.jsxs)(s.z,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),children:["Full Name",(0,n.jsx)(o.Z,{className:"ml-2 h-4 w-4"})]})}},{accessorKey:"email",header:e=>{let{column:t}=e;return(0,n.jsxs)(s.z,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),children:["Email",(0,n.jsx)(o.Z,{className:"ml-2 h-4 w-4"})]})}},{accessorKey:"role",header:e=>{let{column:t}=e;return(0,n.jsxs)(s.z,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),children:["Role",(0,n.jsx)(o.Z,{className:"ml-2 h-4 w-4"})]})}},{accessorKey:"registeredAt",header:e=>{let{column:t}=e;return(0,n.jsxs)(s.z,{variant:"ghost",onClick:()=>t.toggleSorting("asc"===t.getIsSorted()),children:["Created At",(0,n.jsx)(o.Z,{className:"ml-2 h-4 w-4"})]})}},{id:"actions",cell:e=>{let{row:t}=e;return(0,n.jsx)(A,{data:t.original})}}];var k=r(26224),Z=r(56606),z=e=>{let{data:t}=e,r=p();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex border-b pb-2 items-center justify-between",children:[(0,n.jsx)(Z.X,{title:"Users (".concat(t.length,")"),description:"Manage users"}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{children:(0,n.jsxs)(s.z,{size:"sm",className:"bg-cyan-500",onClick:()=>r.onOpen(),children:[(0,n.jsx)(a.Z,{className:"mr-2 h-4 w-4"}),"Add User"]})})]}),(0,n.jsx)(k.w,{searchKey:"fullName",clickable:!1,columns:I,data:t})]})},T=r(84301),D=()=>{let[e,t]=(0,h.useState)([]);(0,h.useEffect)(()=>{let e=async()=>{let e=await (0,N.AW)();t(e instanceof Array?e:[])};e()},[]);let r=e.map(e=>({userId:e.userId,fullName:e.fullName,role:e.role,email:e.email,status:e.status,registeredBy:e.registeredBy,lastLoggedIn:e.registeredBy,registeredAt:(0,T.Z)(new Date(e.registeredAt),"MMMM do, yyyy"),updatedAt:(0,T.Z)(new Date(e.updatedAt),"MMMM do, yyyy")}));return(0,n.jsx)("div",{children:(0,n.jsx)(z,{data:r})})}},81853:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useState,o=n.useEffect,l=n.useLayoutEffect,i=n.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!s(e,r)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=a({inst:{value:r,getSnapshot:t}}),s=n[0].inst,u=n[1];return l(function(){s.value=r,s.getSnapshot=t,c(s)&&u({inst:s})},[e,r,t]),o(function(){return c(s)&&u({inst:s}),e(function(){c(s)&&u({inst:s})})},[e]),i(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:u},78704:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),s=r(26272),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=s.useSyncExternalStore,l=n.useRef,i=n.useEffect,c=n.useMemo,u=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,s){var d=l(null);if(null===d.current){var h={hasValue:!1,value:null};d.current=h}else h=d.current;var f=o(e,(d=c(function(){function e(e){if(!i){if(i=!0,o=e,e=n(e),void 0!==s&&h.hasValue){var t=h.value;if(s(t,e))return l=t}return l=e}if(t=l,a(o,e))return t;var r=n(e);return void 0!==s&&s(t,r)?t:(o=e,l=r)}var o,l,i=!1,c=void 0===r?null:r;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,r,n,s]))[0],d[1]);return i(function(){h.hasValue=!0,h.value=f},[f]),u(f),f}},26272:function(e,t,r){"use strict";e.exports=r(81853)},65401:function(e,t,r){"use strict";e.exports=r(78704)},94660:function(e,t,r){"use strict";r.d(t,{Ue:function(){return d}});let n=e=>{let t;let r=new Set,n=(e,n)=>{let s="function"==typeof e?e(t):e;if(!Object.is(s,t)){let e=t;t=(null!=n?n:"object"!=typeof s||null===s)?s:Object.assign({},t,s),r.forEach(r=>r(t,e))}},s=()=>t,a={setState:n,getState:s,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}};return t=e(n,s,a),a},s=e=>e?n(e):n;var a=r(2265),o=r(65401);let{useDebugValue:l}=a,{useSyncExternalStoreWithSelector:i}=o,c=!1,u=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?s(e):e,r=(e,r)=>(function(e,t=e.getState,r){r&&!c&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),c=!0);let n=i(e.subscribe,e.getState,e.getServerState||e.getState,t,r);return l(n),n})(t,e,r);return Object.assign(r,t),r},d=e=>e?u(e):u}},function(e){e.O(0,[8310,1425,7895,5107,9233,7471,7774,7025,3382,2006,4301,8699,2971,2472,1744],function(){return e(e.s=64683)}),_N_E=e.O()}]);