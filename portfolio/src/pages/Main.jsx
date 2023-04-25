import React from "react";
import { Canvas } from "@react-three/fiber";
import { BasicBall, MovingBall } from "../components";
import { CameraControls, OrbitControls } from "@react-three/drei";

const Main = () => {
  // 빨,주,노,초,파,남,보 7개
  const ball_color = [
    "#ff0000",
    "#ff8c00",
    "#ffff00",
    "#008000",
    "#0000ff",
    "#4b0082",
    "#800080",
  ];
  const W = window.innerWidth;
  const H = window.innerHeight;
  let aspectRatio = W / H;
  console.log(W, "ddd", H);
  return (
    <div>
      <div className="canvas_wrap">
        <Canvas
          orthographic
          camera={{
            zoom: 30,
            position: [200, 200, 0],
            left: -1 * aspectRatio,
            right: 1 * aspectRatio,
            top: 1,
            bottom: -1,
          }}
        >
          <OrbitControls />
          <ambientLight intensity={0.3} />
          <pointLight intensity={0.7} position={[3, 3, 5]} />
          <MovingBall color={"#ff00f3"} />
          {ball_color.map((val, ind) => {
            return <BasicBall position={[3 * ind, 0, 1 * ind]} color={val} />;
          })}
        </Canvas>
      </div>
    </div>
  );
};

export default Main;
