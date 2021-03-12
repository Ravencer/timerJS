const calculator = (price = 100) => {
	const calcBlock = document.querySelector('.calc-block'),
		calcType = document.querySelector('.calc-type'),
		calcSquare = document.querySelector('.calc-square'),
		calcDay = document.querySelector('.calc-day'),
		calcCount = document.querySelector('.calc-count'),
		totalValue = document.getElementById('total');
	calcType.addEventListener('change', () => {
		if (calcType.value === '') {
			calcSquare.value = '';
			calcDay.value = '';
			calcCount.value = '';
		}
	});

	const countSum = () => {
		let total = 0,
			countValue = 1,
			dayValue = 1;
		const typeValue = calcType.options[calcType.selectedIndex].value,
			squareValue = +calcSquare.value;
		if (calcCount.value > 1) {
			countValue += (calcCount.value - 1) / 10;
		}
		if (calcDay.value && calcDay.value < 5) {
			dayValue *= 2;
		} else if (calcDay.value && calcDay.value < 10) {
			dayValue *= 1.5;
		}
		if (typeValue && squareValue) {
			total = price * typeValue * squareValue * countValue * dayValue;
		}
		function animateValue(obj, start, end, duration) {
			let startTimestamp = null;
			const step = timestamp => {
				if (!startTimestamp) startTimestamp = timestamp;
				const progress = Math.min((timestamp - startTimestamp) / duration, 1);
				obj.innerHTML = Math.floor(progress * (end - start) + start);
				if (progress < 1) {
					window.requestAnimationFrame(step);
				}
			};
			window.requestAnimationFrame(step);
		}
		if (calcType.value && calcSquare.value) {
			animateValue(totalValue, 0, +total, 250);
		}  else {
			totalValue.textContent = 0;
		}
	};


	calcBlock.addEventListener('change', event => {
		const target = event.target;

		if (target.matches(`.calc-type`) || target.matches('.calc-square') ||
    target.matches('.calc-day') || target.matches('.calc-count')) {
			countSum();
		}
	});
};

export default calculator;
