// ----------- PARTENAIRES -----------
let _partners = {};

function loadPartners() {
  fetch("data/partners.json")
    .then(res => res.json())
    .then(list => {
      renderPartners(list);
      _partners = list.reduce((acc, p) => { acc[p.id] = p; return acc; }, {});
    })
    .catch(err => console.error("Erreur partners.json :", err));
}

function renderPartners(list) {
  const container = document.querySelector(".partners-grid");
  container.innerHTML = "";

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "partner-card";
    card.dataset.partner = p.id;

    card.innerHTML = `
        <img src="${p.logo}" alt="${p.name}">
        <div class="partner-name">${p.name}</div>
        <div class="partner-sector">${p.sector}</div>
        <div class="partner-btn">Voir détails</div>
    `;

    card.addEventListener("click", () => openPartnerModal(p.id));

    container.appendChild(card);
  });
}

function openPartnerModal(id) {
  const data = _partners[id];
  if (!data) return;

  document.getElementById("partner-logo").src = data.logo;
  document.getElementById("partner-name").textContent = data.name;
  document.getElementById("partner-sector").textContent = data.sector;
  document.getElementById("partner-about").textContent = data.about;
  document.getElementById("partner-website").innerHTML = `<a href="${data.website}" target="_blank">${data.website}</a>`;
  document.getElementById("partner-location").textContent = data.location;
  document.getElementById("partner-specialty").textContent = data.specialty;
  document.getElementById("partner-collab").textContent = data.collaboration;

  const projects = document.getElementById("partner-projects");
  projects.innerHTML = "";
  (data.projects || []).forEach(pr => {
    projects.innerHTML += `
      <div class="project-item">
        <strong>${pr.name}</strong>
        <p>${pr.description}</p>
      </div>
    `;
  });

  document.getElementById("partner-modal").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closePartnerModal() {
  document.getElementById("partner-modal").style.display = "none";
  document.body.style.overflow = "auto";
}

document.addEventListener("click", e => {
  const modal = document.getElementById("partner-modal");
  if (modal && modal.style.display === "flex" && e.target === modal) closePartnerModal();
});
