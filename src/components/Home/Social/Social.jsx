import React from 'react';

export const Social = () => {
	return (
		<div className='home__social'>
			<a
				href='https://www.instagram.com/'
				className='home__social-icon'
				target='_blank'
				rel='noreferrer'
			>
				<i className='uil uil-instagram'></i>
			</a>
			<a
				href='https://github.com/'
				className='home__social-icon'
				target='_blank'
				rel='noreferrer'
			>
				<i className='uil uil-github-alt'></i>
			</a>
			<a
				href='https://web.telegram.org/'
				className='home__social-icon'
				target='_blank'
				rel='noreferrer'
			>
				<i className='uil uil-telegram'></i>
			</a>
		</div>
	);
};
