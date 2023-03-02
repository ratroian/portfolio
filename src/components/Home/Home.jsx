import React from 'react';
import { Data } from './Data/Data';
import './home.scss';
import { ScrollDown } from './ScrollDown/ScrollDown';
import { Social } from './Social/Social';

export const Home = () => {
	return (
		<section className='home section' id='home'>
			<div className='home__container container grid'>
				<div className='home__content grid'>
					<Social />
					<div className='home__img'></div>
					<Data />
				</div>
				<ScrollDown />
			</div>
		</section>
	);
};
