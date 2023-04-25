import React from "react";
import { Sphere } from "@react-three/drei";

const BasicBall = ({ color, position }) => {
  return (
    <group>
      <mesh scale={(2, 2, 2)}>
        <Sphere visible args={[1.2, 20, 40]} position={position}>
          <meshStandardMaterial color={color} attach="material" />
        </Sphere>
      </mesh>
    </group>
  );
};

export default BasicBall;
