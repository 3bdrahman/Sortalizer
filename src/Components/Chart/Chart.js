import React from 'react';
import Bar from '../Bar/Bar';
import './Chart.css';
const Chart = ({
	numbers,
	maxNum,
	groupA,
	groupB,
	groupC,
	groupD,
	indecies,
}) => {
	const getListOfBars = (
		numbers,
		maxNum,
		groupA,
		groupB,
		groupC,
		groupD,
		indecies
	) => {
		return numbers.map((num, i) => {
			let width = 100 / numbers.length;
			let height = (num / maxNum) * 100;
			let stateA = groupA.includes(i);
			let stateB = groupB.includes(i);
			let stateC = groupC.includes(i);
			let stateD = groupD.includes(i);
			let sorted = indecies.includes(i);
			let margin =
				i === numbers.length ? '0' : width > 3 ? '0.5rem' : '0.125rem';
			return (
				<Bar
					key={`${i}_${num}`}
					width={width}
					height={height}
					val={width > 4 ? num : null}
					stateA={stateA}
					stateB={stateB}
					stateC={stateC}
					stateD={stateD}
					sorted={sorted}
					style={{ marginRight: `${margin}` }}
				/>
			);
		});
	};
	return (
		<div className='Chart'>
			{getListOfBars(numbers, maxNum, groupA, groupB, groupC, groupD, indecies)}
		</div>
	);
};

export default Chart;
