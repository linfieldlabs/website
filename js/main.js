// Scroll reveal functionality
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); } });
}, { threshold:.12 });
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id.length>1){ e.preventDefault(); document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'}); }
  });
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();
