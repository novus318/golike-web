import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import InteractiveHoverButton from "./ui/interactive-hover-button";

gsap.registerPlugin(ScrollTrigger);

const TokenModel = () => {
    const { scene } = useGLTF("/models/golike.glb"); // Load your 3D token model
    const tokenRef = useRef<any>();
  
    useEffect(() => {
        if (scene) {
          scene.traverse((child:any) => {
            if (child.isMesh) {
              child.material.color.set("#eb5576"); // Yellow color (Hex for gold-like appearance)
            }
          });
        }
      }, [scene]);
    // Slow Y-axis rotation effect
    useFrame(() => {
      if (tokenRef.current) {
        tokenRef.current.rotation.y += 0.005; // Rotate on Y-axis
      }
    });
  
    return (
      <primitive
        ref={tokenRef}
        object={scene}
        scale={31} // Adjust the scale as needed
        rotation={[8, 0, 0]} // Initial rotation: [X, Y, Z] (facing the viewer like a coin)
      />
    );
  };
  

const TokenSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // Animation starts when 80% of the section is in view
        },
      }
    );
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight sm:text-5xl">
              Our Native <span className="text-primary font-bold text-6xl">Token</span>
            </h2>
            <p className="mt-4 text-lg text-secondary-foreground/80">
              Meet <strong>GoLike Token</strong>, the core of our ecosystem.
              Use tokens to connect with others, unlock features, and create
              meaningful connections. It powers every interaction on the platform
              with transparency and trust.
            </p>
            <p className="text-lg text-secondary-foreground/80">
              Purchase tokens easily, and start your journey in building connections today.
            </p>
          <InteractiveHoverButton
          text="Learn more"/>
          </div>

          {/* 3D Model Section */}
          <div className="h-full w-full">
            <Canvas camera={{ position: [0, 0, 7], fov: 40 }}>
              {/* Lighting */}
              <ambientLight intensity={0.4} />
              <directionalLight
                position={[10, 10, 10]}
                intensity={2}
                color="#f08193" // Primary color with 80% opacity
              />
              <pointLight
                position={[-10, -10, 10]}
                intensity={1}
                color="#f08193"
              />
              <TokenModel />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenSection;
