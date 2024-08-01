const fs = require('fs-extra');
const path = require('path');

const libsToCopy = [
    {
        src: 'node_modules/gsap/dist',
        dest: 'assets/vendor/gsap'
    },
    {
        src: 'node_modules/three/build',
        dest: 'assets/vendor/three/build'
    },
    {
        src: 'node_modules/three/examples/jsm/loaders',
        dest: 'assets/vendor/three/examples/jsm/loaders'
    },
    {
        src: 'node_modules/three/examples/jsm/controls',
        dest: 'assets/vendor/three/examples/jsm/controls'
    },
    {
      src: 'node_modules/three/examples/jsm',
      dest: 'assets/vendor/three/examples/jsm'
    }
];

libsToCopy.forEach(lib => {
    fs.copySync(path.resolve(__dirname, lib.src), path.resolve(__dirname, lib.dest));
    console.log(`Copied ${lib.src} to ${lib.dest}`);
});