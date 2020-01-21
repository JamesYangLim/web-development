import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r112/build/three.module.js';
import * as PRIMITIVES from './primitives.js';

function create_perspective_camera() {
  const fov = 45;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  return camera;
}

function create_directional_light() {
  const color = 0xFFFFFF;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  return light;
}

function createMaterial() {
  const material = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide,
  });

  const hue = Math.random();
  const saturation = 1;
  const luminance = .5;
  material.color.setHSL(hue, saturation, luminance);

  return material;
}

function makeInstance(geometry, material) {
  const instance = new THREE.Mesh(geometry, material);
  return instance;
}

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const pixelRatio = window.devicePixelRatio;
  const width  = canvas.clientWidth  * pixelRatio | 0;
  const height = canvas.clientHeight * pixelRatio | 0;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}



function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas});
  const scene = new THREE.Scene();

  const camera = create_perspective_camera();
  camera.position.set(0, 10, 20);

  const light = create_directional_light();
  light.position.set(-1, 2, 4);


  const geometry = PRIMITIVES.create_torus_knot();

  const instance = makeInstance(geometry, createMaterial());
  instance.position.y = 10;

  scene.background = new THREE.Color(0xAAAAAA);
  scene.add(light);
  scene.add(instance);

  function render(time) {
    time *= 0.001;  // convert time to seconds
    
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
  
    const speed = time * 2;
    instance.rotation.x = speed;
    instance.rotation.y = speed/1.2;
    instance.rotation.z = speed/1.6;

  
    renderer.render(scene, camera);
  
    requestAnimationFrame(render);
  }

  render();
}

main();
