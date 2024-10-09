//react
import { useRef } from "react";

import * as THREE from "three";

//importando canvas
import { Canvas, useFrame } from "@react-three/fiber";

//estrutura de ceu background
import { Stars, OrbitControls, useGLTF } from "@react-three/drei";

function Cheese() {
  const { scene } = useGLTF("./Mussarela_2kg.gltf");
  const cheese = useRef<THREE.Object3D>(null);

  useFrame(() => {
    if (cheese.current) {
      cheese.current.rotation.y += 0.01;
    }
  });

  return <primitive ref={cheese} object={scene} scale={100} />;
}

export function Cheese3D() {
  return (
    <Canvas className="w-full h-full">
      {/*controle da câmera */}
      <OrbitControls />
      <Stars />
      {/* intensidade da luz no ambiente */}
      <ambientLight intensity={5} />
      {/* moveu a luz para mais perto e aumentou a intensidade*/}
      <spotLight position={[5, 10, 5]} angle={0.3} intensity={25} />{" "}
      {/* adicionando direção da luz */}
      <directionalLight
        position={[10, 10, 0]}
        intensity={1}
        color="white"
      />{" "}
      {/* adicionando ponto de luz */}
      <pointLight position={[10, 10, 10]} intensity={12} color="white" />{" "}
      <Cheese />
    </Canvas>
  );
}
