import{S as c,i as u}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="45077821-aa67b100696f1310c7d1f60f1";async function f(r,o=1,s=9){const i=`https://pixabay.com/api/?key=${d}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${s}`;try{const e=await fetch(i);if(!e.ok)throw new Error(`Network response was not ok: ${e.statusText}`);return(await e.json()).hits}catch(e){throw console.error("Fetching images failed:",e),e}}let a;function h(r){const o=document.querySelector(".gallery");o.innerHTML=r.map(s=>y(s)).join(""),a?a.refresh():a=new c(".gallery a")}function y({webformatURL:r,largeImageURL:o,tags:s,likes:i,views:e,comments:t,downloads:l}){return`
   <div class="gallery-item">
      <a href="${o}">
        <img src="${r}" alt="${s}" loading="lazy"  width="360"
            height="152" />
      </a>
      <div class="info">
        <ul class="descr-list">
          <li><h2 class="title">Likes:</h2><p class="text"> ${i} </p></li>
          <li><h2 class="title">Views:</h2><p class="text"> ${e}</p></li>
          <li><h2 class="title">Comments:</h2><p class="text"> ${t}</p></li>
          <li><h2 class="title">Downloads:</h2><p class="text"> ${l}</p></li>
        </ul>
      </div>
    </div>
  `}function p(){const r=document.querySelector(".gallery");r.innerHTML=""}function n(r){u.error({title:"Error",message:r,position:"bottomRight"})}document.querySelector("#search-form").addEventListener("submit",r=>{r.preventDefault();const o=r.currentTarget.elements.searchQuery.value.trim();if(o===""){n("Please enter a search query");return}p(),document.querySelector(".loader-text").style.display="block",f(o).then(s=>{s.length===0?n("Sorry, there are no images matching your search query. Please, try again!"):h(s)}).catch(s=>{n("Something went wrong. Please try again later.")}).finally(()=>{document.querySelector(".loader-text").style.display="none"})});
//# sourceMappingURL=commonHelpers.js.map
