'use client';
import { useEffect, useRef } from 'react';

export default function ThreeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let camera, scene, renderer;
    let mouseX = 0, mouseY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;
    let animationId;
    let meshes = [];

    // Linked particles variables
    let linkedParticles = [];
    let particleGeometry, particleMaterial, particleSystem;
    let lineGeometry, lineMaterial, lineSystem;
    const maxParticles = 300;
    const maxConnections = 2;
    const connectionDistance = 120;

    // Billboard particles (from the example)
    let billboardParticles, billboardMaterial;
    let billboardParticles2, billboardMaterial2; // Second layer

    class Particle {
      constructor(x, y, z) {
        this.position = { x, y, z };
        this.velocity = {
          x: (Math.random() - 0.5) * 1.5,
          y: (Math.random() - 0.5) * 1.5,
          z: (Math.random() - 0.5) * 1.5
        };
        this.life = 1.0;
        this.size = Math.random() * 1.5 + 0.5;
        this.hue = 0.55 + Math.random() * 0.15;
      }

      update(delta) {
        this.position.x += this.velocity.x * delta * 10;
        this.position.y += this.velocity.y * delta * 10;
        this.position.z += this.velocity.z * delta * 10;

        this.velocity.x *= 0.98;
        this.velocity.y *= 0.98;
        this.velocity.z *= 0.98;

        this.life -= delta * 0.3;
        return this.life > 0;
      }
    }

    const init = async () => {
      const THREE = await import('three');

      const container = containerRef.current;
      if (!container) return;

      camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 2, 2000);
      camera.position.z = 1000;

      scene = new THREE.Scene();
      scene.background = null;
      scene.fog = new THREE.Fog(0xf0f9ff, 500, 2000);

      // ===== BILLBOARD PARTICLES LAYER 1 (ORIGINAL STYLE) =====
      const billboardGeometry = new THREE.BufferGeometry();
      const billboardVertices = [];

      for (let i = 0; i < 5000; i++) {
        const x = 2000 * Math.random() - 1000;
        const y = 2000 * Math.random() - 1000;
        const z = 2000 * Math.random() - 1000;
        billboardVertices.push(x, y, z);
      }

      billboardGeometry.setAttribute('position', new THREE.Float32BufferAttribute(billboardVertices, 3));

      // Create circular sprite texture programmatically
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.5, 'rgba(255,255,255,0.5)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);

      const sprite = new THREE.CanvasTexture(canvas);

      billboardMaterial = new THREE.PointsMaterial({
        size: 15,
        sizeAttenuation: true,
        map: sprite,
        alphaTest: 0.5,
        transparent: true,
        opacity: 0.6,
      });
      billboardMaterial.color.setHSL(0.58, 0.6, 0.6);

      billboardParticles = new THREE.Points(billboardGeometry, billboardMaterial);
      scene.add(billboardParticles);

      // ===== BILLBOARD PARTICLES LAYER 2 (THREE.JS EXAMPLE STYLE) =====
      const billboardGeometry2 = new THREE.BufferGeometry();
      const billboardVertices2 = [];

      for (let i = 0; i < 10000; i++) {
        const x = 2000 * Math.random() - 1000;
        const y = 2000 * Math.random() - 1000;
        const z = 2000 * Math.random() - 1000;
        billboardVertices2.push(x, y, z);
      }

      billboardGeometry2.setAttribute('position', new THREE.Float32BufferAttribute(billboardVertices2, 3));

      billboardMaterial2 = new THREE.PointsMaterial({
        size: 35,
        sizeAttenuation: true,
        map: sprite,
        alphaTest: 0.5,
        transparent: true,
        opacity: 0.4,
      });
      billboardMaterial2.color.setHSL(1.0, 0.3, 0.7);

      billboardParticles2 = new THREE.Points(billboardGeometry2, billboardMaterial2);
      scene.add(billboardParticles2);

      // ===== DEPTH-BASED GEOMETRIC SHAPES =====
      const geometries = [
        new THREE.TorusKnotGeometry(20, 8, 100, 16),
        new THREE.OctahedronGeometry(25),
        new THREE.IcosahedronGeometry(25),
        new THREE.TetrahedronGeometry(30),
        new THREE.BoxGeometry(30, 30, 30),
      ];

      const count = 30;
      const scale = 250;

      for (let i = 0; i < count; i++) {
        const r = Math.random() * 2.0 * Math.PI;
        const z = (Math.random() * 2.0) - 1.0;
        const zScale = Math.sqrt(1.0 - z * z) * scale;

        const geometry = geometries[Math.floor(Math.random() * geometries.length)];

        const material = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            color1: { value: new THREE.Color(0x0ea5e9) },
            color2: { value: new THREE.Color(0xd946ef) },
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
              float depth = (vDepth - cameraNear) / (cameraFar - cameraNear);
              depth = clamp(depth, 0.0, 1.0);
              
              vec3 color = mix(color1, color2, depth);
              float variation = sin(vPosition.x * 0.5 + time) * 0.1 + 0.9;
              color *= variation;
              
              float alpha = 1.0 - depth * 0.3;
              gl_FragColor = vec4(color, alpha * 0.4);
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

        mesh.userData.rotationSpeed = {
          x: (Math.random() - 0.5) * 0.01,
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01,
        };

        scene.add(mesh);
        meshes.push(mesh);
      }

      // Add wireframes
      for (let i = 0; i < 10; i++) {
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
          opacity: 0.2,
        });

        const wireframe = new THREE.LineSegments(wireframeGeometry, material);
        wireframe.position.set(
          Math.cos(r) * zScale,
          Math.sin(r) * zScale,
          z * scale
        );
        wireframe.rotation.set(Math.random(), Math.random(), Math.random());

        wireframe.userData.rotationSpeed = {
          x: (Math.random() - 0.5) * 0.008,
          y: (Math.random() - 0.5) * 0.008,
          z: (Math.random() - 0.5) * 0.008,
        };

        scene.add(wireframe);
        meshes.push(wireframe);
      }

      // ===== LINKED PARTICLES SYSTEM =====
      particleGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(maxParticles * 3);
      const colors = new Float32Array(maxParticles * 3);
      const sizes = new Float32Array(maxParticles);

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

      particleMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 }
        },
        vertexShader: `
          attribute float size;
          attribute vec3 color;
          varying vec3 vColor;
          
          void main() {
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          
          void main() {
            vec2 center = gl_PointCoord - vec2(0.5);
            float dist = length(center);
            if (dist > 0.5) discard;
            
            float alpha = 1.0 - (dist * 2.0);
            alpha = pow(alpha, 1.5);
            
            gl_FragColor = vec4(vColor, alpha * 0.8);
          }
        `,
        transparent: true,
        depthWrite: false,
      });

      particleSystem = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particleSystem);

      lineGeometry = new THREE.BufferGeometry();
      const linePositions = new Float32Array(maxParticles * maxConnections * 2 * 3);
      const lineColors = new Float32Array(maxParticles * maxConnections * 2 * 3);

      lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
      lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

      lineMaterial = new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 0.4,
      });

      lineSystem = new THREE.LineSegments(lineGeometry, lineMaterial);
      scene.add(lineSystem);

      // Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      const onWindowResize = () => {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      const onMouseMove = (event) => {
        if (event.isPrimary === false) return;
        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY;

        // Spawn linked particles
        const mx = (event.clientX / window.innerWidth) * 2 - 1;
        const my = -(event.clientY / window.innerHeight) * 2 + 1;
        const vector = new THREE.Vector3(mx, my, 0.5);
        vector.unproject(camera);
        const dir = vector.sub(camera.position).normalize();
        const distance = -camera.position.z / dir.z;
        const pos = camera.position.clone().add(dir.multiplyScalar(distance));

        for (let i = 0; i < 2; i++) {
          if (linkedParticles.length < maxParticles) {
            linkedParticles.push(new Particle(
              pos.x + (Math.random() - 0.5) * 10,
              pos.y + (Math.random() - 0.5) * 10,
              pos.z + (Math.random() - 0.5) * 10
            ));
          }
        }
      };

      window.addEventListener('resize', onWindowResize);
      document.body.addEventListener('pointermove', onMouseMove);

      const clock = new THREE.Clock();

      const findClosestParticles = (particle, count) => {
        const closest = [];
        const distances = [];

        for (let i = 0; i < linkedParticles.length; i++) {
          const other = linkedParticles[i];
          if (other === particle) continue;

          const dx = particle.position.x - other.position.x;
          const dy = particle.position.y - other.position.y;
          const dz = particle.position.z - other.position.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectionDistance) {
            let inserted = false;
            for (let j = 0; j < closest.length; j++) {
              if (dist < distances[j]) {
                closest.splice(j, 0, other);
                distances.splice(j, 0, dist);
                inserted = true;
                break;
              }
            }
            if (!inserted && closest.length < count) {
              closest.push(other);
              distances.push(dist);
            }
            if (closest.length > count) {
              closest.pop();
              distances.pop();
            }
          }
        }

        return closest;
      };

      const animate = () => {
        animationId = requestAnimationFrame(animate);
        render(clock.getElapsedTime(), clock.getDelta());
      };

      const render = (time, delta) => {
        // Update billboard particles colors (both layers)
        const h = (360 * (1.0 + time * 0.1) % 360) / 360;
        billboardMaterial.color.setHSL(0.55 + h * 0.15, 0.6, 0.6);
        billboardMaterial2.color.setHSL(h, 0.5, 0.5);

        // Update geometric meshes
        meshes.forEach((mesh) => {
          mesh.rotation.x += mesh.userData.rotationSpeed.x;
          mesh.rotation.y += mesh.userData.rotationSpeed.y;
          mesh.rotation.z += mesh.userData.rotationSpeed.z;

          if (mesh.material.uniforms && mesh.material.uniforms.time) {
            mesh.material.uniforms.time.value = time;
          }
        });

        // Update linked particles
        linkedParticles = linkedParticles.filter(p => p.update(delta));

        const particlePositions = particleGeometry.attributes.position.array;
        const particleColors = particleGeometry.attributes.color.array;
        const particleSizes = particleGeometry.attributes.size.array;

        for (let i = 0; i < maxParticles; i++) {
          if (i < linkedParticles.length) {
            const p = linkedParticles[i];
            particlePositions[i * 3] = p.position.x;
            particlePositions[i * 3 + 1] = p.position.y;
            particlePositions[i * 3 + 2] = p.position.z;

            const color = new THREE.Color().setHSL(p.hue, 0.7, 0.5);
            particleColors[i * 3] = color.r;
            particleColors[i * 3 + 1] = color.g;
            particleColors[i * 3 + 2] = color.b;

            particleSizes[i] = p.size * p.life * 3;
          } else {
            particlePositions[i * 3] = 0;
            particlePositions[i * 3 + 1] = 0;
            particlePositions[i * 3 + 2] = 10000;
            particleSizes[i] = 0;
          }
        }

        particleGeometry.attributes.position.needsUpdate = true;
        particleGeometry.attributes.color.needsUpdate = true;
        particleGeometry.attributes.size.needsUpdate = true;

        // Update connections
        const linePositions = lineGeometry.attributes.position.array;
        const lineColors = lineGeometry.attributes.color.array;
        let lineIndex = 0;

        for (let i = 0; i < linkedParticles.length; i++) {
          const p = linkedParticles[i];
          const closest = findClosestParticles(p, maxConnections);

          for (let j = 0; j < closest.length; j++) {
            const other = closest[j];
            const idx = lineIndex * 6;

            linePositions[idx] = p.position.x;
            linePositions[idx + 1] = p.position.y;
            linePositions[idx + 2] = p.position.z;
            linePositions[idx + 3] = other.position.x;
            linePositions[idx + 4] = other.position.y;
            linePositions[idx + 5] = other.position.z;

            const color = new THREE.Color().setHSL(p.hue, 0.7, 0.5);
            const alpha = Math.min(p.life, other.life) * 0.6;
            lineColors[idx] = color.r * alpha;
            lineColors[idx + 1] = color.g * alpha;
            lineColors[idx + 2] = color.b * alpha;
            lineColors[idx + 3] = color.r * alpha;
            lineColors[idx + 4] = color.g * alpha;
            lineColors[idx + 5] = color.b * alpha;

            lineIndex++;
          }
        }

        for (let i = lineIndex; i < maxParticles * maxConnections; i++) {
          const idx = i * 6;
          linePositions[idx] = linePositions[idx + 3] = 0;
          linePositions[idx + 1] = linePositions[idx + 4] = 0;
          linePositions[idx + 2] = linePositions[idx + 5] = 10000;
        }

        lineGeometry.attributes.position.needsUpdate = true;
        lineGeometry.attributes.color.needsUpdate = true;

        // Camera movement
        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (-mouseY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener('resize', onWindowResize);
        document.body.removeEventListener('pointermove', onMouseMove);
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
      style={{ opacity: 0.5 }}
    />
  );
}
