//react
import { useRef } from "react";

import * as THREE from "three";

//importando canvas
import { Canvas, useFrame } from "@react-three/fiber";

//estrutura de ceu background
import { OrbitControls, useGLTF } from "@react-three/drei";

function Cheese() {
  const { scene } = useGLTF("Mussarela_2kg.gltf");
  const cheeseRef = useRef<THREE.Object3D>(null);

  useFrame(() => {
    if (cheeseRef.current) {
      cheeseRef.current.rotation.y += 0.01;
    }
  });

  return (
    <primitive
      ref={cheeseRef}
      object={scene}
      scale={0.5}
      position={[0, 0, 0]}
    />
  );
}

export function Cheese3D() {
  return (
    <Canvas
      camera={{ position: [0, 1, 7], fov: 50 }}
      style={{ height: window.innerHeight }}
      className="flex items-center justify-center max-w-3xl"
    >
      {/*controle da câmera */}
      <OrbitControls />
      {/* intensidade da luz no ambiente */}
      <ambientLight intensity={3} />
      {/* moveu a luz para mais perto e aumentou a intensidade*/}
      <spotLight position={[5, 10, 5]} angle={0.3} intensity={25} />
      {/* adicionando direção da luz */}
      <directionalLight
        position={[10, 10, 0]}
        intensity={1}
        color="white"
      />{" "}
      {/* adicionando ponto de luz */}
      <pointLight position={[10, 10, 10]} intensity={10} color="white" />
      <Cheese />
    </Canvas>
  );
}
