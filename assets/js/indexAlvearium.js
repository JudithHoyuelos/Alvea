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


// implementar los cambios a la hora dell redimensionamiento de la pantalla 
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

const menu = document.querySelector("#menu");
menu.addEventListener('click', onClickMenu);
const exit = document.querySelector("#exit");
exit.addEventListener('click', onClickExit);

function onClickMenu(e) {
    const div = document.querySelector("#desplegable");
    div.style.display = '';
    menu.style.display = 'none';
}

function onClickExit(e) {
    const div = document.querySelector("#desplegable");
    div.style.display = 'none';
    menu.style.display = '';
}

function onClickExitModal(e) {
    const div = document.querySelector("#modal");
    div.style.display = 'none';
    menu.style.display = '';
}

// PRUEBA CARGAR MODELO 3D
let modelo = new GLTFLoader();
modelo.load(
    // resource URL
    'assets/GLTF/AlveaPruebaGLTF.gltf',
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

    const menu = document.querySelector("#menu");
    const modal = document.querySelector("#modal");
    const exit = document.querySelector("#exitModal"); // Asegúrate de que este selector es correcto

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

        if (currentPoints[0] == arriba) {
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
                    if (logo) {
                        logo.style.display = '';
                        logo.addEventListener('click', onClickLogo(1.5620123612353716, 1.8324140151651975, -12.611046376873789, 2, 1, 0, initialPoints));
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
                        logo.addEventListener('click', onClickLogo(1.5620123612353716, 1.8324140151651975, -12.611046376873789, 2, 1, 0, initialPoints));
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

    const position1 = updatePosition(new THREE.Vector3(2, -3, 3), '#punto1');
    const position2 = updatePosition(new THREE.Vector3(2, 3, 3), '#punto2');
    const position3 = updatePosition(new THREE.Vector3(12, 0, 3), '#punto3');
    const position4 = updatePosition(new THREE.Vector3(-8, 0, 3), '#punto4');

    const position5 = updatePosition(new THREE.Vector3(3, 4, 3), '#punto5');
    const position6 = updatePosition(new THREE.Vector3(8, 2, 3), '#punto6');
    const position7 = updatePosition(new THREE.Vector3(0, 0, 3), '#punto7');

    const position8 = updatePosition(new THREE.Vector3(13, 4, 3), '#punto8');
    const position9 = updatePosition(new THREE.Vector3(2, 5, 3), '#punto9');
    const position10 = updatePosition(new THREE.Vector3(1, -1.5, 3), '#punto10');

    const position11 = updatePosition(new THREE.Vector3(-4, -1.5, 3), '#punto11');
    const position12 = updatePosition(new THREE.Vector3(-7, -1.5, 3), '#punto12');
    const position13 = updatePosition(new THREE.Vector3(-15, -6, 3), '#punto13');

    // Array de posiciones para pasarlas a la función onClick
    initialPoints = [position1, position2, position3, position4]; // Guardar los puntos iniciales
    const newPositionsDerecha = [position5, position6, position7];
    const newPositionsIzquierda = [position8, position9, position10];
    const newPositionsAbajo = [position11, position12, position13];
    const arriba = document.querySelector("#useCase");
    
    // Add events to each annotation with their respective camera positions and lookAt positions
    addAnnotationEvents(position1, 39, -35, 2.3888577103551727, 1.8324140151651975, 2.704188278006996, -1, 1, 0, newPositionsAbajo);
    addAnnotationEvents(position2, 39, -35, 2.1163238507698527, 1.8324140151651975, 3.349330773199133, 2, 1, 6, arriba); // Actualiza estos valores según sea necesario
    addAnnotationEvents(position3, 39, -35, 7.238170413905775, 1.8324140151651975, -4.753328529998346, 10, 1, 0, newPositionsIzquierda); // Actualiza estos valores según sea necesario
    addAnnotationEvents(position4, 39, -35, -2.1208780253940085, 1.8324140151651953, -0.04582836480489122, -10, 1, 0, newPositionsDerecha); // Actualiza estos valores según sea necesario

    //menu 
    const sobre = document.querySelector("#sobre");
    const soluciones = document.querySelector("#soluciones");
    const tecnologias = document.querySelector("#tecnologias");
    const experiencias = document.querySelector("#experiencias");
    sobre.addEventListener('click', onClick(7.238170413905775, 1.8324140151651975, -4.753328529998346, 10, 1, 0, newPositionsIzquierda));
    soluciones.addEventListener('click', onClick(2.1163238507698527, 1.8324140151651975, 3.349330773199133, 2, 1, 6, arriba));
    tecnologias.addEventListener('click', onClick(2.3888577103551727, 1.8324140151651975, 2.704188278006996, -1, 1, 0, newPositionsAbajo));
    experiencias.addEventListener('click', onClick(-2.1208780253940085, 1.8324140151651953, -0.04582836480489122, -10, 1, 0, newPositionsDerecha));

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

