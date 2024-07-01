// ----------- movimiento del carrusel y flechas

const fila = document.querySelector('.roadmap-contenedor-carrusel');
const peliculas = document.querySelectorAll('.roadmap-img');
const etiquetas = [
    document.querySelector('#roadmap-etiqueta-1'),
    document.querySelector('#roadmap-etiqueta-2'),
    document.querySelector('#roadmap-etiqueta-3')
];
const titulos = [
    document.querySelector('#roadmap-titulo-1'),
    document.querySelector('#roadmap-titulo-2'),
    document.querySelector('#roadmap-titulo-3')
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

const fases = [
    document.querySelector('#fase1-1'),
    document.querySelector('#fase1-2'),
    document.querySelector('#fase1-3'),
    document.querySelector('#fase2-1'),
    document.querySelector('#fase2-2'),
    document.querySelector('#fase2-3'),
    document.querySelector('#fase3-1'),
    document.querySelector('#fase3-2'),
    document.querySelector('#fase3-3')
];

const titulosFases = [
    document.querySelector('#titulo-fase1-1'),
    document.querySelector('#titulo-fase1-2'),
    document.querySelector('#titulo-fase1-3'),
    document.querySelector('#titulo-fase2-1'),
    document.querySelector('#titulo-fase2-2'),
    document.querySelector('#titulo-fase2-3'),
    document.querySelector('#titulo-fase3-1'),
    document.querySelector('#titulo-fase3-2'),
    document.querySelector('#titulo-fase3-3')
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

// funcionamiento de las fases 
titulosFases.forEach((tituloFase, index) => {
    tituloFase.addEventListener('click', () => {
        const numeroFase = tituloFase.id.replace("titulo-fase", "");
        const fase = document.querySelector(`#fase${numeroFase}`);

        if (fase) {
            if (fase.style.display === 'none') {
                fase.style.display = '';
            } else {
                fase.style.display = 'none';
            }
        } else {
            console.error(`No se encontró la fase para el número: ${numeroFase}`);
        }
    });
});


// hover de los puntos 
const etiquetaPunto1 = document.querySelector('.etiquetaPunto1');

etiquetaPunto1.addEventListener('mouseenter', () => {
    etiquetaPunto1.src = './assets/img/roadMap/Bullet_Point_1_1.svg';
});

etiquetaPunto1.addEventListener('mouseleave', () => {
    etiquetaPunto1.src = './assets/img/roadMap/Bullet_Point_1_2.svg';
});

const etiquetaPunto2 = document.querySelector('.etiquetaPunto2');

etiquetaPunto2.addEventListener('mouseenter', () => {
    etiquetaPunto2.src = './assets/img/roadMap/Bullet_Point_2_1.svg';
});

etiquetaPunto2.addEventListener('mouseleave', () => {
    etiquetaPunto2.src = './assets/img/roadMap/Bullet_Point_2_2.svg';
});

const etiquetaPunto3 = document.querySelector('.etiquetaPunto3');

etiquetaPunto3.addEventListener('mouseenter', () => {
    etiquetaPunto3.src = './assets/img/roadMap/Bullet_Point_3_1.svg';
});

etiquetaPunto3.addEventListener('mouseleave', () => {
    etiquetaPunto3.src = './assets/img/roadMap/Bullet_Point_3_2.svg';
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

