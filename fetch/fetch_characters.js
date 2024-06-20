const url = "https://hp-api.onrender.com/api/characters";
const $gridCharacters = document.getElementById("section-characters");
const defaultImage = "/assets/image-default/lente_cicatriz.png";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let characters = data;
    console.log(characters);

    characters.forEach((character) => {
      let statusText = character.alive === true ? "Vive" : "Murió";
      let imagenURL = character.image ? character.image : defaultImage;

      $gridCharacters.innerHTML += `<div class="card-characters">
    <img src="${imagenURL}" alt="Foto de ${character.name}">
    <h2 class="title-card-character">${character.name}</h2>
    <p class="species-card-character">Especie: ${character.species}</p>
    <p class="house-card-character">Casa: ${character.house}</p>
    <p class="status-card-character">Estado: ${statusText}</p>
    </div>
    `;
    });
  });
