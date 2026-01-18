"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

import * as THREE from "three";

function LightOrb({
    color,
    speed = 1,
    offset = 0,
    scale = 1,
    position = [0, 0, 0],
    ...props
}: any) {
    const mesh = useRef<THREE.Mesh>(null);
    const { viewport, mouse } = useThree();

    // Random movement parameters
    const timeOffset = useMemo(() => Math.random() * 100, []);

    useFrame((state: any) => {
        if (!mesh.current) return;
        const time = state.clock.getElapsedTime();

        // Smooth mouse follow with lerp (linear interpolation)
        // Convert 2D mouse ([-1, 1]) to 3D viewport coordinates
        const targetX = (mouse.x * viewport.width) / 2.5 * speed; // Divide to limit range
        const targetY = (mouse.y * viewport.height) / 2.5 * speed;

        // Movement: Mouse influence + Sine wave breathing + Initial Position
        mesh.current.position.x = THREE.MathUtils.lerp(
            mesh.current.position.x,
            targetX + position[0] + Math.sin(time * 0.5 + timeOffset) * 0.5,
            0.05 // Ease factor
        );
        mesh.current.position.y = THREE.MathUtils.lerp(
            mesh.current.position.y,
            targetY + position[1] + Math.cos(time * 0.3 + timeOffset) * 0.5,
            0.05
        );

        // Pulse scale
        const s = scale + Math.sin(time * 0.5 + offset) * 0.1;
        mesh.current.scale.set(s, s, s);
    });

    return (
        <mesh ref={mesh} {...props}>
            <circleGeometry args={[2, 64]} />
            {/* Custom Shader Material for soft fuzzy glow without using textures to keep it instant */}
            <meshBasicMaterial
                color={color}
                transparent
                opacity={0.6}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </mesh>
    );
}

function FoggyLayer() {
    return (
        <mesh scale={[100, 100, 1]}>
            <planeGeometry />
            <meshBasicMaterial
                color="#ffffff"
                transparent
                opacity={0.8}
                blending={THREE.CustomBlending}
                blendEquation={THREE.AddEquation}
                blendSrc={THREE.DstColorFactor}
                blendDst={THREE.ZeroFactor}
            />
        </mesh>
    );
}

export default function AmbientLight() {
    return (
        <div className="fixed inset-0 pointer-events-none -z-10 bg-white">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ alpha: true, antialias: true }}
                dpr={[1, 1.5]} // Limit pixel ratio for performance
            >
                {/* Lights / Colors - Orange Brand Theme */}
                {/* Primary Orange Glow */}
                <LightOrb
                    position={[0, 0, 0]}
                    color="#fb923c"
                    scale={3.5}
                    speed={0.5}
                />

                {/* Warm Coral - Secondary */}
                <LightOrb
                    position={[-2, 2, 0]}
                    color="#fdba74"
                    scale={4.5}
                    speed={-0.3}
                    offset={2}
                />

                {/* Deep Amber - Accent */}
                <LightOrb
                    position={[2, -2, 0]}
                    color="#f97316"
                    scale={2.5}
                    speed={0.2}
                    offset={4}
                />

                {/* Subtle Peach - Background Fill */}
                <LightOrb
                    position={[3, 1, 0]}
                    color="#fed7aa"
                    scale={3}
                    speed={0.15}
                    offset={6}
                />

                {/* Blurring Glass Effect is usually CSS, but we use simple meshes blending here */}
            </Canvas>
            {/* CSS Blur Filter is still the cheapest way to blur the WHOLE canvas content 
          WebGL Blur is expensive (post-processing). 
      */}
            <div className="absolute inset-0 backdrop-blur-[100px]" />
        </div>
    );
}
