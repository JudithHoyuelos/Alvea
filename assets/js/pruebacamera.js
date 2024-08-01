import THREE from './three';
const scene1=new THREE.Scene();
const camera1=new THREE.Camera();
const renderer1=new THREE.WebGLRenderer();
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

// Función de animación
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Llama a la función de animación
animate();

// Manejar el desplazamiento de la página
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollPosition / maxScroll;

    document.getElementById('scrollProgress').innerText = `Scroll Progress: ${(scrollPercentage * 100).toFixed(2)}%`;

    if (scrollPercentage < 0.25) {
        // Cambiar posición del cubo
        cube.position.y = (scrollPercentage / 0.25) * 5;
    } else if (scrollPercentage < 0.5) {
        // Cambiar rotación del cubo
        const rotationPercentage = (scrollPercentage - 0.25) / 0.25;
        cube.rotation.x = rotationPercentage * Math.PI * 2;
        cube.rotation.y = rotationPercentage * Math.PI * 2;
    } else if (scrollPercentage < 0.75) {
        // Cambiar posición de la cámara
        const cameraMovePercentage = (scrollPercentage - 0.5) / 0.25;
        camera.position.z = 5 - cameraMovePercentage * 4;
    } else {
        // Auto-rotación del cubo
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    }
});

// Actualizar el tamaño del renderizador y la cámara al cambiar el tamaño de la ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
