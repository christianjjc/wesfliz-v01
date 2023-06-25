let peliculas = [];
let cantidadContenedores = 0;
let contenedorActual = 4;
let cmaxporfila = 0;

const getRandomColor = () => {
  const h = Math.floor(Math.random() * 360);
  return `hsl(${h}deg, 90%, 85%)`;
};

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

window.addEventListener("scroll", () => {
  const { clientHeight, scrollHeight, scrollTop } = document.documentElement;
  scrollTop + clientHeight > scrollHeight && setTimeout(addContainer, 500);
});

const addContainer = () => {
  const spinner = document.querySelector("#spinner");
  spinner.classList.remove("d-none");
  if (contenedorActual < cantidadContenedores) {
    const container = document.querySelector("#container-desktop");
    const box = document.createElement("div");
    box.className = "lista";
    box.style.backgroundColor = getRandomColor();
    container.appendChild(box);
    contenedorActual++;
    setTimeout(() => {
      try {
        let html = "";
        const imgs = peliculas.slice(
          (contenedorActual - 1) * cmaxporfila,
          contenedorActual * cmaxporfila
        );
        imgs.map((el) => {
          html += `<img id="${el.imdbID}" class="imgpelicula" src="${el.Poster}" alt="${el.Title}" data-bs-toggle="modal" data-bs-target="#modalDetalle">`;
        });
        box.style.backgroundColor = `#000000`;
        box.innerHTML = html;
        contenedorActual++;
      } catch (error) {
        console.error(error);
      }
      eventoImg(obtenerDetalle);
    }, 1000);
  } else {
    //spinner.classList.add("d-none");
  }
};

const muestraPeliculas = async (array, maxPfila, idContenedor, clasDiv) => {
  try {
    //let cantFilas = Math.ceil(array.length / maxPfila);
    let html = "";
    for (let i = 1; i <= 3; i++) {
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
  cantidadContenedores = 0;
  contenedorActual = 4;
  cmaxporfila = 0;
  glbViewportWidth = window.innerWidth;
});

window.addEventListener("mouseout", () => {
  if (glbResized) {
    const valor = txtBuscar.value.trim();
    cargaDatos(false, valor);
    //cargaDatos(false);
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
  try {
    if (glbViewportWidth < 577) {
      cmaxporfila = 2;
    } else if (glbViewportWidth < 1025) {
      cmaxporfila = 4;
    } else {
      cmaxporfila = 6;
    }
    peliculas = await getPeliculas(!inicio ? valor : "");
    localStorage.clear;
    localStorage.setItem("peliculas", JSON.stringify(peliculas));
    cantidadContenedores = Math.ceil(peliculas.length / cmaxporfila);
    await muestraPeliculas(peliculas, cmaxporfila, "container-desktop", "lista");
    eventoImg(obtenerDetalle);
  } catch (error) {
    console.error(error);
  }
}

const txtBuscar = document.getElementById("txtBusqueda");
txtBuscar.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const valor = txtBuscar.value.trim();
    cantidadContenedores = 0;
    contenedorActual = 4;
    cmaxporfila = 0;
    cargaDatos(false, valor);
  }
});

cargaDatos();
