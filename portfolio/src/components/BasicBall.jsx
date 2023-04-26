import React, { useRef, useState } from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const BasicBall = ({ color, position }) => {
  const ball = useRef();
  let angle = 0;
  let w = window.innerWidth;
  let h = window.innerHeight;
  const Base_W = w / 0.3;
  const Base_H = h / 0.2;
  const radian = (angle) => (angle * Math.PI) / 180;
  const radius = 15;

  // 빨,주,노,초,파,남,보 7개
  const [ballColor, setBallColor] = useState([
    { color: "#ff0000", x: 11, y: 10 },
    { color: "#ff8c00", x: 8.5, y: 17.5 },
    { color: "#ffff00", x: 3.5, y: 20 },
    { color: "#008000", x: -1.5, y: 17.5 },
    { color: "#0000ff", x: -4, y: 12.5 },
    { color: "#4b0082", x: -1.5, y: 7.5 },
    { color: "#800080", x: 3.5, y: 5 },
    {
      color:
        "linear-gradient(to right,#ee5252,#e79d3c 12.5%,#eaf510 25%,#53fc05 37.5%, #05fcc2 50%, #2343f8 62.5%, #f41ff4 75%,  #fc2626)",
    },
  ]);
  useFrame((state, delta) => {
    // ball.current.rotation.y += 1 * delta;
  });
  return (
    <group>
      <mesh scale={(2, 2, 2)} ref={ball}>
        {ballColor.map((val, ind) => {
          return ind === 0 ? (
            <Sphere
              visible
              args={[1.2, 200, 400]}
              position={[
                Math.cos(radian( (360 / 8) * ind)) * radius,
                0,
                Math.cos(radian(angle + (360 / 8) * ind)) * radius,
              ]}
            >
              <MeshDistortMaterial
                color={val.color}
                attach="material"
                distort={0.6}
                speed={2}
                roughness={0}
              />
            </Sphere>
          ) : (
            <Sphere
              visible
              args={[1.2, 50, 60]}
              position={[
                Math.cos(radian(angle + (360 / 8) * ind)) * radius,
                0,
                Math.cos(radian(angle + (360 / 8) * ind)) * radius,
              ]}
            >
              <meshStandardMaterial
                color={val.color}
                attach="material"
                roughness={0.2}
              />
            </Sphere>
          );
        })}
      </mesh>
    </group>
  );
};

export default BasicBall;
