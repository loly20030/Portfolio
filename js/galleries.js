// ----------- GALERIES (ŒUVRES) -----------
let _galleries = {};

function loadGalleries() {
  fetch("data/galleries.json")
    .then(res => res.json())
    .then(data => {
      _galleries = data;
      bindOeuvreClicks();
    })
    .catch(err => console.error("Erreur galleries.json :", err));
}

function bindOeuvreClicks() {
  document.querySelectorAll('.oeuvre-item').forEach(item => {
    item.addEventListener('click', () => {
      const cat = item.dataset.category;
      openGalleryModal(cat);
    });
  });
}

function openGalleryModal(category) {
  const modal = document.getElementById("gallery-modal");
  const grid = document.getElementById("gallery-grid");
  const title = document.getElementById("modal-title");

  if (!modal || !grid) return;

  const data = _galleries[category];

  title.textContent = data?.title || category;
  grid.innerHTML = "";

  if (data && Array.isArray(data.images)) {
    data.images.forEach((img, i) => {
      let div = document.createElement("div");
      div.className = "gallery-item";
      div.style.animationDelay = `${i * 0.06}s`;
      div.innerHTML = `<img src="${img.src}" alt="${img.title || ''}">`;
      grid.appendChild(div);
    });
  }

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeGalleryModal() {
  const modal = document.getElementById("gallery-modal");
  if (!modal) return;
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

document.addEventListener("click", (e) => {
  const modal = document.getElementById("gallery-modal");
  if (modal && modal.style.display === "flex" && e.target === modal) {
    closeGalleryModal();
  }
});
