!function(){"use strict";const s=(s,t=!1)=>(s=s.trim(),t?[...document.querySelectorAll(s)]:document.querySelector(s)),t=(t,e,a,i=!1)=>{let o=s(e,i);o&&(i?o.forEach((s=>s.addEventListener(t,a))):o.addEventListener(t,a))},e=s=>{window.scrollTo({top:0,behavior:"smooth"})};t("click",".mobile-nav-toggle",(function(t){s("#navbar").classList.toggle("navbar-mobile"),this.classList.toggle("bi-list"),this.classList.toggle("bi-x")})),t("click","#navbar .nav-link",(function(t){let a=s(this.hash);if(a){t.preventDefault();let i=s("#navbar"),o=s("#header"),n=s("section",!0);if(s("#navbar .nav-link",!0).forEach((s=>{s.classList.remove("active")})),this.classList.add("active"),i.classList.contains("navbar-mobile")){i.classList.remove("navbar-mobile");let t=s(".mobile-nav-toggle");t.classList.toggle("bi-list"),t.classList.toggle("bi-x")}if("#header"==this.hash)return o.classList.remove("header-top"),void n.forEach((s=>{s.classList.remove("section-show")}));o.classList.contains("header-top")?(n.forEach((s=>{s.classList.remove("section-show")})),a.classList.add("section-show")):(o.classList.add("header-top"),setTimeout((function(){n.forEach((s=>{s.classList.remove("section-show")})),a.classList.add("section-show")}),350)),e(this.hash)}}),!0),window.addEventListener("load",(()=>{if(window.location.hash){let t=s(window.location.hash);if(t){let a=s("#header"),i=s("#navbar .nav-link",!0);a.classList.add("header-top"),i.forEach((s=>{s.getAttribute("href")==window.location.hash?s.classList.add("active"):s.classList.remove("active")})),setTimeout((function(){t.classList.add("section-show")}),350),e(window.location.hash)}}}));let a=s(".skills-content");a&&new Waypoint({element:a,offset:"80%",handler:function(t){s(".progress .progress-bar",!0).forEach((s=>{s.style.width=s.getAttribute("aria-valuenow")+"%"}))}})}();
