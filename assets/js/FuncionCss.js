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

const contenidos = [
    document.querySelector('#rvirtual-contenedor-1'),
    document.querySelector('#rvirtual-contenedor-2'),
    document.querySelector('#rvirtual-contenedor-3'),
    document.querySelector('#rvirtual-contenedor-4')
];

const aumentadas = [
    document.querySelector('#raumentada-contenedor-1'),
    document.querySelector('#raumentada-contenedor-2'),
    document.querySelector('#raumentada-contenedor-3'),
    document.querySelector('#raumentada-contenedor-4')
];

const mixtas = [
    document.querySelector('#rmixta-contenedor-1'),
    document.querySelector('#rmixta-contenedor-2'),
    document.querySelector('#rmixta-contenedor-3'),
    document.querySelector('#rmixta-contenedor-4')
];

// const flechaIzquierda = document.getElementById('flecha-izquierda');
// const flechaDerecha = document.getElementById('flecha-derecha');

let currentIndex = 0;

function updateLabels() {
    etiquetas.forEach((etiqueta, index) => {
        etiqueta.style.display = (index === currentIndex) ? '' : 'none';
    });
    titulos.forEach((titulo, index) => {
        titulo.style.display = (index === currentIndex) ? '' : 'none';
    });
    contenidos.forEach((contenido, index) => {
        contenido.style.display = (index === currentIndex) ? '' : 'none';
    });
    aumentadas.forEach((aumentada, index) => {
        aumentada.style.display = (index === currentIndex) ? '' : 'none';
    });
    mixtas.forEach((mixta, index) => {
        mixta.style.display = (index === currentIndex) ? '' : 'none';
    });
}

// flechaDerecha.addEventListener('click', () => {
//     if (currentIndex < etiquetas.length - 1) {
//         fila.scrollLeft += fila.offsetWidth;
//         currentIndex++;
//         updateLabels();
//     }

//     const indicadorActivo = document.querySelector('.roadmap-rayas .activo');
//     if (indicadorActivo && indicadorActivo.nextElementSibling) {
//         console.log('entra en el if')
//         console.log(indicadorActivo.nextElementSibling)
//         console.log(indicadorActivo)
//         indicadorActivo.nextElementSibling.classList.add('activo');
//         // indicadorActivo = document.querySelector('.roadmap-rayas .botones-rayas');
//         // console.log(indicadorActivo)
//         indicadorActivo.classList.remove('activo');
//         // indicadorActivo.previousElementSibling.classList.add('activo');
//         // indicadorActivo.previousElementSibling.classList.add('activo');
//     } else {
//         console.log('paso al else')
//         indicadorActivo.nextElementSibling.classList.add('activo');
//     }
// });

// flechaIzquierda.addEventListener('click', () => {
    // if (currentIndex > 0) {
    //     fila.scrollLeft -= fila.offsetWidth;
    //     currentIndex--;
    //     updateLabels();
    // }

//     const indicadorActivo = document.querySelector('.roadmap-rayas .activo');
//     if (indicadorActivo && indicadorActivo.previousElementSibling) {
//         console.log(indicadorActivo.previousElementSibling)
//         indicadorActivo.previousElementSibling.classList.add('activo');
//         indicadorActivo.classList.remove('activo');
//     }
// });


// ----------------- indicador y contador de paginas

// const numeroPaginas = Math.ceil(peliculas.length / 1);
// for (let i = 0; i < numeroPaginas; i++) {
//     const indicador = document.createElement('button');
//     indicador.className = "botones-rayas";
//     if (i === 0) {
//         indicador.classList.add('activo');
//     }
//     document.querySelector('.roadmap-rayas').appendChild(indicador);
//     indicador.addEventListener('click', (e) => {
//         fila.scrollLeft = i * fila.offsetWidth;
//         document.querySelector('.roadmap-rayas .activo').classList.remove('activo');
//         e.target.classList.add('activo');
//     })
// }

// cambiar las clases 
document.querySelectorAll('.carrusel').forEach(carrusel => {
    // const fila = carrusel.querySelector('.roadmap-cards');
    // const tarjetas = carrusel.querySelectorAll('.roadmap-card');
    const flechaIzquierda = carrusel.querySelector('.flechas-izquierdas');
    const flechaDerecha = carrusel.querySelector('.flechas-derechas');
    const indicadores = carrusel.querySelector('.roadmap-rayas');
    const fila = carrusel.querySelector('.roadmap-contenedor-carrusel');
    const peliculas = carrusel.querySelectorAll('.roadmap-img');

    flechaDerecha.addEventListener('click', () => {
        console.log("Clic en la flecha derecha");
        fila.scrollLeft += fila.offsetWidth;
        currentIndex++;
        updateLabels();
        const indicadorActivo = indicadores.querySelector('.activo');
        if (indicadorActivo && indicadorActivo.nextSibling) {
            indicadorActivo.nextSibling.classList.add('activo');
            indicadorActivo.classList.remove('activo');
        }
    });

    flechaIzquierda.addEventListener('click', () => {
        console.log("Clic en la flecha izquierda");
        fila.scrollLeft -= fila.offsetWidth;
        currentIndex--;
        updateLabels();
        const indicadorActivo = indicadores.querySelector('.activo');
        if (indicadorActivo && indicadorActivo.previousSibling) {
            indicadorActivo.previousSibling.classList.add('activo');
            indicadorActivo.classList.remove('activo');
        }
    });

    // Indicadores
    const numeroPaginas = Math.ceil(peliculas.length / 1);
    for (let i = 0; i < numeroPaginas; i++) {
        const indicador = document.createElement('button');
        indicador.className = "botones-rayas";
        console.log('Creando indicador para carrusel:', i);
        if (i === 0) {
            indicador.classList.add('activo');
        }
        indicadores.appendChild(indicador);
        indicador.addEventListener('click', (e) => {
            fila.scrollLeft = i * fila.offsetWidth;
            document.querySelector('.roadmap-rayas .activo').classList.remove('activo');
            indicadores.querySelector('.activo').classList.remove('activo');
            e.target.classList.add('activo');
        });
    }
});


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

