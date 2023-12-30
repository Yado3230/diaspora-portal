"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1186],{68695:function(e,s,a){a.d(s,{LT:function(){return r},RH:function(){return i},_H:function(){return c},jj:function(){return t},tm:function(){return d},wh:function(){return n}});let l="https://10.1.177.35:8881/",r=async e=>{try{let s=new URL("".concat(l,"api/v1/accounts"));s.searchParams.append("sortBy","percentage_completed"),s.searchParams.append("sortDirection","desc"),"include"===e?s.searchParams.append("status","INITIAL"):"exclude"===e&&s.searchParams.append("statusToExclude","INITIAL");let a=await fetch(s.toString()),r=await a.json();return r}catch(e){throw console.error("Error:",e),e}},t=async e=>{try{let s=new URL("".concat(l,"api/v1/accounts/dashboard-report"));e&&s.searchParams.append("year",e.toString());let a=await fetch(s.toString()),r=await a.json();return r}catch(e){throw console.error("Error:",e),e}},n=async e=>{try{let s=new URL("".concat(l,"api/v1/accounts/monthly-dashboard-report"));e&&s.searchParams.append("year",e.toString());let a=await fetch(s.toString()),r=await a.json();return r}catch(e){throw console.error("Error:",e),e}},c=async e=>{try{let s=await fetch("".concat(l,"api/v1/accounts/").concat(e));return s.json()}catch(e){throw console.error("Error:",e),e}},d=async e=>{try{let s=await fetch("".concat(l,"api/v1/accounts/").concat(e),{method:"DELETE"});if(!s.ok)throw Error("Request failed with status: ".concat(s.status));let a=s.ok;return a}catch(e){throw console.error("Error:",e),e}},i=async(e,s)=>{try{let a=await fetch("".concat(l,"api/v1/accounts/").concat(e,"/update-status?status=").concat(s),{method:"PUT"});if(!a.ok)throw Error("Request failed with status: ".concat(a.status));let r=a.ok;return r}catch(e){throw console.error("Error:",e),e}}},21186:function(e,s,a){var l=a(57437),r=a(68695),t=a(23611),n=a(40877),c=a(82549),d=a(690),i=a(16691),o=a.n(i),u=a(24033);a(2265);var h=a(5925);s.Z=e=>{let{data:s,accounts:a}=e,i=(0,u.useRouter)(),x=localStorage.getItem("authorities"),p=e=>{let{src:s,label:a}=e;return(0,l.jsxs)("div",{className:"bg-white p-4 border rounded",children:[(0,l.jsx)(o(),{src:s,width:200,height:40,alt:a,className:"rounded-lg w-full h-auto mb-2"}),(0,l.jsx)("p",{className:"text-sm text-gray-600",children:a})]})},m=async()=>{try{await (0,r.RH)(s.id.toString(),"APPROVED"),i.refresh(),h.ZP.success("Account Approved.")}catch(e){h.ZP.error("Something went wrong!")}finally{}},g=async()=>{try{await (0,r.RH)(s.id.toString(),"REJECTED"),i.refresh(),h.ZP.success("Account rejected.")}catch(e){h.ZP.error("Something went wrong!")}finally{}};return(0,l.jsx)("div",{className:"container mx-auto",children:(0,l.jsxs)("div",{className:"max-w-full mx-auto bg-white p-8 border rounded shadow-lg",children:[(0,l.jsxs)("div",{className:"flex flex-col items-center mb-6",children:[(0,l.jsx)("img",{src:null==s?void 0:s.photo,alt:"Profile Photo",className:"rounded-full border mb-4",style:{width:"150px",height:"150px"}}),(0,l.jsx)("h1",{className:"text-3xl font-bold text-cyan-600",children:(null==s?void 0:s.accountType)||(0,l.jsx)("span",{className:"text-red-400",children:"Not Filled"})})]}),(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10",children:[(0,l.jsxs)("div",{className:"flex flex-col items-center mb-6 w-full p-5 border rounded shadow",children:[(0,l.jsx)(p,{src:(null==s?void 0:s.residenceCard)||"",label:"Residence Card"}),(0,l.jsx)("h1",{className:"text-xl font-semibold text-gray-800 mb-2",children:(null==s?void 0:s.fullName)||(0,l.jsx)("span",{className:"text-red-400",children:"Not Filled"})}),(0,l.jsx)("p",{className:"text-gray-600",children:(null==s?void 0:s.email)||(0,l.jsx)("span",{className:"text-red-400",children:"Not Filled"})})]}),(0,l.jsxs)("div",{className:"col-span-2 flex flex-col gap-8 p-5 border rounded shadow",children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 border-b py-2",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:"text-xl font-bold text-gray-800 mb-2",children:"Address"}),(0,l.jsxs)("p",{className:"text-gray-600 grid grid-cols-2 gap-4",children:[(0,l.jsx)("span",{className:"font-bold",children:"Street Address "}),(0,l.jsxs)("span",{children:[":"," ",(null==s?void 0:s.streetAddress)||(0,l.jsx)("span",{className:"text-red-400",children:"Not Filled"})]})]}),(0,l.jsxs)("p",{className:"text-gray-600 grid grid-cols-2 gap-4",children:[(0,l.jsx)("span",{className:"font-bold",children:"City "}),(0,l.jsxs)("span",{children:[":"," ",(null==s?void 0:s.city)||(0,l.jsx)("span",{className:"text-red-400",children:"Not Filled"})]})]}),(0,l.jsxs)("p",{className:"text-gray-600 grid grid-cols-2 gap-4",children:[(0,l.jsx)("span",{className:"font-bold",children:"State "}),(0,l.jsxs)("span",{children:[":"," ",(null==s?void 0:s.state)||(0,l.jsx)("span",{className:"text-red-400",children:"Not Filled"})]})]}),(0,l.jsxs)("p",{className:"text-gray-600 grid grid-cols-2 gap-4",children:[(0,l.jsx)("span",{className:"font-bold",children:"ZipCode "}),(0,l.jsxs)("span",{children:[":"," ",(null==s?void 0:s.zipCode)||(0,l.jsx)("span",{className:"text-red-400",children:"Not Filled"})]})]}),(0,l.jsxs)("p",{className:"text-gray-600 grid grid-cols-2 gap-4",children:[(0,l.jsx)("span",{className:"font-bold",children:"Country "}),(0,l.jsxs)("span",{children:[":"," ",(null==s?void 0:s.country)||(0,l.jsx)("span",{className:"text-red-400",children:"Not Filled"})]})]})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:"text-lg font-semibold text-gray-800 mb-2",children:"Occupation"}),(0,l.jsxs)("p",{className:"text-gray-600 grid grid-cols-2 gap-4 mb-5",children:[(0,l.jsx)("span",{className:"font-bold",children:"Occupation "}),(0,l.jsxs)("span",{children:[":"," ",(null==s?void 0:s.occupation)||(0,l.jsx)("span",{className:"text-red-400",children:"Not Filled"})]})]}),(0,l.jsx)("h2",{className:"text-xl font-bold text-gray-800 mb-2",children:"Status"}),(0,l.jsxs)("p",{className:"text-gray-600 grid grid-cols-2 gap-4",children:[(0,l.jsx)("span",{className:"font-bold",children:"Status:"}),(0,l.jsxs)("span",{children:[":"," ",(null==s?void 0:s.status)||(0,l.jsx)("span",{className:"text-red-400",children:"Not Filled"})]})]}),(0,l.jsxs)("p",{className:"text-gray-600 items-center justify-center grid grid-cols-2 gap-4",children:[(0,l.jsx)("span",{className:"font-bold",children:"Completed"}),(0,l.jsxs)("span",{className:"flex items-center space-x-1",children:[(0,l.jsx)(n.E,{value:(null==s?void 0:s.percentageCompleted)?(null==s?void 0:s.percentageCompleted)*20:0}),(0,l.jsxs)("span",{children:[(null==s?void 0:s.percentageCompleted)?(null==s?void 0:s.percentageCompleted)*20:0,"%"]})]})]})]})]}),(0,l.jsxs)("div",{className:" border-b py-2",children:[(0,l.jsx)("h2",{className:"text-xl font-bold text-gray-800 mb-2",children:"Financial Information"}),(0,l.jsxs)("p",{className:"text-gray-600 grid grid-cols-2 gap-4",children:[(0,l.jsx)("span",{className:"font-bold",children:"Initial Deposit"}),(0,l.jsxs)("span",{children:[": $",(null==s?void 0:s.initialDeposit)||(0,l.jsx)("span",{className:"text-red-400",children:"Not Filled"})]})]}),(0,l.jsxs)("p",{className:"text-gray-600 grid grid-cols-2 gap-4",children:[(0,l.jsx)("span",{className:"font-bold",children:"Monthly Income"}),(0,l.jsxs)("span",{children:[": $",(null==s?void 0:s.monthlyIncome)||(0,l.jsx)("span",{className:"text-red-400",children:"Not Filled"})]})]})]})]}),(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("h2",{className:"text-xl font-bold text-gray-800 mb-2",children:"Other Details"}),(0,l.jsxs)("p",{className:"text-gray-600 grid grid-cols-2 gap-4",children:[(0,l.jsx)("span",{className:"font-bold",children:"Sex"}),(0,l.jsxs)("span",{children:[":"," ",(null==s?void 0:s.sex)||(0,l.jsx)("span",{className:"text-red-400",children:"Not Filled"})]})]}),(0,l.jsxs)("p",{className:"text-gray-600 grid grid-cols-2 gap-4",children:[(0,l.jsx)("span",{className:"font-bold",children:"Branch"}),(0,l.jsxs)("span",{children:[":"," ",(null==s?void 0:s.branch)||(0,l.jsx)("span",{className:"text-red-400",children:"Not Filled"})]})]}),(0,l.jsxs)("p",{className:"text-gray-600 grid grid-cols-2 gap-4",children:[(0,l.jsx)("span",{className:"font-bold",children:"Account Type"}),(0,l.jsxs)("span",{children:[":"," ",(null==s?void 0:s.accountType)||(0,l.jsx)("span",{className:"text-red-400",children:"Not Filled"})]})]})]})})]})]}),(0,l.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8",children:[(0,l.jsx)(p,{src:(null==s?void 0:s.passport)||"",label:"".concat((null==s?void 0:s.passport)?"Passport":"Not Uploaded")}),(0,l.jsx)(p,{src:(null==s?void 0:s.signature)||"",label:"".concat((null==s?void 0:s.passport)?"Signature":"Not Uploaded")}),(0,l.jsx)(p,{src:(null==s?void 0:s.confirmationForm)||"",label:"".concat((null==s?void 0:s.passport)?"Confirmation Form":"Not Uploaded")})]}),(0,l.jsxs)("div",{className:"flex items-center justify-end border-t pt-5",children:[(0,l.jsx)(t.z,{className:"ml-2 border",size:"sm",onClick:()=>i.back(),variant:"secondary",children:"Cancel"}),a&&(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("div",{className:"".concat(!((null==x?void 0:x.includes("EDIT_ACCOUNT"))||(null==x?void 0:x.includes("WRITE_ACCOUNT")))&&"cursor-not-allowed"),title:"".concat(!((null==x?void 0:x.includes("EDIT_ACCOUNT"))||(null==x?void 0:x.includes("WRITE_ACCOUNT")))&&"Not Authorized"),children:(0,l.jsxs)(t.z,{disabled:!((null==x?void 0:x.includes("EDIT_ACCOUNT"))||(null==x?void 0:x.includes("WRITE_ACCOUNT"))),className:"ml-2 border",size:"sm",variant:"destructive",onClick:g,children:[(0,l.jsx)(c.Z,{className:"mr-2 h-4 w-4"}),"Reject"]})}),(0,l.jsx)("div",{className:"".concat(!((null==x?void 0:x.includes("EDIT_ACCOUNT"))||(null==x?void 0:x.includes("WRITE_ACCOUNT")))&&"cursor-not-allowed"),title:"".concat(!((null==x?void 0:x.includes("EDIT_ACCOUNT"))||(null==x?void 0:x.includes("WRITE_ACCOUNT")))&&"Not Authorized"),children:(0,l.jsxs)(t.z,{disabled:!((null==x?void 0:x.includes("EDIT_ACCOUNT"))||(null==x?void 0:x.includes("WRITE_ACCOUNT"))),className:"ml-2 border bg-cyan-500",size:"sm",onClick:m,children:[(0,l.jsx)(d.Z,{className:"mr-2 h-4 w-4"}),"Approve"]})})]})]})]})})}},23611:function(e,s,a){a.d(s,{z:function(){return i}});var l=a(57437),r=a(2265),t=a(67256),n=a(96061),c=a(81628);let d=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),i=r.forwardRef((e,s)=>{let{className:a,variant:r,size:n,asChild:i=!1,...o}=e,u=i?t.g7:"button";return(0,l.jsx)(u,{className:(0,c.cn)(d({variant:r,size:n,className:a})),ref:s,...o})});i.displayName="Button"},40877:function(e,s,a){a.d(s,{E:function(){return c}});var l=a(57437),r=a(2265),t=a(23177),n=a(81628);let c=r.forwardRef((e,s)=>{let{className:a,value:r,...c}=e;return(0,l.jsx)(t.fC,{ref:s,className:(0,n.cn)("relative h-2 w-full overflow-hidden rounded-full bg-primary/20",a),...c,children:(0,l.jsx)(t.z$,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:"translateX(-".concat(100-(r||0),"%)")}})})});c.displayName=t.fC.displayName},81628:function(e,s,a){a.d(s,{cn:function(){return t}});var l=a(57042),r=a(74769);function t(){for(var e=arguments.length,s=Array(e),a=0;a<e;a++)s[a]=arguments[a];return(0,r.m6)((0,l.W)(s))}}}]);