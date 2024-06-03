// ----------- movimiento del carrusel y flechas

const fila = document.querySelector('.contenedor-carrusel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
    const indicadorActivo = document.querySelector('.roadmap-rayas .activo');
    if (indicadorActivo.nextSibling) {
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
    const indicadorActivo = document.querySelector('.roadmap-rayas .activo');
    if (indicadorActivo.previousSibling) {
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});


// ----------------- indicador y contador de paginas

const numeroPaginas = Math.ceil(peliculas.length / 1);
for (let i = 0; i < numeroPaginas; i++) {
    const indicador = document.createElement('button');
    if (i === 0) {
        indicador.classList.add('activo');
    }
    document.querySelector('.roadmap-rayas').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;
        document.querySelector('.roadmap-rayas .activo').classList.remove('activo');
        e.target.classList.add('activo');
    })
}