(()=>{var e={};e.id=140,e.ids=[140],e.modules={55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},20840:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d});var a=t(67096),s=t(16132),n=t(37284),i=t.n(n),o=t(32564),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(r,l);let d=["",{children:["admin",{children:["settings",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,88252)),"D:\\Projects\\diaspora-portal\\app\\admin\\settings\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,82458)),"D:\\Projects\\diaspora-portal\\app\\admin\\layout.tsx"],loading:[()=>Promise.resolve().then(t.bind(t,2297)),"D:\\Projects\\diaspora-portal\\app\\admin\\loading.tsx"],"not-found":[()=>Promise.resolve().then(t.bind(t,50353)),"D:\\Projects\\diaspora-portal\\app\\admin\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,54910)),"D:\\Projects\\diaspora-portal\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(t.bind(t,88734)),"D:\\Projects\\diaspora-portal\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["D:\\Projects\\diaspora-portal\\app\\admin\\settings\\page.tsx"],u="/admin/settings/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/admin/settings/page",pathname:"/admin/settings",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},53400:(e,r,t)=>{Promise.resolve().then(t.bind(t,93722))},93722:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>S});var a=t(53854),s=t(39195),n=t(7857),i=t(63165),o=t(11620),l=t(24769),d=t(60),c=t(34218),u=t(93836),p=t(64667),m=t(65864),f=t(69572),x=t(55572),h=t(59280),j=t(36265),v=t(76026),g=t(17792);let b="Tabs",[y,w]=(0,m.b)(b,[f.Pc]),N=(0,f.Pc)(),[P,C]=y(b),I=(0,c.forwardRef)((e,r)=>{let{__scopeTabs:t,value:a,onValueChange:s,defaultValue:n,orientation:i="horizontal",dir:o,activationMode:l="automatic",...d}=e,p=(0,j.gm)(o),[m,f]=(0,v.T)({prop:a,onChange:s,defaultProp:n});return(0,c.createElement)(P,{scope:t,baseId:(0,g.M)(),value:m,onValueChange:f,orientation:i,dir:p,activationMode:l},(0,c.createElement)(h.WV.div,(0,u.Z)({dir:p,"data-orientation":i},d,{ref:r})))}),z=(0,c.forwardRef)((e,r)=>{let{__scopeTabs:t,loop:a=!0,...s}=e,n=C("TabsList",t),i=N(t);return(0,c.createElement)(f.fC,(0,u.Z)({asChild:!0},i,{orientation:n.orientation,dir:n.dir,loop:a}),(0,c.createElement)(h.WV.div,(0,u.Z)({role:"tablist","aria-orientation":n.orientation},s,{ref:r})))}),R=(0,c.forwardRef)((e,r)=>{let{__scopeTabs:t,value:a,disabled:s=!1,...n}=e,i=C("TabsTrigger",t),o=N(t),l=D(i.baseId,a),d=E(i.baseId,a),m=a===i.value;return(0,c.createElement)(f.ck,(0,u.Z)({asChild:!0},o,{focusable:!s,active:m}),(0,c.createElement)(h.WV.button,(0,u.Z)({type:"button",role:"tab","aria-selected":m,"aria-controls":d,"data-state":m?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:l},n,{ref:r,onMouseDown:(0,p.M)(e.onMouseDown,e=>{s||0!==e.button||!1!==e.ctrlKey?e.preventDefault():i.onValueChange(a)}),onKeyDown:(0,p.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&i.onValueChange(a)}),onFocus:(0,p.M)(e.onFocus,()=>{let e="manual"!==i.activationMode;m||s||!e||i.onValueChange(a)})})))}),_=(0,c.forwardRef)((e,r)=>{let{__scopeTabs:t,value:a,forceMount:s,children:n,...i}=e,o=C("TabsContent",t),l=D(o.baseId,a),d=E(o.baseId,a),p=a===o.value,m=(0,c.useRef)(p);return(0,c.useEffect)(()=>{let e=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,c.createElement)(x.z,{present:s||p},({present:t})=>(0,c.createElement)(h.WV.div,(0,u.Z)({"data-state":p?"active":"inactive","data-orientation":o.orientation,role:"tabpanel","aria-labelledby":l,hidden:!t,id:d,tabIndex:0},i,{ref:r,style:{...e.style,animationDuration:m.current?"0s":void 0}}),t&&n))});function D(e,r){return`${e}-trigger-${r}`}function E(e,r){return`${e}-content-${r}`}var q=t(56370);let F=c.forwardRef(({className:e,...r},t)=>a.jsx(z,{ref:t,className:(0,q.cn)("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",e),...r}));F.displayName=z.displayName;let M=c.forwardRef(({className:e,...r},t)=>a.jsx(R,{ref:t,className:(0,q.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",e),...r}));M.displayName=R.displayName;let Z=c.forwardRef(({className:e,...r},t)=>a.jsx(_,{ref:t,className:(0,q.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...r}));Z.displayName=_.displayName;var V=t(44468),$=t(23708);/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let k=(0,$.Z)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);var G=t(10888),T=t(92747),W=t(61460);let A=W.z.object({currentPassword:W.z.string().default(""),newPassword:W.z.string().default(""),confirmPassword:W.z.string().default("")}),X=()=>{let e=(0,T.cI)({resolver:(0,V.F)(A),defaultValues:{currentPassword:"",newPassword:"",confirmPassword:""}});return a.jsx("div",{children:(0,a.jsxs)("div",{children:[a.jsx("div",{className:"mb-3 flex items-center justify-between",children:a.jsx("span",{className:"text-xl",children:"Change Password"})}),a.jsx(d.Z,{className:"my-4"}),a.jsx("div",{className:"spaye-y-4 py-2 pb-4",children:a.jsx(o.l0,{...e,children:(0,a.jsxs)("form",{children:[(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[a.jsx(o.Wi,{name:"currentPassword",control:e.control,render:({field:e})=>(0,a.jsxs)(o.xJ,{children:[a.jsx(o.lX,{children:"Current Password:"}),a.jsx(o.NI,{children:a.jsx(l.I,{type:"current password",placeholder:"current password",...e})}),a.jsx(o.zG,{})]})}),a.jsx(o.Wi,{name:"newPassword",control:e.control,render:({field:e})=>(0,a.jsxs)(o.xJ,{children:[a.jsx(o.lX,{children:"New Password:"}),a.jsx(o.NI,{children:a.jsx(l.I,{type:"new password",placeholder:"new password",...e})}),a.jsx(o.zG,{})]})}),a.jsx(o.Wi,{name:"confirmPassword",control:e.control,render:({field:e})=>(0,a.jsxs)(o.xJ,{children:[a.jsx(o.lX,{children:"Confirm Password:"}),a.jsx(o.NI,{children:a.jsx(l.I,{type:"confirm password",placeholder:"confirm password",...e})}),a.jsx(o.zG,{})]})})]}),(0,a.jsxs)("div",{className:"pt-6 space-x-2 flex items-center justify-end w-full",children:[a.jsx(n.z,{variant:"outline",type:"button",children:"Cancel"}),a.jsx(n.z,{type:"submit",className:"bg-cyan-500",children:"Continue"})]})]})})})]})})},J=W.z.object({fullName:W.z.string().min(1),email:W.z.string().default(""),password:W.z.string().default(""),roleId:W.z.string()}),S=()=>{let e=(0,T.cI)({resolver:(0,V.F)(J),defaultValues:{fullName:"",email:"",password:"",roleId:""}});return a.jsx("div",{children:(0,a.jsxs)(I,{defaultValue:"account",className:"w-full",children:[(0,a.jsxs)(F,{className:"grid grid-cols-2 h-full w-[400px]",children:[(0,a.jsxs)(M,{value:"account",className:"py-2",children:[a.jsx(k,{className:"w-5 h-5 mr-2"}),"Account"]}),(0,a.jsxs)(M,{value:"password",className:"py-2",children:[a.jsx(G.Z,{className:"w-5 h-5 mr-2"})," Security"]})]}),a.jsx(Z,{value:"account",children:a.jsx(i.Zb,{className:"w-full p-5",children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"mb-3 flex items-center justify-between",children:[a.jsx("span",{className:"text-xl",children:"Profile Details"}),a.jsx(s.qE,{children:a.jsx(s.Q5,{children:"CN"})})]}),a.jsx(d.Z,{className:"my-4"}),a.jsx("div",{className:"spaye-y-4 py-2 pb-4 w-96",children:a.jsx(o.l0,{...e,children:(0,a.jsxs)("form",{children:[a.jsx(o.Wi,{name:"fullName",control:e.control,render:({field:e})=>(0,a.jsxs)(o.xJ,{children:[a.jsx(o.lX,{children:"Full Name:"}),a.jsx(o.NI,{children:a.jsx(l.I,{placeholder:"fullname",...e})}),a.jsx(o.zG,{})]})}),a.jsx(o.Wi,{name:"email",control:e.control,render:({field:e})=>(0,a.jsxs)(o.xJ,{children:[a.jsx(o.lX,{children:"Email:"}),a.jsx(o.NI,{children:a.jsx(l.I,{type:"email",placeholder:"email",...e})}),a.jsx(o.zG,{})]})}),(0,a.jsxs)("div",{className:"pt-6 space-x-2 flex items-center justify-end w-full",children:[a.jsx(n.z,{variant:"outline",type:"button",children:"Cancel"}),a.jsx(n.z,{type:"submit",className:"bg-cyan-500",children:"Continue"})]})]})})})]})})}),a.jsx(Z,{value:"password",children:a.jsx(i.Zb,{className:"p-5",children:a.jsx(X,{})})})]})})}},63165:(e,r,t)=>{"use strict";t.d(r,{Ol:()=>o,SZ:()=>d,Zb:()=>i,aY:()=>c,eW:()=>u,ll:()=>l});var a=t(53854),s=t(34218),n=t(56370);let i=s.forwardRef(({className:e,...r},t)=>a.jsx("div",{ref:t,className:(0,n.cn)("rounded-xl border bg-card text-card-foreground shadow",e),...r}));i.displayName="Card";let o=s.forwardRef(({className:e,...r},t)=>a.jsx("div",{ref:t,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",e),...r}));o.displayName="CardHeader";let l=s.forwardRef(({className:e,...r},t)=>a.jsx("h3",{ref:t,className:(0,n.cn)("font-semibold leading-none tracking-tight",e),...r}));l.displayName="CardTitle";let d=s.forwardRef(({className:e,...r},t)=>a.jsx("p",{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",e),...r}));d.displayName="CardDescription";let c=s.forwardRef(({className:e,...r},t)=>a.jsx("div",{ref:t,className:(0,n.cn)("p-6 pt-0",e),...r}));c.displayName="CardContent";let u=s.forwardRef(({className:e,...r},t)=>a.jsx("div",{ref:t,className:(0,n.cn)("flex items-center p-6 pt-0",e),...r}));u.displayName="CardFooter"},11620:(e,r,t)=>{"use strict";t.d(r,{l0:()=>p,NI:()=>g,Wi:()=>f,xJ:()=>j,lX:()=>v,zG:()=>y});var a=t(53854),s=t(34218),n=t(15001),i=t(92747),o=t(56370),l=t(68504),d=t(82457);let c=(0,d.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=s.forwardRef(({className:e,...r},t)=>a.jsx(l.f,{ref:t,className:(0,o.cn)(c(),e),...r}));u.displayName=l.f.displayName;let p=i.RV,m=s.createContext({}),f=({...e})=>a.jsx(m.Provider,{value:{name:e.name},children:a.jsx(i.Qr,{...e})}),x=()=>{let e=s.useContext(m),r=s.useContext(h),{getFieldState:t,formState:a}=(0,i.Gc)(),n=t(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:o}=r;return{id:o,name:e.name,formItemId:`${o}-form-item`,formDescriptionId:`${o}-form-item-description`,formMessageId:`${o}-form-item-message`,...n}},h=s.createContext({}),j=s.forwardRef(({className:e,...r},t)=>{let n=s.useId();return a.jsx(h.Provider,{value:{id:n},children:a.jsx("div",{ref:t,className:(0,o.cn)("space-y-2",e),...r})})});j.displayName="FormItem";let v=s.forwardRef(({className:e,...r},t)=>{let{error:s,formItemId:n}=x();return a.jsx(u,{ref:t,className:(0,o.cn)(s&&"text-destructive",e),htmlFor:n,...r})});v.displayName="FormLabel";let g=s.forwardRef(({...e},r)=>{let{error:t,formItemId:s,formDescriptionId:i,formMessageId:o}=x();return a.jsx(n.g7,{ref:r,id:s,"aria-describedby":t?`${i} ${o}`:`${i}`,"aria-invalid":!!t,...e})});g.displayName="FormControl";let b=s.forwardRef(({className:e,...r},t)=>{let{formDescriptionId:s}=x();return a.jsx("p",{ref:t,id:s,className:(0,o.cn)("text-[0.8rem] text-muted-foreground",e),...r})});b.displayName="FormDescription";let y=s.forwardRef(({className:e,children:r,...t},s)=>{let{error:n,formMessageId:i}=x(),l=n?String(n?.message):r;return l?a.jsx("p",{ref:s,id:i,className:(0,o.cn)("text-[0.8rem] font-medium text-destructive",e),...t,children:l}):null});y.displayName="FormMessage"},24769:(e,r,t)=>{"use strict";t.d(r,{I:()=>i});var a=t(53854),s=t(34218),n=t(56370);let i=s.forwardRef(({className:e,type:r,...t},s)=>a.jsx("input",{type:r,className:(0,n.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:s,...t}));i.displayName="Input"},60:(e,r,t)=>{"use strict";t.d(r,{Z:()=>o});var a=t(53854),s=t(34218),n=t(83568),i=t(56370);let o=s.forwardRef(({className:e,orientation:r="horizontal",decorative:t=!0,...s},o)=>a.jsx(n.f,{ref:o,decorative:t,orientation:r,className:(0,i.cn)("shrink-0 bg-border","horizontal"===r?"h-[1px] w-full":"h-full w-[1px]",e),...s}));o.displayName=n.f.displayName},88252:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>i,__esModule:()=>n,default:()=>l});var a=t(95153);let s=(0,a.createProxy)(String.raw`D:\Projects\diaspora-portal\app\admin\settings\page.tsx`),{__esModule:n,$$typeof:i}=s,o=s.default,l=o},83568:(e,r,t)=>{"use strict";t.d(r,{f:()=>c});var a=t(93836),s=t(34218),n=t(59280);let i="horizontal",o=["horizontal","vertical"],l=(0,s.forwardRef)((e,r)=>{let{decorative:t,orientation:o=i,...l}=e,c=d(o)?o:i;return(0,s.createElement)(n.WV.div,(0,a.Z)({"data-orientation":c},t?{role:"none"}:{"aria-orientation":"vertical"===c?c:void 0,role:"separator"},l,{ref:r}))});function d(e){return o.includes(e)}l.propTypes={orientation(e,r,t){let a=e[r],s=String(a);return a&&!d(a)?Error(`Invalid prop \`orientation\` of value \`${s}\` supplied to \`${t}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${i}\`.`):null}};let c=l}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[271,635,827,273,929,36,953],()=>t(20840));module.exports=a})();