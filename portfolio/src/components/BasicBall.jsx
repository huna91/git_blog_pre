import React, { useEffect, useRef, useState } from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const BasicBall = ({ ballColor, wheel, setWheel, setPC }) => {
  const ball = useRef();
  let posRef = useRef();
  const figure = 8;
  const Angle = 360 / figure;
  const radian = (angle) => (angle * Math.PI) / 180;
  const radius = 7;

  const [move, setMove] = useState(800);
  const [mcon, setMcon] = useState(false);

  console.log(wheel);
  useFrame((state, delta) => {
    if (wheel > 0) {
      setMcon(true);
      ball.current.rotation.y += radian(1);
    } else if (wheel < 0) {
      setMcon(false);
      ball.current.rotation.y -= radian(1);
    }

    if (
      Math.floor(Math.abs(ball.current.rotation.y) * 1000) %
        Math.floor(radian(45) * 1000) <
        10 &&
      wheel !== 0
    ) {
      console.log(mcon);
      setWheel(0);
      mcon ? setMove(move + 1) : setMove(move - 1);
    }
  });
  return (
    <group>
      <mesh scale={(2, 2, 2)} ref={ball} position={[-25, 0, 0]}>
        {ballColor.map((val, ind) => {
          return (
            <Sphere
              visible
              args={[1.2, 200, 400]}
              position={[
                Math.cos(radian(Angle * ind)) * radius,
                0,
                Math.sin(radian(Angle * ind)) * radius,
              ]}
              ref={posRef}
            >
              {Math.abs(move) % 8 === ind ? (
                <MeshDistortMaterial
                  color={val.color}
                  attach="material"
                  distort={0.6}
                  speed={2}
                  roughness={0}
                />
              ) : (
                <meshStandardMaterial
                  color={val.color}
                  attach="material"
                  roughness={0.2}
                />
              )}
            </Sphere>
          );
        })}
      </mesh>
    </group>
  );
};

export default BasicBall;
