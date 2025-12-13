// ----------- COLLABORATEURS (logos uniquement) -----------

function loadPartners() {
  fetch("data/partners.json")
    .then(res => res.json())
    .then(list => renderCollaborators(list))
    .catch(err => console.error("Erreur partners.json :", err));
}

function renderCollaborators(list) {
  const container = document.querySelector(".collaborators-grid");
  if (!container) return;

  container.innerHTML = "";

  list.forEach(p => {
    const logo = document.createElement("div");
    logo.className = "collaborator-logo";

    logo.innerHTML = `
      <img src="${p.logo}" alt="${p.name}">
    `;

    container.appendChild(logo);
  });
}

document.addEventListener("DOMContentLoaded", loadPartners);
