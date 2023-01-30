import React from 'react';

const Bar = ({
	width,
	height,
	val,
	stateA,
	stateB,
	stateC,
	stateD,
	sorted,
	style,
}) => {
	let theState = 'Bar';
	if (sorted) theState += ' Bar_sorted';
	if (stateD) theState += ' Bar_stateD';
	else if (stateC) theState += ' Bar_stateC';
	else if (stateB) theState += ' Bar_stateB';
	else if (stateA) theState += ' Bar_stateA';
	let barStyle = { ...style, width: `${width}%`, height: `${height}%` };
	if (stateA || stateB || stateC || stateD) {
		barStyle['marginRight'] = `${0.3 * width}%`;
		barStyle['marginLeft'] = `${0.3 * width}%`;
	}
	return (
		<div style={barStyle} className={theState}>
			<span className='text'>{val}</span>
		</div>
	);
};

export default Bar;
