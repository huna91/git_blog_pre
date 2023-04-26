import React, { useState } from "react";
import { Canvas, PerspectiveCamera } from "@react-three/fiber";
import { BasicBall, MovingBall } from "../components";
import { CameraControls, OrbitControls } from "@react-three/drei";

const Main = () => {
  // 빨,주,노,초,파,남,보 7개
  const [ballColor, setBallColor] = useState([
    { color: "#ff0000", x: 10, y: 5 },
    { color: "#ff8c00", x: 15, y: 7.5 },
    { color: "#ffff00", x: 17.5, y: 12.5 },
    { color: "#008000", x: 15, y: 17.5 },
    { color: "#0000ff", x: 10, y: 20 },
    { color: "#4b0082", x: 5, y: 17.5 },
    { color: "#800080", x: 2.5, y: 12.5 },
  ]);
  const W = window.innerWidth;
  const H = window.innerHeight;
  let aspectRatio = W / H;
  console.log(aspectRatio);
  function right_move() {
    const temp = ballColor[0];
  }

  return (
    <div>
      <div className="canvas_wrap">
        <div className="button">
          <button onClick={() => right_move()}>왼</button>
          <button>오</button>
        </div>
        <Canvas
          // orthographic
          camera={{
            zoom: 15,
            position: [0, 450, 0],
            rotateZ: 3,
            // aspect: aspectRatio,
            // fov: 90,
            // left: -1 * aspectRatio,
            // right: 1 * aspectRatio,

            // top: 1,
            // bottom: -1,
          }}
        >
          {/* <OrbitControls /> */}
          <ambientLight intensity={0.3} />
          <pointLight intensity={0.7} position={[3, 13, 5]} />
          {/* <MovingBall color={"#ff00f3"} /> */}
          {ballColor.map((val, ind) => {
            return ind == 0 ? (
              <MovingBall
                position={[val.x - 13, 0, val.y - 13]}
                color={val.color}
              />
            ) : (
              <BasicBall
                position={[val.x - 13, 0, val.y - 13]}
                color={val.color}
              />
            );
          })}
        </Canvas>
      </div>
    </div>
  );
};

export default Main;
