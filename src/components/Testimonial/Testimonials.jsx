import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';

import './testimonial.scss';
import { Data } from './Data';

export const Testimonial = () => {
	return (
		<section className='testimonial container section'>
			<h2 className='section__title'>My clients say</h2>
			<span className='section__subtitle'>Testimonial</span>

			<Swiper
				className='testimonial__container'
				// slidesPerView={3}
				loop={true}
				grabCursor={true}
				spaceBetween={24}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					576: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 48,
					},
					1024: {
						slidesPerView: 3,
					},
				}}
				modules={[Pagination]}
			>
				{Data.map(({ id, image, title, description }) => {
					return (
						<SwiperSlide className='testimonial__card' key={id}>
							<img
								src={image}
								alt='img testimonial'
								className='testimonial__img'
							/>
							<h3 className='testimonial__name'>{title}</h3>
							<p className='testimonial__description'>
								{description}
							</p>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};
