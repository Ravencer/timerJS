/* eslint-disable prefer-const */
let newYearText = document.querySelector('.new-year');
const weekDay = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];


function newYearTimer(newYear) {
	let dateNewYear = new Date(newYear).getTime(),
		dateNow = new Date().getTime(),
		dateForm = new Date(),
		timeRemaining = (dateNewYear - dateNow) / 1000,
		day = Math.floor(timeRemaining / 60 / 60 / 24);
	if (day > 0) {
		newYearText.innerHTML = getGreet(dateForm.getHours()) + getDay(dateForm.getDay()) +
    '<br> Текущее время: ' + dateForm.toLocaleTimeString('en') + '<br>До нового года осталось ' + day + ' дней';
	} else {
		newYearText.innerHTML = 'С Новым Годом!';
	}


	function getDay(day) {
		for (let i = 0; i < weekDay.length; i++) {
			if (day === i) {
				return weekDay[i];
			}
		}
	}


	function getGreet(hour) {
		if (hour > 6 && hour < 10) {
			return 'Доброе утро<br>Сегодня: ';
		} else if (hour > 9 && hour < 18) {
			return 'Добрый день<br>Сегодня: ';
		} else if (hour > 17 && hour < 24) {
			return 'Добрый вечер<br>Сегодня: ';
		} else {
			return 'Доброй ночи<br>Сегодня: ';
		}
	}
}

setInterval(newYearTimer, 1000, '31 december 2021');
