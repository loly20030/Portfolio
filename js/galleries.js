let galleriesData = {};

fetch("data/galleries.json")
  .then(res => res.json())
  .then(data => {
    galleriesData = data;
    initOeuvres();
  });

function initOeuvres() {
  document.querySelectorAll(".oeuvre-item").forEach(item => {
    item.addEventListener("click", () => {
      const type = item.dataset.gallery;
      if (galleriesData[type]) {
        openProjects(type);
      }
    });
  });
}

function openProjects(type) {
  const modal = document.getElementById("gallery-modal");
  const grid = document.getElementById("gallery-grid");

  grid.innerHTML = "";

  galleriesData[type].forEach(project => {
    const div = document.createElement("div");
    div.className = "gallery-item";

    const img = document.createElement("img");
    img.src = project.cover;
    img.alt = project.title;

    div.appendChild(img);
    grid.appendChild(div);

    div.addEventListener("click", () => openProject(project));
  });

  modal.classList.add("active");
}

function openProject(project) {
  const grid = document.getElementById("gallery-grid");
  grid.innerHTML = "";

  project.images.forEach(src => {
    const div = document.createElement("div");
    div.className = "gallery-item";

    const img = document.createElement("img");
    img.src = src;

    div.appendChild(img);
    grid.appendChild(div);
  });
}

/* =========================
   FERMETURE SIMPLE
   ========================= */

document.getElementById("gallery-modal").addEventListener("click", e => {
  if (e.target.id === "gallery-modal") {
    closeGallery();
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeGallery();
});

function closeGallery() {
  document.getElementById("gallery-modal").classList.remove("active");
}
