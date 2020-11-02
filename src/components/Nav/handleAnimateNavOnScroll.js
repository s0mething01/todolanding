import { gsap } from 'gsap';

export default function handleAniamteNavOnScroll(el, color) {
  gsap.to(el, {
    scrollTrigger: {
      trigger: 'header',
      start: 'top 0%',
      end: '120%',
      scrub: 1,
    },
    backgroundColor: color,
    duration: 0.3,
  });
}
