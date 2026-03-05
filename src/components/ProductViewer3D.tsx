"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment, ContactShadows, Center, Stage } from "@react-three/drei";
import type { Group } from "three";

function CollarModel() {
    const { scene } = useGLTF("/collier.glb");
    const groupRef = useRef<Group>(null);

    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <group ref={groupRef}>
            <Center>
                <primitive object={scene} />
            </Center>
        </group>
    );
}

useGLTF.preload("/collier.glb");

export default function ProductViewer3D() {
    return (
        <Canvas
            shadows
            camera={{ position: [0, 0, 4.5], fov: 35 }}
            style={{ width: "100%", height: "100%", background: "transparent" }}
            gl={{ antialias: true, alpha: true }}
        >
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1B1EE4" />

            <Suspense fallback={null}>
                <Stage environment="city" intensity={0.6} shadows="contact" adjustCamera={true}>
                    <CollarModel />
                </Stage>
            </Suspense>

            <OrbitControls
                enablePan={false}
                enableZoom={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 1.5}
                makeDefault
            />
        </Canvas>
    );
}
