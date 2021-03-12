const validateComm = () => {
	const calcItems = document.querySelectorAll('.calc-item');
	const formName = document.getElementsByName('user_name');
	const emailForm = document.getElementsByName('user_email');
	const phoneForm = document.getElementsByName('user_phone');
	const messageForm = document.querySelector('.mess');
	const blurValidate = elem => {
		elem.value = elem.value.replace(/(^ )|(^-)|(-$)|( $)/i, '');
		elem.value = elem.value.replace(/(-+)/i, '-');
		elem.value = elem.value.trim();
	};
	messageForm.addEventListener('input', () => {
		messageForm.value = messageForm.value.replace(/[^а-я' '\-,.;...:?!()0-9]/i, '');
		messageForm.addEventListener('blur', () => {
			messageForm.value = messageForm.value.replace(/[^а-я' '\-,.;...:?!()0-9]/i, '');
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
		const maxAttribute = document.createAttribute('pattern');
		const titleAttribute = document.createAttribute('title');
		titleAttribute.value = 'Мин. число символов - 2';
		maxAttribute.value = ".{2,}";
		elem.setAttributeNode(maxAttribute);
		elem.setAttributeNode(titleAttribute);
		elem.addEventListener('input', () => {
			elem.value = elem.value.replace(/[^а-я' ']/i, '');
			elem.addEventListener('blur', () => {
				elem.value = elem.value.replace(/[^а-я' ']/i, '');
				blurValidate(elem);
				const splits = elem.value.split(' ');
				let outcome = '';
				for (let i = 0; i < splits.length; i++) {
					const Name = splits[i];
					const First = Name.substring(0, 1).toUpperCase();
					const Leftovers = Name.substring(1, Name.length).toLowerCase();
					outcome += First + Leftovers + " ";
				}
				elem.value = outcome.trim();
			});
		});
	});
	emailForm.forEach(elem => {
		const emailAttribute = document.createAttribute('pattern');
		const titleAttribute = document.createAttribute('title');
		titleAttribute.value = 'Введите корректный формат Email';
		emailAttribute.value = "^[a-zA-Z0-9@\-_.!~*']+@[a-zA-Z0-9-]+(@-_.!~*'[a-zA-Z0-9]+)*$";
		elem.setAttributeNode(emailAttribute);
		elem.setAttributeNode(titleAttribute);
		elem.addEventListener('input', () => {
			elem.value = elem.value.replace(/[^a-z0-9@\-_.!~*']/i, '');
			elem.addEventListener('blur', () => {
				elem.value = elem.value.replace(/[^a-z0-9@\-_.!~*']/i, '');
				blurValidate(elem);
			});
		});
	});
	phoneForm.forEach(elem => {
		const maxAttribute = document.createAttribute('pattern');
		const titleAttribute = document.createAttribute('title');
		titleAttribute.value = 'Мин. число символов - 7, макс. - 13';
		maxAttribute.value = ".{7,13}";
		elem.setAttributeNode(maxAttribute);
		elem.setAttributeNode(titleAttribute);
		elem.addEventListener('input', () => {
			elem.value = elem.value.replace(/[^0-9+]/i, '');
			elem.addEventListener('blur', () => {
				elem.value = elem.value.replace(/[^0-9+]/i, '');
				blurValidate(elem);
			});
		});
	});
};


export default validateComm;
