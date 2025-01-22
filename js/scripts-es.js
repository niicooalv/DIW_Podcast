// Datos de episodios
const episodios = [
    {
        id: 1,
        imagen: "../img/diseñoWebDegradado.png",
        titulo: "Episodio 1: CSS Moderno",
        descripcion: "Acompañanos el estreno de nuestro podcast sobre css moderno",
        disponible: true
    },
    {
        id: 2,
        imagen: "../img/javascriptDegradado.png",
        titulo: "Episodio 2: Descubriendo JS",
        descripcion: "No disponible, estreno proximamente",
        disponible: false
    },
    {
        id: 3,
        imagen: "../img/htmlDegradado.png",
        titulo: "Episodio 3: HTML5",
        descripcion: "No disponible, estreno proximamente",
        disponible: false
    }
];


// Variables globales
let episodioMarcado = 1;

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
    cambiarTitulo(episodio.titulo);
    cambiarDescripcion(episodio.descripcion);
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
