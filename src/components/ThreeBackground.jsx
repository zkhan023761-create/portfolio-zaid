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
    let animationId;

    let starGeometry, starMaterial, stars;
    let nebulaPoints;

    const starCount = 350;
    const starPositions = new Float32Array(starCount * 3);
    const starScales = new Float32Array(starCount);
    const starSpeeds = [];

    const init = async () => {
      const THREE = await import('three');

      const container = containerRef.current;
      if (!container) return;

      const width = window.innerWidth;
      const height = window.innerHeight;

      // Camera setup with deep space frustum
      camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 1000);
      camera.position.z = 5.0;

      scene = new THREE.Scene();
      scene.background = null;

      // 1. Generate Deep Space Cosmic Stars
      const spreadX = 22;
      const spreadY = 16;
      const spreadZ = 20;

      for (let i = 0; i < starCount; i++) {
        starPositions[i * 3] = (Math.random() - 0.5) * spreadX;
        starPositions[i * 3 + 1] = (Math.random() - 0.5) * spreadY;
        starPositions[i * 3 + 2] = (Math.random() - 0.5) * spreadZ;

        starScales[i] = Math.random() * 0.8 + 0.2;

        starSpeeds.push({
          x: (Math.random() - 0.5) * 0.0015,
          y: (Math.random() - 0.5) * 0.0015,
          twinkleSpeed: Math.random() * 0.03 + 0.01,
          phase: Math.random() * Math.PI * 2,
        });
      }

      starGeometry = new THREE.BufferGeometry();
      starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
      starGeometry.setAttribute('scale', new THREE.BufferAttribute(starScales, 1));

      // Circular starlight texture with soft flare
      const starCanvas = document.createElement('canvas');
      starCanvas.width = 32;
      starCanvas.height = 32;
      const starCtx = starCanvas.getContext('2d');
      const starGrad = starCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
      starGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      starGrad.addColorStop(0.2, 'rgba(199, 210, 254, 0.8)');
      starGrad.addColorStop(0.6, 'rgba(99, 102, 241, 0.3)');
      starGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      starCtx.fillStyle = starGrad;
      starCtx.fillRect(0, 0, 32, 32);

      const starTexture = new THREE.CanvasTexture(starCanvas);

      starMaterial = new THREE.PointsMaterial({
        size: 0.16,
        map: starTexture,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      stars = new THREE.Points(starGeometry, starMaterial);
      scene.add(stars);

      // 2. Add Cosmic Nebula Clusters
      const nebulaCount = 120;
      const nebulaPositions = new Float32Array(nebulaCount * 3);
      const nebulaColors = new Float32Array(nebulaCount * 3);

      const nebulaPalette = [
        new THREE.Color(0x6366f1), // Indigo
        new THREE.Color(0x3b82f6), // Blue
        new THREE.Color(0x06b6d4), // Cyan
        new THREE.Color(0x8b5cf6), // Violet
        new THREE.Color(0xd946ef), // Cosmic Magenta
      ];

      for (let i = 0; i < nebulaCount; i++) {
        // Form an organic spiral/cloud formation
        const radius = Math.random() * 9 + 2;
        const angle = Math.random() * Math.PI * 2;
        nebulaPositions[i * 3] = Math.cos(angle) * radius + (Math.random() - 0.5) * 3;
        nebulaPositions[i * 3 + 1] = Math.sin(angle) * radius * 0.6 + (Math.random() - 0.5) * 2;
        nebulaPositions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 4;

        const color = nebulaPalette[Math.floor(Math.random() * nebulaPalette.length)];
        nebulaColors[i * 3] = color.r;
        nebulaColors[i * 3 + 1] = color.g;
        nebulaColors[i * 3 + 2] = color.b;
      }

      const nebulaGeometry = new THREE.BufferGeometry();
      nebulaGeometry.setAttribute('position', new THREE.BufferAttribute(nebulaPositions, 3));
      nebulaGeometry.setAttribute('color', new THREE.BufferAttribute(nebulaColors, 3));

      // Nebula Cloud Soft Particle
      const cloudCanvas = document.createElement('canvas');
      cloudCanvas.width = 64;
      cloudCanvas.height = 64;
      const cloudCtx = cloudCanvas.getContext('2d');
      const cloudGrad = cloudCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
      cloudGrad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      cloudGrad.addColorStop(0.3, 'rgba(165, 180, 252, 0.4)');
      cloudGrad.addColorStop(0.7, 'rgba(99, 102, 241, 0.15)');
      cloudGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      cloudCtx.fillStyle = cloudGrad;
      cloudCtx.fillRect(0, 0, 64, 64);

      const cloudTexture = new THREE.CanvasTexture(cloudCanvas);

      const nebulaMaterial = new THREE.PointsMaterial({
        size: 0.9,
        map: cloudTexture,
        vertexColors: true,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });

      nebulaPoints = new THREE.Points(nebulaGeometry, nebulaMaterial);
      scene.add(nebulaPoints);

      // WebGL Renderer with High Precision & Alpha
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
      renderer.setPixelRatio(Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2));
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      const onWindowResize = () => {
        if (!camera || !renderer) return;
        const w = window.innerWidth;
        const h = window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      const onMouseMove = (event) => {
        const halfX = window.innerWidth / 2;
        const halfY = window.innerHeight / 2;
        targetMouseX = (event.clientX - halfX) / halfX;
        targetMouseY = -(event.clientY - halfY) / halfY;
      };

      const onScroll = () => {
        scrollY = window.scrollY;
      };

      window.addEventListener('resize', onWindowResize, { passive: true });
      window.addEventListener('mousemove', onMouseMove, { passive: true });
      window.addEventListener('scroll', onScroll, { passive: true });

      let clock = 0;

      const animate = () => {
        animationId = requestAnimationFrame(animate);
        clock += 0.015;

        // Smooth cursor interpolation
        mouseX += (targetMouseX - mouseX) * 0.04;
        mouseY += (targetMouseY - mouseY) * 0.04;

        if (starGeometry && stars) {
          const pos = starGeometry.attributes.position.array;
          for (let i = 0; i < starCount; i++) {
            // Subtle slow stellar drift
            pos[i * 3] += starSpeeds[i].x;
            pos[i * 3 + 1] += starSpeeds[i].y;

            // Loop boundaries
            if (pos[i * 3] > spreadX / 2) pos[i * 3] = -spreadX / 2;
            if (pos[i * 3] < -spreadX / 2) pos[i * 3] = spreadX / 2;
            if (pos[i * 3 + 1] > spreadY / 2) pos[i * 3 + 1] = -spreadY / 2;
            if (pos[i * 3 + 1] < -spreadY / 2) pos[i * 3 + 1] = spreadY / 2;
          }
          starGeometry.attributes.position.needsUpdate = true;

          // Twinkle effect
          starMaterial.opacity = 0.65 + Math.sin(clock * 2) * 0.15;
        }

        if (nebulaPoints) {
          nebulaPoints.rotation.z = clock * 0.02;
          nebulaPoints.rotation.y = clock * 0.015;
        }

        // Camera responds gracefully to mouse & scroll
        camera.position.x = mouseX * 0.45;
        camera.position.y = mouseY * 0.35 - (scrollY * 0.001);
        camera.lookAt(0, -scrollY * 0.0008, 0);

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener('resize', onWindowResize);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('scroll', onScroll);
        if (animationId) cancelAnimationFrame(animationId);
        if (renderer) {
          renderer.dispose();
          try {
            container.removeChild(renderer.domElement);
          } catch (e) {}
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
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.35 }}
    />
  );
}
