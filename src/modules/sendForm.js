const sendForm = () => {
	const loadMessage = 'Загрузка...';
	const forms = document.querySelectorAll('form');
	const statusMessage = document.createElement('div');
	statusMessage.style.cssText = 'font-size: 2rem;';


	const postData = body => fetch("./server.php", {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	});


	const messageFunc = message => {
		statusMessage.textContent = message;
		setTimeout(() => {
			statusMessage.remove();
		}, 4000);
	};


	forms.forEach(elem => {
		elem.addEventListener('submit', event => {
			event.preventDefault();
			if (elem.id === 'form3') {
				statusMessage.style.color = 'white';
			}
			statusMessage.textContent = loadMessage;
			elem.appendChild(statusMessage);

			const elemData = new FormData(elem);
			const body = {};

			elemData.forEach((val, key) => {
				body[key] = val;
			});


			/////Ajax с fetch
			postData(body)
				.then(response => {
					if (response.status !== 200) {
						throw new Error('status network not 200');
					}
					messageFunc('Спасибо! Мы скоро с вами свяжемся');
				})
				.catch(error => {
					messageFunc('Что-то пошло не так...');
					console.error(error);
				});


			elem.reset();
			if (elem.id === 'form3') {
				setTimeout(() => {
					const popup = document.querySelector('.popup');
					popup.style.display = 'none';
					popup.style.opacity = '1';
				}, 4000);
			}
		});
	});
};

export default sendForm;
