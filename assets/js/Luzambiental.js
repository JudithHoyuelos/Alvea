import THREE from './three';

const lights = new THREE.AmbientLight( 0x404040 ); // soft white light

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.7 );
directionalLight.position.set(-10,10,-10);
lights.add(directionalLight);

const pointLight = new THREE.PointLight( 0xff0000, 3, 100 );
pointLight.position.set( 0, 3, 5 );
lights.add(pointLight)

export default lights