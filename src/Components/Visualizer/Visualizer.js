import React, { useState, useEffect } from 'react';
import Chart from '../Chart/Chart';
import VisualizerControl from '../VisualizerControl/VisualizerControl';

import './visualizer.css';
const Visualizer = () => {
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
	return <div>Visualizer</div>;
};

export default Visualizer;
