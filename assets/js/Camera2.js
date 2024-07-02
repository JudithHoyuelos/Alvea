import THREE from './three.js';

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// camera.position.set(1.5620123612353716, 1.8324140151651975, -12.611046376873789);
// camera.lookAt(2, 1, 0);

camera.position.set(-0.23324931851256903, 1.8324140151651975, 0.2862530684020239);
camera.lookAt(0, 1, -11);

// hotpoint derecha
// camera.position.set(4.547513663373049, 1.8324140151651975, 3.9819783918301144);
// camera.lookAt(10, 1, -1);

// hotpoint izquierda
// camera.position.set(-4.737092106867862, 1.8324140151651975, 0.07007195162038703);
// camera.lookAt(-9, 1, 0);

// hotpoint ariba
// camera.position.set(-0.05881682153498034, 1.8324140151651975, -9.332008651101873);
// camera.lookAt(-0.05, 1.8, -12);

// hotpoint abajo
// camera.position.set(0.6201922849652849, 1.8324140151651975, 2.5258305164814105);
// camera.lookAt(-6, 1, -4);

export default camera