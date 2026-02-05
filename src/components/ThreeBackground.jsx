'use client';
import { useEffect, useRef } from 'react';

export default function ThreeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let camera, scene, renderer;
    let mouseX = 0, mouseY = 0;
    let scrollY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;
    let animationId;
    let meshes = [];

    const init = async () => {
      const THREE = await import('three');

      const container = containerRef.current;
      if (!container) return;

      // Camera setup
      camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 20);
      camera.position.z = 4;

      scene = new THREE.Scene();
      scene.background = null; // Transparent for light theme

      // Create multiple geometric shapes
      const geometries = [
        new THREE.TorusKnotGeometry(0.4, 0.15, 100, 16),
        new THREE.OctahedronGeometry(0.5),
        new THREE.IcosahedronGeometry(0.5),
        new THREE.TetrahedronGeometry(0.6),
        new THREE.BoxGeometry(0.6, 0.6, 0.6),
      ];

      const count = 50;
      const scale = 5;

      for (let i = 0; i < count; i++) {
        const r = Math.random() * 2.0 * Math.PI;
        const z = (Math.random() * 2.0) - 1.0;
        const zScale = Math.sqrt(1.0 - z * z) * scale;

        const geometry = geometries[Math.floor(Math.random() * geometries.length)];

        // Create material with depth-based coloring
        const material = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            color1: { value: new THREE.Color(0x0ea5e9) }, // Sky Blue
            color2: { value: new THREE.Color(0xd946ef) }, // Purple
            cameraNear: { value: camera.near },
            cameraFar: { value: camera.far },
          },
          vertexShader: `
            varying vec3 vPosition;
            varying float vDepth;
            uniform float time;
            
            void main() {
              vPosition = position;
              vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
              vDepth = -mvPosition.z;
              gl_Position = projectionMatrix * mvPosition;
            }
          `,
          fragmentShader: `
            uniform vec3 color1;
            uniform vec3 color2;
            uniform float time;
            uniform float cameraNear;
            uniform float cameraFar;
            varying vec3 vPosition;
            varying float vDepth;
            
            void main() {
              // Normalize depth
              float depth = (vDepth - cameraNear) / (cameraFar - cameraNear);
              depth = clamp(depth, 0.0, 1.0);
              
              // Mix colors based on depth
              vec3 color = mix(color1, color2, depth);
              
              // Add some variation based on position
              float variation = sin(vPosition.x * 3.0 + time) * 0.1 + 0.9;
              color *= variation;
              
              // Fade based on depth
              float alpha = 1.0 - depth * 0.5;
              
              gl_FragColor = vec4(color, alpha * 0.6);
            }
          `,
          transparent: true,
          side: THREE.DoubleSide,
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(
          Math.cos(r) * zScale,
          Math.sin(r) * zScale,
          z * scale
        );
        mesh.rotation.set(Math.random(), Math.random(), Math.random());

        // Store rotation speeds
        mesh.userData.rotationSpeed = {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02,
        };

        scene.add(mesh);
        meshes.push(mesh);
      }

      // Add wireframe overlay for some meshes
      for (let i = 0; i < count / 3; i++) {
        const r = Math.random() * 2.0 * Math.PI;
        const z = (Math.random() * 2.0) - 1.0;
        const zScale = Math.sqrt(1.0 - z * z) * scale;

        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const wireframeGeometry = new THREE.WireframeGeometry(geometry);

        const hue = 0.55 + Math.random() * 0.15;
        const color = new THREE.Color().setHSL(hue, 0.7, 0.5);

        const material = new THREE.LineBasicMaterial({
          color: color,
          transparent: true,
          opacity: 0.3,
        });

        const wireframe = new THREE.LineSegments(wireframeGeometry, material);
        wireframe.position.set(
          Math.cos(r) * zScale,
          Math.sin(r) * zScale,
          z * scale
        );
        wireframe.rotation.set(Math.random(), Math.random(), Math.random());

        wireframe.userData.rotationSpeed = {
          x: (Math.random() - 0.5) * 0.015,
          y: (Math.random() - 0.5) * 0.015,
          z: (Math.random() - 0.5) * 0.015,
        };

        scene.add(wireframe);
        meshes.push(wireframe);
      }

      // Renderer setup
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0); // Transparent
      container.appendChild(renderer.domElement);

      const onWindowResize = () => {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      const onMouseMove = (event) => {
        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;
      };

      const onScroll = () => {
        scrollY = window.scrollY;
      };

      window.addEventListener('resize', onWindowResize);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('scroll', onScroll);

      const clock = new THREE.Clock();

      const animate = () => {
        animationId = requestAnimationFrame(animate);
        render(clock.getElapsedTime());
      };

      const render = (time) => {
        // Update all meshes
        meshes.forEach((mesh) => {
          // Rotate meshes
          mesh.rotation.x += mesh.userData.rotationSpeed.x;
          mesh.rotation.y += mesh.userData.rotationSpeed.y;
          mesh.rotation.z += mesh.userData.rotationSpeed.z;

          // Update shader time for solid meshes
          if (mesh.material.uniforms && mesh.material.uniforms.time) {
            mesh.material.uniforms.time.value = time;
          }
        });

        // Camera follows mouse with smooth parallax
        camera.position.x += (mouseX * 0.0005 - camera.position.x) * 0.05;
        camera.position.y += (-mouseY * 0.0005 - camera.position.y) * 0.05;

        // Rotate scene based on scroll
        scene.rotation.y = scrollY * 0.0002;

        camera.lookAt(scene.position);
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
          container.removeChild(renderer.domElement);
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
      style={{ opacity: 0.4 }}
    />
  );
}
