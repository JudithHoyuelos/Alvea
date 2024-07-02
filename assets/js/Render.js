// import THREE from './three.js';
import * as THREE from '../vendor/three/build/three.module.js';

const renderer = new THREE.WebGLRenderer({antialia: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

export default renderer