import THREE from './three';

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.set(1.5620123612353716, 1.8324140151651975, -12.611046376873789);
camera.lookAt(2, 1, 0);

// hotpoint izquierda
// camera.position.set(7.238170413905775, 1.8324140151651975, -4.753328529998346);
// camera.lookAt(10, 1, 0);

// hotpoint ariba
// camera.position.set(2.1163238507698527, 1.8324140151651975, 3.349330773199133);
// camera.lookAt(2, 1, 6);

// hotpoint abajo
// camera.position.set(2.3888577103551727, 1.8324140151651975, 2.704188278006996);
// camera.lookAt(-1, 1, 0);

export default camera