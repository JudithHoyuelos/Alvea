// ----------- movimiento del carrusel y flechas

const fila = document.querySelector('.roadmap-contenedor-carrusel');
const peliculas = document.querySelectorAll('.roadmap-img');
const etiquetas = [
    document.querySelector('#roadmap-etiqueta-1'),
    document.querySelector('#roadmap-etiqueta-2'),
    document.querySelector('#roadmap-etiqueta-3'),
    document.querySelector('#roadmap-etiqueta-4')
];
const titulos = [
    document.querySelector('#roadmap-titulo-1'),
    document.querySelector('#roadmap-titulo-2'),
    document.querySelector('#roadmap-titulo-3'),
    document.querySelector('#roadmap-titulo-4')
];

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

let currentIndex = 0;

function updateLabels() {
    etiquetas.forEach((etiqueta, index) => {
        etiqueta.style.display = (index === currentIndex) ? '' : 'none';
    });
    titulos.forEach((titulo, index) => {
        titulo.style.display = (index === currentIndex) ? '' : 'none';
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
        console.log('entra en el if')
        console.log(indicadorActivo.nextElementSibling)
        console.log(indicadorActivo)
        indicadorActivo.nextElementSibling.classList.add('activo');
        // indicadorActivo = document.querySelector('.roadmap-rayas .botones-rayas');
        // console.log(indicadorActivo)
        indicadorActivo.classList.remove('activo');
        // indicadorActivo.previousElementSibling.classList.add('activo');
        // indicadorActivo.previousElementSibling.classList.add('activo');
    } else {
        console.log('paso al else')
        indicadorActivo.nextElementSibling.classList.add('activo');
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
        console.log(indicadorActivo.previousElementSibling)
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

// slider

document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.mySwiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: false,
        coverflowEffect: {
            depth: 500,
            modifier: 1,
            slideShadows: true,
            rotate: 0,
            stretch: 0
        }
    });
    const flechaIzquierdaEquipo = document.querySelector('.flecha-izquierda');
    const flechaDerechaEquipo = document.querySelector('.flecha-derecha');
    
    flechaDerechaEquipo.addEventListener('click', () => {
        swiper.slideNext();
    });
    
    flechaIzquierdaEquipo.addEventListener('click', () => {
        swiper.slidePrev();
    });
});

