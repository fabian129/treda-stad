"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  uniform vec3 colorGrid;
  uniform vec3 colorRunner;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;
    
    // Scale the grid
    float scale = 20.0;
    vec2 gridUv = fract(uv * scale);
    vec2 id = floor(uv * scale);

    // 1. Base Grid Lines
    // Calculate distance to the edge of the cell (0.0 to 1.0)
    // We want lines at 0.0 and 1.0, so centered at 0.0 or 1.0
    // Simpler: use step for thickness
    float thickness = 0.05;
    float xLine = step(1.0 - thickness, gridUv.x) + step(gridUv.x, thickness);
    float yLine = step(1.0 - thickness, gridUv.y) + step(gridUv.y, thickness);
    float grid = max(xLine, yLine);

    // 2. Runners (Particles moving along lines)
    // Horizontal runners
    float hRunnerSpeed = time * 2.0;
    // Only appear on some rows (using random based on id.y)
    float hRowSelect = step(0.8, fract(sin(id.y * 12.9898) * 43758.5453)); 
    // Pulse moves across x
    float hPulse = smoothstep(0.0, 1.0, sin(uv.x * 5.0 + hRunnerSpeed - id.y)); // Varied offset
    // Constrain to the line (yLine) area roughly? No, constrain to the *center* of the line?
    // Let's just light up the grid lines themselves based on a wave
    
    float runner = 0.0;
    
    // Horizontal flow
    float hFlow = sin(uv.x * 3.0 + time * 2.0 + id.y * 5.0);
    hFlow = smoothstep(0.95, 1.0, hFlow); // Sharp packet
    
    // Vertical flow
    float vFlow = sin(uv.y * 3.0 + time * 1.5 + id.x * 10.0);
    vFlow = smoothstep(0.95, 1.0, vFlow);

    // Apply flow strictly to the grid lines
    // We use the grid mask we calculated earlier
    // But we want to separate x and y lines to apply direction properly
    
    float gridX = step(1.0 - thickness, gridUv.x) + step(gridUv.x, thickness); // Vertical lines
    float gridY = step(1.0 - thickness, gridUv.y) + step(gridUv.y, thickness); // Horizontal lines
    
    float runnerIntensity = 0.0;
    runnerIntensity += gridY * hFlow * hRowSelect; // Horizontal runners on Y lines
    runnerIntensity += gridX * vFlow * step(0.8, fract(sin(id.x * 78.233) * 43758.5453)); // Vertical runners

    // 3. Compose
    vec3 color = vec3(0.0);
    
    // Base grid color (dim)
    color += colorGrid * grid * 0.15;
    
    // Runner color (bright)
    color += colorRunner * runnerIntensity * 2.0;

    // Distance fade (Vignette)
    float dist = distance(uv, vec2(0.5));
    float alpha = 1.0 - smoothstep(0.3, 0.7, dist);

    gl_FragColor = vec4(color, alpha * grid); // Only render where there is grid
  }
`;

function GridMesh() {
    const mesh = useRef<THREE.Mesh>(null);
    const materialRef = useRef<THREE.ShaderMaterial>(null);

    const uniforms = useMemo(
        () => ({
            time: { value: 0 },
            colorGrid: { value: new THREE.Color("#444444") },
            colorRunner: { value: new THREE.Color("#FF9F1C") }, // Zaitex Orange
        }),
        []
    );

    useFrame((state) => {
        if (materialRef.current) {
            materialRef.current.uniforms.time.value = state.clock.getElapsedTime();
        }
    });

    return (
        <mesh ref={mesh}>
            <planeGeometry args={[2, 2]} />
            <shaderMaterial
                ref={materialRef}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                transparent={true}
            />
        </mesh>
    );
}

interface AnimatedGridProps {
    className?: string;
}

export function AnimatedGrid({ className }: AnimatedGridProps) {
    return (
        <div className={cn("absolute inset-0 z-0 pointer-events-none opacity-80", className)}>
            <Canvas
                camera={{ position: [0, 0, 1] }}
                dpr={[1, 2]}
                gl={{ alpha: true }}
            >
                <GridMesh />
            </Canvas>
        </div>
    );
}
