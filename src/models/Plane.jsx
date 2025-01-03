import React, { useEffect, useRef } from "react";
import planeScene from "../assets/3d/low_poly_dragon_white.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);
  useEffect(() => {
    actions["BenPao"].play();
  }, [actions, isRotating]);
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
