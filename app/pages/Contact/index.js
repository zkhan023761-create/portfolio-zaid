import { intro, outro } from "animations/mesh";
import Page from "classes/Page";
import gsap from "gsap";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { LuminosityShader } from "three/examples/jsm/shaders/LuminosityShader.js";
import { lerp } from "utils/math";

export default class Contact extends Page {
  constructor() {
    super({
      element: ".contact",
      id: "home",
      elements: {
        slot: ".contact__canvas__illustration",
      },
    });
  }

  create() {
    super.create();
    this.createMesh();
    this.reCalculate();
    this.placeMesh();
    this.postProcess();
  }

  update() {
    if (this.mesh) this.updateMesh();
  }
  predestroy() {
    if (this.isMobile) return;
    const targetChild =
      (this.mesh?.children &&
        this.mesh.children.find((child) => child.name === "baked")) ||
      (this.mesh?.children && this.mesh.children[0]);
    const animation = targetChild?.material ? outro(targetChild.material) : null;
    Canvas.navigate = async () => {
      this.removeEventListeners && this.removeEventListeners();
      gsap.to(this.element, { autoAlpha: 0 });
      if (animation) await animation.play();
      Canvas.composer = null;
      if (this.mesh) this.mesh.scale.set(0, 0, 0);
    };
  }
  destroy() {
    if (this.mesh) Canvas.scene.remove(this.mesh);
  }

  reCalculate() {
    this.isMobile = innerWidth < 768;
    this.scale = this.isMobile ? 0.6 : 0.35;
    this.innerWidth = innerWidth;
    this.innerHeight = innerHeight;

    this.bounds = this.elements?.slot?.getBoundingClientRect();
    if (this.bounds && this.bounds.height > 10) {
      this.width = this.bounds.width / innerWidth;
      this.height = this.bounds.height / innerHeight;
      this.y =
        (innerHeight / 2 - this.bounds.top - this.bounds.height / 2) /
        innerHeight;
      this.x =
        -(innerWidth / 2 - this.bounds.left - this.bounds.width / 2) / innerWidth;
      this.initialx = -(innerWidth / 2 - this.bounds.left) / innerWidth;
    } else {
      this.width = 0.4;
      this.height = 0.28;
      this.x = this.isMobile ? 0 : -0.22;
      this.y = -0.15;
    }

    if (!this.mesh) return;
    this.mesh.scale.x = this.height * Canvas.viewport.width * this.scale;
    this.mesh.scale.y = this.height * Canvas.viewport.width * this.scale;
    this.mesh.scale.z = this.height * Canvas.viewport.width * this.scale;
    this.mesh.position.x = this.x * Canvas.viewport.width;
    this.mesh.position.y = this.y * Canvas.viewport.height;

    this.predestroy();
  }

  createGeometry() {
    if (this.geometry) return;
    const exp = Canvas.exports && Canvas.exports["home"];
    this.geometry = exp ? exp.clone() : null;
  }
  createMaterial() {
    if (this.material) return;
    const mat = Canvas.materials && Canvas.materials["home"];
    this.material = mat ? mat.clone() : null;
  }
  createMesh() {
    if (this.mesh) return;
    if (!this.geometry) this.createGeometry();
    if (!this.material) this.createMaterial();
    if (!this.geometry || !this.material) return;

    const baked =
      this.geometry.children &&
      this.geometry.children.find((child) => child.name === "baked");
    if (baked) {
      baked.material = this.material;
    }
    this.mesh = this.geometry;
  }

  placeMesh() {
    if (!this.mesh) this.createMesh();
    if (!this.mesh) return;

    Canvas.scene.add(this.mesh);
    this.mesh.scale.x = this.height * Canvas.viewport.width * this.scale;
    this.mesh.scale.y = this.height * Canvas.viewport.width * this.scale;
    this.mesh.scale.z = this.height * Canvas.viewport.width * this.scale;
    this.mesh.position.x = this.x * Canvas.viewport.width;
    this.mesh.position.y = this.y * Canvas.viewport.height;

    const targetChild =
      (this.mesh.children &&
        this.mesh.children.find((child) => child.name === "baked")) ||
      (this.mesh.children && this.mesh.children[0]);
    if (targetChild && targetChild.material) {
      const animation = intro(targetChild.material);
      animation.play();
    }

    this.predestroy();
  }
  updateMesh() {
    const x = lerp(
      Canvas.mouseTracker.currentX,
      Canvas.mouseTracker.targetX,
      0.1
    );
    const y = lerp(
      Canvas.mouseTracker.currentY,
      Canvas.mouseTracker.targetY,
      0.1
    );
    this.mesh.rotation.x = y;
    this.mesh.rotation.y = x;
    Canvas.mouseTracker.currentX = x;
    Canvas.mouseTracker.currentY = y;
  }

  postProcess() {
    try {
      const composer = new EffectComposer(Canvas.renderer);
      const renderPass = new RenderPass(Canvas.scene, Canvas.camera);
      composer.addPass(renderPass);
      const effectGrayScale = new ShaderPass(LuminosityShader);
      composer.addPass(effectGrayScale);
      Canvas.composer = composer;
    } catch (e) {
      console.warn("postProcess:", e);
    }
  }

  onMouseMove(event) {
    const target = {};
    const clientX = event.touches ? event.touches[0]?.clientX : event.clientX;
    const clientY = event.touches ? event.touches[0]?.clientY : event.clientY;
    target.x = (clientX / this.innerWidth - 0.5) * 2;
    target.y = (clientY / this.innerHeight - 0.5) * 0.25;
    Canvas.mouseTracker.targetX = target.x;
    Canvas.mouseTracker.targetY = target.y;
  }

  addEventListeners() {
    window.onmousemove = this.onMouseMove.bind(this);
    window.ontouchmove = this.onMouseMove.bind(this);
  }
  removeEventListeners() {
    window.onmousemove = () => {};
    window.ontouchmove = () => {};
  }
}
