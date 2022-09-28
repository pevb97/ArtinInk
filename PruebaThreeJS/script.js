import * as THREE from './three.module,js';
import { STLLoader } from './STLLoader.js';
import { OrbitControls } from './OrbitControls.js';
/*import { TransformControls } from './Controls/TransformControls.js';*/

let scene, camera, renderer, object;
const contenedor = document.querySelector(".container");
let loader = new STLLoader();



function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xd0d0d0);

    camera = new THREE.PerspectiveCamera(75, contenedor.clientWidth / contenedor.clientHeight, 0.1, 10000);
    camera.position.z = 10;

    renderer = new THREE.WebGL1Renderer();
    renderer.setSize(contenedor.clientWidth, contenedor.clientHeight);
    contenedor.appendChild(renderer.domElement);

    scene.add(object);
    let control = new OrbitControls(camera, renderer.domElement);
    animate();
}

function animate(params) {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}


loader.load('../Modelos/\torso female 2 lopoli-torso_female_2_lopoli.stl', (model) => {
    object = new THREE.Mesh(
        model, 
        new THREE.MeshLambertMaterial({ color: 0xff0000 })
    );
    object.scale.set(12, 12, 12);
    object.position.set(0, 0, 0);
    init();
});
