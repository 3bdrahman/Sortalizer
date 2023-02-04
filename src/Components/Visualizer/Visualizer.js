import React, { useState, useEffect } from 'react';
import Chart from '../Chart/Chart';
import VisualizerControl from '../VisualizerControl/VisualizerControl';

import './visualizer.css';
const Visualizer = (props) => {
	const [arr, setArr] = useState([]);
	const [tract, setTrace] = useState([]);
	const [traceStep, setTraceStep] = useState(-1);
	const [originalArray, setOriginalArray] = useState();
	const [groupA, setGroupA] = useState([]);
	const [groupB, setGroupB] = useState([]);
	const [groupC, setGroupC] = useState([]);
	const [groupD, setGroupD] = useState([]);
	const [sortedIndices, setSortedIndecies] = useState([]);
	const [timeoutIds, setTimeoutIds] = useState([]);
	const [playSpeed, setPlaySpeed] = useState(1);
	const [prevProps, setPrevProps] = useState(props);

	useEffect(() => {
		setPrevProps(props);
	}, [props]);

	useEffect(() => {
		if (props.array !== prevProps.array) {
			reset(props.array);
		}
		if (props.trace !== prevProps.trace) {
			clearTimeouts();
			setTrace(props.trace);
		}
	}, [props.array, props.trace, prevProps.array, prevProps.trace]);

	return <div>Visualizer</div>;
};
const reset = (arr) => {
	setArr(arr);
	setTrace([]);
};
export default Visualizer;
