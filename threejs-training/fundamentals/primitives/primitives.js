import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r112/build/three.module.js';

function create_box() {
  const width = 8;
  const height = 8;
  const depth = 8;
  const box = new THREE.BoxBufferGeometry(width, height, depth);
  // const box = new THREE.BoxGeometry(width, height, depth);
  return box;
}

function create_circle() {
  const radius = 7;
  const segments = 24;
  const geometry = new THREE.CircleBufferGeometry(radius, segments);
  return geometry;
}

function create_cone() {
  const radius = 6;
  const height = 8;
  const segments = 16;
  const geometry = new THREE.ConeBufferGeometry(radius, height, segments);
  return geometry;
}

function create_cylinder() {
  const radiusTop = 4;
  const radiusBottom = 4;
  const height = 8;
  const radialSegments = 12;
  const geometry = new THREE.CylinderBufferGeometry(radiusTop, radiusBottom, height, radialSegments);
  return geometry;
}

function create_decahedron() {
  const radius = 7;
  const geometry = new THREE.DodecahedronBufferGeometry(radius);
  return geometry;
}

function create_extrude_geometry() {
  const shape = new THREE.Shape();
  const x = -2.5;
  const y = -5;
  shape.moveTo(x + 2.5, y + 2.5);
  shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
  shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
  shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
  shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
  shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
  shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);

  const extrudeSettings = {
    steps: 2,
    depth: 2,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 1,
    bevelSegments: 2,
  };

  const geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);

  return geometry;
}

function create_icosahedron() {
  const radius = 7;
  const geometry = new THREE.IcosahedronBufferGeometry(radius);
  return geometry;
}

function create_lathe_geometry() {
  const points = [];
  for (let i = 0; i < 10; ++i) {
    points.push(new THREE.Vector2(Math.sin(i * 0.2) * 3 + 3, (i - 5) * .8));
  }
  const geometry = new THREE.LatheBufferGeometry(points);
  return geometry;
}

function create_octahedron() {
  const radius = 7;
  const geometry = new THREE.OctahedronBufferGeometry(radius);
  return geometry;
}

function create_parametric_geometry() {

  function klein(v, u, target) {
    u *= Math.PI;
    v *= 2 * Math.PI;
    u = u * 2;
  
    let x;
    let z;
  
    if (u < Math.PI) {
        x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(u) * Math.cos(v);
        z = -8 * Math.sin(u) - 2 * (1 - Math.cos(u) / 2) * Math.sin(u) * Math.cos(v);
    } else {
        x = 3 * Math.cos(u) * (1 + Math.sin(u)) + (2 * (1 - Math.cos(u) / 2)) * Math.cos(v + Math.PI);
        z = -8 * Math.sin(u);
    }
  
    const y = -2 * (1 - Math.cos(u) / 2) * Math.sin(v);
  
    target.set(x, y, z).multiplyScalar(0.75);
  }
  
  const slices = 25;
  const stacks = 25;
  const geometry = new THREE.ParametricBufferGeometry(klein, slices, stacks);

  return geometry;
}

function create_plane() {
  const width = 9;
  const height = 9;
  const widthSegments = 2;
  const heightSegments = 2;
  const geometry = new THREE.PlaneBufferGeometry(width, height, widthSegments, heightSegments);
  return geometry;
}

function create_polyhedron() {
  const verticesOfCube = [
    -1, -1, -1,    1, -1, -1,    1,  1, -1,    -1,  1, -1,
    -1, -1,  1,    1, -1,  1,    1,  1,  1,    -1,  1,  1,
  ];
  const indicesOfFaces = [
      2, 1, 0,    0, 3, 2,
      0, 4, 7,    7, 3, 0,
      0, 1, 5,    5, 4, 0,
      1, 2, 6,    6, 5, 1,
      2, 3, 7,    7, 6, 2,
      4, 5, 6,    6, 7, 4,
  ];
  const radius = 7;
  const detail = 2;
  const geometry = new THREE.PolyhedronBufferGeometry(verticesOfCube, indicesOfFaces, radius, detail);

  return geometry;
}

function create_ring() {
  const innerRadius = 2;
  const outerRadius = 7;
  const segments = 18;
  const geometry = new THREE.RingBufferGeometry(innerRadius, outerRadius, segments);
  return geometry;
}

function create_shape() {
  const shape = new THREE.Shape();
  const x = -2.5;
  const y = -5;
  shape.moveTo(x + 2.5, y + 2.5);
  shape.bezierCurveTo(x + 2.5, y + 2.5, x + 2, y, x, y);
  shape.bezierCurveTo(x - 3, y, x - 3, y + 3.5, x - 3, y + 3.5);
  shape.bezierCurveTo(x - 3, y + 5.5, x - 1.5, y + 7.7, x + 2.5, y + 9.5);
  shape.bezierCurveTo(x + 6, y + 7.7, x + 8, y + 4.5, x + 8, y + 3.5);
  shape.bezierCurveTo(x + 8, y + 3.5, x + 8, y, x + 5, y);
  shape.bezierCurveTo(x + 3.5, y, x + 2.5, y + 2.5, x + 2.5, y + 2.5);
  const geometry = new THREE.ShapeBufferGeometry(shape);
  return geometry;
}

function create_sphere() {
  const radius = 7;
  const widthSegments = 12;
  const heightSegments = 8;
  const geometry = new THREE.SphereBufferGeometry(radius, widthSegments, heightSegments);
  return geometry;
}

function create_tetrahedron() {
  const radius = 7;
  const geometry = new THREE.TetrahedronBufferGeometry(radius);
  return geometry;
}

// function create_text_geometry() {

//   const loader = new THREE.FontLoader();
//   // promisify font loading
//   function loadFont(url) {
//     return new Promise((resolve, reject) => {
//       loader.load(url, resolve, undefined, reject);
//     });
//   }

//   async function loadGeom() {
//     const font = await loadFont('https://threejsfundamentals.org/threejs/resources/threejs/fonts/helvetiker_regular.typeface.json');
//     const geometry = new THREE.TextBufferGeometry('three.js', {
//       font: font,
//       size: 3.0,
//       height: .2,
//       curveSegments: 12,
//       bevelEnabled: true,
//       bevelThickness: 0.15,
//       bevelSize: .3,
//       bevelSegments: 5,
//     });
//     return geometry;
//   }

//   return loadGeom();
// }

function create_torus() {
  const radius = 5;
  const tubeRadius = 2;
  const radialSegments = 8;
  const tubularSegments = 24;
  const geometry = new THREE.TorusBufferGeometry(radius, tubeRadius, radialSegments, tubularSegments);
  return geometry;
}

function create_torus_knot() {
  const radius = 3.5;
  const tube = 1.5;
  const radialSegments = 8;
  const tubularSegments = 64;
  const p = 2;
  const q = 3;
  const geometry = new THREE.TorusKnotBufferGeometry(radius, tube, tubularSegments, radialSegments, p, q);
  return geometry;
}

export { 
  create_box, create_circle, create_cone, create_cylinder, create_decahedron, create_extrude_geometry,
  create_icosahedron, create_lathe_geometry, create_octahedron, create_parametric_geometry, create_plane,
  create_polyhedron, create_ring, create_shape, create_sphere, create_tetrahedron, create_torus,
  create_torus_knot }