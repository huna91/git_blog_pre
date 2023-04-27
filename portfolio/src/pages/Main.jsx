import React, { useState } from "react";
import { Canvas, PerspectiveCamera } from "@react-three/fiber";
import { BasicBall, MovingBall } from "../components";
import { CameraControls, OrbitControls } from "@react-three/drei";

const Main = () => {
  const [wheel, setWheel] = useState(0);

  return (
    <div>
      <div className="canvas_wrap">
        <div className="button"></div>
        <Canvas
          // orthographic
          onWheel={(e) => setWheel(e.deltaY)}
          camera={{
            zoom: 20,
            position: [0, 800, 0],
          }}
        >
          {/* <OrbitControls /> */}
          <ambientLight intensity={0.3} />
          <pointLight intensity={0.7} position={[3, 13, 5]} />
          <BasicBall
            wheel={wheel}
            setWheel={(e) => {
              setWheel(e);
            }}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default Main;
