import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface ThreeDModelProps {
  modelPath: string;
  rotation: { x: number; y: number; z: number };
  primaryColor?: string;
  allowViewControl?: boolean;
}

const ThreeDModel: React.FC<ThreeDModelProps> = ({
  modelPath,
  rotation = { x: 0, y: 0.01, z: 0 },
  primaryColor = "#FFD700",
  allowViewControl = true,
}) => {
  const modelRef = useRef<THREE.Group>(null);

  let scene;
  try {
    ({ scene } = useGLTF(modelPath));
  } catch (error) {
    console.error("Failed to load model:", error);
    return <div>Error loading model.</div>;
  }

  // Apply rotation animation
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.x += rotation.x;
      modelRef.current.rotation.y += rotation.y;
      modelRef.current.rotation.z += rotation.z;
    }
  });

  // Apply color
  if (primaryColor && scene) {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          (mesh.material as THREE.MeshStandardMaterial).color = new THREE.Color(primaryColor);
        }
      }
    });
  }

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      {scene ? (
        <primitive object={scene} ref={modelRef} scale={1.5} position={[0, -1, 0]} />
      ) : (
        <div>Loading model...</div>
      )}
      {allowViewControl && <OrbitControls />}
    </Canvas>
  );
};

export default ThreeDModel;
