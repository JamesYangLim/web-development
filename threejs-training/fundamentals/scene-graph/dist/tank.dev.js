"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var THREE = _interopRequireWildcard(require("https://threejsfundamentals.org/threejs/resources/threejs/r112/build/three.module.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function makeCamera() {
  var fov = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 40;
  var aspect = 2;
  var zNear = 0.1;
  var zFar = 1000;
  return new THREE.PerspectiveCamera(fov, aspect, zNear, zFar);
}

function main() {
  var canvas = document.querySelector('#c');
  var renderer = new THREE.WebGLRenderer({
    canvas: canvas
  });
  renderer.setClearColor(0xAAAAAA);
  renderer.shadowMap.enable = true;
  var camera = makeCamera();
  camera.position.set(8, 4, 10).multiplyScalar(3);
  camera.lookAt(0, 0, 0);
  var scene = new THREE.Scene();
  {
    var light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 20, 0);
    scene.add(light);
    light.castShadow = true;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    var d = 50;
    light.shadow.camera.left = -d;
    light.shadow.camera.right = d;
    light.shadow.camera.top = d;
    light.shadow.camera.bottom = -d;
    light.shadow.camera.near = 1;
    light.shadow.camera.far = 50;
    light.shadow.bias = 0.001;
  }
  {
    var _light = new THREE.DirectionalLight(0xffffff, 1);

    _light.position.set(1, 2, 4);

    scene.add(_light);
  }
  var groundGeometry = new THREE.PlaneBufferGeometry(50, 50);
  var groundMaterial = new THREE.MeshPhongMaterial({
    color: 0xCC8866
  });
  var groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
  groundMesh.rotation.x = Math.PI * -0.5;
  groundMesh.receiveShadow = true;
  scene.add(groundMesh);
  var carWidth = 4;
  var carHeight = 1;
  var carLength = 8;
  var tank = new THREE.Object3D();
  scene.add(tank);
  var bodyGeometry = new THREE.BoxBufferGeometry(carWidth, carHeight, carLength);
  var bodyMaterial = new THREE.MeshPhongMaterial({
    color: 0x6688AA
  });
  var bodyMesh = new THREE.Mesh(bodyGeometry, bodyMaterial);
  bodyMesh.position.y = 1.4;
  bodyMesh.castShadow = true;
  tank.add(bodyMesh);
  var tankCameraFov = 75;
  var tankCamera = makeCamera(tankCameraFov);
  tankCamera.position.y = 3;
  tankCamera.position.z = -6;
  tankCamera.rotation.y = Math.PI;
  bodyMesh.add(tankCamera);
  var wheelRadius = 1;
  var wheelThickness = 0.5;
  var wheelSegments = 6;
  var wheelGeometry = new THREE.CylinderBufferGeometry(wheelRadius, // Top Radius
  wheelRadius, // Bottom Radius
  wheelThickness, // height of the cylinder
  wheelSegments);
  var wheelMaterial = new THREE.MeshPhongMaterial({
    color: 0x888888
  });
  var wheelPosition = [[-carWidth / 2 - wheelThickness / 2, -carHeight / 2, carLength / 3], [carWidth / 2 + wheelThickness / 2, -carHeight / 2, carLength / 3], [-carWidth / 2 - wheelThickness / 2, -carHeight / 2, 0], [carWidth / 2 + wheelThickness / 2, -carHeight / 2, 0], [-carWidth / 2 - wheelThickness / 2, -carHeight / 2, -carLength / 3], [carWidth / 2 + wheelThickness / 2, -carHeight / 2, -carLength / 3]];
  var wheelMeshes = wheelPosition.map(function (position) {
    var _mesh$position;

    var mesh = new THREE.Mesh(wheelGeometry, wheelMaterial);

    (_mesh$position = mesh.position).set.apply(_mesh$position, _toConsumableArray(position));

    mesh.rotation.z = Math.PI * 0.5;
    mesh.castShadow = true;
    bodyMesh.add(mesh);
    return mesh;
  });
  var domeRadius = 2;
  var domeWidthSubdivisions = 12;
  var domeHeightSubdivisions = 12;
  var domePhiStart = 0;
  var domePhiEnd = Math.PI * 2;
  var domeThetaStart = 0;
  var domeThetaEnd = Math.PI * 0.5;
  var domeGeometry = new THREE.SphereBufferGeometry(domeRadius, domeWidthSubdivisions, domeHeightSubdivisions, domePhiStart, domePhiEnd, domeThetaStart, domeThetaEnd);
  var domeMesh = new THREE.Mesh(domeGeometry, bodyMaterial);
  domeMesh.castShadow = true;
  bodyMesh.add(domeMesh);
  domeMesh.position.y = 0.5;
  var turretWidth = 0.1;
  var turretHeight = 0.1;
  var turretLength = carLength * 0.75 * 0.2;
  var turretGeometry = new THREE.BoxBufferGeometry(turretWidth, turretHeight, turretLength);
  var turretMesh = new THREE.Mesh(turretGeometry, bodyMaterial);
  var turretPivot = new THREE.Object3D();
  turretMesh.castShadow = true;
  turretPivot.scale.set(5, 5, 5);
  turretPivot.position.y = 0.5;
  turretMesh.position.z = turretLength * 0.5;
  turretPivot.add(turretMesh);
  bodyMesh.add(turretPivot);
  var turretCamera = makeCamera();
  turretCamera.position.y = 0.75 * 0.2;
  turretMesh.add(turretCamera);
  var targetGeometry = new THREE.SphereBufferGeometry(0.5, 6, 3);
  var targetMaterial = new THREE.MeshPhongMaterial({
    color: 0x00FF00,
    flatShading: true
  });
  var targetMesh = new THREE.Mesh(targetGeometry, targetMaterial);
  var targetOrbit = new THREE.Object3D();
  var targetElevation = new THREE.Object3D();
  var targetBob = new THREE.Object3D();
  targetMesh.castShadow = true;
  scene.add(targetOrbit);
  targetOrbit.add(targetElevation);
  targetElevation.position.z = carLength * 2;
  targetElevation.position.y = 8;
  targetElevation.add(targetBob);
  targetBob.add(targetMesh);
  var targetCamera = makeCamera();
  var targetCameraPivot = new THREE.Object3D();
  targetCamera.position.x = 1;
  targetCamera.position.z = -2;
  targetCamera.rotation.y = Math.PI;
  targetBob.add(targetCameraPivot);
  targetCameraPivot.add(targetCamera); // create a sine-like wave

  var curve = new THREE.SplineCurve([new THREE.Vector2(-10, 0), new THREE.Vector2(-5, 5), new THREE.Vector2(0, 0), new THREE.Vector2(5, -5), new THREE.Vector2(10, 0), new THREE.Vector2(5, 10), new THREE.Vector2(-5, 10), new THREE.Vector2(-10, -10), new THREE.Vector2(-15, -8), new THREE.Vector2(-10, 0)]);
  var points = curve.getPoints(50);
  var geometry = new THREE.BufferGeometry().setFromPoints(points);
  var material = new THREE.LineBasicMaterial({
    color: 0xff0000
  });
  var splineObject = new THREE.Line(geometry, material);
  splineObject.rotation.x = Math.PI * 0.5;
  splineObject.position.y = 0.05;
  scene.add(splineObject);

  function resizeRendereToDisplaySize(renderer) {
    var canvas = renderer.domElement;
    var width = canvas.clientWidth;
    var height = canvas.clientHeight;
    var needResize = canvas.width !== width || canvas.height !== height;

    if (needResize) {
      renderer.setSize(width, height, false);
    }

    return needResize;
  }

  var targetPosition = new THREE.Vector3();
  var tankPosition = new THREE.Vector2();
  var tankTarget = new THREE.Vector2();
  var cameras = [{
    cam: camera,
    desc: 'detached camera'
  }, {
    cam: turretCamera,
    desc: 'on turret looking at target'
  }, {
    cam: targetCamera,
    desc: 'near target looking at tank'
  }, {
    cam: tankCamera,
    desc: 'above back of tank'
  }];
  var infoElem = document.querySelector('#info');

  function render(time) {
    time *= 0.001;

    if (resizeRendereToDisplaySize(renderer)) {
      var _canvas = renderer.domElement;
      cameras.forEach(function (cameraInfo) {
        var camera = cameraInfo.cam;
        camera.aspect = _canvas.clientWidth / _canvas.clientHeight;
        camera.updateProjectionMatrix();
      });
    } // move target


    targetOrbit.rotation.y = time * 0.27;
    targetBob.position.y = Math.sin(time * 2) * 4;
    targetMesh.rotation.x = time * 7;
    targetMesh.rotation.y = time * 13;
    targetMaterial.emissive.setHSL(time * 10 % 1, 1, 0.25);
    targetMaterial.color.setHSL(time * 10 % 1, 1, 0.25); // move tank

    var tankTime = time * 0.05;
    curve.getPointAt(tankTime % 1, tankPosition);
    curve.getPointAt((tankTime + 0.01) % 1, tankTarget);
    tank.position.set(tankPosition.x, 0, tankPosition.y);
    tank.lookAt(tankTarget.x, 0, tankTarget.y); // face turret at target

    targetMesh.getWorldPosition(targetPosition);
    turretPivot.lookAt(targetPosition); // make the turretCamera look at target

    turretCamera.lookAt(targetPosition); // make the targetCameraPivot look at the tank

    tank.getWorldPosition(targetPosition);
    targetCameraPivot.lookAt(targetPosition);
    wheelMeshes.forEach(function (obj) {
      obj.rotation.x = time * 3;
    });
    var camera = cameras[time * 0.25 % cameras.length | 0]; // const camera = cameras[2];

    infoElem.textContent = camera.desc;
    renderer.render(scene, camera.cam);
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();