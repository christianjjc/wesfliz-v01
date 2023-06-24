/* (async () => {
  await fetch("https://www.omdbapi.com/?apikey=24eff419&s=movie&r=json&page=1")
  //await fetch("peliculas.json")
    .then((res) => res.json())
    .then((res) => {
      peliculas = res;
    });
  console.log(peliculas.Search);
})(); */

/* Agregamos eventos a las imagenes de cada encuentro */
const eventoImg = (() => {
  let imgBtn = document.getElementsByClassName(`imgpelicula`);
  for (let i = 0; i < imgBtn.length; i++) {
    imgBtn[i].addEventListener(`click`, () => {
      const alt = imgBtn[i].alt;
      alert(alt);
    });
  }
})();
