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
        html += `<img id="${el.imdbID}" class="imgpelicula" src="${el.Poster}" alt="${el.Title}">`;
      });
      html += `</div>`;
    }
    document.getElementById(idContenedor).innerHTML = html;
  } catch (error) {
    console.error(error);
  }
};

const eventoImg = () => {
  let imgBtn = document.getElementsByClassName("imgpelicula");
  for (let i = 0; i < imgBtn.length; i++) {
    imgBtn[i].addEventListener("click", () => {
      const alt = imgBtn[i].alt;
      alert(alt);
    });
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
    await muestraPeliculas(peliculas, vp, "container-desktop", "lista");
    eventoImg();
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
