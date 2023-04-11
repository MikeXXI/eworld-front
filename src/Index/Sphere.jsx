import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import * as THREE from 'three';

function Cube(props) {
  const { position, link } = props;
  const ref = useRef();

  // Animation pour faire tourner les cubes
  //useFrame(() => (ref.current.rotation.x += 0.01));

  return (
    <mesh
      ref={ref}
      position={position}
      onClick={() => window.open(link, '_blank')}
    >
      <boxBufferGeometry attach="geometry" args={[10, 50, 5]} />
      <meshBasicMaterial attach="material" color={0xffffff} />
    </mesh>
  );
}

function Sphere(props) {
  const { cubes, mouseDown } = props;
  const sphereRef = useRef();

  // Animation pour faire tourner la sphère
  useFrame(() => {
    if (!mouseDown) {
      sphereRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={sphereRef}>
      <sphereBufferGeometry attach="geometry" args={[100, 10, 10]} />
      <meshBasicMaterial attach="material" map={new THREE.TextureLoader().load()} transparent={true} opacity={0.9} side={THREE.DoubleSide} />
      {cubes.map((cube, index) => (
        <Cube key={index} position={cube.position} link={cube.link} />
      ))}
    </mesh>
  );
}

function App() {
  const [cubes, setCubes] = useState([]);
  const [mouseDown, setMouseDown] = useState(false);

  useEffect(() => {
    // Initialisation des cubes de lien sur la sphère
    const tempCubes = [];
    const cubeCount = 50;
    for (let i = 0; i < cubeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / cubeCount);
      const theta = Math.sqrt(cubeCount * Math.PI) * phi;
      const x = 100 * Math.cos(theta) * Math.sin(phi);
      const y = 100 * Math.sin(theta) * Math.sin(phi);
      const z = 100 * Math.cos(phi);
      tempCubes.push({ position: new THREE.Vector3(x, y, z), link: `https://lien${i + 1}.com` });
    }
    setCubes(tempCubes);
  }, []);
  return (
    <Canvas
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      onMouseMove={(e) => {
        if (mouseDown) {
          const x = e.clientX;
          const y = e.clientY;
          const width = window.innerWidth;
          const height = window.innerHeight;
          const xDiff = x / width - 0.5;
          const yDiff = y / height - 0.5;
          const sphere = document.querySelector('canvas');
          sphere.style.cursor = 'grabbing';
          sphere.style.transform = `rotateX(${-yDiff * 90}deg) rotateY(${-xDiff * 90}deg)`;
        }
      }}
      onMouseLeave={() => {
        if (mouseDown) {
          const sphere = document.querySelector('canvas');
          sphere.style.cursor = 'grab';
          sphere.style.transform = `rotateX(0deg) rotateY(0deg)`;
        }
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Sphere cubes={cubes} mouseDown={mouseDown} />
    </Canvas>
  );
}


export default App;