import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { Mesh } from 'three';

const FloatingOrb = () => {
    const meshRef = useRef<Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
        meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
    });

    return (
        <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.1}>
            <mesh ref={meshRef} position={[0, 0, 0]}>
                <icosahedronGeometry args={[1.4, 0]} />
                <meshStandardMaterial color="#f0c94a" roughness={0.35} metalness={0.2} />
            </mesh>
        </Float>
    );
};

const HeroTextBackground: React.FC = () => {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas className="pointer-events-none" camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[3, 3, 4]} intensity={0.8} />
                <FloatingOrb />
            </Canvas>
        </div>
    );
};

export default HeroTextBackground;
