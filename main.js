import * as THREE from './src/three.module.js';
import { OrbitControls } from './src/OrbitControls.js';
import { GLTFLoader } from './src/GLTFLoader.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

renderer.setClearColor(0xFEFEFE);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    20,
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

camera.position.set(6, 8, 20);
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