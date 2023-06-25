const peliculas = [];

const getPeliculas = async (valor = "") => {
  let result = [];
  await fetch(
    "https://raw.githubusercontent.com/christianjjc/wesfliz-v01/main/peliculas.json"
  )
    .then((res) => res.json())
    .then((res) => {
      result = res.Search.filter((e) =>
        e.Title.toUpperCase().includes(valor.toUpperCase())
      );
    });
  return result;
};

const muestraPeliculas = async (array, maxPfila, idContenedor, clasDiv) => {
  try {
    let cantFilas = Math.ceil(array.length / maxPfila);
    let html = "";
    for (let i = 1; i <= cantFilas; i++) {
      html += `<div class="${clasDiv}">`;
      const imgs = array.slice((i - 1) * maxPfila, i * maxPfila);
      imgs.map((el) => {
        html += `<img id="${el.imdbID}" class="imgpelicula" src="${el.Poster}" alt="${el.Title}" data-bs-toggle="modal" data-bs-target="#modalDetalle">`;
      });
      html += `</div>`;
    }
    document.getElementById(idContenedor).innerHTML = html;
  } catch (error) {
    console.error(error);
  }
};

let glbViewportWidth = window.innerWidth;
let glbResized = false;
window.addEventListener("resize", () => {
  glbResized = true;
  glbViewportWidth = window.innerWidth;
});

window.addEventListener("mouseout", () => {
  if (glbResized) {
    cargaDatos();
    glbResized = false;
  }
});

const muestraDetalle = (i, array) => {
  const modal = document.getElementById("staticBackdropLabel");
  modal.innerText = array[i].Title;
  const imgContainer = document.getElementById("imgContainer");
  imgContainer.innerHTML = `<img id="${array[i].imdbID}" src="${array[i].Poster}" alt="${array[i].Title}" class="imgDetalle">`;
  const link = `https://www.imdb.com/title/${array[i].imdbID}/`;
  let html = ``;
  html += `<p><span class="fs-6">Id:</span> ${array[i].imdbID}</p>`;
  html += `<p><span class="fs-6">Año:</span> ${array[i].Year}</p>`;
  html += `<p><span class="fs-6">Tipo:</span> ${array[i].Type}</p>`;
  html += `<div class="d-grid gap-3  col-12 col-md-6 mx-auto">`;
  html += `<a class="btn btn-warning" href="${link}" target="_blank">Ver detalles en iMDB</a>`;
  html += `<a class="btn btn-warning" href="https://www.youtube.com/results?search_query=${array[i].Title}+trailer" target="_blank">Buscar trailer en Youtube</a>`;
  html += `</div>`;
  document.getElementById("dataContainer").innerHTML = html;
};

const obtenerDetalle = async (id) => {
  const result = await JSON.parse(localStorage.getItem("peliculas"));
  const index = await result.findIndex((e) => e.imdbID == id);
  muestraDetalle(index, result);
};

const eventoImg = (fn) => {
  let imgBtn = document.getElementsByClassName("imgpelicula");
  for (let i = 0; i < imgBtn.length; i++) {
    imgBtn[i].addEventListener("click", () => {
      const id = imgBtn[i].id;
      fn(id);
    });
  }
};

async function cargaDatos(inicio = true, valor = "") {
  let vp = 0;
  try {
    if (glbViewportWidth < 577) {
      vp = 2;
    } else if (glbViewportWidth < 1025) {
      vp = 4;
    } else {
      vp = 6;
    }
    const peliculas = await getPeliculas(!inicio ? valor : "");
    localStorage.clear;
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
    await muestraPeliculas(peliculas, vp, "container-desktop", "lista");
    eventoImg(obtenerDetalle);
  } catch (error) {
    console.error(error);
  }
}

const txtBuscar = document.getElementById("txtBusqueda");
txtBuscar.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const valor = txtBuscar.value.trim();
    if (valor.length >= 1) {
      cargaDatos(false, valor);
    } else {
      alert("Para iniciar la búsqueda debe ingresar al menos 2 caracteres.");
      cargaDatos();
    }
  }
});

cargaDatos();
