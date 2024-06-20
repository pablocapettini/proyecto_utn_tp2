const url = "https://harry-potter-api.onrender.com/hechizos";
const $gridSpells = document.getElementById("section-spells");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let spells = data;
    console.log(spells);

    spells.forEach((spell) => {
      $gridSpells.innerHTML += `<div>
    <h2 class="title-card-spell">${spell.hechizo}</h2>
    <p class="content-card-spell">${spell.uso}</p>
    </div>
    `;
    });
  });