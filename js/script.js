/* eslint-disable prefer-const */
window.addEventListener('DOMContentLoaded', () => {

	//Таймер
	function countTimer(deadline, interval) {
		let timerHours = document.querySelector('#timer-hours'),
			timerMinutes = document.querySelector('#timer-minutes'),
			timerSeconds = document.querySelector('#timer-seconds');


		function getTimeRemaining() {
			let dateStop = new Date(deadline).getTime(),
				dateNow = new Date().getTime(),
				timeRemaining = (dateStop - dateNow) / 1000,
				seconds = Math.floor(timeRemaining % 60),
				minutes = Math.floor((timeRemaining / 60) % 60),
				hours = Math.floor(timeRemaining  / 60 / 60);
			return {
				hours,
				minutes,
				seconds
			};
		}
		function updateClock() {
			let timer = getTimeRemaining();
			if (timer.seconds >= 0) {
				timerHours.textContent = ('0' + timer.hours).slice(-2);
				timerMinutes.textContent = ('0' + timer.minutes).slice(-2);
				timerSeconds.textContent = ('0' + timer.seconds).slice(-2);
			} else {
				timerHours.textContent = '00';
				timerHours.style.color = 'red';
				timerMinutes.textContent = '00';
				timerSeconds.style.color = 'red';
				timerSeconds.textContent = '00';
				timerMinutes.style.color = 'red';
				clearInterval(interval);
			}
		}
		updateClock();
	}
	countTimer('8 march 2021', this);
	setInterval(countTimer, 1000, '8 march 2021', this);

	//Меню
	const toggleMenu = () => {
		const menu = document.querySelector('menu');
		const handlerMenu = () => {
			menu.classList.toggle('active-menu');
		};

		window.addEventListener('click', event => {
			let target = event.target;
			target = target.closest('.menu');
			if (target) {
				handlerMenu();
				console.log(1);
			} else if ((!target) &&
			menu.classList.contains('active-menu') &&
			!event.target.matches('menu') &&
			event.target.tagName !== 'LI') {
				handlerMenu();
				console.log(2);
				let target = event.target;
				if (target.tagName === 'A' && !target.classList.contains('close-btn')) {
					console.log(target);
					event.preventDefault();
					let anchor = document.querySelector(target.getAttribute('href'));
					anchor.scrollIntoView({
						behavior: 'smooth'
					});
				}
			}
			if (event.target.parentNode.getAttribute('href') === '#service-block') {
				let target = event.target.parentNode;
				event.preventDefault();
				let anchor = document.querySelector(target.getAttribute('href'));
				anchor.scrollIntoView({
					behavior: 'smooth'
				});
			}
		});
	};
	toggleMenu();


	//popup
	const togglePopUp = () => {
		const popup = document.querySelector('.popup'),
			popupBtn = document.querySelectorAll('.popup-btn');
		popupBtn.forEach(elem => elem.addEventListener('click', () => {
			let count = 0;
			popup.style.display = 'block';
			if (window.screen.width > 768) {
				popup.style.opacity = '0';
				let intervalId = setInterval(() => {
					if (count < 1) {
						count += 0.1;
						popup.style.opacity = count;
					} else {
						clearInterval(intervalId);
						return;
					}
				}, 30);
			}
		}));
		popup.addEventListener('click', event => {
			let target = event.target;
			if (target.classList.contains('popup-close')) {
				popup.style.display = 'none';
				if (window.screen > 768) {
					popup.style.opacity = '0';
				}
			} else {
				target = target.closest('.popup-content');
				if (!target) {
					popup.style.display = 'none';
					if (window.screen > 768) {
						popup.style.opacity = '0';
					}
				}
			}
		});
	};
	togglePopUp();


	//табы

	const tabs = () => {
		const tabHeader = document.querySelector('.service-header'),
			tab = tabHeader.querySelectorAll('.service-header-tab'),
			tabContent = document.querySelectorAll('.service-tab');
		const toggleTabContent = index => {
			for (let i = 0; i < tabContent.length; i++) {
				if (index === i) {
					tab[i].classList.add('active');
					tabContent[i].classList.remove('d-none');
				} else {
					tab[i].classList.remove('active');
					tabContent[i].classList.add('d-none');
				}
			}
		};
		tabHeader.addEventListener('click', event => {
			let target = event.target;
			target = target.closest('.service-header-tab');
			if (target.classList.contains('service-header-tab')) {
				tab.forEach((item, i) => {
					if (item === target) {
						toggleTabContent(i);
					}
				});
			}

		});
	};
	tabs();

	//Слайдер
	const slider = () => {
		const slide = document.querySelectorAll('.portfolio-item'),
			slider = document.querySelector('.portfolio-content'),
			listDots = document.querySelector('.portfolio-dots');

		let currentSlide = 0,
			interval;
		const addDots = slides => {
			for (let i = 0; i < slides.length; i++) {
				if (i === 0) {
					let newElem = document.createElement('li');
					newElem.classList.add('dot-active');
					newElem.classList.add('dot');
					listDots.append(newElem);
				} else {
					let newElem = document.createElement('li');
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

			let target = event.target;
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
	};
	slider();


	let commandBlock = document.getElementById('command');
	commandBlock.addEventListener('mouseover', e => {
		if (e.target.classList.contains('command__photo')) {
			let target = e.target;
			let targetSrc = target.src;
			target.src = target.dataset.img;
			target.addEventListener('mouseout', () => {
				target.src = targetSrc;
			}
			);
		}
	});

	//Валидация
	const validateComm = () => {
		let calcItems = document.querySelectorAll('.calc-item');
		let formName = document.getElementsByName('user_name');
		let emailForm = document.getElementsByName('user_email');
		let phoneForm = document.getElementsByName('user_phone');
		let messageForm = document.querySelector('.mess');
		const blurValidate = elem => {
			elem.value = elem.value.replace(/(^ )|(^-)|(-$)|( $)/i, '');
			elem.value = elem.value.replace(/(-+)/i, '-');
			elem.value = elem.value.trim();
		};
		messageForm.addEventListener('input', () => {
			messageForm.value = messageForm.value.replace(/[^а-я' '-]/i, '');
			messageForm.addEventListener('blur', () => {
				messageForm.value = messageForm.value.replace(/[^а-я' '-]/i, '');
				blurValidate(messageForm);
			});
		});
		calcItems.forEach(elem => {
			if (elem.tagName !== 'SELECT') {
				elem.addEventListener('input', () => {
					elem.value = elem.value.replace(/\D/, '');
					elem.addEventListener('blur', () => {
						elem.value = elem.value.replace(/\D/, '');
						blurValidate(elem);
					});
				});
			}
		});
		formName.forEach(elem => {
			elem.addEventListener('input', () => {
				elem.value = elem.value.replace(/[^а-я' '-]/i, '');
				elem.addEventListener('blur', () => {
					elem.value = elem.value.replace(/[^а-я' '-]/i, '');
					blurValidate(elem);
					let splits = elem.value.split(' ');
					let outcome = '';
					for (let i = 0; i < splits.length; i++) {
						let Name = splits[i];
						let First = Name.substring(0, 1).toUpperCase();
						let Leftovers = Name.substring(1, Name.length).toLowerCase();
						outcome += First + Leftovers + " ";
					}
					elem.value = outcome.trim();
				});
			});
		});
		emailForm.forEach(elem => {
			elem.addEventListener('input', () => {
				elem.value = elem.value.replace(/[^a-z@\-_.!~*']/i, '');
				elem.addEventListener('blur', () => {
					elem.value = elem.value.replace(/[^a-z@\-_.!~*']/i, '');
					blurValidate(elem);
				});
			});
		});
		phoneForm.forEach(elem => {
			elem.addEventListener('input', () => {
				elem.value = elem.value.replace(/[^0-9()-]/i, '');
				elem.addEventListener('blur', () => {
					elem.value = elem.value.replace(/[^0-9()-]/i, '');
					blurValidate(elem);
				});
			});
		});
	};
	validateComm();
});
