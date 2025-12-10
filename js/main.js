// ------------ INITIALISATION GLOBALE DU SITE ------------
document.addEventListener("DOMContentLoaded", () => {
  loadSkills();
  loadGalleries();
  loadPartners();

  // ESC → fermer modales
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeGalleryModal();
      closePartnerModal();
    }
  });
});
