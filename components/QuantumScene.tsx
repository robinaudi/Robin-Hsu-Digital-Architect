
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Stars, Environment, Points, PointMaterial, Grid } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null);
  const sphere = new Float32Array(5000 * 3);
  
  // Create a random distribution in a sphere
  for (let i = 0; i < 5000; i++) {
    const r = 4 * Math.cbrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    sphere[i * 3] = x;
    sphere[i * 3 + 1] = y;
    sphere[i * 3 + 2] = z;
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#C5A059"
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const ConnectingNode = ({ position, color }: { position: [number, number, number]; color: string }) => {
    const ref = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (ref.current) {
            ref.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.002;
        }
    });
    return (
        <Sphere ref={ref} args={[0.1, 16, 16]} position={position}>
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
        </Sphere>
    )
}

// Default Hero Scene
export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <ParticleField />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

// Abstract Tech Scene for Certifications
export const AbstractTechScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <ConnectingNode position={[-2, 1, 0]} color="#C5A059" />
            <ConnectingNode position={[2, -1, 0]} color="#4F46E5" />
            <ConnectingNode position={[0, 0, -2]} color="#1a1a1a" />
            <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
        </Float>
      </Canvas>
    </div>
  );
}

// NEW: Cyber Grid Scene for Modern Theme
export const CyberGridScene: React.FC = () => {
    return (
        <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
            <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
                <color attach="background" args={['#000000']} />
                <ambientLight intensity={1} />
                <Stars radius={100} depth={50} count={3000} factor={4} saturation={1} fade speed={2} />
                <Grid 
                    position={[0, -2, 0]} 
                    args={[20, 20]} 
                    cellColor="#06b6d4" 
                    sectionColor="#3b82f6" 
                    fadeDistance={20}
                    fadeStrength={1.5}
                />
                 <Float speed={4} rotationIntensity={1} floatIntensity={1}>
                     <mesh position={[3, 1, -5]}>
                         <torusKnotGeometry args={[1, 0.3, 100, 16]} />
                         <meshStandardMaterial color="#06b6d4" wireframe />
                     </mesh>
                     <mesh position={[-3, 2, -2]}>
                         <icosahedronGeometry args={[1, 1]} />
                         <meshStandardMaterial color="#ec4899" wireframe />
                     </mesh>
                 </Float>
            </Canvas>
        </div>
    )
}
