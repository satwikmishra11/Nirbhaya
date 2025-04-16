
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Group } from 'three';

// Simple bracelet model when we don't have a real GLTF file
function SimpleBracelet({ color = '#9b87f5' }) {
  const group = useRef<Group>(null);
  
  return (
    <group ref={group} rotation={[0, 0, 0]}>
      {/* Main bracelet ring */}
      <mesh>
        <torusGeometry args={[1, 0.25, 16, 100]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.8} />
      </mesh>
      
      {/* SOS button */}
      <mesh position={[0, 0, 1.25]}>
        <cylinderGeometry args={[0.3, 0.3, 0.15, 32]} />
        <meshStandardMaterial color="#ff4a6e" roughness={0.2} />
      </mesh>
      
      {/* Display panel */}
      <mesh position={[0, 0.8, 0.7]} rotation={[0.5, 0, 0]}>
        <boxGeometry args={[0.8, 0.4, 0.1]} />
        <meshStandardMaterial color="#111" roughness={0.1} metalness={0.5} />
      </mesh>
    </group>
  );
}

interface BraceletModelProps {
  height?: string;
  width?: string;
  className?: string;
  color?: string;
}

export default function BraceletModel({ 
  height = "300px", 
  width = "100%", 
  className = "",
  color = "#9b87f5"
}: BraceletModelProps) {
  return (
    <div style={{ height, width }} className={className}>
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <SimpleBracelet color={color} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={1}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
