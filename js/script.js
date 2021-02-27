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
	countTimer('28 february 2021', this);
	setInterval(countTimer, 1000, '28 february 2021', this);

	//Меню
	const toggleMenu = () => {
		const btnMenu = document.querySelector('.menu'),
			menu = document.querySelector('menu'),
			closeBtn = document.querySelector('.close-btn'),
			menuItems = menu.querySelectorAll('ul>li'),
			menuLinks = menu.querySelectorAll('ul>li>a'),
			btnMain = document.querySelector('main>a');

		const handlerMenu = () => {
			menu.classList.toggle('active-menu');
		};
		btnMenu.addEventListener('click', handlerMenu);
		closeBtn.addEventListener('click', (handlerMenu));
		menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));
		menuLinks.forEach(elem => elem.addEventListener('click', e => {
			e.preventDefault();
			document.querySelector(elem.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		}));
		console.log(btnMain);
		btnMain.addEventListener('click', e => {
			e.preventDefault();
			document.querySelector(btnMain.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			});
		});
	};
	toggleMenu();


	//popup
	const togglePopUp = () => {
		const popup = document.querySelector('.popup'),
			popupBtn = document.querySelectorAll('.popup-btn'),
			popupClose = document.querySelector('.popup-close');
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
		popupClose.addEventListener('click', () => {
			popup.style.display = 'none';
			if (window.screen > 768) {
				popup.style.opacity = '0';
			}
		});
	};
	togglePopUp();


});
