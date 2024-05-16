import THREE from './three';

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.set(1.695705744292436, 1.8324140151651995, -8.243284404784092);
camera.lookAt(3, 3, 1)

export default camera