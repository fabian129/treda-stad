"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

/**
 * PrismBar
 * A physical glass rod that sits at the edge of the screen.
 * Uses Drei's MeshTransmissionMaterial for realistic refraction and chromatic aberration.
 */
function PrismBar({ position = [0, 0, 0] }: { position?: [number, number, number] }) {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (mesh.current) {
            // Subtle slow rotation to make the light shimmering alive
            mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            mesh.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05;
        }
    });

    return (
        <group position={new THREE.Vector3(...position)}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <mesh ref={mesh} rotation={[0, 0, Math.PI / 2]}>
                    {/* Long thin cylinder acting as a lens/rod */}
                    <cylinderGeometry args={[0.08, 0.08, 14, 16]} />
                    <MeshTransmissionMaterial
                        backside
                        backsideThickness={2}
                        thickness={1}
                        chromaticAberration={0.4} // Awwwards style chromatic edge
                        anisotropy={0.5}
                        distortion={0.2}
                        distortionScale={0.3}
                        temporalDistortion={0.1}
                        iridescence={0.5}
                        roughness={0.1}
                        clearcoat={1}
                        color={"#EEEEEE"}
                        resolution={512}
                    />
                </mesh>
            </Float>
        </group>
    );
}

interface GlassPrismProps {
    className?: string;
    position?: "top" | "bottom";
}

export function GlassPrism({ className, position = "bottom" }: GlassPrismProps) {
    return (
        <div className={cn("absolute left-0 right-0 h-32 pointer-events-none z-50", className)}>
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true, antialias: true }} dpr={[1, 2]}>
                <ambientLight intensity={1.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                {/* City environment gives the glass something to cool reflect */}
                <Environment preset="city" />

                <PrismBar position={[0, 0, 0]} />
            </Canvas>
        </div>
    );
}
