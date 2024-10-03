// Escena
const scene = new THREE.Scene();

// Cámara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderizador
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Geometrías
const geometryCube = new THREE.BoxGeometry(1, 1, 1);
const geometryTorus = new THREE.TorusGeometry(2, 0.5, 16, 100);
const geometryPlane = new THREE.PlaneGeometry(10, 10);

// Materiales
const materialCube = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const materialTorus = new THREE.MeshPhongMaterial({ color: 0xff0000 });
const materialPlane = new THREE.MeshPhongMaterial({ color: 0x808080 });

// Objetos
const cube = new THREE.Mesh(geometryCube, materialCube);
const torus = new THREE.Mesh(geometryTorus, materialTorus);
const plane = new THREE.Mesh(geometryPlane, materialPlane);
plane.rotation.x = -Math.PI / 2;
plane.position.y = -1;

// Agregar objetos a la escena
scene.add(cube);
scene.add(torus);
scene.add(plane);

// Luces
const ambientLight = new THREE.AmbientLight(0x404040); 
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 2, 3); 
scene.add(directionalLight);

// Función de animación
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  torus.rotation.x -= 0.01;
  torus.rotation.y -= 0.01;
  renderer.render(scene, camera);
}

// Iniciar animación
animate();

// Ajustar al tamaño de la ventana
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
