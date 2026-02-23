import { gsap, ScrollTrigger } from './index';

export function createParallax(el: HTMLElement, speed: number = 0.5) {
	gsap.to(el, {
		yPercent: -30 * speed,
		ease: 'none',
		scrollTrigger: {
			trigger: el,
			start: 'top bottom',
			end: 'bottom top',
			scrub: true
		}
	});
}

export function createPinnedSection(trigger: HTMLElement, timeline: gsap.core.Timeline) {
	ScrollTrigger.create({
		trigger,
		pin: true,
		start: 'top top',
		end: () => `+=${timeline.duration() * 300}`,
		animation: timeline,
		scrub: 1
	});
}

export function createHorizontalScroll(container: HTMLElement, panels: HTMLElement[]) {
	gsap.to(panels, {
		xPercent: -100 * (panels.length - 1),
		ease: 'none',
		scrollTrigger: {
			trigger: container,
			pin: true,
			scrub: 1,
			end: () => `+=${container.offsetWidth}`
		}
	});
}

export function createInkReveal(el: HTMLElement) {
	gsap.fromTo(
		el,
		{ scale: 0.3, opacity: 0 },
		{
			scale: 1,
			opacity: 0.07,
			duration: 0.6,
			ease: 'back.out(1.5)',
			scrollTrigger: { trigger: el, start: 'top 90%' }
		}
	);
}
