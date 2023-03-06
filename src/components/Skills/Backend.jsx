import React from 'react';

export const Backend = () => {
	return (
		<div className='skills__content'>
			<h3 className='skills__title'>Backend developer</h3>
			<div className='skills__box'>
				<div className='skills__group'>
					<div className='skills__data'>
						<i className='uil uil-check-circle skills__icon'></i>
						<div>
							<h3 className='skills__name'>NodeJS</h3>
							<span className='skills__level'>Basic</span>
						</div>
					</div>
				</div>
				<div className='skills__group'>
					<div className='skills__data'>
						<i className='uil uil-check-circle skills__icon'></i>
						<div>
							<h3 className='skills__name'>MySQL</h3>
							<span className='skills__level'>Basic</span>
						</div>
					</div>
				</div>
				<div className='skills__group'>
					<div className='skills__data'>
						<i className='uil uil-check-circle skills__icon'></i>
						<div>
							<h3 className='skills__name'>Firebase</h3>
							<span className='skills__level'>Basic</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
