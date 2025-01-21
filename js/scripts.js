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

// Función para obtener los elementos comunes y subtítulos del episodio según el idioma
function obtenerElementosPorIdioma(idioma, episodioId) {
    const idiomaElementos = elementosComunes.find(e => e.idioma === idioma);
    const episodio = episodios.find(e => e.id === parseInt(episodioId));

    if (!idiomaElementos) {
        console.error(`Idioma '${idioma}' no encontrado en elementosComunes.`);
        return null;
    }

    if (!episodio) {
        console.error(`Episodio con ID '${episodioId}' no encontrado.`);
        return null;
    }

    const subtitulosEpisodio = idioma === "es" ? episodio.es : episodio.gal;

    return {
        elementosComunes: idiomaElementos,
        subtitulosEpisodio: subtitulosEpisodio
    };
}

// Variables globales
let idiomaWeb = "es";
let episodioMarcado = 1;
document.documentElement.lang = idiomaWeb;

document.addEventListener('DOMContentLoaded', () => {
    cambiarImagenFondo();
    seleccionarEpisodio(episodioMarcado);
});

// Función para cambiar la descripción
function cambiarDescripcion(descripcion) {
    const descripcionElement = document.getElementById("pod_description");
    descripcionElement.innerHTML = descripcion;
}

// Función para cambiar el título
function cambiarTitulo(titulo) {
    const tituloElement = document.getElementById("pod_titulo");
    tituloElement.innerHTML = titulo;
}

// Función para seleccionar un episodio
function seleccionarEpisodio(episodioId) {
    const { elementosComunes, subtitulosEpisodio } = obtenerElementosPorIdioma(idiomaWeb, episodioId);
    if (!elementosComunes || !subtitulosEpisodio) return;

    document.body.style.background = `url('${episodios.find(e => e.id === episodioId).imagen}') center/cover no-repeat`;

    cambiarTitulo(subtitulosEpisodio.titulo);
    cambiarDescripcion(subtitulosEpisodio.descripcion);

    // Actualizar elementos comunes del idioma
    const sobreNosotrosElement = document.getElementById("sobreNosotros");
    const videoBotonElement = document.getElementById("videoBoton");
    const reproducirBotonElement = document.getElementById("reproducirBoton");

    sobreNosotrosElement.innerHTML = elementosComunes.sobreNosotros;
    videoBotonElement.innerHTML = elementosComunes.videoBoton;
    reproducirBotonElement.innerHTML = elementosComunes.reproducirBoton;
}

// Función para cambiar el idioma
function cambiarIdioma(idioma) {
    idiomaWeb = idioma;
    document.documentElement.lang = idiomaWeb;
    console.log(idiomaWeb + " seleccionado");

    // Actualizar elementos del idioma
    seleccionarEpisodio(episodioMarcado);
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
