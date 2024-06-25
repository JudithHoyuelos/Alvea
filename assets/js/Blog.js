const puntosIniciales = {
    punto1: document.querySelector("#puntos1"),
    punto2: document.querySelector("#puntos2"),
    punto3: document.querySelector("#puntos3"),
}

const puntosCierre = {
    puntoCierre1: document.querySelector("#cerrar1"),
    puntoCierre2: document.querySelector("#cerrar2"),
    puntoCierre3: document.querySelector("#cerrar3"),
}

const puntosSecundarios = {
    puntos1: document.querySelector("#blogPunto1"),
    puntos2: document.querySelector("#blogPunto2"),
    puntos3: document.querySelector("#blogPunto3"),
    puntos4: document.querySelector("#blogPunto4"),
    puntos5: document.querySelector("#blogPunto5"),
    puntos6: document.querySelector("#blogPunto6"),
    puntos7: document.querySelector("#blogPunto7"),
    puntos8: document.querySelector("#blogPunto8"),
    puntos9: document.querySelector("#blogPunto9"),
    puntos10: document.querySelector("#blogPunto10"),
    puntos11: document.querySelector("#blogPunto11"),
    puntos12: document.querySelector("#blogPunto12"),
    puntos13: document.querySelector("#blogPunto13"),
    puntos14: document.querySelector("#blogPunto14"),
    puntos15: document.querySelector("#blogPunto15"),
};

const entradas = {
    entrada1: document.querySelector("#entrada1"),
    entrada2: document.querySelector("#entrada2"),
    entrada3: document.querySelector("#entrada3"),
    entrada4: document.querySelector("#entrada4"),
    entrada5: document.querySelector("#entrada5"),
    entrada6: document.querySelector("#entrada6"),
    entrada7: document.querySelector("#entrada7"),
    entrada8: document.querySelector("#entrada8"),
    entrada9: document.querySelector("#entrada9"),
    entrada10: document.querySelector("#entrada10"),
    entrada11: document.querySelector("#entrada11"),
    entrada12: document.querySelector("#entrada12"),
    entrada13: document.querySelector("#entrada13"),
    entrada14: document.querySelector("#entrada14"),
    entrada15: document.querySelector("#entrada15"),
};

const mostrar = {
    abrir1: document.querySelector("#mostrar1"),
    abrir2: document.querySelector("#mostrar2"),
    abrir3: document.querySelector("#mostrar3"),
}

const ocultar = {
    cerrar1: document.querySelector("#ocultar1"),
    cerrar2: document.querySelector("#ocultar2"),
    cerrar3: document.querySelector("#ocultar3"),
}


// Agregar eventos de clic a los puntos iniciales
for (const [punto, elemento] of Object.entries(puntosIniciales)) {
    elemento.addEventListener('click', () => {
        const numeroBloque = punto.replace("punto", "");
        const bloque = document.querySelector(`#bloque${numeroBloque}`);
        const puntos = document.querySelector(`#puntos${numeroBloque}`);
        console.log(bloque)
        if (bloque) {
            bloque.style.display = '';
            puntos.style.display = 'none';
        }
    });
}

// Agregar eventos de clic a los puntos de cierre
for (const [punto, boton] of Object.entries(puntosCierre)) {
    boton.addEventListener('click', () => {
        // Extraemos el número del ID del botón de cerrar
        const numeroBloque = punto.replace("puntoCierre", "");
        // Construimos el ID del bloque correspondiente
        const bloque = document.querySelector(`#bloque${numeroBloque}`);
        // Construimos el ID del punto correspondiente
        const puntos = document.querySelector(`#puntos${numeroBloque}`);
        console.log(puntos);
        // Ocultamos el bloque correspondiente
        if (bloque) {
            bloque.style.display = 'none';
            puntos.style.display = '';
        }
    });
}

// Agregar eventos de clic a los puntos secundarios
for (const [punto, elemento] of Object.entries(puntosSecundarios)) {
    elemento.addEventListener('click', () => {
        const numeroBloque = punto.replace("puntos", "");
        const bloque = document.querySelector(`#entrada${numeroBloque}`);
        const puntos = document.querySelector(`#blogPunto${numeroBloque}`);
        // Ocultar todas las entradas visibles
        const todasLasEntradas = document.querySelectorAll('[id^="entrada"]');
        const todosLosPuntos = document.querySelectorAll('[id^="blogPunto"]');
        todasLasEntradas.forEach(entrada => entrada.style.display = 'none');
        todosLosPuntos.forEach(punto => punto.style.display = '');
        if (bloque && punto) {
            bloque.style.display = '';
            puntos.style.display = 'none';
        } else {
            console.error(`No se encontró el bloque o punto para el número: ${numeroBloque}`);
        }
    });
}

// Agregar eventos de clic a las entradas de los puntos
for (const [entrada, elemento] of Object.entries(entradas)) {
    elemento.addEventListener('click', () => {
        const numeroBloque = entrada.replace("entrada", "");
        const punto = document.querySelector(`#blogPunto${numeroBloque}`);
        const entradas = document.querySelector(`#entrada${numeroBloque}`);
        if (punto && entradas) {
            punto.style.display = '';
            entradas.style.display = 'none';
        } else {
            console.error(`No se encontró el bloque o punto para el número: ${numeroBloque}`);
        }
    });
}

// Agregar eventos de clic a la imagen de abrir
for (const [mostrarKey, mostrarEl] of Object.entries(mostrar)) {
    mostrarEl.addEventListener('click', () => {
        const id = mostrarKey.replace('abrir', '');
        const ocultarEl = ocultar[`cerrar${id}`];

        if (ocultarEl) {
            ocultarEl.style.display = '';
        }
        mostrarEl.style.display = 'none';

        const bloque = document.querySelector(`#bloque${id}`);
        // if (bloque == document.querySelector(`#bloque3`)) {
        //     console.log('bloque3')
        //     const puntoCierre = document.querySelector("#cerrar3");
        //     console.log(puntoCierre)
        //     puntoCierre.style.margin.top = "3rem";
        // }
        if (bloque) {
            const entradas = bloque.querySelectorAll('.blog-entradas');
            const puntos = bloque.querySelectorAll('.blog-puntos-secundarios');

            entradas.forEach(entrada => {
                entrada.style.display = '';
            });

            puntos.forEach(punto => {
                punto.style.display = 'none';
            });
        }
    });
}

// Agregar eventos de clic a la imagen de cerrar
for (const [ocultarKey, ocultarEl] of Object.entries(ocultar)) {
    ocultarEl.addEventListener('click', () => {
        const id = ocultarKey.replace('cerrar', '');
        const mostrarEl = mostrar[`abrir${id}`];

        if (mostrarEl) {
            mostrarEl.style.display = '';
        }
        ocultarEl.style.display = 'none';

        const bloque = document.querySelector(`#bloque${id}`);
        if (bloque) {
            const entradas = bloque.querySelectorAll('.blog-entradas');
            const puntos = bloque.querySelectorAll('.blog-puntos-secundarios');

            entradas.forEach(entrada => {
                entrada.style.display = 'none';
            });

            puntos.forEach(punto => {
                punto.style.display = '';
            });
        }
    });
}