
function cambiarImagenFondo() {
    const images = document.querySelectorAll('.episodios img');
    console.log(images);
        images.forEach(image => {
            image.addEventListener('mouseenter', () => {
                const newBackground = image.getAttribute('data-background');
                document.body.style.background = `url('${newBackground}') center/cover no-repeat`;
            });
            //DESCOMENTAR CODIGO DEBAJO PARA QUE EL FONDO VUELVA AL DEL EPISODIO 1 CUANDO EL RATON YA NO ESTA ENCIMA DE LA PORTADA DEL EPISODIO
            // image.addEventListener('mouseleave', () => {
            //     document.body.style.background = "url('../img/diseñoWebDegradado.png') center/cover no-repeat";
            // });
        });
}

cambiarImagenFondo();
