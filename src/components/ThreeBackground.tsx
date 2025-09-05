import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField: React.FC = () => {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(1500 * 3); // Reduced for better performance
    
    for (let i = 0; i < 1500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      // Smoother, slower rotation
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
};

const FloatingCube: React.FC<{ position: [number, number, number]; delay: number }> = ({ position, delay }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      // Smoother, more organic movement
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3 + delay) * 0.2;
      ref.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.2 + delay) * 0.3;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4 + delay) * 0.8;
      ref.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.3 + delay) * 0.3;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.4, 0.4, 0.4]} />
      <meshStandardMaterial 
        color="#6366f1" 
        transparent 
        opacity={0.2}
        roughness={0.1}
        metalness={0.8}
      />
    </mesh>
  );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 will-change-transform">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]} // Limit pixel ratio for better performance
        performance={{ min: 0.5 }} // Performance optimization
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        
        <ParticleField />
        
        <FloatingCube position={[-4, 2, -3]} delay={0} />
        <FloatingCube position={[4, -2, -4]} delay={1} />
        <FloatingCube position={[0, 3, -5]} delay={2} />
        <FloatingCube position={[-2, -3, -2]} delay={3} />
        <FloatingCube position={[3, 1, -6]} delay={4} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;