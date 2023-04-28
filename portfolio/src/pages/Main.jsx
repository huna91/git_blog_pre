import React, { Suspense, useState } from "react";
import { extend, Canvas, PerspectiveCamera } from "@react-three/fiber";
import { BasicBall, Paper, Text_1 } from "../components";
import { OrbitControls } from "@react-three/drei";
extend({ OrbitControls });
const Main = () => {
  // 빨,주,노,초,파,남,보 7개

  const [wheel, setWheel] = useState(0);

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
            wheel={wheel}
            setWheel={(e) => {
              setWheel(e);
            }}
          />
          {/* <OrbitControls /> */}
          <Suspense fallback={null}>
            <Paper
              wheel={wheel}
              setWheel={(e) => {
                setWheel(e);
              }}
            />
            <Text_1 />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Main;
