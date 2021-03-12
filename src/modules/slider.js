const slider = () => {
	const slide = document.querySelectorAll('.portfolio-item'),
		slider = document.querySelector('.portfolio-content'),
		listDots = document.querySelector('.portfolio-dots');

	let currentSlide = 0,
		interval;
	const addDots = slides => {
		for (let i = 0; i < slides.length; i++) {
			if (i === 0) {
				const newElem = document.createElement('li');
				newElem.classList.add('dot-active');
				newElem.classList.add('dot');
				listDots.append(newElem);
			} else {
				const newElem = document.createElement('li');
				newElem.classList.add('dot');
				listDots.append(newElem);
			}
		}
	};
	addDots(slide);
	const dot = document.querySelectorAll('.dot');
	const prevSlide = (elem, index, strClass) => {
		elem[index].classList.remove(strClass);
	};

	const nextSlide = (elem, index, strClass) => {
		elem[index].classList.add(strClass);
	};

	const autoPlaySlide = () => {
		prevSlide(slide, currentSlide, 'portfolio-item-active');
		prevSlide(dot, currentSlide, 'dot-active');
		currentSlide++;
		if (currentSlide >= slide.length) {
			currentSlide = 0;
		}
		nextSlide(slide, currentSlide, 'portfolio-item-active');
		nextSlide(dot, currentSlide, 'dot-active');
	};

	const startSlide = (time = 3000) => {
		interval = setInterval(autoPlaySlide, time);
	};

	const stopSlide = () => {
		clearInterval(interval);
	};

	slider.addEventListener('click', event => {
		event.preventDefault();

		const target = event.target;
		if (!target.matches('.portfolio-btn, .dot')) {
			return;
		}
		prevSlide(slide, currentSlide, 'portfolio-item-active');
		prevSlide(dot, currentSlide, 'dot-active');
		if (target.matches('#arrow-right')) {
			currentSlide++;
		} else if (target.matches('#arrow-left')) {
			currentSlide--;
		} else if (target.matches('.dot')) {
			dot.forEach((elem, index) => {
				if (elem === target) {
					currentSlide = index;
				}
			});
		}

		if (currentSlide >= slide.length) {
			currentSlide = 0;
		}

		if (currentSlide < 0) {
			currentSlide = slide.length - 1;
		}
		nextSlide(slide, currentSlide, 'portfolio-item-active');
		nextSlide(dot, currentSlide, 'dot-active');
	});

	slider.addEventListener('mouseover', event => {
		if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
			stopSlide();
		}
	});
	slider.addEventListener('mouseout', event => {
		if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
			startSlide(1500);
		}
	});
	startSlide(1500);
	const commandBlock = document.getElementById('command');
	commandBlock.addEventListener('mouseover', e => {
		if (e.target.classList.contains('command__photo')) {
			const target = e.target;
			const targetSrc = target.src;
			target.src = target.dataset.img;
			target.addEventListener('mouseout', () => {
				target.src = targetSrc;
			}
			);
		}
	});
};


export default slider;
