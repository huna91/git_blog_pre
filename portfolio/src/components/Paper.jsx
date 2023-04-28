import React, { useRef, useState } from "react";
import { MeshDistortMaterial, Plane } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Text_1 } from "..components";

const Paper = ({ wheel, setWheel }) => {
  const [color, setColor] = useState([
    { color: "#ffffff" },
    { color: "#ff0000" },
    { color: "#ff8c00" },
    { color: "#ffff00" },
    { color: "#008000" },
    { color: "#0000ff" },
    { color: "#4b0082" },
    { color: "#800080" },
  ]);
  const radian = (angle) => (angle * Math.PI) / 180;
  const planeRef = useRef();

  const [mcon, setMcon] = useState(false);

  useFrame((state, delta) => {
    if (wheel > 0) {
      setMcon(true);
      planeRef.current.position.x += 2 * delta;
    } else if (wheel < 0) {
      setMcon(false);
      planeRef.current.position.x -= 2 * delta;
    }
  });
  return (
    <group>
      {color.map((val, ind) => {
        // console.log();
        return (
          <mesh
            scale={[32, 35, 1]}
            position={[15 + ind * 0.5, -ind, ind * 0.2]}
            rotation={[radian(-90), radian(0), radian(0)]}
          >
            {ind === 0 ? (
              <Plane visible ref={planeRef} args={[1, 1, 1]}>
                <MeshDistortMaterial
                  attach="material"
                  distort={0.05 * ind}
                  color={val.color}
                />
                <Text_1 />
              </Plane>
            ) : (
              <Plane visible args={[1, 1, 1]}>
                <MeshDistortMaterial
                  attach="material"
                  distort={0.05 * ind}
                  color={val.color}
                />
              </Plane>
            )}
          </mesh>
        );
      })}
    </group>
  );
};

export default Paper;
