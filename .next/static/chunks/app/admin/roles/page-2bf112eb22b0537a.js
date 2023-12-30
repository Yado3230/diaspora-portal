(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3717],{55326:function(e,t,r){Promise.resolve().then(r.bind(r,49441))},55641:function(e,t,r){"use strict";r.d(t,{Aq:function(){return l},Rd:function(){return o},fA:function(){return i},mZ:function(){return s},xJ:function(){return a}});let n="https://10.1.177.35:8881/",a=async()=>{try{let e=await fetch("".concat(n,"api/v1/roles")),t=await e.json();return t}catch(e){throw console.error("Error:",e),e}},s=async()=>{try{let e=await fetch("".concat(n,"api/v1/authorities")),t=await e.json();return t}catch(e){throw console.error("Error:",e),e}},i=async e=>{try{let t=await fetch("".concat(n,"api/v1/roles"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),r=await t.json();return r}catch(e){throw console.error("Error:",e),e}},o=async e=>{try{let t=await fetch("".concat(n,"api/v1/roles/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}),r=await t.json();return r}catch(e){throw console.error("Error:",e),e}},l=async(e,t)=>{try{let r=await fetch("".concat(n,"api/v1/roles/").concat(t,"/set-authorities"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),a=await r.json();return a}catch(e){throw console.error("Error:",e),e}}},49441:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return R}});var n=r(57437),a=r(2265),s=r(23611),i=r(49598),o=r(56606),l=r(4737),c=r(6310),d=r(74578),u=r(61865),f=r(38110),m=r(25539),x=r(89179),h=r(35831),p=r(5925),j=r(62031),N=r(94660);let y=(0,N.Ue)(e=>({isOpen:!1,onOpen:()=>e({isOpen:!0}),onClose:()=>e({isOpen:!1})}));var v=r(35217),g=r(55477),b=r(55641);let w=e=>{let{invoice:t,updated:r,setUpdated:i,authorities:o}=e;new Date().toISOString().split("T")[0];let l=y(),[c,N]=(0,a.useState)(!1),[w,C]=(0,a.useState)({}),[R,E]=(0,a.useState)({}),k=d.Ry({id:d.Rx().default(0),roleName:d.Z_().default(""),authorities:d.IX(d.Ry({id:d.Rx().default(0),resource:d.Z_().default(""),action:d.Z_().default(""),description:d.Z_().default(""),authority:d.Z_().default("")}))}),S=(0,u.cI)({resolver:(0,f.F)(k),defaultValues:t||{id:0,roleName:"",authorities:[]}}),I=()=>t?{id:t.id,roleName:t.roleName,authorities:t.authorities}:{id:0,roleName:"",authorities:[]},O=a.useMemo(()=>I(),[t]);a.useEffect(()=>{var e,t;let{setValue:r}=S;r("roleName",null!==(e=null==O?void 0:O.roleName)&&void 0!==e?e:""),r("authorities",null!==(t=null==O?void 0:O.authorities)&&void 0!==t?t:[])},[O]);let Z=(e,t)=>{let{setValue:r,getValues:n}=S,a=n("authorities"),s=a.findIndex(r=>r.resource===e&&r.action===t);if(-1!==s){let e=[...a];e.splice(s,1),r("authorities",e)}else{let n=[...a,{...o.find(r=>r.resource===e&&r.action===t)}],s="EDIT"===t||"WRITE"===t||"DELETE"===t?"READ":null;if(s&&!a.some(t=>t.resource===e&&t.action===s)){let t=o.find(t=>t.resource===e&&t.action===s);t&&n.push(t)}r("authorities",n)}},z=async e=>{console.log(e);try{N(!0),t.id?await (0,b.Aq)(e.authorities,t.id):await (0,b.fA)({roleName:e.roleName,authorities:e.authorities}),l.onClose(),i(!r),p.ZP.success(t.id?"Updated":"Role Created")}catch(e){p.ZP.error("Something went wrong!")}finally{N(!1)}};return a.useEffect(()=>{let e=!0,t=async()=>{N(!0);try{let t={};for(let e of o){let{resource:r}=e;t[r]||(t[r]=[]),t[r].push(e)}e&&C(t)}catch(e){console.error("Error grouping authorities",e)}finally{e&&N(!1)}},r=async()=>{N(!0);try{let t={};for(let e of S.control._formValues.authorities){let{resource:r}=e;t[r]||(t[r]=[]),t[r].push(e)}e&&E(t)}catch(e){console.error("Error grouping authorities",e)}finally{e&&N(!1)}};return t(),r(),()=>{e=!1}},[S.control._formValues.authorities,l.isOpen,t]),(0,n.jsx)(m.u,{title:"Role",description:"Manage roles",isOpen:l.isOpen,onClose:l.onClose,children:(0,n.jsx)("div",{className:"spaye-y-4 py-2 pb-4 w-[550px]",children:(0,n.jsx)(x.l0,{...S,children:(0,n.jsxs)("form",{onSubmit:S.handleSubmit(z),children:[(0,n.jsx)(x.Wi,{name:"roleName",control:S.control,render:e=>{let{field:t}=e;return(0,n.jsxs)(x.xJ,{children:[(0,n.jsx)(x.lX,{children:"Role Name:"}),(0,n.jsx)(x.NI,{children:(0,n.jsx)(h.I,{placeholder:"name",...t})}),(0,n.jsx)(x.zG,{})]})}}),(0,n.jsx)("div",{className:"my-4",children:(0,n.jsx)(v.Z,{})}),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-lg font-semibold mb-2",children:"Role Permissions"}),Object.entries(w).map((e,r)=>{let[a,s]=e;return(0,n.jsxs)("div",{className:"flex items-center justify-between border-t border-b py-2",children:[(0,n.jsx)("div",{children:a}),(0,n.jsx)("div",{className:"flex space-x-5 whitespace-nowrap",children:["READ","WRITE","EDIT","DELETE"].map(e=>{var r;return(0,n.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,n.jsx)(g.X,{disabled:"SUPER-ADMIN"===t.roleName,id:"".concat(a.toLowerCase(),"-").concat(e),value:e.toLowerCase(),checked:null===(r=R[a])||void 0===r?void 0:r.map(t=>t.action===e).includes(!0),onClick:t=>{Z(a,e),l.onClose(),l.onOpen()}}),(0,n.jsx)("label",{htmlFor:"".concat(a.toLowerCase(),"-").concat(e),className:"text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",children:e.charAt(0).toUpperCase()+e.slice(1)})]},e)})})]},r)})]})}),(0,n.jsx)(j.cN,{children:(0,n.jsxs)("div",{className:"pt-6 space-x-2 flex items-center justify-end w-full mt-12",children:[(0,n.jsx)(s.z,{variant:"outline",type:"button",onClick:l.onClose,children:"Cancel"}),(0,n.jsx)(s.z,{type:"submit",disabled:c||"SUPER-ADMIN"===t.roleName,className:"bg-cyan-500",children:0!==t.id?"Update":"Add"})]})})]})})})})};var C=r(83228),R=()=>{let e=y(),[t,r]=a.useState(!1),[d,u]=a.useState(!1),[f,m]=a.useState(!1),[x,h]=a.useState(0),[j,N]=a.useState([]),[v,g]=a.useState([]);a.useEffect(()=>{let e=async()=>{let e=await (0,b.xJ)(),t=await (0,b.mZ)();N(e),g(t)};e()},[t]);let[R,E]=a.useState({id:0,roleName:"",authorities:[]}),k=async()=>{try{m(!0),await (0,b.Rd)(x),p.ZP.success("Role deleted.")}catch(e){p.ZP.error("something went wrong")}finally{m(!1),r(!t),u(!1)}};return(0,n.jsxs)("div",{children:[(0,n.jsx)(w,{invoice:R,updated:t,authorities:v,setUpdated:r}),(0,n.jsx)(C.V,{isOpen:d,onClose:()=>u(!1),onConfirm:k,loading:f}),(0,n.jsx)("div",{className:"mb-4",children:(0,n.jsx)(o.X,{title:"Role Lists",description:"A role provided access to predefined menus and features so that depending on assigned role an administrator can have access to what he need"})}),(0,n.jsxs)("div",{className:"w-full grid grid-cols-3 gap-8",children:[j.map((t,r)=>(0,n.jsx)(i.Zb,{children:(0,n.jsx)(i.Ol,{children:(0,n.jsxs)(i.SZ,{children:[(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"flex items-center justify-between",children:(0,n.jsx)("span",{children:"Total 4 Users"})}),(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"text-xl text-black my-1 font-bold",children:t.roleName})})]}),(0,n.jsx)("div",{children:"SUPER-ADMIN"!==t.roleName?(0,n.jsx)(s.z,{size:"icon",variant:"destructive",onClick:()=>{h(t.id),u(!0)},children:(0,n.jsx)(l.Z,{className:"w-5 h-5"})}):(0,n.jsx)("div",{children:(0,n.jsx)(c.Z,{className:"w-10 h-10"})})})]}),(0,n.jsx)("div",{className:"mt-1",children:(0,n.jsx)(s.z,{onClick:()=>{E(t),e.onOpen()},variant:"outline",children:"SUPER-ADMIN"===t.roleName?"View Authorities":"Edit Role"})})]})})},r)),(0,n.jsxs)(i.Zb,{children:[(0,n.jsxs)(i.Ol,{children:[(0,n.jsx)(i.ll,{children:"New Role"}),(0,n.jsx)(i.SZ,{children:"create new role."})]}),(0,n.jsx)(i.eW,{children:(0,n.jsx)(s.z,{onClick:()=>{E({id:0,roleName:"",authorities:[]}),e.onOpen()},className:"w-full",children:"Add New Role"})})]})]})]})}},83228:function(e,t,r){"use strict";r.d(t,{V:function(){return o}});var n=r(57437),a=r(2265),s=r(25539),i=r(23611);let o=e=>{let{isOpen:t,onClose:r,onConfirm:o,loading:l}=e,[c,d]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{d(!0)},[]),c)?(0,n.jsx)(s.u,{title:"Are you sure?",description:"This action cannot be undone.",isOpen:t,onClose:r,children:(0,n.jsxs)("div",{className:"pt-6 space-x-2 flex items-center justify-end w-96",children:[(0,n.jsx)(i.z,{disabled:l,variant:"outline",onClick:r,children:"Cancel"}),(0,n.jsx)(i.z,{disabled:l,variant:"destructive",onClick:o,children:"Continue"})]})}):null}},23611:function(e,t,r){"use strict";r.d(t,{z:function(){return c}});var n=r(57437),a=r(2265),s=r(67256),i=r(96061),o=r(81628);let l=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef((e,t)=>{let{className:r,variant:a,size:i,asChild:c=!1,...d}=e,u=c?s.g7:"button";return(0,n.jsx)(u,{className:(0,o.cn)(l({variant:a,size:i,className:r})),ref:t,...d})});c.displayName="Button"},49598:function(e,t,r){"use strict";r.d(t,{Ol:function(){return o},SZ:function(){return c},Zb:function(){return i},aY:function(){return d},eW:function(){return u},ll:function(){return l}});var n=r(57437),a=r(2265),s=r(81628);let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("rounded-xl border bg-card text-card-foreground shadow",r),...a})});i.displayName="Card";let o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",r),...a})});o.displayName="CardHeader";let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("h3",{ref:t,className:(0,s.cn)("font-semibold leading-none tracking-tight",r),...a})});l.displayName="CardTitle";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("p",{ref:t,className:(0,s.cn)("text-sm text-muted-foreground",r),...a})});c.displayName="CardDescription";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("p-6 pt-0",r),...a})});d.displayName="CardContent";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,s.cn)("flex items-center p-6 pt-0",r),...a})});u.displayName="CardFooter"},55477:function(e,t,r){"use strict";r.d(t,{X:function(){return l}});var n=r(57437),a=r(2265),s=r(66062),i=r(69394),o=r(81628);let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.fC,{ref:t,className:(0,o.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",r),...a,children:(0,n.jsx)(s.z$,{className:(0,o.cn)("flex items-center justify-center text-current"),children:(0,n.jsx)(i.nQG,{className:"h-4 w-4"})})})});l.displayName=s.fC.displayName},62031:function(e,t,r){"use strict";r.d(t,{$N:function(){return x},Be:function(){return h},Vq:function(){return l},cN:function(){return m},cZ:function(){return u},fK:function(){return f}});var n=r(57437),a=r(2265),s=r(28712),i=r(69394),o=r(81628);let l=s.fC;s.xz;let c=s.h_;s.x8;let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.aV,{ref:t,className:(0,o.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...a})});d.displayName=s.aV.displayName;let u=a.forwardRef((e,t)=>{let{className:r,children:a,...l}=e;return(0,n.jsxs)(c,{children:[(0,n.jsx)(d,{}),(0,n.jsxs)(s.VY,{ref:t,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",r),...l,children:[a,(0,n.jsxs)(s.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,n.jsx)(i.Pxu,{className:"h-4 w-4"}),(0,n.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});u.displayName=s.VY.displayName;let f=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...r})};f.displayName="DialogHeader";let m=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...r})};m.displayName="DialogFooter";let x=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",r),...a})});x.displayName=s.Dx.displayName;let h=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.dk,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",r),...a})});h.displayName=s.dk.displayName},89179:function(e,t,r){"use strict";r.d(t,{l0:function(){return f},NI:function(){return y},Wi:function(){return x},xJ:function(){return j},lX:function(){return N},zG:function(){return g}});var n=r(57437),a=r(2265),s=r(67256),i=r(61865),o=r(81628),l=r(36743),c=r(96061);let d=(0,c.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(l.f,{ref:t,className:(0,o.cn)(d(),r),...a})});u.displayName=l.f.displayName;let f=i.RV,m=a.createContext({}),x=e=>{let{...t}=e;return(0,n.jsx)(m.Provider,{value:{name:t.name},children:(0,n.jsx)(i.Qr,{...t})})},h=()=>{let e=a.useContext(m),t=a.useContext(p),{getFieldState:r,formState:n}=(0,i.Gc)(),s=r(e.name,n);if(!e)throw Error("useFormField should be used within <FormField>");let{id:o}=t;return{id:o,name:e.name,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...s}},p=a.createContext({}),j=a.forwardRef((e,t)=>{let{className:r,...s}=e,i=a.useId();return(0,n.jsx)(p.Provider,{value:{id:i},children:(0,n.jsx)("div",{ref:t,className:(0,o.cn)("space-y-2",r),...s})})});j.displayName="FormItem";let N=a.forwardRef((e,t)=>{let{className:r,...a}=e,{error:s,formItemId:i}=h();return(0,n.jsx)(u,{ref:t,className:(0,o.cn)(s&&"text-destructive",r),htmlFor:i,...a})});N.displayName="FormLabel";let y=a.forwardRef((e,t)=>{let{...r}=e,{error:a,formItemId:i,formDescriptionId:o,formMessageId:l}=h();return(0,n.jsx)(s.g7,{ref:t,id:i,"aria-describedby":a?"".concat(o," ").concat(l):"".concat(o),"aria-invalid":!!a,...r})});y.displayName="FormControl";let v=a.forwardRef((e,t)=>{let{className:r,...a}=e,{formDescriptionId:s}=h();return(0,n.jsx)("p",{ref:t,id:s,className:(0,o.cn)("text-[0.8rem] text-muted-foreground",r),...a})});v.displayName="FormDescription";let g=a.forwardRef((e,t)=>{let{className:r,children:a,...s}=e,{error:i,formMessageId:l}=h(),c=i?String(null==i?void 0:i.message):a;return c?(0,n.jsx)("p",{ref:t,id:l,className:(0,o.cn)("text-[0.8rem] font-medium text-destructive",r),...s,children:c}):null});g.displayName="FormMessage"},56606:function(e,t,r){"use strict";r.d(t,{X:function(){return a}});var n=r(57437);let a=e=>{let{title:t,description:r}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-2xl font-bold text-cyan-500 tracking-tight",children:t}),(0,n.jsx)("p",{className:"text-sm text-muted-foreground",children:r})]})}},35831:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});var n=r(57437),a=r(2265),s=r(81628);let i=a.forwardRef((e,t)=>{let{className:r,type:a,...i}=e;return(0,n.jsx)("input",{type:a,className:(0,s.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...i})});i.displayName="Input"},25539:function(e,t,r){"use strict";r.d(t,{u:function(){return s}});var n=r(57437),a=r(62031);let s=e=>{let{title:t,description:r,isOpen:s,onClose:i,children:o}=e;return(0,n.jsx)(a.Vq,{open:s,onOpenChange:e=>{e||i()},children:(0,n.jsxs)(a.cZ,{className:"",children:[(0,n.jsxs)(a.fK,{children:[(0,n.jsx)(a.$N,{children:t}),(0,n.jsx)(a.Be,{children:r})]}),(0,n.jsx)("div",{children:o})]})})}},35217:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(57437),a=r(2265),s=r(26823),i=r(81628);let o=a.forwardRef((e,t)=>{let{className:r,orientation:a="horizontal",decorative:o=!0,...l}=e;return(0,n.jsx)(s.f,{ref:t,decorative:o,orientation:a,className:(0,i.cn)("shrink-0 bg-border","horizontal"===a?"h-[1px] w-full":"h-full w-[1px]",r),...l})});o.displayName=s.f.displayName},81628:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var n=r(57042),a=r(74769);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,n.W)(t))}}},function(e){e.O(0,[8310,7895,5107,9233,7471,7774,940,2971,2472,1744],function(){return e(e.s=55326)}),_N_E=e.O()}]);