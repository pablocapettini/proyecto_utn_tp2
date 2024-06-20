// URL de la API para obtener datos de personajes
const url = "https://hp-api.onrender.com/api/characters";

// Referencia del elemento DOM para el contenedor de la cuadrícula de personajes
const $gridCharacters = document.getElementById("section-characters");

// Imagen predeterminada para personajes sin imagen en la API
const defaultImage = "/assets/image-default/lente_cicatriz.png";

// Evento de escucha para el clic del botón "Subir a la cima"
document.querySelector(".btn-flotante").addEventListener("click", function() {
    // Desplazamiento suave a la parte superior de la página
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Solicitar datos de personajes de la API
fetch(url)
  .then((res) => res.json())  // Analizar la respuesta como JSON
  .then((data) => {
    let characters = data;  // Almacenar los datos de personajes obtenidos

    console.log(characters);   // Registrar los datos de personajes para depuración

    characters.forEach((character) => {
      // Determinar el texto de estado según la propiedad "alive"
      let statusText = character.alive === true ? "Vive" : "Murió";

      // Seleccionar la URL de la imagen según la propiedad "image"
      let imagenURL = character.image ? character.image : defaultImage;

            // Crear una nueva tarjeta de personaje con HTML
      $gridCharacters.innerHTML += `<div>
    <img src="${imagenURL}" alt="Foto de ${character.name}">
    <h2 class="title-card-character">${character.name}</h2>
    <p class="species-card-character">Especie: ${character.species}</p>
    <p class="house-card-character">Casa: ${character.house}</p>
    <p class="status-card-character">Estado: ${statusText}</p>
    </div>
    `;
    });
  });
