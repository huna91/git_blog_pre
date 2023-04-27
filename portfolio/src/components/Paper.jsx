import React, { useRef } from "react";
import { MeshDistortMaterial, Plane } from "@react-three/drei";

const Paper = ({ color }) => {
  const radian = (angle) => (angle * Math.PI) / 180;
  const colorRef = useRef();
  return (
    <group>
      {color.map((val, ind) => {
        return (
          <mesh
            scale={[32, 35, 1]}
            position={[15 + ind * 0.5, -ind, ind * 0.2]}
            rotation={[radian(-90), radian(0), radian(0)]}
          >
            <Plane visible ref={colorRef} args={[1, 1, 1]}>
              <MeshDistortMaterial
                attach="material"
                distort={0.05 * ind}
                color={val.color}
              />
            </Plane>
          </mesh>
        );
      })}
    </group>
  );
};

export default Paper;
