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

// TECNOLOGIAS

// primera parte de los titulos navegacion
const contenedorTitulosGrandes = document.querySelector('.rextendida-titulos');
const recuadroTitulosPequeños = document.querySelector('.rextendida-explicacion');
const rextendidaConcepto = [
    document.querySelector('#explicacion-extendida-rv'),
    document.querySelector('#explicacion-extendida-ar'),
    document.querySelector('#explicacion-extendida-mr')   
]
const titulosGrandes = [
    document.querySelector('#titulo-rv'),
    document.querySelector('#titulo-ar'),
    document.querySelector('#titulo-mr')
]

// segunda parte de los titulos navegacion
const rextendidaExplicaciones = [
    document.querySelector('.explicacion-rv'),
    document.querySelector('.explicacion-ar'),
    document.querySelector('.explicacion-mr')   
]
const titulosPequeños = [
    document.querySelector('#explicacion-rv'),
    document.querySelector('#explicacion-ar'),
    document.querySelector('#explicacion-mr')
]

// Oculta todos los conceptos extendidos al principio
// rextendidaConcepto.forEach(concepto => concepto.style.display = 'none');

// Oculta todos los conceptos extendidos al principio si existen
rextendidaConcepto.forEach(concepto => {
    if (concepto) {
        concepto.style.display = 'none';
    }
});

// Function to hide all rextendidaExplicaciones
function hideAllExplicaciones() {
    rextendidaExplicaciones.forEach(explicacion => {
        if(explicacion){
            explicacion.style.display = 'none';
        }
    });
}

// Function to reset styles of all titulosPequeños
function resetStyles() {
    titulosPequeños.forEach(titulo => {
        // Remove inline styles applied for hover effect
        titulo.style.color = '';
        // titulo.style.backgroundColor = '';
        // Reset any other hover styles here
    });
}

// Function to apply hover styles to a specific tituloPequeño
function applyHoverStyles(titulo, index) {
    // Define hover styles for each tituloPequeño based on their index or ID
    switch (index) {
        case 0:
            titulo.style.color = '#C21AD6'; // Replace with actual color
            // titulo.style.backgroundColor = '#bgColor1'; // Replace with actual background color
            break;
        case 1:
            titulo.style.color = 'rgb(229 0 133)';
            // titulo.style.backgroundColor = '#bgColor2';
            break;
        case 2:
            titulo.style.color = '#727DEF';
            // titulo.style.backgroundColor = '#bgColor3';
            break;
        // Add more cases if needed
    }
}

// Add event listeners to each tituloGrande
titulosGrandes.forEach((titulo, index) => {
    titulo.addEventListener('click', () => {
        // Ocultar el contenedor de títulos grandes
        contenedorTitulosGrandes.style.display = 'none';

        // Mostrar recuadro con los titulos pequeños
        recuadroTitulosPequeños.style.display = '';

        // Mostrar el concepto extendido correspondiente
        rextendidaConcepto[index].style.display = '';

        // Mostrar el contenedor de explicaciones correspondiente
        hideAllExplicaciones();
        rextendidaExplicaciones[index].style.display = '';

        // Cambiar el color del título pequeño correspondiente
        resetStyles();
        applyHoverStyles(titulosPequeños[index], index);
    });
});

// Add event listeners to each tituloPequeño
titulosPequeños.forEach((titulo, index) => {
    titulo.addEventListener('click', () => {
        // Hide all explicaciones
        hideAllExplicaciones();
        // Show the corresponding explicacion
        rextendidaExplicaciones[index].style.display = '';

        // Cambiar el color del título pequeño correspondiente
        resetStyles();
        applyHoverStyles(titulo, index);
    });
});


// segunda parte de los titulos navegacion

const rv = document.querySelector('.rv');
const contenedorRV = document.querySelector('#ex-rv2');

rv.addEventListener('click', () => {
    const computedStyle = window.getComputedStyle(contenedorRV);
    // const computedStyleAplicaciones = window.getComputedStyle(aplicaciones);

    // Mostrar los punto
    if (computedStyle.display === 'none') {
        contenedorRV.style.display = '';
        // aplicaciones.style.display = 'none';
    } else {
        // Ocultar los puntos
        contenedorRV.style.display = 'none';
    }
});

const ar = document.querySelector('.ar');
const contenedorAR = document.querySelector('#ex-ar2');

ar.addEventListener('click', () => {
    const computedStyle = window.getComputedStyle(contenedorAR);
    // const computedStyleAplicaciones = window.getComputedStyle(aplicaciones);

    // Mostrar los punto
    if (computedStyle.display === 'none') {
        contenedorAR.style.display = '';
        // aplicaciones.style.display = 'none';
    } else {
        // Ocultar los puntos
        contenedorAR.style.display = 'none';
    }
});

const rm = document.querySelector('.rm');
const contenedorRM = document.querySelector('#ex-rm2');

rm.addEventListener('click', () => {
    const computedStyle = window.getComputedStyle(contenedorRM);
    // const computedStyleAplicaciones = window.getComputedStyle(aplicaciones);

    // Mostrar los punto
    if (computedStyle.display === 'none') {
        contenedorRM.style.display = '';
        // aplicaciones.style.display = 'none';
    } else {
        // Ocultar los puntos
        contenedorRM.style.display = 'none';
    }
});

// ventajas 
const ventaja = document.querySelectorAll('.ventaja');
const ventajas = document.querySelectorAll('.ventajas');
console.log(ventaja)
console.log(ventajas)

// aplicaciones
const aplicacion = document.querySelectorAll('.aplicacion');
const aplicaciones = document.querySelectorAll('.aplicaciones');
console.log(aplicacion)
console.log(aplicaciones)
// ventaja.addEventListener('click', () => {
//     const computedStyle = window.getComputedStyle(ventajas);
//     const computedStyleAplicaciones = window.getComputedStyle(aplicaciones);

//     // Mostrar ventajas
//     if (computedStyle.display === 'none') {
//         ventajas.style.display = '';
//         aplicaciones.style.display = 'none';
//     } else {
//         // Ocultar ventajas
//         ventajas.style.display = 'none';
//     }
// });

// aplicacion.addEventListener('click', () => {
//     const computedStyle = window.getComputedStyle(aplicaciones);
//     const computedStyleVentajas = window.getComputedStyle(ventajas);

//     // Mostrar ventajas
//     if (computedStyle.display === 'none') {
//         aplicaciones.style.display = '';
//         ventajas.style.display = 'none';
//     } else {
//         // Ocultar ventajas
//         aplicaciones.style.display = 'none';
//     }
// });

// Función para mostrar/ocultar ventajas
function toggleDisplay(elementToShow, elementToHide) {
    const computedStyleToShow = window.getComputedStyle(elementToShow);
    const computedStyleToHide = window.getComputedStyle(elementToHide);

    console.log('Toggling display: ', elementToShow, elementToHide);

    // Mostrar el elemento si está oculto y ocultar el otro elemento
    if (computedStyleToShow.display === 'none') {
        elementToShow.style.display = '';
        elementToHide.style.display = 'none';
    } else {
        // Ocultar el elemento si está visible
        elementToShow.style.display = 'none';
    }
}

// Agrega event listeners a todos los elementos de ventajas
ventaja.forEach((ventaja, index) => {
    console.log('Adding event listener to ventaja:', index);
    ventaja.addEventListener('click', () => {
        console.log('Ventaja clicked: ', index);
        toggleDisplay(ventajas[index], aplicaciones[index]);
    });
});

// Agrega event listeners a todos los elementos de aplicaciones
aplicacion.forEach((aplicacion, index) => {
    console.log('Adding event listener to aplicacion:', index);
    aplicacion.addEventListener('click', () => {
        console.log('Aplicacion clicked: ', index);
        toggleDisplay(aplicaciones[index], ventajas[index]);
    });
});