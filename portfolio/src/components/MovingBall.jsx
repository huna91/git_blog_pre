import React, { useState } from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

const MovingBall = ({ position, color }) => {
  // const [_scale, _setScale] = useState((2, 2, 2));
  return (
    <group>
      <mesh scale={(2, 2, 2)}>
        <Sphere visible args={[1.2, 200, 400]} position={position}>
          <MeshDistortMaterial
            color={color}
            attach="material"
            distort={0.6}
            speed={2}
            roughness={0}
          />
        </Sphere>
      </mesh>
    </group>
  );
};

export default MovingBall;
