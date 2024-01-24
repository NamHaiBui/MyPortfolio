/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import Loader from "../components/Loader";

import { Sky, Birb, Island, Plane } from "../models";
import HomeInfo from "../components/HomeInfo";
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";
import CTA from "../components/CTA";
const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => audioRef.current.pause();
  }, [isPlayingMusic]);
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };
  const adjustPlaneForScreenSize = () => {
    let screenScale = null;
    let screenPosition = null;
    if (window.innerWidth < 768) {
      screenScale = [50, 50, 50];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [100, 100, 100];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-fill h-full bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight itensity={0.5} />
          {/* <pointLight />
          <spotLight /> */}
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Sky isRotating={isRotating} />
          <Birb />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound control"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
      <CTA />
    </section>
  );
};

export default Home;
