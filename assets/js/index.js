import THREE from './three';
import { gsap } from "gsap";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import camera from './Camera';
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
scene.add(gridHelper)


// implementar los cambios a la hora dell redimensionamiento de la pantalla 
// Asegúrate de que el raycaster se actualice cuando se redimensiona la ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Controles para hacer zoom, girar el objeto y moverlo con la camara
// let controls = new OrbitControls(camera, renderer.domElement);
// controls.minDistance = 3;
// controls.maxDistance = 20;


// PRUEBA CARGAR MODELO 3D
let modelo = new GLTFLoader();
modelo.load(
	// resource URL
	'assets/GLTF/AlveaPruebaGLTF.gltf',
	// called when the resource is loaded
	function ( gltf ) {

		scene.add( gltf.scene );

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);


// ajustes en el renderizador de la imagen para el fondo en 4k
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.6;
renderer.outputEncoding = THREE.sRGBEncodig;

let controles = new PointerLockControls(camera, renderer.domElement);

let xdir = 0, zdir = 0
let salto = false, vi, yi, t, ti

document.onclick = ()=> {
    controles.lock();
}

document.addEventListener('keydown', (e)=>{
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
        case 83:
            if (!salto) ti = Date.now();
            salto = true;
            break;
    }
})

document.addEventListener('keyup', (e)=>{
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

yi = 1.8324140151651995;
vi = 6;


function animate() {

    requestAnimationFrame( animate );
    
    
    if(controles.isLocked === true){
        tiempoF = Date.now()
        
        delta = (tiempoF - tiempoI)/1000
        
        let xDis = xdir * vel * delta
        let zDis = zdir * vel * delta

        if (salto) {
            t = ((Date.now() - ti) / 1000) * 2;
            let yDis = yi + (vi * t) - (0.5 * 9.8 * Math.pow(t, 2));
            if(yDis <= yi) salto = false;
            camera.position.y = yDis;
        }

        controles.moveRight(xDis)
        controles.moveForward(zDis)
        
        tiempoI = tiempoF
    }

    renderer.render( scene, camera );
}

animate()

