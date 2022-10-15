import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js';
import { GLTFLoader } from './GLTFLoader.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

renderer.setClearColor(0xFEFEFE);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.01,
    1000
);

const loader = new GLTFLoader();

let obj;
loader.load("./object/scene.gltf", function (gltf) {
    obj = gltf.scene;
    scene.add(gltf.scene);
})

const light = new THREE.HemisphereLight(0xFFFFFF, 0x000000, 2);
scene.add(light);

const orbit = new OrbitControls(camera, renderer.domElement);

camera.position.set(6, 8, 14);
orbit.update();

function animate() {
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


// import * as THREE from './three.module.js';
// import { GLTFLoader } from './GLTFLoader.js';
//
// const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
// camera.position.z = 1;
//
// const scene = new THREE.Scene();
//
// const geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
// const material = new THREE.MeshNormalMaterial();
//
// const mesh = new THREE.Mesh( geometry, material );
// scene.add( mesh );
//
// const renderer = new THREE.WebGLRenderer( { antialias: true } );
// renderer.setSize( window.innerWidth, window.innerHeight );
// renderer.setAnimationLoop( animation );
// document.body.appendChild( renderer.domElement );
//
// // animation
//
// function animation( time ) {
//
//     mesh.rotation.x = time / 2000;
//     mesh.rotation.y = time / 1000;
//
//     renderer.render( scene, camera );
//
// }