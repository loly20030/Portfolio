// ----------- FORMULAIRE CONTACT -----------
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".futurist-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const msg = document.getElementById("msg");
    if (msg) msg.textContent = "Message envoyé (simulation). Merci !";

    form.reset();

    setTimeout(() => {
      if (msg) msg.textContent = "";
    }, 5000);
  });
});
