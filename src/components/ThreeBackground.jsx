'use client';
import { useEffect, useRef } from 'react';

export default function ThreeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let camera, scene, renderer;
    let mouseX = 0, mouseY = 0;
    let targetMouseX = 0, targetMouseY = 0;
    let scrollY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;
    let animationId;
    
    let particleGeometry, particleMaterial, particles;
    let lineGeometry, lineMaterial, lines;

    const particleCount = 100;
    const maxDistance = 1.3;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = [];

    const init = async () => {
      const THREE = await import('three');

      const container = containerRef.current;
      if (!container) return;

      // Camera setup
      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.z = 4.5;

      scene = new THREE.Scene();
      scene.background = null;

      // Initialize particles positions & speeds
      const areaRange = 8;
      for (let i = 0; i < particleCount; i++) {
        // Position
        const x = (Math.random() - 0.5) * areaRange;
        const y = (Math.random() - 0.5) * areaRange;
        const z = (Math.random() - 0.5) * areaRange;

        particlePositions[i * 3] = x;
        particlePositions[i * 3 + 1] = y;
        particlePositions[i * 3 + 2] = z;

        // Speed
        particleSpeeds.push({
          x: (Math.random() - 0.5) * 0.005,
          y: (Math.random() - 0.5) * 0.005,
          z: (Math.random() - 0.5) * 0.005,
        });
      }

      // Create Particle Points
      particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

      // Draw circular texture on HTML5 Canvas
      const canvas = document.createElement('canvas');
      canvas.width = 16;
      canvas.height = 16;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 16, 16);
      const texture = new THREE.CanvasTexture(canvas);

      particleMaterial = new THREE.PointsMaterial({
        size: 0.12,
        map: texture,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      // Create Line segments
      // Allocate positions & colors buffer for rendering connections
      lineGeometry = new THREE.BufferGeometry();
      // Max possible lines for 100 particles is 100 * 99 / 2 = 4950. Allocating 3000 segments (6000 vertices) is safe.
      const maxLineSegments = 3000;
      const linePositions = new Float32Array(maxLineSegments * 2 * 3); 
      const lineColors = new Float32Array(maxLineSegments * 2 * 3);
      lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
      lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

      lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.25,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      lines = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lines);

      // Renderer setup
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      const onWindowResize = () => {
        if (!camera || !renderer) return;
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      const onMouseMove = (event) => {
        targetMouseX = (event.clientX - windowHalfX) / windowHalfX;
        targetMouseY = -(event.clientY - windowHalfY) / windowHalfY;
      };

      const onTouchMove = (event) => {
        if (!event.touches.length) return;
        targetMouseX = (event.touches[0].clientX - windowHalfX) / windowHalfX;
        targetMouseY = -(event.touches[0].clientY - windowHalfY) / windowHalfY;
      };

      const onScroll = () => {
        scrollY = window.scrollY;
      };

      window.addEventListener('resize', onWindowResize);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('touchmove', onTouchMove, { passive: true });
      window.addEventListener('scroll', onScroll);

      const animate = () => {
        animationId = requestAnimationFrame(animate);
        render();
      };

      const render = () => {
        if (!particleGeometry || !lineGeometry) return;
        
        // Smoothly interpolate mouse coords
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;

        const positions = particleGeometry.attributes.position.array;
        const linePos = lineGeometry.attributes.position.array;
        const lineCol = lineGeometry.attributes.color.array;

        let lineIndex = 0;

        // Approximate mouse vector in 3D scene space
        const mouseVector = new THREE.Vector3(mouseX * 3.5, mouseY * 2.5, 0);

        // Update particle positions & cursor repulsion
        for (let i = 0; i < particleCount; i++) {
          let x = positions[i * 3];
          let y = positions[i * 3 + 1];
          let z = positions[i * 3 + 2];

          // Natural movement drift
          x += particleSpeeds[i].x;
          y += particleSpeeds[i].y;
          z += particleSpeeds[i].z;

          // Boundary bouncing
          if (x < -areaRange / 2 || x > areaRange / 2) particleSpeeds[i].x *= -1;
          if (y < -areaRange / 2 || y > areaRange / 2) particleSpeeds[i].y *= -1;
          if (z < -areaRange / 2 || z > areaRange / 2) particleSpeeds[i].z *= -1;

          // Cursor Repulsion Effect
          const particleVec = new THREE.Vector3(x, y, z);
          const distToMouse = particleVec.distanceTo(mouseVector);
          if (distToMouse < 1.8) {
            const dir = new THREE.Vector3().subVectors(particleVec, mouseVector).normalize();
            // The closer, the stronger the push force
            const force = (1.8 - distToMouse) * 0.015;
            x += dir.x * force;
            y += dir.y * force;
            z += dir.z * force;
          }

          positions[i * 3] = x;
          positions[i * 3 + 1] = y;
          positions[i * 3 + 2] = z;
        }

        particleGeometry.attributes.position.needsUpdate = true;

        // Connect nearby particles with lines
        for (let i = 0; i < particleCount; i++) {
          const x1 = positions[i * 3];
          const y1 = positions[i * 3 + 1];
          const z1 = positions[i * 3 + 2];

          for (let j = i + 1; j < particleCount; j++) {
            const x2 = positions[j * 3];
            const y2 = positions[j * 3 + 1];
            const z2 = positions[j * 3 + 2];

            const dx = x1 - x2;
            const dy = y1 - y2;
            const dz = z1 - z2;
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < maxDistance && lineIndex < maxLineSegments * 2 * 3 - 6) {
              // Add vertices for this line segment
              linePos[lineIndex] = x1;
              linePos[lineIndex + 1] = y1;
              linePos[lineIndex + 2] = z1;

              linePos[lineIndex + 3] = x2;
              linePos[lineIndex + 4] = y2;
              linePos[lineIndex + 5] = z2;

              // Color gradient fade based on distance
              const alpha = 1.0 - (dist / maxDistance);
              
              // Vertex 1: Indigo (0x6366f1)
              lineCol[lineIndex] = 0.39 * alpha;
              lineCol[lineIndex + 1] = 0.40 * alpha;
              lineCol[lineIndex + 2] = 0.95 * alpha;

              // Vertex 2: Slate Blue (0x3b82f6)
              lineCol[lineIndex + 3] = 0.23 * alpha;
              lineCol[lineIndex + 4] = 0.51 * alpha;
              lineCol[lineIndex + 5] = 0.96 * alpha;

              lineIndex += 6;
            }
          }
        }

        // Fill remaining buffer entries with zero to hide them
        for (let i = lineIndex; i < linePos.length; i++) {
          linePos[i] = 0;
          lineCol[i] = 0;
        }

        lineGeometry.attributes.position.needsUpdate = true;
        lineGeometry.attributes.color.needsUpdate = true;

        // Dynamic scene rotations based on scroll and mouse position
        scene.rotation.y = scrollY * 0.0002 + mouseX * 0.1;
        scene.rotation.x = mouseY * 0.1;

        camera.lookAt(scene.position);
        renderer.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener('resize', onWindowResize);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('scroll', onScroll);
        if (animationId) cancelAnimationFrame(animationId);
        if (renderer) {
          renderer.dispose();
          try {
            container.removeChild(renderer.domElement);
          } catch(e) {}
        }
      };
    };

    init();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-20"
      style={{ opacity: 0.85 }}
    />
  );
}
