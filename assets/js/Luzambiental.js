import THREE from './three';

const lights = new THREE.AmbientLight( 0x404040 ); // soft white light

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.7 );
directionalLight.position.set(-10,10,-10);
lights.add(directionalLight);


export default lights