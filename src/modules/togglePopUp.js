const togglePopUp = () => {
	const popup = document.querySelector('.popup'),
		popupBtn = document.querySelectorAll('.popup-btn');
	popupBtn.forEach(elem => elem.addEventListener('click', () => {
		let count = 0;
		popup.style.display = 'block';
		if (window.screen.width > 768) {
			popup.style.opacity = '0';
			const intervalId = setInterval(() => {
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


export default togglePopUp;
