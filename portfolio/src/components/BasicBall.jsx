import React from "react";
import { Sphere } from "@react-three/drei";

const BasicBall = ({ color, position }) => {
  return (
    <group>
      <mesh scale={(2, 2, 2)}>
        <Sphere visible args={[1.2, 50, 60]} position={position}>
          <meshStandardMaterial
            color={color}
            attach="material"
            roughness={0.2}
          />
        </Sphere>
      </mesh>
    </group>
  );
};

export default BasicBall;
