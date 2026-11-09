(()=>{
 const root=document.documentElement, buttons=document.querySelectorAll("[data-theme-toggle]");
 const saved=localStorage.getItem("codepulse-theme");
 const prefers=window.matchMedia?.("(prefers-color-scheme: dark)").matches;
 root.dataset.theme=saved||(prefers?"dark":"light");
 function update(){buttons.forEach(b=>{b.textContent=root.dataset.theme==="dark"?"☀ Light mode":"☾ Dark mode";b.setAttribute("aria-pressed",String(root.dataset.theme==="dark"));});}
 buttons.forEach(b=>b.addEventListener("click",()=>{root.dataset.theme=root.dataset.theme==="dark"?"light":"dark";localStorage.setItem("codepulse-theme",root.dataset.theme);update();}));
 update();
 document.querySelectorAll("[data-year]").forEach(e=>e.textContent=new Date().getFullYear());

 const contact=document.querySelector("#contact-form");
 if(contact) contact.addEventListener("submit",async e=>{
   e.preventDefault(); const msg=contact.querySelector("[data-form-feedback]");
   msg.textContent="Sending your message…";
   const payload=Object.fromEntries(new FormData(contact).entries());
   try{
     const response=await fetch("http://localhost:3000/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
     const result=await response.json(); if(!response.ok) throw new Error(result.message||"Request failed");
     msg.textContent=result.message; contact.reset();
   }catch(err){msg.textContent="Could not reach the backend. Start the server in the backend folder, then try again. ("+err.message+")";}
 });

 const products=document.querySelector("#api-products");
 if(products){
   products.innerHTML="<p class='api-status'>Loading live product data…</p>";
   fetch("http://localhost:3000/api/products").then(r=>{if(!r.ok)throw new Error("API request failed");return r.json();})
    .then(data=>{products.innerHTML=data.products.map(p=>`<article class="api-card"><img src="${p.thumbnail}" alt=""><h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.category)} · $${p.price}</p></article>`).join("");})
    .catch(()=>{products.innerHTML="<p class='api-status'>Start the Node.js backend to load live API products.</p>";});
 }
 function escapeHtml(value){return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
})();