import * as THREE from 'three';
import Controller from './Controller/GameController';
import Role from './Role/role';

Controller.getInstance().registerKeyBinding();
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let canvas: HTMLCanvasElement = document.querySelector('#window');
canvas.style.color = '#8deeee';
let renderer = new THREE.WebGLRenderer({ canvas });
renderer.setClearColor(new THREE.Color(0x8d, 0xee, 0xee), 1.0);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.CubeGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
let cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 30;
// let cameraDir = 1;

// function moveCamera() {
//     if (camera.position.z >= 30) {
//         cameraDir = -1;
//     }
//     if (camera.position.z <= 10) {
//         cameraDir = 1;
//     }
//     camera.position.z += cameraDir;
// }
// setInterval(moveCamera, 500);
// camera.position.x = -500;
camera.position.y = -50;
camera.lookAt(0, 0, 0);
function render() {
    requestAnimationFrame(render);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
    // console.log(date.getTime() - oldDate.getTime());

}

const spider = new Role('models/bugatti/bugatti.obj');
spider.load();
// scene.add(spider);

render();

export default scene;
