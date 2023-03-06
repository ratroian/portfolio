import React from 'react';
import './scrollup.scss';

export const ScrollUp = () => {
	window.addEventListener('scroll', () => {
		const scrollUp = document.querySelector('.scrollup');
		window.scrollY >= 560
			? scrollUp.classList.add('show-scroll')
			: scrollUp.classList.remove('show-scroll');
	});
	return (
		<a href='#home' className='scrollup'>
			<i className='uil uil-arrow-up scrollup__icon'></i>
		</a>
	);
};
