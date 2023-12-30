(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1202],{62898:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(2265),a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=(e,t)=>{let r=(0,n.forwardRef)(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:u="",children:c,...d},p)=>(0,n.createElement)("svg",{ref:p,...a,width:i,height:i,stroke:r,strokeWidth:l?24*Number(s)/Number(i):s,className:["lucide",`lucide-${o(e)}`,u].join(" "),...d},[...t.map(([e,t])=>(0,n.createElement)(e,t)),...(Array.isArray(c)?c:[c])||[]]));return r.displayName=`${e}`,r}},690:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(62898);/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,n.Z)("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]])},82549:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(62898);/**
 * @license lucide-react v0.293.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,n.Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},36304:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return o}});let n=r(21024),a=n._(r(2265)),o=a.default.createContext(null)},24033:function(e,t,r){e.exports=r(50094)},13428:function(e,t,r){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},42210:function(e,t,r){"use strict";r.d(t,{F:function(){return a},e:function(){return o}});var n=r(2265);function a(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}function o(...e){return(0,n.useCallback)(a(...e),e)}},56989:function(e,t,r){"use strict";r.d(t,{b:function(){return o},k:function(){return a}});var n=r(2265);function a(e,t){let r=(0,n.createContext)(t);function a(e){let{children:t,...a}=e,o=(0,n.useMemo)(()=>a,Object.values(a));return(0,n.createElement)(r.Provider,{value:o},t)}return a.displayName=e+"Provider",[a,function(a){let o=(0,n.useContext)(r);if(o)return o;if(void 0!==t)return t;throw Error(`\`${a}\` must be used within \`${e}\``)}]}function o(e,t=[]){let r=[],a=()=>{let t=r.map(e=>(0,n.createContext)(e));return function(r){let a=(null==r?void 0:r[e])||t;return(0,n.useMemo)(()=>({[`__scope${e}`]:{...r,[e]:a}}),[r,a])}};return a.scopeName=e,[function(t,a){let o=(0,n.createContext)(a),i=r.length;function s(t){let{scope:r,children:a,...s}=t,l=(null==r?void 0:r[e][i])||o,u=(0,n.useMemo)(()=>s,Object.values(s));return(0,n.createElement)(l.Provider,{value:u},a)}return r=[...r,a],s.displayName=t+"Provider",[s,function(r,s){let l=(null==s?void 0:s[e][i])||o,u=(0,n.useContext)(l);if(u)return u;if(void 0!==a)return a;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let a=r.reduce((t,{useScope:r,scopeName:n})=>{let a=r(e),o=a[`__scope${n}`];return{...t,...o}},{});return(0,n.useMemo)(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return r.scopeName=t.scopeName,r}(a,...t)]}},9381:function(e,t,r){"use strict";r.d(t,{WV:function(){return s},jH:function(){return l}});var n=r(13428),a=r(2265),o=r(54887),i=r(67256);let s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let Node=(0,a.forwardRef)((e,r)=>{let{asChild:o,...s}=e,l=o?i.g7:t;return(0,a.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,a.createElement)(l,(0,n.Z)({},s,{ref:r}))});return Node.displayName=`Primitive.${t}`,{...e,[t]:Node}},{});function l(e,t){e&&(0,o.flushSync)(()=>e.dispatchEvent(t))}},23177:function(e,t,r){"use strict";r.d(t,{fC:function(){return b},z$:function(){return x}});var n=r(13428),a=r(2265),o=r(56989),i=r(9381);let s="Progress",[l,u]=(0,o.b)(s),[c,d]=l(s),p=(0,a.forwardRef)((e,t)=>{let{__scopeProgress:r,value:o,max:s,getValueLabel:l=m,...u}=e,d=g(s)?s:100,p=y(o,d)?o:null,f=v(p)?l(p,d):void 0;return(0,a.createElement)(c,{scope:r,value:p,max:d},(0,a.createElement)(i.WV.div,(0,n.Z)({"aria-valuemax":d,"aria-valuemin":0,"aria-valuenow":v(p)?p:void 0,"aria-valuetext":f,role:"progressbar","data-state":h(p,d),"data-value":null!=p?p:void 0,"data-max":d},u,{ref:t})))});p.propTypes={max(e,t,r){let n=e[t],a=String(n);return n&&!g(n)?Error(`Invalid prop \`max\` of value \`${a}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`):null},value(e,t,r){let n=e[t],a=String(n),o=g(e.max)?e.max:100;return null==n||y(n,o)?null:Error(`Invalid prop \`value\` of value \`${a}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`)}};let f=(0,a.forwardRef)((e,t)=>{var r;let{__scopeProgress:o,...s}=e,l=d("ProgressIndicator",o);return(0,a.createElement)(i.WV.div,(0,n.Z)({"data-state":h(l.value,l.max),"data-value":null!==(r=l.value)&&void 0!==r?r:void 0,"data-max":l.max},s,{ref:t}))});function m(e,t){return`${Math.round(e/t*100)}%`}function h(e,t){return null==e?"indeterminate":e===t?"complete":"loading"}function v(e){return"number"==typeof e}function g(e){return v(e)&&!isNaN(e)&&e>0}function y(e,t){return v(e)&&!isNaN(e)&&e<=t&&e>=0}let b=p,x=f},67256:function(e,t,r){"use strict";r.d(t,{g7:function(){return i}});var n=r(13428),a=r(2265),o=r(42210);let i=(0,a.forwardRef)((e,t)=>{let{children:r,...o}=e,i=a.Children.toArray(r),l=i.find(u);if(l){let e=l.props.children,r=i.map(t=>t!==l?t:a.Children.count(e)>1?a.Children.only(null):(0,a.isValidElement)(e)?e.props.children:null);return(0,a.createElement)(s,(0,n.Z)({},o,{ref:t}),(0,a.isValidElement)(e)?(0,a.cloneElement)(e,void 0,r):null)}return(0,a.createElement)(s,(0,n.Z)({},o,{ref:t}),r)});i.displayName="Slot";let s=(0,a.forwardRef)((e,t)=>{let{children:r,...n}=e;return(0,a.isValidElement)(r)?(0,a.cloneElement)(r,{...function(e,t){let r={...t};for(let n in t){let a=e[n],o=t[n],i=/^on[A-Z]/.test(n);i?a&&o?r[n]=(...e)=>{o(...e),a(...e)}:a&&(r[n]=a):"style"===n?r[n]={...a,...o}:"className"===n&&(r[n]=[a,o].filter(Boolean).join(" "))}return{...e,...r}}(n,r.props),ref:t?(0,o.F)(t,r.ref):r.ref}):a.Children.count(r)>1?a.Children.only(null):null});s.displayName="SlotClone";let l=({children:e})=>(0,a.createElement)(a.Fragment,null,e);function u(e){return(0,a.isValidElement)(e)&&e.type===l}},96061:function(e,t,r){"use strict";r.d(t,{j:function(){return i}});var n=r(57042);let a=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,o=n.W,i=(e,t)=>r=>{var n;if((null==t?void 0:t.variants)==null)return o(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:i,defaultVariants:s}=t,l=Object.keys(i).map(e=>{let t=null==r?void 0:r[e],n=null==s?void 0:s[e];if(null===t)return null;let o=a(t)||a(n);return i[e][o]}),u=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{}),c=null==t?void 0:null===(n=t.compoundVariants)||void 0===n?void 0:n.reduce((e,t)=>{let{class:r,className:n,...a}=t;return Object.entries(a).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...s,...u}[t]):({...s,...u})[t]===r})?[...e,r,n]:e},[]);return o(e,l,c,null==r?void 0:r.class,null==r?void 0:r.className)}},5925:function(e,t,r){"use strict";let n,a;r.d(t,{x7:function(){return ed},ZP:function(){return ep},Am:function(){return L}});var o,i=r(2265);let s={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,u=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,d=/\n+/g,p=(e,t)=>{let r="",n="",a="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+i+";":n+="f"==o[1]?p(i,o):o+"{"+p(i,"k"==o[1]?"":t)+"}":"object"==typeof i?n+=p(i,t?t.replace(/([^,])+/g,e=>o.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=p.p?p.p(o,i):o+":"+i+";")}return r+(t&&a?t+"{"+a+"}":a)+n},f={},m=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+m(e[r]);return t}return e},h=(e,t,r,n,a)=>{var o;let i=m(e),s=f[i]||(f[i]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(i));if(!f[s]){let t=i!==e?e:(e=>{let t,r,n=[{}];for(;t=u.exec(e.replace(c,""));)t[4]?n.shift():t[3]?(r=t[3].replace(d," ").trim(),n.unshift(n[0][r]=n[0][r]||{})):n[0][t[1]]=t[2].replace(d," ").trim();return n[0]})(e);f[s]=p(a?{["@keyframes "+s]:t}:t,r?"":"."+s)}let l=r&&f.g?f.g:null;return r&&(f.g=f[s]),o=f[s],l?t.data=t.data.replace(l,o):-1===t.data.indexOf(o)&&(t.data=n?o+t.data:t.data+o),s},v=(e,t,r)=>e.reduce((e,n,a)=>{let o=t[a];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+n+(null==o?"":o)},"");function g(e){let t=this||{},r=e.call?e(t.p):e;return h(r.unshift?r.raw?v(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}g.bind({g:1});let y,b,x,w=g.bind({k:1});function E(e,t){let r=this||{};return function(){let n=arguments;function a(o,i){let s=Object.assign({},o),l=s.className||a.className;r.p=Object.assign({theme:b&&b()},s),r.o=/ *go\d+/.test(l),s.className=g.apply(r,n)+(l?" "+l:""),t&&(s.ref=i);let u=e;return e[0]&&(u=s.as||e,delete s.as),x&&u[0]&&x(s),y(u,s)}return t?t(a):a}}var k=e=>"function"==typeof e,N=(e,t)=>k(e)?e(t):e,$=(n=0,()=>(++n).toString()),C=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},j=new Map,O=e=>{if(j.has(e))return;let t=setTimeout(()=>{j.delete(e),M({type:4,toastId:e})},1e3);j.set(e,t)},P=e=>{let t=j.get(e);t&&clearTimeout(t)},_=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&P(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?_(e,{type:1,toast:r}):_(e,{type:0,toast:r});case 3:let{toastId:n}=t;return n?O(n):e.toasts.forEach(e=>{O(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===n||void 0===n?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},A=[],Z={toasts:[],pausedAt:void 0},M=e=>{Z=_(Z,e),A.forEach(e=>{e(Z)})},z={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},S=(e={})=>{let[t,r]=(0,i.useState)(Z);(0,i.useEffect)(()=>(A.push(r),()=>{let e=A.indexOf(r);e>-1&&A.splice(e,1)}),[t]);let n=t.toasts.map(t=>{var r,n;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||z[t.type],style:{...e.style,...null==(n=e[t.type])?void 0:n.style,...t.style}}});return{...t,toasts:n}},D=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||$()}),I=e=>(t,r)=>{let n=D(t,e,r);return M({type:2,toast:n}),n.id},L=(e,t)=>I("blank")(e,t);L.error=I("error"),L.success=I("success"),L.loading=I("loading"),L.custom=I("custom"),L.dismiss=e=>{M({type:3,toastId:e})},L.remove=e=>M({type:4,toastId:e}),L.promise=(e,t,r)=>{let n=L.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(L.success(N(t.success,e),{id:n,...r,...null==r?void 0:r.success}),e)).catch(e=>{L.error(N(t.error,e),{id:n,...r,...null==r?void 0:r.error})}),e};var V=(e,t)=>{M({type:1,toast:{id:e,height:t}})},F=()=>{M({type:5,time:Date.now()})},R=e=>{let{toasts:t,pausedAt:r}=S(e);(0,i.useEffect)(()=>{if(r)return;let e=Date.now(),n=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&L.dismiss(t.id);return}return setTimeout(()=>L.dismiss(t.id),r)});return()=>{n.forEach(e=>e&&clearTimeout(e))}},[t,r]);let n=(0,i.useCallback)(()=>{r&&M({type:6,time:Date.now()})},[r]),a=(0,i.useCallback)((e,r)=>{let{reverseOrder:n=!1,gutter:a=8,defaultPosition:o}=r||{},i=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),s=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<s&&e.visible).length;return i.filter(e=>e.visible).slice(...n?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+a,0)},[t]);return{toasts:t,handlers:{updateHeight:V,startPause:F,endPause:n,calculateOffset:a}}},T=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,H=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,W=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,q=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${T} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${H} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${W} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,B=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,U=E("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${B} 1s linear infinite;
`,X=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Y=w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,G=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${X} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Y} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,J=E("div")`
  position: absolute;
`,K=E("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Q=w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ee=E("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,et=({toast:e})=>{let{icon:t,type:r,iconTheme:n}=e;return void 0!==t?"string"==typeof t?i.createElement(ee,null,t):t:"blank"===r?null:i.createElement(K,null,i.createElement(U,{...n}),"loading"!==r&&i.createElement(J,null,"error"===r?i.createElement(q,{...n}):i.createElement(G,{...n})))},er=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,en=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ea=E("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,eo=E("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ei=(e,t)=>{let r=e.includes("top")?1:-1,[n,a]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[er(r),en(r)];return{animation:t?`${w(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},es=i.memo(({toast:e,position:t,style:r,children:n})=>{let a=e.height?ei(e.position||t||"top-center",e.visible):{opacity:0},o=i.createElement(et,{toast:e}),s=i.createElement(eo,{...e.ariaProps},N(e.message,e));return i.createElement(ea,{className:e.className,style:{...a,...r,...e.style}},"function"==typeof n?n({icon:o,message:s}):i.createElement(i.Fragment,null,o,s))});o=i.createElement,p.p=void 0,y=o,b=void 0,x=void 0;var el=({id:e,className:t,style:r,onHeightUpdate:n,children:a})=>{let o=i.useCallback(t=>{if(t){let r=()=>{n(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,n]);return i.createElement("div",{ref:o,className:t,style:r},a)},eu=(e,t)=>{let r=e.includes("top"),n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...n}},ec=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ed=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:n,children:a,containerStyle:o,containerClassName:s})=>{let{toasts:l,handlers:u}=R(r);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:s,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map(r=>{let o=r.position||t,s=eu(o,u.calculateOffset(r,{reverseOrder:e,gutter:n,defaultPosition:t}));return i.createElement(el,{id:r.id,key:r.id,onHeightUpdate:u.updateHeight,className:r.visible?ec:"",style:s},"custom"===r.type?N(r.message,r):a?a(r):i.createElement(es,{toast:r,position:o}))}))},ep=L}}]);