import THREE from './three';

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

camera.position.set(1.9168011687933637, 1.8324140151651989, -7.158206097286868);
camera.lookAt(2, 1, 0);

export default camera