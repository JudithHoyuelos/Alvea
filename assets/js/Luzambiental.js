// import THREE from './three.js';

const lights = new THREE.AmbientLight( 0x404040 ); // soft white light

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.7 );
directionalLight.position.set(-10,10,-10);
lights.add(directionalLight);

const directionalLight2 = new THREE.DirectionalLight( 0xffffff, 0.7 );
directionalLight2.position.set(10,-10,10);
lights.add(directionalLight2);



export default lights