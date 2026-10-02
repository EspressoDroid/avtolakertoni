const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav');
function setMenu(open){nav.classList.toggle('nav-open',open);menu.setAttribute('aria-expanded',String(open));}
menu.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){setMenu(false);menu.focus();}});
