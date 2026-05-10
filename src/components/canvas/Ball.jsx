import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const StaticBall = ({ icon }) => {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <img
        src="/ball.png"
        alt="ball"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
      <img
        src={icon}
        alt="tech"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "40%",
          height: "40%",
          objectFit: "contain",
        }}
      />
    </div>
  );
};

const BallCanvas = ({ icon }) => {
  const [isAndroid] = useState(() => {
    if (typeof window === "undefined") return false;
    return /Android/i.test(navigator.userAgent);
  });

  if (isAndroid) {
    return <StaticBall icon={icon} />;
  }

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;