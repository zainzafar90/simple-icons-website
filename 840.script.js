"use strict";(self.webpackChunksimple_icons_website=self.webpackChunksimple_icons_website||[]).push([[840],{840:function(e,s,t){t.r(s),t.d(s,{default:function(){return a}});var c=t(538);const i="dark",l="light",d="dark",n="light";function a(e,s){let t="system";const a=e.querySelector("body"),o=e.getElementById("color-scheme-dark"),r=e.getElementById("color-scheme-light"),m=e.getElementById("color-scheme-system");function u(e){e!==t&&(e===i?(a.classList.add(d),a.classList.remove(n)):e===l?(a.classList.add(n),a.classList.remove(d)):a.classList.remove(d,n),s.setItem(c.SR,e),t=e)}o.disabled=!1,r.disabled=!1,m.disabled=!1,s.hasItem(c.SR)&&u(s.getItem(c.SR)),o.addEventListener("click",(()=>{u(i)})),r.addEventListener("click",(()=>{u(l)})),m.addEventListener("click",(()=>{u("system")}))}}}]);