document.getElementById("year").textContent = new Date().getFullYear();
const menuToggle=document.getElementById("menuToggle"),siteNav=document.getElementById("siteNav");
menuToggle?.addEventListener("click",()=>siteNav.classList.toggle("open"));
siteNav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>siteNav.classList.remove("open")));