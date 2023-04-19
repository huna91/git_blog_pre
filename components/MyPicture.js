import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";

export function MyPicture() {
  const loader = new THREE.ImageBitmapLoader();
  //   loader.setOptions({ imgaeOrientation: "flipY" });
  let _meterial;
  loader.load(
    "./data/mypicture.jpg?" + performance.now(),
    function (ImageBitmap) {
      const _texture = new THREE.CanvasTexture(ImageBitmap);
      _meterial = new THREE.MeshBasicMaterial({
        color: 0xff0015,
        map: _texture,
      });
    },
    undefined,
    function (err) {
      console.log("err남");
    }
  );
  const _geometry = new THREE.BoxGeometry(1, 1, 0.5);
  const _box = new THREE.Mesh(_geometry, _meterial);
  _box.position.set(0, 15, 0);
  _box.rotation.set(
    Math.random() * 2 * Math.PI,
    Math.random() * 2 * Math.PI,
    Math.random() * 2 * Math.PI
  );
  return _box;
}
