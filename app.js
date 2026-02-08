document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  console.log("App loaded ✔");
});

function setupNavigation() {
  const buttons = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll("section");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.section;

      // Remove active states
      buttons.forEach(b => b.classList.remove("active"));
      sections.forEach(s => s.classList.remove("active"));

      // Activate selected
      btn.classList.add("active");
      document.getElementById(target)?.classList.add("active");

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}
