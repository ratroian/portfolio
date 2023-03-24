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
						href='https://www.instagram.com/ra_troian'
						className='home__social-icon'
						target='_blank'
						rel='noreferrer'
					>
						<i className='uil uil-instagram'></i>
					</a>
					<a
						href='https://github.com/ratroian'
						className='home__social-icon'
						target='_blank'
						rel='noreferrer'
					>
						<i className='uil uil-github-alt'></i>
					</a>
					<a
						href='https://web.telegram.org/iamrat'
						className='home__social-icon'
						target='_blank'
						rel='noreferrer'
					>
						<i className='uil uil-telegram'></i>
					</a>
					<a
						href='https://wa.me/380677628738'
						className='home__social-icon'
						target='_blank'
						rel='noreferrer'
					>
						<i class='uil uil-whatsapp'></i>
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
