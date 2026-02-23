import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initGSAP() {
	ScrollTrigger.refresh();
	setupRevealAnimations();
}

export function cleanupGSAP() {
	ScrollTrigger.getAll().forEach((t) => t.kill());
	ScrollTrigger.clearMatchMedia();
}

function setupRevealAnimations() {
	// Fade in up
	gsap.utils.toArray<HTMLElement>('[data-animate="fade-up"]').forEach((el) => {
		gsap.fromTo(
			el,
			{ opacity: 0, y: 40 },
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: el,
					start: 'top 85%',
					toggleActions: 'play none none none'
				}
			}
		);
	});

	// Fade in
	gsap.utils.toArray<HTMLElement>('[data-animate="fade"]').forEach((el) => {
		gsap.fromTo(
			el,
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 1,
				ease: 'power1.out',
				scrollTrigger: {
					trigger: el,
					start: 'top 85%'
				}
			}
		);
	});

	// Stagger children
	gsap.utils.toArray<HTMLElement>('[data-animate="stagger"]').forEach((el) => {
		const children = el.children;
		gsap.fromTo(
			children,
			{ opacity: 0, y: 30 },
			{
				opacity: 1,
				y: 0,
				duration: 0.6,
				stagger: 0.12,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: el,
					start: 'top 80%'
				}
			}
		);
	});

	// SVG line draw
	gsap.utils.toArray<SVGPathElement>('[data-animate="draw"]').forEach((path) => {
		const length = path.getTotalLength();
		gsap.fromTo(
			path,
			{ strokeDasharray: length, strokeDashoffset: length },
			{
				strokeDashoffset: 0,
				duration: 1.5,
				ease: 'power2.inOut',
				scrollTrigger: {
					trigger: path,
					start: 'top 85%'
				}
			}
		);
	});
}

export { gsap, ScrollTrigger };
