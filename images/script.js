/* =========================
   Menu mobile open/close
   ========================= */
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    if (sidemenu) sidemenu.style.right = "0";
}

function closemenu() {
    if (sidemenu) sidemenu.style.right = "-220px";
}

/* =========================
   Form submit (Google Sheets)
   ========================= */
const scriptURL = 'https://script.google.com/macros/s/AKfycb.../exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message envoyé avec succès";
                setTimeout(function() { msg.innerHTML = ""; }, 5000);
                form.reset();
            })
            .catch(error => {
                console.error('Error!', error.message);
                msg.innerHTML = "Une erreur s'est produite";
            });
    });
}

/* =========================
   Parallaxe léger
   ========================= */
(function(){
  var sky = document.querySelector('.starry-sky');
  if (!sky) return;
  
  window.addEventListener('mousemove', function(e){
    var x = (e.clientX / window.innerWidth) * 100;
    var y = (e.clientY / window.innerHeight) * 100;
    sky.style.backgroundPosition = (50 + (x - 50) * 0.2) + '% ' + (50 + (y - 50) * 0.2) + '%';
  });

  window.addEventListener('scroll', function(){
    var sc = window.scrollY;
    var planet = document.querySelector('.planet-image-container'); // CHANGÉ ICI
    var glow = document.querySelector('.sun-glow');
    var fixedStar = document.querySelector('.fixed-star');
    
    if (planet) planet.style.transform = 'translateX(-50%) translateY(' + (sc * 0.02) + 'px)';
    if (glow) glow.style.transform = 'translateX(-50%) translateY(' + (sc * 0.01) + 'px)';
    if (fixedStar) fixedStar.style.transform = 'translateX(-50%) translateY(' + (sc * 0.015) + 'px)';
  }, { passive: true });
})();

/* =========================
   AOS init
   ========================= */
document.addEventListener('DOMContentLoaded', function(){
  if (window.AOS) AOS.init({ duration: 1000, once: true });
});