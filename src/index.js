import countTimer from './modules/countTimer';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';
import slider from './modules/slider';
import tabs from './modules/tabs';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import validateComm from './modules/validateComm';


//Таймер
countTimer('15 march 2021', this);
setInterval(countTimer, 1000, '15 march 2021', this);
//Меню
toggleMenu();
//popup
togglePopUp();
//табы
tabs();
//Слайдер
slider();
//Валидация
validateComm();
//Калькулятор
calculator(100);
//send-ajax-form
sendForm();
