import Page from "classes/Page";
import NormalizeWheel from "normalize-wheel";
import Prefix from "prefix";
import { clamp, lerp } from "utils/math";

export default class Work extends Page {
  constructor() {
    super({
      element: ".work",
      id: "work",
      elements: {
        container: ".work__experiences",
        wrapper: ".work__experiences__wrapper",
        items: ".work__experience",
      },
    });
  }

  create() {
    super.create();
    this.transformPrefix = Prefix("transform");
    this.reCalculate();
    this.addScrollListeners();

    // Re-calculate after layout settles
    setTimeout(() => this.reCalculate(), 150);
    setTimeout(() => this.reCalculate(), 500);
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => this.reCalculate());
    }
  }

  reCalculate() {
    this.isMobile = innerWidth < 768;
    if (!this.elements.wrapper || !this.elements.container) return;

    // Reset transform momentarily to get natural dimensions
    const currentTransform = this.elements.wrapper.style[this.transformPrefix];
    this.elements.wrapper.style[this.transformPrefix] = "none";

    const wrapperHeight = this.elements.wrapper.scrollHeight;
    const containerHeight = this.elements.container.clientHeight;

    // Restore transform
    this.elements.wrapper.style[this.transformPrefix] = currentTransform;

    const limit = Math.max(0, wrapperHeight - containerHeight + 40);

    const prevTarget = this.scroll ? this.scroll.target : 0;
    const prevCurrent = this.scroll ? this.scroll.current : 0;

    this.scroll = {
      current: clamp(0, limit, prevCurrent),
      target: clamp(0, limit, prevTarget),
      last: { y: 0, clientY: 0 },
      limit,
    };
  }

  update() {
    if (this.scroll && this.scroll.limit > 0) {
      this.smoothScroll();
    }
  }

  destroy() {
    super.destroy && super.destroy();
    this.removeScrollListeners();
  }

  onMousewheel(event) {
    if (this.isMobile || !this.scroll || this.scroll.limit <= 0) return;
    const { pixelY } = NormalizeWheel(event);
    this.scroll.target = clamp(
      0,
      this.scroll.limit,
      this.scroll.target + pixelY
    );
  }

  onTouchDown(event) {
    if (this.isMobile) return;
    this.isDown = true;
    const clientY = event.touches ? event.touches[0]?.clientY : event.clientY;
    this.scroll.last.y = clientY;
  }

  onTouchMove(event) {
    if (this.isMobile || !this.isDown || !this.scroll || this.scroll.limit <= 0)
      return;
    const clientY = event.touches ? event.touches[0]?.clientY : event.clientY;
    const delta = (this.scroll.last.y - clientY) * 1.5;
    this.scroll.last.y = clientY;

    this.scroll.target = clamp(
      0,
      this.scroll.limit,
      this.scroll.target + delta
    );
  }

  onTouchUp() {
    this.isDown = false;
  }

  onKeyDown(event) {
    if (this.isMobile || !this.scroll || this.scroll.limit <= 0) return;
    if (event.key === "ArrowDown" || event.key === "PageDown") {
      this.scroll.target = clamp(
        0,
        this.scroll.limit,
        this.scroll.target + 140
      );
    } else if (event.key === "ArrowUp" || event.key === "PageUp") {
      this.scroll.target = clamp(
        0,
        this.scroll.limit,
        this.scroll.target - 140
      );
    } else if (event.key === "Home") {
      this.scroll.target = 0;
    } else if (event.key === "End") {
      this.scroll.target = this.scroll.limit;
    }
  }

  smoothScroll() {
    const scrollTo = clamp(
      0,
      this.scroll.limit,
      lerp(this.scroll.current, this.scroll.target, 0.1)
    );
    this.scroll.current =
      Math.abs(scrollTo - this.scroll.target) < 0.05
        ? this.scroll.target
        : scrollTo;

    if (this.elements.wrapper) {
      this.elements.wrapper.style[
        this.transformPrefix
      ] = `translate3d(0, -${this.scroll.current}px, 0)`;
    }
  }

  addScrollListeners() {
    this.boundWheel = this.onMousewheel.bind(this);
    this.boundTouchDown = this.onTouchDown.bind(this);
    this.boundTouchMove = this.onTouchMove.bind(this);
    this.boundTouchUp = this.onTouchUp.bind(this);
    this.boundKeyDown = this.onKeyDown.bind(this);

    window.addEventListener("wheel", this.boundWheel, { passive: true });
    window.addEventListener("mousewheel", this.boundWheel, { passive: true });
    window.addEventListener("touchstart", this.boundTouchDown, {
      passive: true,
    });
    window.addEventListener("touchmove", this.boundTouchMove, {
      passive: true,
    });
    window.addEventListener("touchend", this.boundTouchUp, { passive: true });
    window.addEventListener("keydown", this.boundKeyDown);
  }

  removeScrollListeners() {
    window.removeEventListener("wheel", this.boundWheel);
    window.removeEventListener("mousewheel", this.boundWheel);
    window.removeEventListener("touchstart", this.boundTouchDown);
    window.removeEventListener("touchmove", this.boundTouchMove);
    window.removeEventListener("touchend", this.boundTouchUp);
    window.removeEventListener("keydown", this.boundKeyDown);
  }
}
