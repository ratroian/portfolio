import React from 'react';
import './info.scss';

export const Info = () => {
	return (
		<div className='about__info grid'>
			<div className='about__box'>
				<i className='uil uil-award about__icon'></i>
				<h3 className='about__title'>Experience</h3>
				<span className='about__subtitle'>3 Years Working</span>
			</div>
			<div className='about__box'>
				<i className='uil uil-briefcase-alt about__icon'></i>
				<h3 className='about__title'>Completed</h3>
				<span className='about__subtitle'>10+ Projects</span>
			</div>
			<div className='about__box'>
				<i className='uil uil-comment-message about__icon'></i>
				<h3 className='about__title'>Support</h3>
				<span className='about__subtitle'>Online 24/7</span>
			</div>
		</div>
	);
};
