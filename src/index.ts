let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let canvas: HTMLCanvasElement = document.querySelector('#window');
let renderer = new THREE.WebGLRenderer({ canvas });
renderer.setClearColor(new THREE.Color(0x8d, 0xee, 0xee), 1.0);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.CubeGeometry(1, 1, 1);
let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
let cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 15;
function render() {
    requestAnimationFrame(render);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
render();
