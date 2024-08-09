import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module';
// const scene1=new THREE.Scene();
// const camera1=new THREE.Camera();
// const renderer1=new THREE.WebGLRenderer();
// Inicializa la escena
const scene = new THREE.Scene();

// Inicializa la cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Inicializa el renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crea un cubo
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Posiciona la cámara
camera.position.z = 5;
function lerp(x, y, a) {
    return (1 - a) * x + a * y;
}

function scalePercent(start, end) {
    return (scrollPercentage - start) / (end - start);
}

// Función de animación
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Llama a la función de animación
animate();
const number=1;
const numerb=0;
const timepoi=0;
const tiempof=3;
const t = 0.5;
const conte=easeInSine(t);
// Manejar el desplazamiento de la página
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollPosition / maxScroll;

    document.getElementById('scrollProgress').innerText = `Scroll Progress: ${(scrollPercentage * 100).toFixed(2)}%`;

    if (scrollPercentage < 0.25) {
        // Cambiar posición del cubo
        cube.position.y=lerp(0,5,scalePercent(0,0.25))
       
    } else if (scrollPercentage < 0.5) {
        // Cambiar rotación del cubo
        // const rotationPercentage= scalePercent(0.25,0.5)
        // cube.rotation.x = rotationPercentage * Math.PI * 2;
        // cube.rotation.y = rotationPercentage * Math.PI * 2;
        // camera.position.y=camera.position.y-1
        camera.position.z=camera.position.z-0.30
        if(scrollPercentage<0.4||0.3 ){
            // camera.position.x=camera.position.x+0.5
           
            camera.position.x=timepoi+conte+(tiempof-timepoi);
            camera.lookAt(cube);
            // && !(camera.position(1.3,0,1000000000000016))
            console.log(camera.position)
        
         }else if(camera.position==(1.3,0,1.1000000000000016)){
            camera.position.x=camera.position.x-0.1
         }
        //  else if(scrollPercentage<0.3){
        //     camera.position.x=camera.position.x-0.1
 
        // }
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

    } else if (scrollPercentage < 0.75) {
        // Cambiar posición de la cámara
        const cameraMovePercentage=scalePercent(0.5,0.75)
        camera.position.z=lerp(5,1,cameraMovePercentage) 
    } else {
        // Auto-rotación del cubo
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;
    }
});

// Actualizar el tamaño del renderizador y la cámara al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
});


function easeInSine(number) {
    return 1 - Math.cos((number * Math.PI) / 2);
  }
  
