import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";

export function MakeBox(color) {
  const _geometry = new THREE.SphereGeometry(1, 200);
  const _meterial = new THREE.MeshBasicMaterial({ color: color });
  const _box = new THREE.Mesh(_geometry, _meterial);
  return _box;
}
