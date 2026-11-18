import * as preloader from "animations/preloader";
import gsap from "gsap";
import Component from "classes/Component";
import { MeshBasicMaterial, TextureLoader, sRGBEncoding } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { split } from "utils/text";

export default class Preloader extends Component {
  constructor() {
    super({
      element: ".preloader",
      elements: {
        text: ".preloader__text",
        progress: ".preloader__number",
        images: "img",
      },
    });
    split({ element: this.elements.text });
    this.length = 0;
    this.limit = 301;
    this.assets = preloadables;
    this.create();
  }

  create() {
    const textureLoader = new TextureLoader();
    const gltfLoader = new GLTFLoader();
    const images = this.assets.images || [];
    const videos = this.assets.videos || [];
    Canvas.textures = {};
    Canvas.materials = {};
    Canvas.exports = {};

    images.forEach((src) => {
      const image = new Image();
      image.onload = () => this.onAssetLoaded();
      image.onerror = () => this.onAssetLoaded();
      image.src = src;
    });

    videos.forEach((src) => {
      const video = document.createElement("video");
      video.src = src;
    });

    Object.entries(this.assets.textures || {}).forEach(([name, src]) => {
      textureLoader.load(
        src,
        (texture) => {
          const map = texture;
          map.flipY = false;
          map.encoding = sRGBEncoding;
          if (name === "about") {
            Canvas.textures[name] = texture;
          } else {
            Canvas.materials[name] = new MeshBasicMaterial({
              map,
              transparent: true,
              opacity: 0,
            });
          }
          this.onAssetLoaded();
        },
        undefined,
        () => this.onAssetLoaded()
      );
    });

    Object.entries(this.assets.exports || {}).forEach(([name, src]) => {
      gltfLoader.load(
        src,
        (group) => {
          Canvas.exports[name] = group.scene;
          this.onAssetLoaded();
        },
        undefined,
        () => this.onAssetLoaded()
      );
    });
  }

  onAssetLoaded() {
    this.length += 1;
    const total =
      (this.assets.images ? this.assets.images.length : 0) +
      Object.keys(this.assets.textures || {}).length +
      Object.keys(this.assets.exports || {}).length;

    const percentage =
      total > 0 ? Math.round((this.length / total) * this.limit) : this.limit;

    if (this.elements.progress) {
      this.elements.progress.innerText = `${Math.min(percentage, 301)} / 301`;
    }

    if ((percentage >= this.limit || this.length >= total) && !this.isCompleted) {
      this.isCompleted = true;
      this.onCompleted();
    }
  }

  async onCompleted() {
    const temp = setTimeout(() => {
      this.dispatchEvent({ type: "preloaded" });
      clearTimeout(temp);
    }, 2725);

    await preloader.leave();
    gsap.fromTo(
      ".navigation__list",
      { autoAlpha: 0 },
      { autoAlpha: 1, delay: 1.5 }
    );
    this.destroy();
  }

  destroy() {
    if (this.element && this.element.parentElement) {
      this.element.parentElement.removeChild(this.element);
    }
  }
}
