import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Globe = () => {
    const globeContainerRef = useRef(null);

    useEffect(() => {
        let scene, camera, renderer;

        const init = () => {
            // Crée une scène
            scene = new THREE.Scene();

            // Crée une caméra
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 5;

            // Crée un rendu
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            globeContainerRef.current.appendChild(renderer.domElement);

            // Crée une sphère pour représenter le globe
            const geometry = new THREE.SphereGeometry(1, 32, 32);
            const material = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 });
            const globe = new THREE.Mesh(geometry, material);
            scene.add(globe);

            // Animation de rotation du globe
            const animate = () => {
                requestAnimationFrame(animate);
                globe.rotation.y += 0.01;
                renderer.render(scene, camera);
            };

            animate();
        };

        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        init();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            globeContainerRef.current.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return <div ref={globeContainerRef} />;
};

export default Globe;
