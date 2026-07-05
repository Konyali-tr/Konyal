
window.addEventListener('scroll',()=>{
const nav=document.querySelector('.navbar');
nav.style.background=window.scrollY>50?'#000':'rgba(0,0,0,.85)';
});
document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.onclick=e=>{
e.preventDefault();
document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
};
});
