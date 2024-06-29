const color = 0x3c232c;

const scene = new THREE.Scene({ color: 0xfff });

const camera = new THREE.PerspectiveCamera(
  100,
  window.innerWidth / window.innerHeight,
  1,
  1000
);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

var light;
light = new THREE.DirectionalLight();
light.position.set(-9, 7, 5);
camera.add(light);

scene.add(camera);

const pinkMaterial = new THREE.MeshPhongMaterial({ color });

// Chess Piece
const base1 = new THREE.Mesh(
  new THREE.CylinderGeometry(1, 1, 0.15, 100),
  pinkMaterial
);
const base2 = new THREE.Mesh(
  new THREE.CylinderGeometry(0.9, 0.9, 0.25, 100),
  pinkMaterial
);
base2.position.y = 0.1;

let allBase = new THREE.Group();
allBase.add(base1);
allBase.add(base2);

const part1 = new THREE.Mesh(
  new THREE.CylinderGeometry(0.4, 0.9, 2, 10),
  pinkMaterial
);

part1.position.set(0, 1, 0);
allBase.add(part1);

const part2 = new THREE.Mesh(
  new THREE.CylinderGeometry(0.7, 0.8, 0.15, 200),
  pinkMaterial
);
part2.position.y = 1.8;

const part4 = new THREE.Mesh(
    new THREE.CylinderGeometry(0.5, 0.6, 0.15, 200),
    pinkMaterial
  );
  part4.position.y = 1.95;

const ball = new THREE.SphereGeometry(
  Math.PI / 6,
  100,
  100,
  Math.PI,
  3 * Math.PI,
  0,
  Math.PI
);

pinkMaterial.side = THREE.DoubleSide;
const part3 = new THREE.Mesh(ball, pinkMaterial);
part3.position.set(0, 2.3, 0);

allBase.add(part4);
allBase.add(part3);
allBase.add(part2);
allBase.position.set(0, -4, 0);
allBase.scale.set(3, 4, 1);
scene.add(allBase);

// Crown
const crownTop = new THREE.Mesh(
  new THREE.CylinderGeometry(0.9, 1, 0.8, 200),
  pinkMaterial
);
crownTop.position.set(0, 8.7, -8);

const crownGroup = new THREE.Group();
crownGroup.add(crownTop);

// Main Chess Piece Group
const chessGroup = new THREE.Group();
chessGroup.add(allBase);
chessGroup.add(crownGroup);

chessGroup.position.set(0, -4, 0);
chessGroup.scale.set(3, 4, 1);
scene.add(chessGroup);

camera.position.z = 30;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
