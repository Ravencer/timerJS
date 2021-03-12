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
		} else if ((!target) &&
    menu.classList.contains('active-menu') &&
    !event.target.matches('menu') &&
    event.target.tagName !== 'LI') {
			handlerMenu();
			const target = event.target;
			if (target.tagName === 'A' && !target.classList.contains('close-btn')) {
				event.preventDefault();
				const anchor = document.querySelector(target.getAttribute('href'));
				anchor.scrollIntoView({
					behavior: 'smooth'
				});
			}
		}
		if (event.target.parentNode.getAttribute('href') === '#service-block') {
			const target = event.target.parentNode;
			event.preventDefault();
			const anchor = document.querySelector(target.getAttribute('href'));
			anchor.scrollIntoView({
				behavior: 'smooth'
			});
		}
	});
};


export default toggleMenu;
