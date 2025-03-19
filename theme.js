document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  // Función para aplicar el tema
  function applyTheme(theme) {
      if (theme === "dark") {
          body.classList.add("dark");
          themeIcon.classList.remove("bi-moon");
          themeIcon.classList.add("bi-sun");
      } else {
          body.classList.remove("dark");
          themeIcon.classList.remove("bi-sun");
          themeIcon.classList.add("bi-moon");
      }
      localStorage.setItem("theme", theme);
  }

  // Comprobar si hay un tema guardado en localStorage
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme) {
      applyTheme(storedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      applyTheme("dark");
  }

  // Evento de click para alternar el tema
  themeToggle.addEventListener("click", () => {
      const newTheme = body.classList.contains("dark") ? "light" : "dark";
      applyTheme(newTheme);
  });

  // Sección deportes (verifica si existe antes de añadir eventos)
  const deportesSection = document.querySelector(".deportes");
  if (deportesSection) {
      deportesSection.addEventListener("mouseover", () => {
          deportesSection.classList.add("highlight");
      });

      deportesSection.addEventListener("mouseout", () => {
          deportesSection.classList.remove("highlight");
      });
  }
});
