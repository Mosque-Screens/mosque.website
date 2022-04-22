import React from 'react';

const CaretUp = ({ width, height, color }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			class='icon icon-tabler icon-tabler-caret-up'
			width={width}
			height={height}
			viewBox='0 0 24 24'
			stroke-width='1.5'
			stroke={color || '#2c3e50'}
			fill='none'
			stroke-linecap='round'
			stroke-linejoin='round'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M18 15l-6 -6l-6 6h12' />
		</svg>
	);
};

export default CaretUp;

CaretUp.defaultProps = {
	width: '44',
	height: '44',
};
