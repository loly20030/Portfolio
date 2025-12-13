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
/* =========================
   OEUVRES – LOGIQUE DÉROULANTE
   ========================= */

// Ouvrir la section Branding
document.querySelectorAll(".oeuvre-toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.target);
    if (!target) return;

    target.classList.toggle("active");
  });
});

// Ouvrir les détails d'une image précise
document.querySelectorAll(".branding-item > img").forEach(img => {
  img.addEventListener("click", () => {
    const item = img.closest(".branding-item");

    // Fermer les autres
    document.querySelectorAll(".branding-item").forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});
