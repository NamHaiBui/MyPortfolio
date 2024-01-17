import React from "react";
import skyScene from "../assets/3d/sky.glb";
const Sky = () => {
  return (
    <mesh>
      <primitive object={skyScene.scene} />
    </mesh>
  );
};

export default Sky;
