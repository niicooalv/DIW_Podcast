//
const idiomaWeb = "es";
document.documentElement.lang = idiomaInicial;

document.addEventListener('DOMContentLoaded', () => {
    seleccionarEpisodio(1);

});

const episodios = [
    {
        id: 1,
        es: {
            titulo: "Episodio 1: Ayuda",
            descripcion: "Ayuda sacadme de aqui."
        },
        en: {
            titulo: "Help me please",
            descripcion: "Help."
        }
    },
    {
        id: 2,
        es: {
            titulo: "Episodio 2: Descubriendo CSS",
            descripcion: "CSS"
        },
        en: {
            titulo: "Episode 2: Discovering CSS",
            descripcion: "CSS"
        }
    },
    {
        id: 3,
        es: {
            titulo: "3.0 AYuda por favor",
            descripcion: "Ayuda por favor"
        },
        en: {
            titulo: "3.0 Help me please",
            descripcion: "Help me please"
        }
    },

];


function cambiarTitulo(titulo) { // cambiar titulo del podcast
    const tituloElement = document.getElementById("pod_titulo");
    tituloElement.innerHTML = titulo;

}

function cambiarDescripcion(descripcion) { //cambiar descripción del podcast
    const descriptionElement = document.getElementById("pod_description");
    descripcionElement.innerHTML = descripcion;
}

function seleccionarEpisodio(episodioId) {
    const episodio = episodios.find(e => e.id === episodioId);


    // Cambiar imagen de fondo
    //cambiarImagenFondo(`img/episodio${episodioId}.jpg`);

    // Cambiar título y descripción según el idioma
    if (idiomaWeb === "es") {
        cambiarTitulo(episodio.es.titulo);
        cambiarDescripcion(episodio.es.descripcion);
    } else {
        cambiarTitulo(episodio.en.titulo);
        cambiarDescripcion(episodio.en.descripcion);
    }
}

