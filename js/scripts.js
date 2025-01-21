// Datos de episodios
const episodios = [
    {
        id: 1,
        imagen: "../img/diseñoWebDegradado.png",
        disponible: true,
        es: {
            titulo: "Episodio 1: Ayuda",
            descripcion: "Ayuda sacadme de aqui."
        },
        gal: {
            titulo: "Help me please",
            descripcion: "Help."
        }
    },
    {
        id: 2,
        imagen: "../img/javascriptDegradado.png",
        disponible: false,
        es: {
            titulo: "Episodio 2: Descubriendo CSS",
            descripcion: "CSS"
        },
        gal: {
            titulo: "Episode 2: Discovering CSS",
            descripcion: "CSS"
        }
    },
    {
        id: 3,
        imagen: "../img/htmlDegradado.png",
        disponible: false,
        es: {
            titulo: "3.0 AYuda por favor",
            descripcion: "Ayuda por favor"
        },
        gal: {
            titulo: "3.0 Help me please",
            descripcion: "Help me please"
        }
    },
];

// Datos comunes
const elementosComunes = [
    {
        idioma: "es",
        sobreNosotros: "Sobre Nosotros",
        videoBoton: "Video",
        reproducirBoton: "Reproducir",
        play: "▶"
    },
    {
        idioma: "gal",
        sobreNosotros: "Sobre Nos",
        videoBoton: "Video.",
        reproducirBoton: "Reproducir",
        play: "▶"
    },
];

// Función para obtener los elementos según el idioma
function obtenerElementosPorIdioma(idioma) {
    const idiomaElementos = elementosComunes.find(e => e.idioma === idioma);
    if (!idiomaElementos) {
        console.error(`Idioma '${idioma}' no encontrado en elementosComunes.`);
        return null;
    }
    return idiomaElementos;
}

// Variables globales
let idiomaWeb = "es";
let episodioMarcado = 1;
const elementosIdioma = obtenerElementosPorIdioma(idiomaWeb);
document.documentElement.lang = idiomaWeb;

document.addEventListener('DOMContentLoaded', () => {
    cambiarImagenFondo();
    seleccionarEpisodio(episodioMarcado);
});

// Función para cambiar el título
function cambiarTitulo(titulo) {
    const tituloElement = document.getElementById("pod_titulo");
    tituloElement.innerHTML = titulo;
}

// Función para cambiar la descripción
function cambiarDescripcion(descripcion) {
    const descripcionElement = document.getElementById("pod_description");
    descripcionElement.innerHTML = descripcion;
}

// Función para seleccionar un episodio
function seleccionarEpisodio(episodioId) {
    const episodio = episodios.find(e => e.id === parseInt(episodioId));
    if (!episodio) {
        console.error("Episodio no encontrado:", episodioId);
        return;
    }


    document.body.style.background = `url('${episodio.imagen}') center/cover no-repeat`;

    if (idiomaWeb === "es") {
        cambiarTitulo(episodio.es.titulo);
        cambiarDescripcion(episodio.es.descripcion);
    } else {
        cambiarTitulo(episodio.gal.titulo);
        cambiarDescripcion(episodio.gal.descripcion);
    }
}

// Función para cambiar el idioma
function cambiarIdioma(idioma) {
    idiomaWeb = idioma;
    document.documentElement.lang = idiomaWeb;
    console.log(idiomaWeb + " seleccionado");

    // Actualizar elementos del idioma
    const idiomaElementos = obtenerElementosPorIdioma(idiomaWeb);
    if (!idiomaElementos) return;

    seleccionarEpisodio(episodioMarcado);

    const sobreNosotrosElement = document.getElementById("sobreNosotros");
    const videoBotonElement = document.getElementById("videoBoton");
    const reproducirBotonElement = document.getElementById("reproducirBoton");

    sobreNosotrosElement.innerHTML = idiomaElementos.sobreNosotros;
    videoBotonElement.innerHTML = idiomaElementos.videoBoton;
    reproducirBotonElement.innerHTML = idiomaElementos.reproducirBoton;
}

// Función para cambiar el fondo al pasar el mouse sobre una imagen
function cambiarImagenFondo() {
    const images = document.querySelectorAll('.episodios img');

    images.forEach(image => {
        image.addEventListener('mouseenter', () => {
            const numEpisodio = parseInt(image.id);
            console.log("Mouse enter en episodio:", numEpisodio);
            seleccionarEpisodio(numEpisodio); 
        });

        image.addEventListener('mouseleave', () => {
            console.log("Mouse leave, restaurando episodio marcado:", episodioMarcado);
            seleccionarEpisodio(episodioMarcado); 
        });

        image.addEventListener('click', () => {
            const numEpisodio = parseInt(image.id);
            console.log("Clic en episodio:", numEpisodio);
            episodioMarcado = numEpisodio; 
            seleccionarEpisodio(numEpisodio); 
        });
    });
}