import React, { useEffect } from "react";
import birdScene from "../assets/3d/bird.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
const Birb = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);
  useFrame(({ clock, camera }) => {
    if (birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.position.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x + 10) {
      birdRef.current.rotation.y = 0;
    }
    birdRef.current.rotation.y += Math.sin(clock.elapseTime) * 0.2 + 2;
    if (birdRef.current.rotation.y == 0) {
      birdRef.current.position.x += 0.1;
      birdRef.current.position.z -= 0.1;
    } else {
      birdRef.current.position.x += -0.1;
      birdRef.current.position.z -= -0.1;
    }
  });
  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} ref={birdRef} />
    </mesh>
  );
};

export default Birb;
