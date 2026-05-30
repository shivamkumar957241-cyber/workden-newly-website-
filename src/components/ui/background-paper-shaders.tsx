"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

const vertexShader = `
  uniform float time;
  uniform float intensity;
  varying vec2 vUv;

  void main() {
    vUv = uv;

    vec3 pos = position;
    pos.y += sin(pos.x * 10.0 + time) * 0.1 * intensity;
    pos.x += cos(pos.y * 8.0 + time * 1.5) * 0.05 * intensity;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  uniform float intensity;
  uniform vec3 color1;
  uniform vec3 color2;
  varying vec2 vUv;

  void main() {
    vec2 uv = vUv;

    float noise = sin(uv.x * 20.0 + time) * cos(uv.y * 15.0 + time * 0.8);
    noise += sin(uv.x * 35.0 - time * 2.0) * cos(uv.y * 25.0 + time * 1.2) * 0.5;

    vec3 color = mix(color1, color2, noise * 0.5 + 0.5);
    color = mix(color, vec3(1.0), pow(abs(noise), 2.0) * intensity * 0.34);

    float glow = 1.0 - length(uv - 0.5) * 2.0;
    glow = pow(max(glow, 0.0), 2.0);

    gl_FragColor = vec4(color, glow * 0.34);
  }
`;

export function ShaderPlane({
  position,
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  color1 = "#3730A3",
  color2 = "#E0E7FF",
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  color1?: string;
  color2?: string;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  const material = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      time: { value: 0 },
      intensity: { value: 0.7 },
      color1: { value: new THREE.Color(color1) },
      color2: { value: new THREE.Color(color2) },
    }),
    [color1, color2],
  );

  useFrame((state) => {
    if (!material.current) return;
    material.current.uniforms.time.value = state.clock.elapsedTime * 0.28;
    material.current.uniforms.intensity.value = 0.55 + Math.sin(state.clock.elapsedTime * 0.7) * 0.08;
  });

  return (
    <mesh ref={mesh} position={position} rotation={rotation} scale={scale}>
      <planeGeometry args={[2, 2, 48, 48]} />
      <shaderMaterial
        ref={material}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.NormalBlending}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export function EnergyRing({
  radius = 1,
  position = [0, 0, 0],
  color = "#3730A3",
}: {
  radius?: number;
  position?: [number, number, number];
  color?: string;
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.z = state.clock.elapsedTime * 0.18;
    const material = mesh.current.material as THREE.MeshBasicMaterial;
    material.opacity = 0.08 + Math.sin(state.clock.elapsedTime * 0.9) * 0.025;
  });

  return (
    <mesh ref={mesh} position={position}>
      <ringGeometry args={[radius * 0.78, radius, 96]} />
      <meshBasicMaterial color={color} transparent opacity={0.08} depthWrite={false} side={THREE.DoubleSide} />
    </mesh>
  );
}

export default function PaperShaderBackground({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none overflow-hidden bg-white", className)}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 48 }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      >
        <ShaderPlane position={[-2.15, 0.85, 0]} rotation={[0, 0, -0.18]} scale={[2.7, 1.65, 1]} />
        <ShaderPlane position={[2.1, -0.15, -0.2]} rotation={[0, 0, 0.16]} scale={[2.25, 1.45, 1]} color1="#312E81" color2="#EEF2FF" />
        <ShaderPlane position={[0, -1.45, -0.4]} rotation={[0, 0, 0.03]} scale={[3.4, 1.1, 1]} color1="#4338CA" color2="#F8FAFC" />
        <EnergyRing radius={1.7} position={[0.25, 0.15, -0.1]} />
      </Canvas>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.58),rgba(255,255,255,0.82)_46%,rgba(255,255,255,0.96))]" />
      <div className="absolute inset-x-0 top-0 h-96 bg-[linear-gradient(to_right,rgba(55,48,163,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(55,48,163,0.035)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
    </div>
  );
}
