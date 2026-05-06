document.addEventListener('DOMContentLoaded', () => {
	const skillBars = document.querySelectorAll('.skill-progress');

	if (skillBars.length > 0 && 'IntersectionObserver' in window) {
		const observer = new IntersectionObserver((entries, observerInstance) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					return;
				}

				const bar = entry.target;
				const targetWidth = bar.dataset.width || '0';
				bar.style.setProperty('--target-width', targetWidth);
				bar.classList.add('animate');
				observerInstance.unobserve(bar);
			});
		}, {
			threshold: 0.35,
		});

		skillBars.forEach((bar) => observer.observe(bar));
	}
});
