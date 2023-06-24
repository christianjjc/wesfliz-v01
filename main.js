/* (async () => {
  await fetch("https://www.omdbapi.com/?apikey=24eff419&s=movie&r=json&page=1")
  //await fetch("peliculas.json")
    .then((res) => res.json())
    .then((res) => {
      peliculas = res;
    });
  console.log(peliculas.Search);
})(); */

const muestraPeliculas = async (maxPfila, idContenedor, clasDiv) => {
  let cantFilas = Math.ceil(peliculas.length / maxPfila);
  let html = "";
  for (let i = 1; i <= cantFilas; i++) {
    html += `<div class="${clasDiv}">`;
    imgs = peliculas.slice((i - 1) * maxPfila, i * maxPfila);
    imgs.map((el) => {
      html += `<img id="${el.imdbID}" class="imgpelicula" src="${el.Poster}" alt="${el.Title}">`;
    });
    html += `</div>`;
  }
  document.getElementById(idContenedor).innerHTML = html;
};

/* Agregamos eventos a las imagenes de cada encuentro */
const eventoImg = async () => {
  let imgBtn = document.getElementsByClassName("imgpelicula");
  for (let i = 0; i < imgBtn.length; i++) {
    imgBtn[i].addEventListener("click", () => {
      const alt = imgBtn[i].alt;
      alert(alt);
    });
  }
};

(async () => {
  await muestraPeliculas(6, "container-desktop", "lista");
  await muestraPeliculas(2, "container-mobile", "lista-mobile");
  await eventoImg();
})();
