import { Image, Plane, Text, useFont } from "@react-three/drei";
import React, { useRef } from "react";

const Text_1 = () => {
  const radian = (angle) => (angle * Math.PI) / 180;

  return (
    <group>
      <mesh position={[5, 1, 0]} rotation={[radian(-90), radian(0), radian(0)]}>
        <Text
          color="black"
          anchorX="center"
          anchorY="middle"
          position={[0, 10, 0]}
        >
          HI! my name is
        </Text>
        <Text
          color="#002da0"
          fontSize={1.2}
          anchorX="center"
          anchorY="middle"
          position={[8, 10, 0]}
        >
          Ha Yeung Yun
        </Text>
      </mesh>
    </group>
  );
};

export default Text_1;
