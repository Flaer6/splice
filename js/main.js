'use strict';

//Меню для мобилок
let menuBtn = document.querySelector('.menu-open'),
		menuList = document.querySelector('.mobile');

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('--active');
	menuList.classList.toggle('--open');
});
//---------------