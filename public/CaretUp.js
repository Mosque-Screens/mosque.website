import React from 'react';

import styled from 'styled-components';

const SvgStyle = styled.svg`
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.1);
	}
`;

const CaretUp = ({ width, height, color }) => {
	return (
		<SvgStyle
			xmlns='http://www.w3.org/2000/svg'
			className='icon icon-tabler icon-tabler-caret-up'
			width={width}
			height={height}
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke={color || '#2c3e50'}
			fill='none'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M18 15l-6 -6l-6 6h12' />
		</SvgStyle>
	);
};

export default CaretUp;

CaretUp.defaultProps = {
	width: '44',
	height: '44',
};
