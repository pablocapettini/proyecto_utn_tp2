// URL de la API para obtener datos de hechizos
const url = "https://harry-potter-api.onrender.com/hechizos";

// Referencia del elemento DOM para el contenedor de la cuadrícula de hechizos
const $gridSpells = document.getElementById("section-spells");

// Evento de escucha para el clic del botón "Subir a la cima"
document.querySelector(".btn-flotante").addEventListener("click", function() {
    // Desplazamiento suave a la parte superior de la página
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Solicitar datos de hechizos de la API
fetch(url)
  .then((res) => res.json())  // Analizar la respuesta como JSON
  .then((data) => {
    let spells = data;   // Almacenar los datos de los hechizos obtenidos
    console.log(spells);  // Registrar los datos de los hechizos para depuración

    // Recorrer cada hechizo
    spells.forEach((spell) => {
      // Crear un nuevo elemento de tarjeta de hechizo
      $gridSpells.innerHTML += `<div>
    <h2 class="title-card-spell">${spell.hechizo}</h2>
    <p class="content-card-spell">${spell.uso}</p>
    </div>
    `;
    });
  });
