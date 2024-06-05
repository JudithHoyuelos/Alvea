// ----------- movimiento del carrusel y flechas

const fila = document.querySelector('.roadmap-contenedor-carrusel');
const peliculas = document.querySelectorAll('.roadmap-img');
const etiquetas = [
    document.querySelector('#roadmap-etiqueta-1'),
    document.querySelector('#roadmap-etiqueta-2'),
    document.querySelector('#roadmap-etiqueta-3'),
    document.querySelector('#roadmap-etiqueta-4')
];

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

let currentIndex = 0;

function updateLabels() {
    etiquetas.forEach((etiqueta, index) => {
        if (index === currentIndex) {
            etiqueta.style.display = '';
        } else {
            etiqueta.style.display = 'none';
        }
    });
}

flechaDerecha.addEventListener('click', () => {
    if (currentIndex < etiquetas.length - 1) {
        fila.scrollLeft += fila.offsetWidth;
        currentIndex++;
        updateLabels();
    }

    const indicadorActivo = document.querySelector('.roadmap-rayas .activo');
    if (indicadorActivo && indicadorActivo.nextElementSibling) {
        indicadorActivo.nextElementSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});

flechaIzquierda.addEventListener('click', () => {
    if (currentIndex > 0) {
        fila.scrollLeft -= fila.offsetWidth;
        currentIndex--;
        updateLabels();
    }

    const indicadorActivo = document.querySelector('.roadmap-rayas .activo');
    if (indicadorActivo && indicadorActivo.previousElementSibling) {
        indicadorActivo.previousElementSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});


// ----------------- indicador y contador de paginas

const numeroPaginas = Math.ceil(peliculas.length / 1);
for (let i = 0; i < numeroPaginas; i++) {
    const indicador = document.createElement('button');
    indicador.className = "botones-rayas";
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