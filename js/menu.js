// MENU MOBILE
function openmenu() {
  const sidemenu = document.getElementById('sidemenu');
  if (sidemenu) sidemenu.style.right = "0";
}

function closemenu() {
  const sidemenu = document.getElementById('sidemenu');
  if (sidemenu) sidemenu.style.right = "-260px";
}

// Ferme le menu si clic sur un lien du menu
document.addEventListener('click', (e) => {
  const sidemenu = document.getElementById('sidemenu');
  if (!sidemenu) return;

  if (e.target.matches('#sidemenu a')) closemenu();
});
