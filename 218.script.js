"use strict";(self.webpackChunksimple_icons_website=self.webpackChunksimple_icons_website||[]).push([[218],{218:function(t,e,s){s.r(e),s.d(e,{default:function(){return a}});var d=s(538);const n="download-svg",i="download-pdf";function a(t,e){let s="svg";const a=t.querySelector("body"),l=t.getElementById("download-pdf"),c=t.getElementById("download-svg"),o=t.getElementsByClassName("grid-item__button");l.disabled=!1,c.disabled=!1,e.hasItem(d.vt)?r(e.getItem(d.vt)):e.setItem(d.vt,"svg"),l.addEventListener("click",(()=>{r("pdf")})),c.addEventListener("click",(()=>{r("svg")}));for(let t=0;t<o.length;t++)o[t].addEventListener("click",(t=>{const s=t.target.getAttribute("data-icon"),n=e.getItem(d.vt);t.target.setAttribute("href",`./icons/${s}.${n}`)}));function r(t){t!==s&&("svg"===t?(a.classList.add(n),a.classList.remove(i)):"pdf"===t&&(a.classList.add(i),a.classList.remove(n)),e.setItem(d.vt,t),s=t)}}}}]);