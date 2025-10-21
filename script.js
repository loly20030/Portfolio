// =========================
// Menu mobile open/close
// =========================
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    if (sidemenu) sidemenu.style.right = "0";
}

function closemenu() {
    if (sidemenu) sidemenu.style.right = "-220px";
}

// =========================
// Système d'onglets dynamiques
// =========================
document.addEventListener('DOMContentLoaded', function() {
  const tabLinks = document.querySelectorAll('.bio-link');
  const tabPanes = document.querySelectorAll('.tab-pane');
  
  // Tous les onglets sont cachés au départ
  tabPanes.forEach(pane => pane.classList.remove('active'));
  
  // Fonction pour changer d'onglet
  function switchTab(tabId) {
    // Retirer la classe active de tous les liens et panneaux
    tabLinks.forEach(link => link.classList.remove('active'));
    tabPanes.forEach(pane => pane.classList.remove('active'));
    
    // Ajouter la classe active au lien et au panneau correspondants
    document.querySelector(`.bio-link[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
    
    // Animer les barres de progression si on est dans l'onglet Compétences
    if (tabId === 'skills') {
      animateProgressBars();
    }
  }
  
  // Ajouter les événements de clic aux liens d'onglets
  tabLinks.forEach(link => {
    link.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      switchTab(tabId);
    });
  });
  
  // Fonction pour animer les barres de progression
  function animateProgressBars() {
    const progressBars = document.querySelectorAll('.skill-progress');
    progressBars.forEach(bar => {
      const level = bar.getAttribute('data-level');
      bar.style.width = '0';
      setTimeout(() => {
        bar.style.width = level + '%';
      }, 100);
    });
  }
});

// =========================
// Form submit (Google Sheets)
// =========================
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