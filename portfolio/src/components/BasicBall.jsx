import React, { useEffect, useRef, useState } from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const BasicBall = ({ wheel, setWheel }) => {
  const ball = useRef();
  let position = useRef();
  const figure = 8;
  const Angle = 360 / figure;
  const radian = (angle) => (angle * Math.PI) / 180;
  const radius = 10;

  const [move, setMove] = useState(0);
  const [mcon, setMcon] = useState(false);

  // 빨,주,노,초,파,남,보 7개
  const [ballColor, setBallColor] = useState([
    { color: "#ff0000" },
    { color: "#ff8c00" },
    { color: "#ffff00" },
    { color: "#008000" },
    { color: "#0000ff" },
    { color: "#4b0082" },
    { color: "#800080" },
    { color: "#ffffff" },
  ]);
  // console.log(position.current.position.x);
  useFrame((state, delta) => {
    if (wheel === 100) {
      setMcon(true);
      ball.current.rotation.y += radian(1);
    } else if (wheel === -100) {
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
      mcon ? setMove((move + 1) % 8) : setMove((8 - move - 1) % 8);
    }
  });
  return (
    <group>
      <mesh scale={(2, 2, 2)} ref={ball} position={[-30, 0, -5]}>
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
              ref={position}
            >
              {move === ind ? (
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
