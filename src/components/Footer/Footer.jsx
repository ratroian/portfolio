import React from 'react';
import './footer.scss';

export const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__container container'>
				<h1 className='footer__title'>Troian</h1>
				<ul className='footer__list'>
					<li className='footer__item'>
						<a href='#about' className='footer__link'>
							About
						</a>
					</li>
					<li className='footer__item'>
						<a href='#portfolio' className='footer__link'>
							Projects
						</a>
					</li>
					<li className='footer__item'>
						<a href='#testimonials' className='footer__link'>
							Testimonials
						</a>
					</li>
				</ul>
				<div className='footer__social'>
					<a
						href='https://www.instagram.com/'
						className='footer__social-icon'
						target='_blank'
						rel='noreferrer'
					>
						<i className='bx bxl-facebook'></i>
					</a>
					<a
						href='https://github.com/'
						className='footer__social-icon'
						target='_blank'
						rel='noreferrer'
					>
						<i className='bx bxl-github'></i>
					</a>
					<a
						href='https://web.telegram.org/'
						className='footer__social-icon'
						target='_blank'
						rel='noreferrer'
					>
						<i className='bx bxl-telegram'></i>
					</a>
				</div>
				<span className='footer__copy'>
					Troian. All rights reserved
				</span>
			</div>
		</footer>
	);
};

export default Footer;
