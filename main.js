const getPeliculas = async () => {
  let result = [];
  await fetch(
    "https://raw.githubusercontent.com/christianjjc/wesfliz-v01/main/peliculas.json"
  )
    .then((res) => res.json())
    .then((res) => {
      result = res.Search;
    });
  return result;
};

const muestraPeliculas = async (array, maxPfila, idContenedor, clasDiv) => {
  let cantFilas = Math.ceil(array.length / maxPfila);
  let html = "";
  for (let i = 1; i <= cantFilas; i++) {
    html += `<div class="${clasDiv}">`;
    imgs = array.slice((i - 1) * maxPfila, i * maxPfila);
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
  const peliculas = await getPeliculas();
  await muestraPeliculas(peliculas, 6, "container-desktop", "lista");
  await muestraPeliculas(peliculas, 2, "container-mobile", "lista-mobile");
  await eventoImg();
})();
