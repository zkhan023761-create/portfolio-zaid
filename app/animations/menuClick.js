import gsap from "gsap";

export default function menuClick() {
  const tl = gsap.timeline({ paused: true });

  tl.fromTo(
    ".hamburger__icon path:first-of-type",
    { rotateZ: 0, y: 0 },
    { rotateZ: 30, y: "-250%", duration: 0.4 }
  );
  tl.fromTo(
    ".hamburger__icon path:last-of-type",
    { rotateZ: 0, y: 0 },
    { rotateZ: -30, y: "250%", duration: 0.4 },
    0
  );
  tl.fromTo(
    ".navigation",
    { autoAlpha: 0, display: "none" },
    { autoAlpha: 1, display: "block", duration: 0.4, ease: "power2.out" },
    0
  );
  tl.set(".navigation__list", { autoAlpha: 1 }, 0.1);
  tl.fromTo(
    ".navigation__list__item",
    { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", y: "100%" },
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      y: 0,
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.08,
    },
    0.1
  );
  return tl;
}
