import React from 'react';

export const Social = () => {
	return (
		<div className='home__social'>
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
	);
};
