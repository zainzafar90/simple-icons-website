!function(){"use strict";var e,t,n={789:function(e,t,n){n.d(t,{UP:function(){return c},ZP:function(){return s}});var r=n(538);const o="order-alpha",i="order-color",c="order-relevance",u=o;function s(e,t,n,s){let a=u,d=u;const l=t.querySelector("body"),f=t.getElementById("order-alpha"),m=t.getElementById("order-color"),p=t.getElementById("order-relevance");function h(u){u!==a&&(l.classList.remove(o,i,c),l.classList.add(u),e.scrollTo(0,0),s.sortChildren(t.querySelector("ul.grid"),u,30),u!==c&&(d=u,n.setItem(r.IS,u)),a=u)}return f.disabled=!1,m.disabled=!1,p.disabled=!1,n.hasItem(r.IS)&&h(n.getItem(r.IS)),f.addEventListener("click",(()=>{h(o)})),m.addEventListener("click",(()=>{h(i)})),p.addEventListener("click",(()=>{h(c)})),{currentOrderingIs:function(e){return a===e},selectOrdering:h,resetOrdering:function(){return h(d)}}}},538:function(e,t,n){n.d(t,{SR:function(){return o},IS:function(){return i},vt:function(){return c},ZP:function(){return s}});const r="simple-icons-",o=r+"preferred-color-scheme",i=r+"preferred-ordering",c=r+"preferred-download-type",u={hasItem:()=>!1,getItem:()=>null,setItem(){}};function s(e){return e?{hasItem:t=>null!==e.getItem(t),getItem:t=>e.getItem(t),setItem:(t,n)=>e.setItem(t,n)}:u}}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return n[e].call(i.exports,i,i.exports,o),i.exports}o.m=n,o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))},o.u=function(e){return e+".script.js"},o.miniCssF=function(e){},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="simple-icons-website:",o.l=function(n,r,i,c){if(e[n])e[n].push(r);else{var u,s;if(void 0!==i)for(var a=document.getElementsByTagName("script"),d=0;d<a.length;d++){var l=a[d];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==t+i){u=l;break}}u||(s=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.setAttribute("data-webpack",t+i),u.src=n),e[n]=[r];var f=function(t,r){u.onerror=u.onload=null,clearTimeout(m);var o=e[n];if(delete e[n],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(r)})),t)return t(r)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),s&&document.head.appendChild(u)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e}(),function(){var e={143:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=i);var c=o.p+o.u(t),u=new Error;o.l(c,(function(n){if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+c+")",u.name="ChunkLoadError",u.type=i,u.request=c,r[1](u)}}),"chunk-"+t,t)}};var t=function(t,n){var r,i,c=n[0],u=n[1],s=n[2],a=0;if(c.some((function(t){return 0!==e[t]}))){for(r in u)o.o(u,r)&&(o.m[r]=u[r]);s&&s(o)}for(t&&t(n);a<c.length;a++)i=c[a],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=self.webpackChunksimple_icons_website=self.webpackChunksimple_icons_website||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),function(){var e={};function t(e){e&&(e.classList.add("hidden"),e.setAttribute("aria-hidden","true"))}function n(e){e&&(e.classList.remove("hidden"),e.removeAttribute("aria-hidden"))}function r(e){e&&(e.classList.toggle("hidden"),e.toggleAttribute("aria-hidden"))}function i(e,t,n){const r=[...e.children].sort(((e,n)=>parseInt(e.getAttribute(t))-parseInt(n.getAttribute(t))));n=n||r.length;const o=r.slice(0,n);e.innerHTML="",o.forEach((t=>e.appendChild(t))),setTimeout((()=>{r.slice(n).forEach((t=>e.appendChild(t)))}),0)}function c(e,t){e&&e.classList.add(t)}function u(e,t){e&&e.classList.remove(t)}function s(e,t){e&&e.classList.toggle(t)}o.r(e),o.d(e,{addClass:function(){return c},hideElement:function(){return t},removeClass:function(){return u},showElement:function(){return n},sortChildren:function(){return i},toggleClass:function(){return s},toggleVisibleElement:function(){return r}});var a=o(538),d=o(789);document.body.classList.remove("no-js");const l=(0,a.ZP)(localStorage),f=(0,d.ZP)(window,document,l,e);!async function(){const{default:e}=await o.e(840).then(o.bind(o,840));e(document,l)}(),async function(){const{default:e}=await o.e(833).then(o.bind(o,833));e(document,navigator,fetch)}(),async function(){const{default:t}=await o.e(893).then(o.bind(o,893));t(window.history,document,f,e)}(),async function(){const{default:e}=await o.e(218).then(o.bind(o,218));e(document,l)}(),async function(){const{default:t}=await o.e(51).then(o.bind(o,51));t(document,e)}()}()}();