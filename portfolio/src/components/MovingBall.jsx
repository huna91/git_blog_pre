import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const MovingBall = ({ color }) => {
  return (
    <group>
      <mesh scale={(2, 2, 2)}>
        <Sphere visible args={[1.2, 200, 400]}>
          <MeshDistortMaterial
            color={color}
            attach="material"
            distort={0.5}
            speed={2}
            roughness={0}
          />
        </Sphere>
      </mesh>
    </group>
  );
};

export default MovingBall;
