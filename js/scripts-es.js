const episodios = [
    {
        id: 1,
        imagen: "../img/diseñoWebDegradado.png",
        titulo: "Episodio 1: CSS Moderno",
        descripcion: "Acompáñanos en el estreno de nuestro podcast sobre CSS moderno",
        disponible: true,
        enlace: "../html/reproductor-es.html"
    },
    {
        id: 2,
        imagen: "../img/javascriptDegradado.png",
        titulo: "Episodio 2: Descubriendo JS",
        descripcion: "No disponible, estreno próximamente",
        disponible: false,
        enlace: null
    },
    {
        id: 3,
        imagen: "../img/htmlDegradado.png",
        titulo: "Episodio 3: HTML5",
        descripcion: "No disponible, estreno próximamente",
        disponible: false,
        enlace: null
    }
];

let episodioMarcado = 1;

function cambiarTitulo(titulo) {
    document.getElementById("pod_titulo").innerHTML = titulo;
}

function cambiarDescripcion(descripcion) {
    document.getElementById("pod_description").innerHTML = descripcion;
}

function gestionarBotonReproduccion(disponible, enlace) {
    const botonPlay = document.querySelector(".play");
    const spanReproducir = document.querySelector("#reproducirBoton");

    botonPlay.disabled = !disponible;
    botonPlay.style.cursor = disponible ? "pointer" : "not-allowed";
    spanReproducir.textContent = disponible ? "Reproducir" : "No disponible";

    if (disponible) {
        botonPlay.onclick = () => window.location.href = enlace;
    } else {
        botonPlay.onclick = null;
    }
}

function seleccionarEpisodio(episodioId) {
    const episodio = episodios.find(e => e.id === episodioId);
    if (!episodio) {
        console.error("Episodio no encontrado:", episodioId);
        return;
    }

    document.body.style.background = `url('${episodio.imagen}') center/cover no-repeat`;
    cambiarTitulo(episodio.titulo);
    cambiarDescripcion(episodio.descripcion);
    gestionarBotonReproduccion(episodio.disponible, episodio.enlace);
}

function cambiarImagenFondo() {
    document.querySelectorAll('.episodios img').forEach(image => {
        image.addEventListener('mouseenter', () => {
            seleccionarEpisodio(parseInt(image.id));
        });

        image.addEventListener('mouseleave', () => {
            seleccionarEpisodio(episodioMarcado);
        });

        image.addEventListener('click', () => {
            episodioMarcado = parseInt(image.id);
            seleccionarEpisodio(episodioMarcado);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    cambiarImagenFondo();
    seleccionarEpisodio(episodioMarcado);
});
