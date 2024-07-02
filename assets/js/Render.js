// import THREE from './three.js';

const renderer = new THREE.WebGLRenderer({antialia: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

export default renderer