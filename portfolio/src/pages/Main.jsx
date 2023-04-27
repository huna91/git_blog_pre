import React, { Suspense, useState } from "react";
import { extend, Canvas, PerspectiveCamera } from "@react-three/fiber";
import { BasicBall, Paper } from "../components";
import { OrbitControls } from "@react-three/drei";
extend({ OrbitControls });
const Main = () => {
  // 빨,주,노,초,파,남,보 7개
  const Color = [
    { color: "#ffffff" },
    { color: "#ff0000" },
    { color: "#ff8c00" },
    { color: "#ffff00" },
    { color: "#008000" },
    { color: "#0000ff" },
    { color: "#4b0082" },
    { color: "#800080" },
  ];
  const [wheel, setWheel] = useState(0);
  const [PC, setPC] = useState(0);

  return (
    <div>
      <div className="canvas_wrap">
        <Canvas
          // orthographic
          onWheel={(e) => setWheel(e.deltaY)}
          camera={{
            zoom: 25,
            position: [0, 700, 0],
          }}
        >
          <ambientLight intensity={0.3} />
          <pointLight intensity={0.7} position={[3, 13, 5]} />
          <BasicBall
            ballColor={Color}
            wheel={wheel}
            setWheel={(e) => {
              setWheel(e);
            }}
            setPC={() => {
              setPC();
            }}
          />
          {/* <OrbitControls /> */}
          <Suspense fallback={null}>
            <Paper color={Color} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Main;
