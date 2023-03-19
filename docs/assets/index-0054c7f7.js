(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const c of t)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const c={};return t.integrity&&(c.integrity=t.integrity),t.referrerpolicy&&(c.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?c.credentials="include":t.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(t){if(t.ep)return;t.ep=!0;const c=o(t);fetch(t.href,c)}})();function i(){const e={btns:document.querySelectorAll("._btn"),contents:document.querySelectorAll("._content"),moving:function(n,o){n.forEach(s=>{s.addEventListener("click",t=>{let c=t.target.dataset.btn;o.forEach(r=>{r.dataset.content===c&&(document.querySelectorAll("._show").forEach(l=>{l.classList.remove("_show"),document.body.classList.remove("_lock")}),document.querySelectorAll("._close").forEach(l=>{l.classList.remove("_close")}),r.classList.add("_show"),window.scrollTo(0,0))})})})}};e.moving(e.btns,e.contents)}function u(){const e={openBtn:document.querySelector(".header__btn"),closeBtns:document.querySelectorAll("._close"),nav:document.querySelector(".header__nav"),navBtns:document.querySelectorAll(".nav__btn._btn"),overlay:document.querySelector(".header__overlay"),body:document.querySelector("body"),toggler:function(){e.openBtn.classList.toggle("_close"),e.nav.classList.toggle("_show"),e.overlay.classList.toggle("_show"),e.body.classList.toggle("_lock")},action:function(){e.openBtn.addEventListener("click",e.toggler),e.overlay.addEventListener("click",e.toggler),e.activeLink()},removeActiveLink:function(){e.navBtns.forEach(n=>n.classList.remove("_active"))},activeLink:function(){e.navBtns.forEach(n=>{n.addEventListener("click",()=>{e.removeActiveLink(),n.classList.contains("_active")||n.classList.add("_active")})})}};e.action()}function d(){const e={elem:document.documentElement,btn:document.querySelector("._resize"),icon:{min:"icons/min-size.svg",max:"icons/max-size.svg"},action:()=>{e.btn.addEventListener("click",()=>{e.btn.classList.contains("_resize-on")?e.fullOff():e.fullOn()})},fullOn:()=>{e.btn.classList.add("_resize-on"),e.btn.children[0].setAttribute("src",e.icon.min),(e.elem.requestFullscreen||e.elem.mozRequestFullScreen||e.elem.webkitRequestFullscreen||e.elem.msRequestFullscreen)&&(e.elem.requestFullscreen()||e.elem.mozRequestFullScreen()||e.elem.webkitRequestFullscreen()||e.elem.msRequestFullscreen())},fullOff:()=>{(document.exitFullscreen||document.mozCancelFullScreen||document.webkitExitFullscreen||document.msExitFullscreen)&&(document.exitFullscreen()||document.mozCancelFullScreen()||document.webkitExitFullscreen()||document.msExitFullscreen(),e.btn.classList.remove("_resize-on"),e.btn.children[0].setAttribute("src",e.icon.max))}};e.action()}function a(){const e={btn:document.querySelector("._theme-btn"),icon:{sun:"icons/sun.svg",moon:"icons/moon.svg"},currentTheme:localStorage.getItem("theme"),currentIcon:localStorage.getItem("icon"),action:()=>{e.currentTheme==="dark"?(document.body.classList.add("dark-theme"),document.body.classList.remove("light-theme"),e.btn.children[0].setAttribute("src",e.icon.sun)):(document.body.classList.remove("dark-theme"),document.body.classList.add("light-theme"),e.btn.children[0].setAttribute("src",e.icon.moon)),e.btn.addEventListener("click",function(){document.body.classList.toggle("dark-theme"),document.body.classList.contains("dark-theme")?(e.currentTheme="dark",e.btn.children[0].setAttribute("src",e.icon.sun),console.log("Меняем тему на темную")):(e.currentTheme="light",e.btn.children[0].setAttribute("src",e.icon.moon),console.log("Меняем тему на светлую")),localStorage.setItem("theme",e.currentTheme)}),document.body.style.display="block"}};e.action()}function m(){({url:"data/products.json",getData:function(n){fetch(n).then(o=>o.json()).then(o=>{this.cycleCards(o)}).catch(o=>console.error(o))},cycleCards:function(n){const o=document.querySelector(".products__list");for(let s of n){const t=document.createElement("li");t.classList.add("products__item","card"),t.innerHTML=`<div class="card__img">
        <img src="img/Products/${s.img}.webp" alt="Картинка товара">
        </div><div class="card__text">
        <div class="card__title">
          ${s.name}
        </div>
        <div class="card__description">
          ${s.description}
        </div>
        <div class="card__price">
          <p>Цена:</p>
          <p>${s.price}<span>р.</span></p>
        </div>
      </div>`,o.appendChild(t)}},action:function(){this.getData(this.url)}}).action()}i();u();d();a();m();