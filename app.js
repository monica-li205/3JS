let container;
let camera;
let renderer;
let scene;

function init() {
  container = document.querySelector('.scene');

  scene = new three.Scene();

  const fov = 35;
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1;
  const far = 500;

// Camera setup
  camera = three.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(-100, 10, 25);

// Renderer
  renderer = new three.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

// Load model
  let loader = new three.GLTFLoader();
  loader.load('./3d/scene.gltf', function(gltf) {
    scene.add(gltf.scene);
    renderer.render(scene, camera);
  });
}

init();