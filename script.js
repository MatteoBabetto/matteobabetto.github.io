document.getElementById("year").textContent = new Date().getFullYear();
const items=document.querySelectorAll(".project-row,.intro-grid,.contact-section");
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}})},{threshold:.06});
items.forEach(item=>{item.classList.add("reveal");observer.observe(item)});