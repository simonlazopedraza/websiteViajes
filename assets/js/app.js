const enlaces = document.querySelectorAll('a.nav-link[href^="#"]');

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", (event) => {
    event.preventDefault();

    const destino = document.querySelector(enlace.getAttribute("href"));

    if (destino) {
      destino.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});