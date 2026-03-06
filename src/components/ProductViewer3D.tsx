"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls, Center, Stage, Environment, ContactShadows } from "@react-three/drei";
import type { Group } from "three";

interface ProductViewer3DProps {
    mode?: "default" | "story";
}

function CollarModel({ scale = 1, y = 0 }: { scale?: number; y?: number }) {
    const { scene } = useGLTF("/collier.glb");
    const groupRef = useRef<Group>(null);

    useFrame((_, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <group ref={groupRef} scale={scale} position={[0, y, 0]}>
            <Center>
                <primitive object={scene} />
            </Center>
        </group>
    );
}

useGLTF.preload("/collier.glb");

export default function ProductViewer3D({ mode = "default" }: ProductViewer3DProps) {
    const isStory = mode === "story";

    return (
        <Canvas
            shadows
            camera={{ position: isStory ? [0, 0.1, 5.8] : [0, 0, 4.5], fov: isStory ? 33 : 35 }}
            style={{ width: "100%", height: "100%", background: "transparent" }}
            gl={{ antialias: true, alpha: true }}
        >
            <ambientLight intensity={isStory ? 0.65 : 0.5} />
            <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={isStory ? 1.7 : 1.5}
                castShadow
            />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1B1EE4" />

            <Suspense fallback={null}>
                {isStory ? (
                    <>
                        <Environment preset="city" />
                        <CollarModel scale={1.95} y={-0.6} />
                        <ContactShadows
                            position={[0, -1.35, 0]}
                            opacity={0.35}
                            scale={7}
                            blur={2.6}
                            far={6}
                        />
                    </>
                ) : (
                    <Stage environment="city" intensity={0.6} shadows="contact" adjustCamera={true}>
                        <CollarModel />
                    </Stage>
                )}
            </Suspense>

            <OrbitControls
                enablePan={false}
                enableZoom={false}
                target={isStory ? [0, -0.35, 0] : [0, 0, 0]}
                minPolarAngle={isStory ? Math.PI / 2.25 : Math.PI / 3}
                maxPolarAngle={isStory ? Math.PI / 1.75 : Math.PI / 1.5}
                makeDefault
            />
        </Canvas>
    );
}
