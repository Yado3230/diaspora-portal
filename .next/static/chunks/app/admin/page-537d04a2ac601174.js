(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{54118:function(a,t,e){Promise.resolve().then(e.bind(e,10389))},68695:function(a,t,e){"use strict";e.d(t,{LT:function(){return d},RH:function(){return r},_H:function(){return i},jj:function(){return n},tm:function(){return s},wh:function(){return o}});let l="https://10.1.177.35:8881/",d=async a=>{try{let t=new URL("".concat(l,"api/v1/accounts"));t.searchParams.append("sortBy","percentage_completed"),t.searchParams.append("sortDirection","desc"),"include"===a?t.searchParams.append("status","INITIAL"):"exclude"===a&&t.searchParams.append("statusToExclude","INITIAL");let e=await fetch(t.toString()),d=await e.json();return d}catch(a){throw console.error("Error:",a),a}},n=async a=>{try{let t=new URL("".concat(l,"api/v1/accounts/dashboard-report"));a&&t.searchParams.append("year",a.toString());let e=await fetch(t.toString()),d=await e.json();return d}catch(a){throw console.error("Error:",a),a}},o=async a=>{try{let t=new URL("".concat(l,"api/v1/accounts/monthly-dashboard-report"));a&&t.searchParams.append("year",a.toString());let e=await fetch(t.toString()),d=await e.json();return d}catch(a){throw console.error("Error:",a),a}},i=async a=>{try{let t=await fetch("".concat(l,"api/v1/accounts/").concat(a));return t.json()}catch(a){throw console.error("Error:",a),a}},s=async a=>{try{let t=await fetch("".concat(l,"api/v1/accounts/").concat(a),{method:"DELETE"});if(!t.ok)throw Error("Request failed with status: ".concat(t.status));let e=t.ok;return e}catch(a){throw console.error("Error:",a),a}},r=async(a,t)=>{try{let e=await fetch("".concat(l,"api/v1/accounts/").concat(a,"/update-status?status=").concat(t),{method:"PUT"});if(!e.ok)throw Error("Request failed with status: ".concat(e.status));let d=e.ok;return d}catch(a){throw console.error("Error:",a),a}}},10389:function(a,t,e){"use strict";e.r(t),e.d(t,{default:function(){return w}});var l=e(57437),d=e(2265),n=e(49598),o=e(45253),i=e(38227),s=e(16573),r=e(24235),c=e(50039),u=e(86812),v=e(79857),E=e(19223);let x=a=>{let{dateFilterByMonth:t}=a,e=null==t?void 0:t.find(a=>"APPROVED"===a.status),d=null==t?void 0:t.find(a=>"REJECTED"===a.status),n=null==t?void 0:t.find(a=>"PENDING"===a.status),x=null==t?void 0:t.find(a=>"INITIAL"===a.status),R=[{name:"Jan",approved:null==e?void 0:e.data.JANUARY,rejected:null==d?void 0:d.data.JANUARY,pending:null==n?void 0:n.data.JANUARY,visitors:null==x?void 0:x.data.JANUARY},{name:"Feb",approved:null==e?void 0:e.data.FEBRUARY,rejected:null==d?void 0:d.data.FEBRUARY,pending:null==n?void 0:n.data.FEBRUARY,visitors:null==x?void 0:x.data.FEBRUARY},{name:"Mar",approved:null==e?void 0:e.data.MARCH,rejected:null==d?void 0:d.data.MARCH,pending:null==n?void 0:n.data.MARCH,visitors:null==x?void 0:x.data.MARCH},{name:"Apr",approved:null==e?void 0:e.data.APRIL,rejected:null==d?void 0:d.data.APRIL,pending:null==n?void 0:n.data.APRIL,visitors:null==x?void 0:x.data.APRIL},{name:"May",approved:null==e?void 0:e.data.MAY,rejected:null==d?void 0:d.data.MAY,pending:null==n?void 0:n.data.MAY,visitors:null==x?void 0:x.data.MAY},{name:"Jun",approved:null==e?void 0:e.data.JUNE,rejected:null==d?void 0:d.data.JUNE,pending:null==n?void 0:n.data.JUNE,visitors:null==x?void 0:x.data.JUNE},{name:"Jul",approved:null==e?void 0:e.data.JULY,rejected:null==d?void 0:d.data.JULY,pending:null==n?void 0:n.data.JULY,visitors:null==x?void 0:x.data.JULY},{name:"Aug",approved:null==e?void 0:e.data.AUGUST,rejected:null==d?void 0:d.data.AUGUST,pending:null==n?void 0:n.data.AUGUST,visitors:null==x?void 0:x.data.AUGUST},{name:"Sep",approved:null==e?void 0:e.data.SEPTEMBER,rejected:null==d?void 0:d.data.SEPTEMBER,pending:null==n?void 0:n.data.SEPTEMBER,visitors:null==x?void 0:x.data.SEPTEMBER},{name:"Oct",approved:null==e?void 0:e.data.OCTOBER,rejected:null==d?void 0:d.data.OCTOBER,pending:null==n?void 0:n.data.OCTOBER,visitors:null==x?void 0:x.data.OCTOBER},{name:"Nov",approved:null==e?void 0:e.data.NOVEMBER,rejected:null==d?void 0:d.data.NOVEMBER,pending:null==n?void 0:n.data.NOVEMBER,visitors:null==x?void 0:x.data.NOVEMBER},{name:"Dec",approved:null==e?void 0:e.data.DECEMBER,rejected:null==d?void 0:d.data.DECEMBER,pending:null==n?void 0:n.data.DECEMBER,visitors:null==x?void 0:x.data.DECEMBER}];return(0,l.jsx)(o.h,{width:"100%",height:350,children:(0,l.jsxs)(i.w,{width:500,height:300,data:R,margin:{top:5,right:30,left:20,bottom:5},children:[(0,l.jsx)(s.q,{strokeDasharray:"3 3"}),(0,l.jsx)(r.K,{dataKey:"name"}),(0,l.jsx)(c.B,{}),(0,l.jsx)(u.u,{}),(0,l.jsx)(v.D,{}),(0,l.jsx)(E.x,{type:"monotone",dataKey:"approved",stroke:"#06B6D4",activeDot:{r:8},strokeWidth:3}),(0,l.jsx)(E.x,{type:"monotone",dataKey:"pending",stroke:"#8080A9",strokeWidth:3}),(0,l.jsx)(E.x,{type:"monotone",dataKey:"rejected",stroke:"#DE8224",strokeWidth:3}),(0,l.jsx)(E.x,{type:"monotone",dataKey:"visitors",stroke:"#505050",strokeWidth:3})]})})};var R=e(52431),h=e(55117),f=e(69263),A=e(60519),m=e(78603),p=e(90998),j=e(77795),N=e(57703),g=e(28485),U=e(36612);let M=["#06B6D4","#8080A9","#DE8224","#505050"],B=a=>{let t=Math.PI/180,{cx:e,cy:d,midAngle:n,innerRadius:o,outerRadius:i,startAngle:s,endAngle:r,fill:c,payload:u,percent:v,value:E}=a,x=Math.sin(-t*n),R=Math.cos(-t*n),h=e+(i+10)*R,f=d+(i+10)*x,A=e+(i+30)*R,m=d+(i+30)*x,p=A+(R>=0?1:-1)*22,N=R>=0?"start":"end";return(0,l.jsxs)("g",{children:[(0,l.jsx)("text",{x:e,y:d,dy:8,textAnchor:"middle",fill:c,children:u.name}),(0,l.jsx)(j.L,{cx:e,cy:d,innerRadius:o,outerRadius:i,startAngle:s,endAngle:r,fill:c}),(0,l.jsx)(j.L,{cx:e,cy:d,startAngle:s,endAngle:r,innerRadius:i+6,outerRadius:i+10,fill:c}),(0,l.jsx)("path",{d:"M".concat(h,",").concat(f,"L").concat(A,",").concat(m,"L").concat(p,",").concat(m),stroke:c,fill:"none"}),(0,l.jsx)("circle",{cx:p,cy:m,r:2,fill:c,stroke:"none"}),(0,l.jsx)("text",{x:p+(R>=0?1:-1)*12,y:m,textAnchor:N,fill:"#333",children:"PV ".concat(E)}),(0,l.jsx)("text",{x:p+(R>=0?1:-1)*12,y:m,dy:18,textAnchor:N,fill:"#999",children:"(Rate ".concat((100*v).toFixed(2),"%)")})]})};function y(a){let{pending:t,visitors:e,rejected:n,approved:o}=a,i=[{name:"Approved",value:o},{name:"Pending",value:t},{name:"Rejected",value:n},{name:"Visitors",value:e}],[s,r]=(0,d.useState)(0),c=(0,d.useCallback)((a,t)=>{r(t)},[r]);return(0,l.jsx)(N.u,{width:450,height:300,children:(0,l.jsx)(g.b,{activeIndex:s,activeShape:B,data:i,cx:200,cy:150,innerRadius:60,outerRadius:80,fill:"#06B6D4",dataKey:"value",onMouseEnter:c,children:i.map((a,t)=>(0,l.jsx)(U.b,{fill:M[t%M.length]},"cell-".concat(t)))})})}var Y=e(68695),w=()=>{var a,t,e,o,i,s,r,c;let u=new Date,v=u.getFullYear(),[E,j]=(0,d.useState)(),[N,g]=(0,d.useState)(),[U,M]=(0,d.useState)(),[B,w]=(0,d.useState)();(0,d.useEffect)(()=>{let a=async()=>{let a=await (0,Y.jj)(""),t=await (0,Y.jj)(v),e=await (0,Y.wh)(v);j(a),w(t),g(e),M(e)};a()},[]);let[C,T]=(0,d.useState)([]);(0,d.useEffect)(()=>{let a=new Date().getFullYear(),t=Array.from({length:10},(t,e)=>a-e);T(t)},[]);let O=async a=>{let t=await (0,Y.jj)(a.target.value);w(t)},b=async a=>{let t=await (0,Y.wh)(a.target.value);g(t)},P=a=>["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"][a],D=u.getMonth()+1,J=P(D-1),S=P((1===D?12:D-1)-1);console.log("Current Month: ".concat(J)),console.log("Previous Month: ".concat(S));let L=null==U?void 0:U.find(a=>"APPROVED"===a.status),I=null==U?void 0:U.find(a=>"REJECTED"===a.status),k=null==U?void 0:U.find(a=>"PENDING"===a.status),F=null==U?void 0:U.find(a=>"INITIAL"===a.status),V=0,Z=0,G=0,H=0;"JANUARY"===S?(V=(null==L?void 0:L.data.JANUARY)||0,Z=(null==I?void 0:I.data.JANUARY)||0,G=(null==k?void 0:k.data.JANUARY)||0,H=(null==F?void 0:F.data.JANUARY)||0):"FEBRUARY"===S?(V=(null==L?void 0:L.data.FEBRUARY)||0,Z=(null==I?void 0:I.data.FEBRUARY)||0,G=(null==k?void 0:k.data.FEBRUARY)||0,H=(null==F?void 0:F.data.FEBRUARY)||0):"MARCH"===S?(V=(null==L?void 0:L.data.MARCH)||0,Z=(null==I?void 0:I.data.MARCH)||0,G=(null==k?void 0:k.data.MARCH)||0,H=(null==F?void 0:F.data.MARCH)||0):"APRIL"===S?(V=(null==L?void 0:L.data.APRIL)||0,Z=(null==I?void 0:I.data.APRIL)||0,G=(null==k?void 0:k.data.APRIL)||0,H=(null==F?void 0:F.data.APRIL)||0):"MAY"===S?(V=(null==L?void 0:L.data.MAY)||0,Z=(null==I?void 0:I.data.MAY)||0,G=(null==k?void 0:k.data.MAY)||0,H=(null==F?void 0:F.data.MAY)||0):"JUNE"===S?(V=(null==L?void 0:L.data.JUNE)||0,Z=(null==I?void 0:I.data.JUNE)||0,G=(null==k?void 0:k.data.JUNE)||0,H=(null==F?void 0:F.data.JUNE)||0):"JULY"===S?(V=(null==L?void 0:L.data.JULY)||0,Z=(null==I?void 0:I.data.JULY)||0,G=(null==k?void 0:k.data.JULY)||0,H=(null==F?void 0:F.data.JULY)||0):"AUGUST"===S?(V=(null==L?void 0:L.data.AUGUST)||0,Z=(null==I?void 0:I.data.AUGUST)||0,G=(null==k?void 0:k.data.AUGUST)||0,H=(null==F?void 0:F.data.AUGUST)||0):"SEPTEMBER"===S?(V=(null==L?void 0:L.data.SEPTEMBER)||0,Z=(null==I?void 0:I.data.SEPTEMBER)||0,G=(null==k?void 0:k.data.SEPTEMBER)||0,H=(null==F?void 0:F.data.SEPTEMBER)||0):"OCTOBER"===S?(V=(null==L?void 0:L.data.OCTOBER)||0,Z=(null==I?void 0:I.data.OCTOBER)||0,G=(null==k?void 0:k.data.OCTOBER)||0,H=(null==F?void 0:F.data.OCTOBER)||0):"NOVEMBER"===S?(V=(null==L?void 0:L.data.NOVEMBER)||0,Z=(null==I?void 0:I.data.NOVEMBER)||0,G=(null==k?void 0:k.data.NOVEMBER)||0,H=(null==F?void 0:F.data.NOVEMBER)||0):"DECEMBER"===S&&(V=(null==L?void 0:L.data.DECEMBER)||0,Z=(null==I?void 0:I.data.DECEMBER)||0,G=(null==k?void 0:k.data.DECEMBER)||0,H=(null==F?void 0:F.data.DECEMBER)||0);let _=0,K=0,W=0,q=0;"JANUARY"===J?(_=(null==L?void 0:L.data.JANUARY)||0,K=(null==I?void 0:I.data.JANUARY)||0,W=(null==k?void 0:k.data.JANUARY)||0,q=(null==F?void 0:F.data.JANUARY)||0):"FEBRUARY"===J?(_=(null==L?void 0:L.data.FEBRUARY)||0,K=(null==I?void 0:I.data.FEBRUARY)||0,W=(null==k?void 0:k.data.FEBRUARY)||0,q=(null==F?void 0:F.data.FEBRUARY)||0):"MARCH"===J?(_=(null==L?void 0:L.data.MARCH)||0,K=(null==I?void 0:I.data.MARCH)||0,W=(null==k?void 0:k.data.MARCH)||0,q=(null==F?void 0:F.data.MARCH)||0):"APRIL"===J?(_=(null==L?void 0:L.data.APRIL)||0,K=(null==I?void 0:I.data.APRIL)||0,W=(null==k?void 0:k.data.APRIL)||0,q=(null==F?void 0:F.data.APRIL)||0):"MAY"===J?(_=(null==L?void 0:L.data.MAY)||0,K=(null==I?void 0:I.data.MAY)||0,W=(null==k?void 0:k.data.MAY)||0,q=(null==F?void 0:F.data.MAY)||0):"JUNE"===J?(_=(null==L?void 0:L.data.JUNE)||0,K=(null==I?void 0:I.data.JUNE)||0,W=(null==k?void 0:k.data.JUNE)||0,q=(null==F?void 0:F.data.JUNE)||0):"JULY"===J?(_=(null==L?void 0:L.data.JULY)||0,K=(null==I?void 0:I.data.JULY)||0,W=(null==k?void 0:k.data.JULY)||0,q=(null==F?void 0:F.data.JULY)||0):"AUGUST"===J?(_=(null==L?void 0:L.data.AUGUST)||0,K=(null==I?void 0:I.data.AUGUST)||0,W=(null==k?void 0:k.data.AUGUST)||0,q=(null==F?void 0:F.data.AUGUST)||0):"SEPTEMBER"===J?(_=(null==L?void 0:L.data.SEPTEMBER)||0,K=(null==I?void 0:I.data.SEPTEMBER)||0,W=(null==k?void 0:k.data.SEPTEMBER)||0,q=(null==F?void 0:F.data.SEPTEMBER)||0):"OCTOBER"===J?(_=(null==L?void 0:L.data.OCTOBER)||0,K=(null==I?void 0:I.data.OCTOBER)||0,W=(null==k?void 0:k.data.OCTOBER)||0,q=(null==F?void 0:F.data.OCTOBER)||0):"NOVEMBER"===J?(_=(null==L?void 0:L.data.NOVEMBER)||0,K=(null==I?void 0:I.data.NOVEMBER)||0,W=(null==k?void 0:k.data.NOVEMBER)||0,q=(null==F?void 0:F.data.NOVEMBER)||0):"DECEMBER"===J&&(_=(null==L?void 0:L.data.DECEMBER)||0,K=(null==I?void 0:I.data.DECEMBER)||0,W=(null==k?void 0:k.data.DECEMBER)||0,q=(null==F?void 0:F.data.DECEMBER)||0);let z=0===V&&_>0?100:0===_?0:(_-V)/(0!==V?V:1)*100,Q=0===Z&&K>0?100:0===K?0:(K-Z)/(0!==Z?Z:1)*100,X=0===G&&W>0?100:0===W?0:(W-G)/(0!==G?G:1)*100,$=0===H&&q>0?100:0===q?0:(q-H)/(0!==H?H:1)*100;return(0,l.jsxs)("div",{className:"space-y-4",children:[(0,l.jsxs)("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-4",children:[(0,l.jsxs)(n.Zb,{children:[(0,l.jsxs)(n.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,l.jsx)(n.ll,{className:"text-lg font-medium text-[#00A9E8]",children:"Approved"}),(0,l.jsx)(R.Z,{color:"#00A9E8"})]}),(0,l.jsxs)(n.aY,{children:[(0,l.jsx)("div",{className:"text-2xl font-bold text-[#00A9E8]",children:null==E?void 0:null===(a=E.find(a=>"APPROVED"===a.status))||void 0===a?void 0:a.totalData}),(0,l.jsxs)("p",{className:"text-xs text-muted-foreground flex items-center space-x-2",children:[(0,l.jsxs)("span",{className:"text-cyan-500 text-lg flex items-center",children:[z>0?(0,l.jsx)(h.Z,{className:"w-5 h-5"}):z<0&&(0,l.jsx)(f.Z,{className:"w-5 h-5"}),z.toFixed(2),"%"]}),"  ",(0,l.jsx)("span",{children:" from last month"})]})]})]}),(0,l.jsxs)(n.Zb,{children:[(0,l.jsxs)(n.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,l.jsx)(n.ll,{className:"text-lg font-medium text-[#8080A9]",children:"Pending"}),(0,l.jsx)(A.Z,{color:"#8080A9"})]}),(0,l.jsxs)(n.aY,{children:[(0,l.jsx)("div",{className:"text-2xl font-bold text-[#8080A9]",children:null==E?void 0:null===(t=E.find(a=>"PENDING"===a.status))||void 0===t?void 0:t.totalData}),(0,l.jsxs)("p",{className:"text-xs text-muted-foreground flex items-center space-x-2",children:[(0,l.jsxs)("span",{className:"text-[#8080A9] text-lg flex items-center",children:[X>0?(0,l.jsx)(h.Z,{className:"w-5 h-5"}):X<0&&(0,l.jsx)(f.Z,{className:"w-5 h-5"}),X.toFixed(2),"%"]})," ",(0,l.jsx)("span",{children:"from last month"})]})]})]}),(0,l.jsxs)(n.Zb,{children:[(0,l.jsxs)(n.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,l.jsx)(n.ll,{className:"text-lg font-medium text-[#DE8224]",children:"Rejected"}),(0,l.jsx)(m.Z,{color:"#DE8224"})]}),(0,l.jsxs)(n.aY,{children:[(0,l.jsx)("div",{className:"text-2xl text-[#DE8224] font-bold",children:null==E?void 0:null===(e=E.find(a=>"REJECTED"===a.status))||void 0===e?void 0:e.totalData}),(0,l.jsxs)("p",{className:"text-xs text-muted-foreground flex items-center space-x-2",children:[(0,l.jsxs)("span",{className:"text-[#DE8224] text-lg flex items-center",children:[Q>0?(0,l.jsx)(h.Z,{className:"w-5 h-5"}):Q<0&&(0,l.jsx)(f.Z,{className:"w-5 h-5"}),Q.toFixed(2),"%"]})," ",(0,l.jsx)("span",{children:"from last month"})]})]})]}),(0,l.jsxs)(n.Zb,{children:[(0,l.jsxs)(n.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,l.jsx)(n.ll,{className:"text-lg font-medium text-[#505050]",children:"Visitors"}),(0,l.jsx)(p.Z,{color:"#505050"})]}),(0,l.jsxs)(n.aY,{children:[(0,l.jsx)("div",{className:"text-2xl font-bold text-[#505050]",children:null==E?void 0:null===(o=E.find(a=>"INITIAL"===a.status))||void 0===o?void 0:o.totalData}),(0,l.jsxs)("p",{className:"text-xs text-muted-foreground flex items-center space-x-2",children:[(0,l.jsxs)("span",{className:"text-lg flex items-center text-[#505050]",children:[$>0?(0,l.jsx)(h.Z,{className:"w-5 h-5"}):$<0&&(0,l.jsx)(f.Z,{className:"w-5 h-5"}),$.toFixed(2),"%"]})," ",(0,l.jsx)("span",{children:"from last month"})]})]})]})]}),(0,l.jsxs)("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-7",children:[(0,l.jsxs)(n.Zb,{className:"col-span-4",children:[(0,l.jsx)(n.Ol,{children:(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(n.ll,{children:"Account Analytics"}),(0,l.jsx)(n.SZ,{children:"12 months data."})]}),(0,l.jsx)("div",{children:(0,l.jsx)("select",{onChange:a=>b(a),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",children:C.map(a=>(0,l.jsx)("option",{value:a.toString(),children:a},a))})})]})}),(0,l.jsx)(n.aY,{className:"pl-2",children:(0,l.jsx)(x,{dateFilterByMonth:N})})]}),(0,l.jsxs)(n.Zb,{className:"col-span-3",children:[(0,l.jsx)(n.Ol,{children:(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(n.ll,{children:"User Activities"}),(0,l.jsx)(n.SZ,{children:"12 months data."})]}),(0,l.jsx)("div",{children:(0,l.jsx)("select",{onChange:a=>O(a),className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",children:C.map(a=>(0,l.jsx)("option",{value:a.toString(),children:a},a))})})]})}),(0,l.jsx)(n.aY,{children:(0,l.jsx)(y,{approved:(null==B?void 0:null===(i=B.find(a=>"APPROVED"===a.status))||void 0===i?void 0:i.totalData)||0,rejected:(null==B?void 0:null===(s=B.find(a=>"REJECTED"===a.status))||void 0===s?void 0:s.totalData)||0,visitors:(null==B?void 0:null===(r=B.find(a=>"INITIAL"===a.status))||void 0===r?void 0:r.totalData)||0,pending:(null==B?void 0:null===(c=B.find(a=>"PENDING"===a.status))||void 0===c?void 0:c.totalData)||0})})]})]})]})}},49598:function(a,t,e){"use strict";e.d(t,{Ol:function(){return i},SZ:function(){return r},Zb:function(){return o},aY:function(){return c},eW:function(){return u},ll:function(){return s}});var l=e(57437),d=e(2265),n=e(81628);let o=d.forwardRef((a,t)=>{let{className:e,...d}=a;return(0,l.jsx)("div",{ref:t,className:(0,n.cn)("rounded-xl border bg-card text-card-foreground shadow",e),...d})});o.displayName="Card";let i=d.forwardRef((a,t)=>{let{className:e,...d}=a;return(0,l.jsx)("div",{ref:t,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",e),...d})});i.displayName="CardHeader";let s=d.forwardRef((a,t)=>{let{className:e,...d}=a;return(0,l.jsx)("h3",{ref:t,className:(0,n.cn)("font-semibold leading-none tracking-tight",e),...d})});s.displayName="CardTitle";let r=d.forwardRef((a,t)=>{let{className:e,...d}=a;return(0,l.jsx)("p",{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",e),...d})});r.displayName="CardDescription";let c=d.forwardRef((a,t)=>{let{className:e,...d}=a;return(0,l.jsx)("div",{ref:t,className:(0,n.cn)("p-6 pt-0",e),...d})});c.displayName="CardContent";let u=d.forwardRef((a,t)=>{let{className:e,...d}=a;return(0,l.jsx)("div",{ref:t,className:(0,n.cn)("flex items-center p-6 pt-0",e),...d})});u.displayName="CardFooter"},81628:function(a,t,e){"use strict";e.d(t,{cn:function(){return n}});var l=e(57042),d=e(74769);function n(){for(var a=arguments.length,t=Array(a),e=0;e<a;e++)t[e]=arguments[e];return(0,d.m6)((0,l.W)(t))}}},function(a){a.O(0,[7895,2077,8707,2971,2472,1744],function(){return a(a.s=54118)}),_N_E=a.O()}]);