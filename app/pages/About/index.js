import Page from "classes/Page";
import gsap from "gsap";

export default class About extends Page {
  constructor() {
    super({
      element: ".about",
      id: "about",
      elements: {
        heading: ".about__heading",
        quote: ".about__quote",
        portrait: ".about__portrait",
        caption: ".about__caption",
        skills: ".about__skills",
        filterBtns: ".skills__filter__btn",
        cards: ".skill__card",
        education: ".about__education",
      },
    });
  }

  create() {
    super.create();
    this.animateHero();
    this.setupFilters();
  }

  animateHero() {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 0.9 },
    });

    if (this.elements.portrait) {
      tl.fromTo(
        this.elements.portrait,
        {
          autoAlpha: 0,
          scale: 0.92,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 1.2,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "expo.out",
        },
        0.3
      );
    }

    if (this.elements.caption) {
      tl.fromTo(
        this.elements.caption,
        { autoAlpha: 0, y: 15 },
        { autoAlpha: 1, y: 0, duration: 0.8 },
        0.8
      );
    }
  }

  setupFilters() {
    const filterBtns = document.querySelectorAll(".skills__filter__btn");
    const cards = document.querySelectorAll(".skill__card");
    if (!filterBtns.length || !cards.length) return;

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");

        const targetCategory = btn.getAttribute("data-filter");

        cards.forEach((card) => {
          const cardCategory = card.getAttribute("data-category");
          const matches = targetCategory === "all" || cardCategory === targetCategory;

          if (matches) {
            gsap.killTweensOf(card);
            card.style.display = "flex";
            gsap.fromTo(
              card,
              { autoAlpha: 0, y: 18, scale: 0.97 },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.45,
                ease: "power2.out",
              }
            );
          } else {
            gsap.killTweensOf(card);
            gsap.to(card, {
              autoAlpha: 0,
              y: -10,
              scale: 0.95,
              duration: 0.25,
              ease: "power2.in",
              onComplete: () => {
                card.style.display = "none";
              },
            });
          }
        });
      });
    });
  }

  destroy() {
    super.destroy && super.destroy();
  }
}
