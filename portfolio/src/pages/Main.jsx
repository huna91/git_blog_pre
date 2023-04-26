import React, { useState } from "react";
import { Canvas, PerspectiveCamera } from "@react-three/fiber";
import { BasicBall, MovingBall } from "../components";
import { CameraControls, OrbitControls } from "@react-three/drei";

const Main = () => {
  // 빨,주,노,초,파,남,보 7개
  // const [ballColor, setBallColor] = useState([
  //   { color: "#ff0000", x: 11, y: 10 },
  //   { color: "#ff8c00", x: 8.5, y: 17.5 },
  //   { color: "#ffff00", x: 3.5, y: 20 },
  //   { color: "#008000", x: -1.5, y: 17.5 },
  //   { color: "#0000ff", x: -4, y: 12.5 },
  //   { color: "#4b0082", x: -1.5, y: 7.5 },
  //   { color: "#800080", x: 3.5, y: 5 },
  // ]);
  function right_move() {
    // const temp = ballColor[0];
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
            position: [0, 800, 0],
          }}
        >
          <OrbitControls />
          <ambientLight intensity={0.3} />
          <pointLight intensity={0.7} position={[3, 13, 5]} />
          {/* {ballColor.map((val, ind) => {
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
          })} */}
          <BasicBall />
        </Canvas>
      </div>
    </div>
  );
};

export default Main;
