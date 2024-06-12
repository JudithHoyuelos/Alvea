import THREE from './three';
import { gsap } from "gsap";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import camera from './Camera2';
import renderer from './Render';
import scene from './Screen';
import lights from './Luzambiental';
import gridHelper from './Plane';

// Fondo con imagen 
var loader = new THREE.TextureLoader();

// scene.background = "assets/img/istockphoto-1303973122-170667a.jpg";

loader.load("assets/img/istockphoto-1303973122-170667a.jpg", function (texture) {
    scene.background = texture;
});


scene.background = new THREE.Color("black");
scene.add(lights);
scene.add(gridHelper);


// implementar los cambios a la hora del redimensionamiento de la pantalla 
// Asegúrate de que el raycaster se actualice cuando se redimensiona la ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Controles para hacer zoom, girar el objeto y moverlo con la camara
// const controls = new OrbitControls(camera, renderer.domElement);
// controls.minDistance = 3;
// controls.maxDistance = 20;
// controls.enableDamping=true;
// controls.enablePan = false;
// controls.minPolarAngle = 0.5;
// controls.maxPolarAngle = 1.5;
// controls.autoRotate = false;
// controls.target.set(2, 1, 0);
// controls.update();

const menu = document.querySelector("#icono-menu-lateral");
const exit = document.querySelector("#exit");
const div = document.querySelector("#desplegable");
const logo = document.querySelector('#inicio');
const menuHorizontal = document.querySelector('#menu-horizontal');

// Añadir evento al botón del menú
menu.addEventListener('click', onClickMenu);

// Añadir evento al botón de salida
exit.addEventListener('click', onClickExit);

// Evento para cerrar el menú al hacer clic en cualquier parte de la página
document.addEventListener('click', (e) => {
    if (div.style.display === '' && !div.contains(e.target) && e.target !== menu) {
        div.style.display = 'none';
        menu.style.display = '';
    }
});

// Función para abrir el menú
function onClickMenu(e) {
    // e.stopPropagation(); // Evitar que el evento se propague y cierre el menú inmediatamente
    div.style.display = '';
    menu.style.display = 'none';
}

// Función para cerrar el menú
function onClickExit(e) {
    // e.stopPropagation(); // Evitar que el evento se propague y vuelva a abrir el menú
    div.style.display = 'none';
    menu.style.display = '';
}

// Almacena las posiciones iniciales de los puntos
const posicionesIniciales = {
    // punto5: {left: 768, top: 225},
    // punto6: {left: 565, top: 307},
    // punto7: {left: 867, top: 367},
    // punto8: {left: 768, top: 267},
    // punto9: {left: 846, top: 502},
    // punto10: {left: 1030, top: 226},
    // punto11: {left: 904, top: 464},
    // punto12: {left: 1002, top: 444},
    // punto13: {left: 1112, top: 519}
};

// Función para almacenar las posiciones iniciales
function almacenarPosicionesInicialesSiNecesario(puntos) {
    Object.entries(puntos).forEach(([idPunto, elementoPunto]) => {
        const rect = elementoPunto.getBoundingClientRect();
        if (!posicionesIniciales[idPunto] && rect.left !== 0 && rect.top !== 0) {
            posicionesIniciales[idPunto] = {
                left: rect.left,
                top: rect.top,
            };
        }
    });
}

// Función para mover los puntos a la izquierda
function moverPuntosALaIzquierda(puntos, distancia) {
    Object.entries(puntos).forEach(([idPunto, elementoPunto]) => {
        const posicionInicial = posicionesIniciales[idPunto];
        if (posicionInicial) {
            elementoPunto.style.transform = `translateX(-${distancia}px)`
        }
    });
}

// Función para restablecer los puntos a sus posiciones iniciales
function restablecerPuntos(puntos) {
    Object.entries(puntos).forEach(([idPunto, elementoPunto]) => {
        const posicionInicial = posicionesIniciales[idPunto];
        if (posicionInicial) {
            elementoPunto.style.transform = ''; // Resetea la transformación
            console.log(elementoPunto.style.transform = '')
            elementoPunto.style.left = `${posicionInicial.left}px`;
            elementoPunto.style.top = `${posicionInicial.top}px`;
        }
    });
}

function onClickExitModal(e) {
    const div = document.querySelector("#modal");
    const divMenu = document.querySelector("#menu-lateral");
    const points = {
        punto5: document.querySelector("#punto5"),
        punto6: document.querySelector("#punto6"),
        punto7: document.querySelector("#punto7"),
        punto8: document.querySelector("#punto8"),
        punto9: document.querySelector("#punto9"),
        punto10: document.querySelector("#punto10"),
        punto11: document.querySelector("#punto11"),
        punto12: document.querySelector("#punto12"),
        punto13: document.querySelector("#punto13")
    };

    div.style.display = 'none';
    divMenu.style.display = '';
    logo.style.left = '43%';
    menuHorizontal.style.left = '40%';

    // Restablecer los puntos a sus posiciones iniciales
    console.log(points)
    restablecerPuntos(points);
}

function onClickUseCase(e) {
    console.log('se ha hecho click en el use case');
    const casoUso = document.querySelector(".useCase-titulo");
    const div = document.querySelector(".useCase");
    casoUso.style.display = 'none';
    div.style.display = '';
}

// PRUEBA CARGAR MODELO 3D
let modelo = new GLTFLoader();
modelo.load(
    // resource URL
    'assets/mitadAlvea/AlveaSinMatIlu.glb',
    // 'assets/mitadAlvea/Alvea.glb',
    // 'assets/GLTF/AlveaPruebaGLTF.gltf',
    // called when the resource is loaded
    function (gltf) {

        scene.add(gltf.scene);
        console.log('Modelo cargado correctamente.');

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object

    },
    // called while loading is progressing
    function (xhr) {

        console.log((xhr.loaded / xhr.total * 100) + '% loaded');

    },
    // called when loading has errors
    function (error) {

        console.log('An error happened', error);

    }
);

function onClickHotpoint(element) {
    // Obtén todas las referencias a los elementos de puntos y modales
    const points = {
        punto5: document.querySelector("#punto5"),
        punto6: document.querySelector("#punto6"),
        punto7: document.querySelector("#punto7"),
        punto8: document.querySelector("#punto8"),
        punto9: document.querySelector("#punto9"),
        punto10: document.querySelector("#punto10"),
        punto11: document.querySelector("#punto11"),
        punto12: document.querySelector("#punto12"),
        punto13: document.querySelector("#punto13"),
    };

    const modals = {
        info5: document.querySelector("#info5"),
        info6: document.querySelector("#info6"),
        info7: document.querySelector("#info7"),
        info8: document.querySelector("#info8"),
        info9: document.querySelector("#info9"),
        info10: document.querySelector("#info10"),
        info11: document.querySelector("#info11"),
        info12: document.querySelector("#info12"),
        info13: document.querySelector("#info13"),
    };

    
    const menu = document.querySelector("#menu-lateral");
    const modal = document.querySelector("#modal");
    const exit = document.querySelector("#exitModal"); // Asegúrate de que este selector es correcto
    
    // Almacenar la posisciones iniciales de los puntos
    almacenarPosicionesInicialesSiNecesario(points);

    console.log(posicionesIniciales)

    // Oculta el menú y muestra el modal contenedor
    menu.style.display = 'none';
    modal.style.display = '';

    // Oculta todos los modales
    Object.values(modals).forEach(m => m.style.display = 'none');

    // Muestra el modal correspondiente al punto clicado
    Object.entries(points).forEach(([pointId, pointElement]) => {
        if (element === pointElement) {
            const modalId = `info${pointId.replace('punto', '')}`;
            modals[modalId].style.display = '';
            if (logo) logo.style.left = '30%';
            if (menuHorizontal) menuHorizontal.style.left = '30%';
            
            // Mueve los puntos a la izquierda
            const distanciaMovimiento = 300; // Ajusta esta distancia según sea necesario
            moverPuntosALaIzquierda(points, distanciaMovimiento);
        }
    });

    // Añade evento para cerrar el modal
    exit.addEventListener('click', onClickExitModal);
}

// Función para mover la cámara al inicio y que aparezcan los puntos del inicio
function onClickLogo(x, y, z, lookAtX, lookAtY, lookAtZ, initialPoints) {
    return function(event) {
        const arriba = document.querySelector("#useCase");
        const logo = document.querySelector('#inicio');
        const useCase = document.querySelector(".useCase");
        const casoUso = document.querySelector(".useCase-titulo");

        if (currentPoints[0] == arriba) {
            arriba.style.display = 'none';
            useCase.style.display = 'none';
            casoUso.style.display = '';
        } else {
            // Ocultar los puntos antiguos antes de mover la cámara
            currentPoints.forEach(point => {
                if (point.element) {
                    point.element.style.display = 'none';
                }
            });
        }

        gsap.to(camera.position, {
            duration: 2,
            x: x,
            y: y,
            z: z,
            onUpdate: function () {
                camera.lookAt(lookAtX, lookAtY, lookAtZ);
            },
            onComplete: function() {
                // Mostrar los nuevos puntos después de que la cámara haya terminado de moverse
                initialPoints.forEach(point => {
                    if (point.element) {
                        point.element.style.display = '';
                    }
                });
                currentPoints = initialPoints; // Establecer los puntos iniciales como los puntos actuales
            }
        });
        if (logo) {
            logo.style.display = 'none';
        }
    }
}


// Registro global de los puntos actuales
let currentPoints = [];
let initialPoints = []; // Para mantener los puntos iniciales visibles

// Función para mover la cámara a una posición específica y ocultar los puntos
function onClick(x, y, z, lookAtX, lookAtY, lookAtZ, newPoints) {
    return function(event) {
        const logo = document.querySelector('#inicio');
        const arriba = document.querySelector("#useCase");
        
        // Ocultar los puntos actuales antes de mover la cámara
        if (currentPoints[0] == arriba) {
            console.log('modal desaparece');
            arriba.style.display = 'none';
        } else {
            // Ocultar los puntos antiguos antes de mover la cámara
            currentPoints.forEach(point => {
                if (point.element) {
                    point.element.style.display = 'none';
                }
            });
        }


        gsap.to(camera.position, {
            duration: 2,
            //-12.611046376873789
            x: x,
            y: y,
            z: z,
            onUpdate: function () {
                camera.lookAt(lookAtX, lookAtY, lookAtZ);
            },
            onComplete: function() {
                // Mostrar los nuevos puntos después de que la cámara haya terminado de moverse
                if (newPoints === arriba) {
                    arriba.style.display = '';
                    currentPoints = [arriba];
                    console.log(currentPoints)
                    arriba.addEventListener('click', onClickUseCase);
                    if (logo) {
                        logo.style.display = '';
                        logo.addEventListener('click', onClickLogo(-0.23324931851256903, 1.8324140151651975, 0.2862530684020239, 0, 1, -11, initialPoints));
                    }
                } else {
                    newPoints.forEach(point => {
                        if (point.element) {
                            point.element.style.display = '';
                            // Añadir evento de click para mostrar el modal
                            point.element.addEventListener('click', (e) => {
                                onClickHotpoint(point.element, point.info);
                            });
                        }
                    });
                    currentPoints = newPoints;
                    if (logo) {
                        logo.style.display = '';
                        logo.addEventListener('click', onClickLogo(-0.23324931851256903, 1.8324140151651975, 0.2862530684020239, 0, 1, -11, initialPoints));
                    }
                }
            }
        });
    };
}

function updateAnnotationPosition() {
    const modales = document.querySelector('#modales'); // Agrega esta línea para definir 'modales'

    // Helper function to update position
    function updatePosition(vector, selector) {
        vector.project(camera);
        vector.x = Math.round((0.5 + vector.x / 2) * window.innerWidth);
        vector.y = Math.round((0.5 - vector.y / 2) * window.innerHeight);
        const annotation = document.querySelector(selector);
        if (annotation) {
            annotation.style.top = `${vector.y}px`;
            annotation.style.left = `${vector.x}px`;
        }
        return { x: vector.x, y: vector.y, element: annotation };
    }

    // Add event listeners to an annotation
    function addAnnotationEvents(position, offsetX, offsetY, cameraX, cameraY, cameraZ, lookAtX, lookAtY, lookAtZ, oldPoints, newPoints) {
        if (position.element) {
            position.element.addEventListener('click', onClick(cameraX, cameraY, cameraZ, lookAtX, lookAtY, lookAtZ, oldPoints, newPoints));
            position.element.addEventListener("mouseover", (e) => {
                if (modales) {
                    modales.style.display = '';
                    modales.style.top = `${position.y + offsetY}px`;
                    modales.style.left = `${position.x + offsetX}px`;
                    console.log('aparece');
                } else {
                    console.log('no existe el modal');
                }
            });
            position.element.addEventListener("mouseout", (e) => {
                if (modales) {
                    modales.style.display = 'none';
                    console.log('desaparece');
                } else {
                    console.log('no existe el modal');
                }
            });
        } else {
            console.log('no existe');
        }
    }

    const position1 = updatePosition(new THREE.Vector3(0, -1, -11), '#punto1');
    const position2 = updatePosition(new THREE.Vector3(0, 3, -11), '#punto2');
    const position3 = updatePosition(new THREE.Vector3(-7, 1, -11), '#punto3');
    const position4 = updatePosition(new THREE.Vector3(7, 1, -11), '#punto4');

    const position5 = updatePosition(new THREE.Vector3(0, 4, -11), '#punto5');
    const position6 = updatePosition(new THREE.Vector3(-5, 2, -11), '#punto6');
    const position7 = updatePosition(new THREE.Vector3(2.5, 0.5, -11), '#punto7');

    const position8 = updatePosition(new THREE.Vector3(0, 3, -11), '#punto8');
    const position9 = updatePosition(new THREE.Vector3(2, -3, -11), '#punto9');
    const position10 = updatePosition(new THREE.Vector3(6.5, 4, -11), '#punto10');

    const position11 = updatePosition(new THREE.Vector3(3.5, -2, -11), '#punto11');
    const position12 = updatePosition(new THREE.Vector3(6, -1.5, -11), '#punto12');
    const position13 = updatePosition(new THREE.Vector3(9, -3.5, -11), '#punto13');

    // Array de posiciones para pasarlas a la función onClick
    initialPoints = [position1, position2, position3, position4]; // Guardar los puntos iniciales
    const newPositionsDerecha = [position8, position9, position10];
    const newPositionsIzquierda = [position5, position6, position7];
    const newPositionsAbajo = [position11, position12, position13];
    const arriba = document.querySelector("#useCase");
    
    // Add events to each annotation with their respective camera positions and lookAt positions
    addAnnotationEvents(position1, 39, -35, 0.6201922849652849, 1.8324140151651975, 2.5258305164814105, -6, 1, -4, newPositionsAbajo);
    addAnnotationEvents(position2, 39, -35, -0.06712472858464706, 1.8324140151651975, -7.752030493442582, 0, 1, -11, arriba); // Actualiza estos valores según sea necesario
    addAnnotationEvents(position3, 39, -35, -4.737092106867862, 1.8324140151651975, 0.07007195162038703, -9, 1, 0, newPositionsIzquierda); // Actualiza estos valores según sea necesario
    addAnnotationEvents(position4, 39, -35, 4.547513663373049, 1.8324140151651975, 3.9819783918301144, 10, 1, -1, newPositionsDerecha); // Actualiza estos valores según sea necesario

    //menu 
    const sobre = document.querySelector("#sobre");
    const soluciones = document.querySelector("#soluciones");
    const tecnologias = document.querySelector("#tecnologias");
    const experiencias = document.querySelector("#experiencias");
    sobre.addEventListener('click', onClick(4.547513663373049, 1.8324140151651975, 3.9819783918301144, 10, 1, -1, newPositionsDerecha));
    soluciones.addEventListener('click', onClick(-0.06712472858464706, 1.8324140151651975, -7.752030493442582, 0, 1, -11, arriba));
    tecnologias.addEventListener('click', onClick(0.6201922849652849, 1.8324140151651975, 2.5258305164814105, -6, 1, -4, newPositionsAbajo));
    experiencias.addEventListener('click', onClick(-4.737092106867862, 1.8324140151651975, 0.07007195162038703, -9, 1, 0, newPositionsIzquierda));

    currentPoints = initialPoints;
}

// Llama a la función para asegurarte de que los elementos DOM existen antes de actualizar
document.addEventListener('DOMContentLoaded', (event) => {
    updateAnnotationPosition();
});


// ajustes en el renderizador de la imagen para el fondo en 4k
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.6;
renderer.outputEncoding = THREE.sRGBEncodig;

let controles = new PointerLockControls(camera, renderer.domElement);

let xdir = 0, zdir = 0

// document.onclick = () => {
//     controles.lock();
// }

document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        case 37:
            xdir = -1
            break;
        case 38:
            zdir = 1
            break;
        case 39:
            xdir = 1
            break;
        case 40:
            zdir = -1
            break;
    }
})

document.addEventListener('keyup', (e) => {
    switch (e.keyCode) {
        case 37:
            xdir = 0
            break;
        case 38:
            zdir = 0
            break;
        case 39:
            xdir = 0
            break;
        case 40:
            zdir = 0
            break;
    }
})


let delta, tiempoI, tiempoF, vel

tiempoI = Date.now();

vel = 10;

function animate() {

    requestAnimationFrame(animate);


    if (controles.isLocked === true) {
        tiempoF = Date.now()

        delta = (tiempoF - tiempoI) / 1000

        let xDis = xdir * vel * delta
        let zDis = zdir * vel * delta

        console.log(camera.position);

        controles.moveRight(xDis)
        controles.moveForward(zDis)

        tiempoI = tiempoF
    }

    renderer.render(scene, camera);
}

animate()

