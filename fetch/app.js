// Evento de escucha para el clic del botón "Subir a la cima"
document.querySelector(".btn-flotante").addEventListener("click", function() {
        // Desplazamiento suave a la parte superior de la página
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top smoothly
  });