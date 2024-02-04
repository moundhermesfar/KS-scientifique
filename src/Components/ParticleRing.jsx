import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "./utils";

const ParticleRing = ({ isMobile }) => {
  return (
    <div className="relative w-full h-full">
      <Canvas
        camera={{
          position: [-8, -10.5, -5],
        }}
        style={isMobile ? { height: "50vh" } : { height: "650px" }}
        className="bg-white"
      >
        <directionalLight />
        <pointLight position={[30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ParticleRing;
