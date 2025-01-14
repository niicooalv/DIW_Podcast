
function cambiarImagenFondo(ruta) {
    const imagen = document.getElementById("miImagen");
    imagen.src = ruta;
}

function cambiarTitulo(titulo) { // cambiar titulo del podcast
    const tituloElement = document.getElementById("pod_titulo");
    tituloElement.innerHTML = titulo;

}

function cambiarDescripcion(descripcion) { //cambiar descripción del podcast
    const descriptionElement = document.getElementById("pod_description");
    descripcionElement.innerHTML = descripcion;
}

function seleccionarEpisodio(episodio) {
   // cambiarImagenFondo(`img/${episodio}.jpg`); // se puede usar "img/${episodio}.jpg" siendo la variable episodio igual a episodio + el numero
    cambiarImagenFondo(`img/episodio${episodio}.jpg`); // o usar identificar el episodio mediante un numero y usar "img/episodio${episodio}.jpg"
    
}