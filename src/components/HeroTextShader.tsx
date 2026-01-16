// import React, { useEffect, useMemo, useRef, useState } from 'react';
// import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import { Html } from '@react-three/drei';
// import * as THREE from 'three';
// import CustomShaderMaterial from 'three-custom-shader-material';
// import html2canvas from 'html2canvas';
// import vertexShader from '../assets/shaders/vertex.glsl?raw';
// import fragmentShader from '../assets/shaders/fragment.glsl?raw';

// const useDomTexture = (domEl: HTMLDivElement | null) => {
//     const [texture, setTexture] = useState<THREE.Texture>();

//     useEffect(() => {
//         if (!domEl) return;

//         const capture = async () => {
//             const canvas = await html2canvas(domEl, { backgroundColor: null, scale: 2 });
//             const nextTexture = new THREE.CanvasTexture(canvas);
//             nextTexture.needsUpdate = true;
//             setTexture(nextTexture);
//         };

//         capture();
//         const onResize = () => capture();
//         window.addEventListener('resize', onResize);
//         return () => window.removeEventListener('resize', onResize);
//     }, [domEl]);

//     return texture;
// };

// const ShaderScene = ({ textEl }: { textEl: HTMLDivElement | null }) => {
//     const materialRef = useRef<THREE.ShaderMaterial | null>(null);
//     const { width, height } = useThree((state) => state.viewport);
//     const texture = useDomTexture(textEl);
//     const mouseLerped = useRef({ x: 0, y: 0 });

//     const uniforms = useMemo(
//         () => ({
//             uTexture: { value: texture },
//             uMouse: { value: new THREE.Vector2(0, 0) },
//         }),
//         [texture]
//     );

//     useFrame((state) => {
//         if (!texture || !materialRef.current) return;
//         mouseLerped.current.x = THREE.MathUtils.lerp(mouseLerped.current.x, state.mouse.x, 0.08);
//         mouseLerped.current.y = THREE.MathUtils.lerp(mouseLerped.current.y, state.mouse.y, 0.08);
//         materialRef.current.uniforms.uMouse.value.x = mouseLerped.current.x;
//         materialRef.current.uniforms.uMouse.value.y = mouseLerped.current.y;
//     });

//     if (!texture) return null;

//     return (
//         <mesh>
//             <planeGeometry args={[width, height, 200, 200]} />
//             <CustomShaderMaterial
//                 ref={materialRef}
//                 baseMaterial={THREE.MeshStandardMaterial}
//                 vertexShader={vertexShader}
//                 fragmentShader={fragmentShader}
//                 uniforms={uniforms}

//             />
//             <ambientLight intensity={0.7} />
//             <directionalLight position={[2, 4, 5]} intensity={0.9} />
//         </mesh>
//     );
// };

// const HeroTextShader: React.FC = () => {
//     const [textEl, setTextEl] = useState<HTMLDivElement | null>(null);

//     return (
//         <div className="relative w-full max-w-5xl h-[360px]">
//             <div className="absolute -left-[9999px] -top-[9999px]">
//                 <div
//                     ref={setTextEl}
//                     className="text-gray-900"
//                     style={{
//                         fontFamily: 'Renade, system-ui, sans-serif',
//                         fontWeight: 800,
//                         letterSpacing: '0.3em',
//                         fontSize: '96px',
//                         lineHeight: '1',
//                     }}
//                 >
//                     <div>GELBE</div>
//                     <div style={{ display: 'flex', alignItems: 'baseline', marginTop: '-175px' }}>
//                         <span>SEITEN</span>
//                         <span style={{ fontSize: '300px', color: '#f5c84a', marginLeft: '0.1em' }}>.</span>
//                     </div>
//                 </div>
//             </div>
//             <Canvas className="absolute inset-0" camera={{ position: [0, 0, 6], fov: 45 }}>
//                 <Html prepend fullscreen zIndexRange={[-1, -10]}>
//                     <div className="absolute inset-0 pointer-events-none" />
//                 </Html>
//                 <ShaderScene textEl={textEl} />
//             </Canvas>
//         </div>
//     );
// };

// export default HeroTextShader;
