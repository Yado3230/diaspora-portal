(()=>{var e={};e.id=931,e.ids=[931],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},70551:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var s=t(67096),a=t(16132),n=t(37284),o=t.n(n),i=t(32564),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);t.d(r,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,22330)),"D:\\Projects\\diaspora-portal\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,54910)),"D:\\Projects\\diaspora-portal\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(t.bind(t,88734)),"D:\\Projects\\diaspora-portal\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Projects\\diaspora-portal\\app\\page.tsx"],u="/page",m={require:t,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9686:(e,r,t)=>{Promise.resolve().then(t.bind(t,82201))},70165:(e,r,t)=>{"use strict";t.d(r,{AW:()=>a,Md:()=>o,r4:()=>n});let s="https://10.1.177.35:8881/",a=async()=>{try{let e=await fetch(`${s}api/v1/users`),r=await e.json();return r}catch(e){throw console.error("Error:",e),e}},n=async e=>{try{let r=await fetch(`${s}api/v1/users`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!r.ok)throw Error(`Request failed with status: ${r.status}`);let t=await r.json();return t}catch(e){throw console.error("Error:",e),e}},o=async e=>{try{let r=await fetch(`${s}login`,{method:"POST",body:JSON.stringify(e)});if(!r.ok){if(401===r.status)throw Error("Please check your username and password.");throw Error(`Request failed with status: ${r.status}`)}let t=await r.json();return t}catch(e){if(e instanceof TypeError)throw Error("Network error: Unable to connect to the server.");throw console.error("Error:",e),e}}},82201:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>v});var s=t(53854),a=t(7857),n=t(44728),o=t(24769),i=t(75548),l=t.n(i),d=t(34218),c=t(61460),u=t(92747),m=t(44468),p=t(85256),f=t(51018),x=t(11620),h=t(21959),b=t(70165);let g=c.z.object({username:c.z.string().min(1),password:c.z.string().min(1)}),v=function(){let{login:e}=(0,h.useAuth)(),[r,t]=(0,d.useState)(!1),i=(0,f.useRouter)(),c=(0,u.cI)({resolver:(0,m.F)(g),defaultValues:{username:"",password:""}}),v=async r=>{try{t(!0);let s=await (0,b.Md)(r);s.access_token&&(e(s.access_token,s.refresh_token),i.push("/admin"),i.refresh(),p.Am.success("Login success"))}catch(e){console.error("Error is this:",e.message),"Please check your username and password."===e.message?p.Am.error("Invalid username or password"):"Network error: Unable to connect to the server."===e.message?p.Am.error("Network error: Unable to connect to the server"):p.Am.error("Something went wrong!")}finally{t(!1)}};return s.jsx("div",{className:"w-full max-w-xl mt-8 xl:w-5/12",children:s.jsx("div",{className:"p-6 bg-white rounded shadow border border-gray-100 sm:p-10 dark:bg-gray-800",children:s.jsx(x.l0,{...c,children:s.jsx("form",{onSubmit:c.handleSubmit(v),className:"space-y-8 w-full",children:(0,s.jsxs)("div",{className:"space-y-4 md:space-y-4",children:[s.jsx("h1",{className:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white",children:"Sign in to your account"}),s.jsx("div",{className:"space-y-2",children:s.jsx(x.Wi,{control:c.control,name:"username",render:({field:e})=>(0,s.jsxs)(x.xJ,{children:[s.jsx(x.lX,{children:"Username:"}),s.jsx(x.NI,{children:s.jsx(o.I,{type:"text",className:"ring-1",placeholder:"johndoe@example.com",disabled:r,...e})}),s.jsx(x.zG,{})]})})}),s.jsx("div",{className:"space-y-2",children:s.jsx(x.Wi,{control:c.control,name:"password",render:({field:e})=>(0,s.jsxs)(x.xJ,{children:[s.jsx(x.lX,{children:"Password:"}),s.jsx(x.NI,{children:s.jsx(o.I,{type:"password",className:"ring-1",placeholder:"••••••••",disabled:r,...e})}),s.jsx(x.zG,{})]})})}),(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[s.jsx(n.X,{id:"terms"}),s.jsx("label",{htmlFor:"terms",className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:"Remember me"})]}),s.jsx(l(),{href:"/auth/forgotpassword",className:"text-sm font-medium text-cyan-500 hover:underline dark:text-cyan-500",children:"Forgot password?"})]}),s.jsx(a.z,{disabled:r,type:"submit",className:"w-full text-white",children:"SIGN IN"}),s.jsx("div",{className:"form-group",children:s.jsx("div",{className:"hidden alert alert-success",role:"alert"})})]})})})})})}},7857:(e,r,t)=>{"use strict";t.d(r,{z:()=>d});var s=t(53854),a=t(34218),n=t(15001),o=t(82457),i=t(56370);let l=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef(({className:e,variant:r,size:t,asChild:a=!1,...o},d)=>{let c=a?n.g7:"button";return s.jsx(c,{className:(0,i.cn)(l({variant:r,size:t,className:e})),ref:d,...o})});d.displayName="Button"},44728:(e,r,t)=>{"use strict";t.d(r,{X:()=>E});var s=t(53854),a=t(34218),n=t(93836),o=t(81951),i=t(65864),l=t(64667),d=t(76026),c=t(50024),u=t(5440),m=t(55572),p=t(59280);let f="Checkbox",[x,h]=(0,i.b)(f),[b,g]=x(f),v=(0,a.forwardRef)((e,r)=>{let{__scopeCheckbox:t,name:s,checked:i,defaultChecked:c,required:u,disabled:m,value:f="on",onCheckedChange:x,...h}=e,[g,v]=(0,a.useState)(null),y=(0,o.e)(r,e=>v(e)),k=(0,a.useRef)(!1),P=!g||!!g.closest("form"),[E=!1,_]=(0,d.T)({prop:i,defaultProp:c,onChange:x}),q=(0,a.useRef)(E);return(0,a.useEffect)(()=>{let e=null==g?void 0:g.form;if(e){let r=()=>_(q.current);return e.addEventListener("reset",r),()=>e.removeEventListener("reset",r)}},[g,_]),(0,a.createElement)(b,{scope:t,state:E,disabled:m},(0,a.createElement)(p.WV.button,(0,n.Z)({type:"button",role:"checkbox","aria-checked":j(E)?"mixed":E,"aria-required":u,"data-state":N(E),"data-disabled":m?"":void 0,disabled:m,value:f},h,{ref:y,onKeyDown:(0,l.M)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,l.M)(e.onClick,e=>{_(e=>!!j(e)||!e),P&&(k.current=e.isPropagationStopped(),k.current||e.stopPropagation())})})),P&&(0,a.createElement)(w,{control:g,bubbles:!k.current,name:s,value:f,checked:E,required:u,disabled:m,style:{transform:"translateX(-100%)"}}))}),y=(0,a.forwardRef)((e,r)=>{let{__scopeCheckbox:t,forceMount:s,...o}=e,i=g("CheckboxIndicator",t);return(0,a.createElement)(m.z,{present:s||j(i.state)||!0===i.state},(0,a.createElement)(p.WV.span,(0,n.Z)({"data-state":N(i.state),"data-disabled":i.disabled?"":void 0},o,{ref:r,style:{pointerEvents:"none",...e.style}})))}),w=e=>{let{control:r,checked:t,bubbles:s=!0,...o}=e,i=(0,a.useRef)(null),l=(0,c.D)(t),d=(0,u.t)(r);return(0,a.useEffect)(()=>{let e=i.current,r=window.HTMLInputElement.prototype,a=Object.getOwnPropertyDescriptor(r,"checked"),n=a.set;if(l!==t&&n){let r=new Event("click",{bubbles:s});e.indeterminate=j(t),n.call(e,!j(t)&&t),e.dispatchEvent(r)}},[l,t,s]),(0,a.createElement)("input",(0,n.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:!j(t)&&t},o,{tabIndex:-1,ref:i,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function j(e){return"indeterminate"===e}function N(e){return j(e)?"indeterminate":e?"checked":"unchecked"}var k=t(79931),P=t(56370);let E=a.forwardRef(({className:e,...r},t)=>s.jsx(v,{ref:t,className:(0,P.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",e),...r,children:s.jsx(y,{className:(0,P.cn)("flex items-center justify-center text-current"),children:s.jsx(k.nQG,{className:"h-4 w-4"})})}));E.displayName=v.displayName},11620:(e,r,t)=>{"use strict";t.d(r,{l0:()=>m,NI:()=>v,Wi:()=>f,xJ:()=>b,lX:()=>g,zG:()=>w});var s=t(53854),a=t(34218),n=t(15001),o=t(92747),i=t(56370),l=t(68504),d=t(82457);let c=(0,d.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=a.forwardRef(({className:e,...r},t)=>s.jsx(l.f,{ref:t,className:(0,i.cn)(c(),e),...r}));u.displayName=l.f.displayName;let m=o.RV,p=a.createContext({}),f=({...e})=>s.jsx(p.Provider,{value:{name:e.name},children:s.jsx(o.Qr,{...e})}),x=()=>{let e=a.useContext(p),r=a.useContext(h),{getFieldState:t,formState:s}=(0,o.Gc)(),n=t(e.name,s);if(!e)throw Error("useFormField should be used within <FormField>");let{id:i}=r;return{id:i,name:e.name,formItemId:`${i}-form-item`,formDescriptionId:`${i}-form-item-description`,formMessageId:`${i}-form-item-message`,...n}},h=a.createContext({}),b=a.forwardRef(({className:e,...r},t)=>{let n=a.useId();return s.jsx(h.Provider,{value:{id:n},children:s.jsx("div",{ref:t,className:(0,i.cn)("space-y-2",e),...r})})});b.displayName="FormItem";let g=a.forwardRef(({className:e,...r},t)=>{let{error:a,formItemId:n}=x();return s.jsx(u,{ref:t,className:(0,i.cn)(a&&"text-destructive",e),htmlFor:n,...r})});g.displayName="FormLabel";let v=a.forwardRef(({...e},r)=>{let{error:t,formItemId:a,formDescriptionId:o,formMessageId:i}=x();return s.jsx(n.g7,{ref:r,id:a,"aria-describedby":t?`${o} ${i}`:`${o}`,"aria-invalid":!!t,...e})});v.displayName="FormControl";let y=a.forwardRef(({className:e,...r},t)=>{let{formDescriptionId:a}=x();return s.jsx("p",{ref:t,id:a,className:(0,i.cn)("text-[0.8rem] text-muted-foreground",e),...r})});y.displayName="FormDescription";let w=a.forwardRef(({className:e,children:r,...t},a)=>{let{error:n,formMessageId:o}=x(),l=n?String(n?.message):r;return l?s.jsx("p",{ref:a,id:o,className:(0,i.cn)("text-[0.8rem] font-medium text-destructive",e),...t,children:l}):null});w.displayName="FormMessage"},24769:(e,r,t)=>{"use strict";t.d(r,{I:()=>o});var s=t(53854),a=t(34218),n=t(56370);let o=a.forwardRef(({className:e,type:r,...t},a)=>s.jsx("input",{type:r,className:(0,n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:a,...t}));o.displayName="Input"},56370:(e,r,t)=>{"use strict";t.d(r,{cn:()=>n});var s=t(29395),a=t(1088);function n(...e){return(0,a.m6)((0,s.W)(e))}},22330:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d});var s=t(4656),a=t(95153);let n=(0,a.createProxy)(String.raw`D:\Projects\diaspora-portal\components\LoginCard.tsx`),{__esModule:o,$$typeof:i}=n,l=n.default;function d(){return s.jsx("main",{className:"flex items-center justify-center min-h-screen mx-2",children:s.jsx(l,{})})}},57481:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var s=t(31323);let a=e=>{let r=(0,s.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:r+""}]}},50024:(e,r,t)=>{"use strict";t.d(r,{D:()=>a});var s=t(34218);function a(e){let r=(0,s.useRef)({value:e,previous:e});return(0,s.useMemo)(()=>(r.current.value!==e&&(r.current.previous=r.current.value,r.current.value=e),r.current.previous),[e])}}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[271,635,827,929,36],()=>t(70551));module.exports=s})();