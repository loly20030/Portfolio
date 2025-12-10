// ------------ CHARGEMENT DES COMPÉTENCES ------------
function loadSkills() {
  fetch("data/skills.json")
    .then(res => res.json())
    .then(skills => {
      const container = document.getElementById("skills");
      if (!container) return;

      let html = '<div class="skills-grid">';

      skills.forEach(s => {
        html += `
          <div class="skill-card">
            <div class="skill-meta">
              <img src="${s.icon}" alt="${s.name}">
              <div class="skill-name">${s.name}</div>
            </div>
            <div class="skill-bar"><span data-level="${s.level}"></span></div>
            <div class="skill-desc">${s.description || ""}</div>
          </div>
        `;
      });

      html += '</div>';
      container.innerHTML = html;

      // Si onglet actif
      const active = document.querySelector('.tab-link.active')?.dataset.tab;
      if (active === "skills") animateSkillBars();

    })
    .catch(err => console.error("Erreur skills.json :", err));
}

// Animation des barres
function animateSkillBars() {
  document.querySelectorAll('.skill-bar > span').forEach(span => {
    const lvl = span.dataset.level || "70";
    span.style.width = "0%";

    setTimeout(() => {
      span.style.width = lvl + "%";
    }, 100);
  });
}
