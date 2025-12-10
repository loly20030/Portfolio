// GESTION DES ONGLETS : COMPÉTENCE / EXPÉRIENCE
document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.tab-link').forEach(btn => {
    btn.addEventListener('click', () => {

      document.querySelectorAll('.tab-link').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

      btn.classList.add('active');

      const id = btn.dataset.tab;
      const pane = document.getElementById(id);

      if (pane) pane.classList.add('active');

      // Si "compétence" → on anime les barres
      if (id === "skills") animateSkillBars();
    });
  });

});
