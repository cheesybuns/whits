import { gsap } from './index';

export function initParallaxElements() {
	gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
		const speed = parseFloat(el.dataset.parallax || '0.5');
		const direction = el.dataset.parallaxDir || 'y';

		const props: gsap.TweenVars = {
			ease: 'none',
			scrollTrigger: {
				trigger: el.parentElement || el,
				start: 'top bottom',
				end: 'bottom top',
				scrub: true
			}
		};

		if (direction === 'y') {
			props.yPercent = -30 * speed;
		} else {
			props.xPercent = -20 * speed;
		}

		gsap.to(el, props);
	});
}
