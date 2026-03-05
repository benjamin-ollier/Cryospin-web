"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import type { Group } from "three";

function CollarModel() {
    const { scene } = useGLTF("/collier.glb");
    const groupRef = useRef<Group>(null);

    // Slow auto-rotation when user isn't interacting
    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <group ref={groupRef}>
            <primitive object={scene} scale={1} />
        </group>
    );
}

// Preload for performance
useGLTF.preload("/collier.glb");

export default function ProductViewer3D() {
    return (
        <Canvas
            camera={{ position: [0, 0, 3], fov: 45 }}
            style={{ width: "100%", height: "100%", background: "transparent" }}
            gl={{ antialias: true, alpha: true }}
        >
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
            <directionalLight position={[-5, -2, -2]} intensity={0.4} color="#1B1EE4" />
            <pointLight position={[0, 4, 0]} intensity={0.8} color="#ffffff" />

            <Suspense fallback={null}>
                <CollarModel />
                <ContactShadows
                    opacity={0.3}
                    scale={4}
                    blur={2}
                    far={3}
                    resolution={256}
                    color="#000000"
                />
                <Environment preset="city" />
            </Suspense>

            <OrbitControls
                enablePan={false}
                enableZoom={true}
                minDistance={1.5}
                maxDistance={6}
                autoRotate={false}
                makeDefault
            />
        </Canvas>
    );
}
