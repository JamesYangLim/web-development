import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r110/build/three.module.js';
  

function makeInstance(geometry, color, x) {
  
  const material = new THREE.MeshPhongMaterial({color});
  const instance = new THREE.Mesh(geometry, material);
  instance.position.x = x;

  return instance;
}

// function resizeRendererToDisplaySize(renderer) {
//   const canvas = renderer.domElement;
//   const width = canvas.clientWidth;
//   const height = canvas.clientHeight;
//   const needResize = canvas.width !== width || canvas.height !== height;
//   if (needResize) {
//     renderer.setSize(width, height, false);
//   }
//   return needResize;
// }

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
  
  // These 4 settings define a "frustum".
  const fov = 75; 
  const aspect = 2;
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 3;

  const scene = new THREE.Scene();

  {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  }

  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  const cubes = [
    makeInstance(geometry, 0x44aa88,  0),
    makeInstance(geometry, 0x8844aa, -2),
    makeInstance(geometry, 0xaa8844,  2),
  ];

  cubes.forEach(cube => {
    scene.add(cube);
  });

  function render(time) {
    time *= 0.001;  // convert time to seconds
  
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    cubes.forEach((cube, ndx) => {
      const speed = 1 + ndx * .1;
      const rot = time * speed;
      cube.rotation.x = rot;
      cube.rotation.y = rot;
    });
  
    renderer.render(scene, camera);
  
    requestAnimationFrame(render);
  }
  
  requestAnimationFrame(render);
}

main();