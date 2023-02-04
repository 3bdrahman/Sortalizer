import React from 'react';
import './VisualizerControl.css';
import SpeedMenu from '../SpeedMenu/SpeedMenu';
import Button from '../Button/Button';
import {
	MdPlayerArrow as Play,
	MdPause as Pause,
	MdSkipNext as Forward,
	MdSkipPrevious as Backward,
	MdRepeat as Repeat,
} from 'react-icons/md';
const VisualizerControl = ({
	onPlay,
	onPause,
	onBackward,
	onForward,
	onRepeat,
	onSpeed,
	playing,
	playDisabled,
	pauseDisabled,
	backwardDisabled,
	forwardDisabled,
	repeatDisabled,
	playSpeed,
}) => {
	const isDisabled = (action, disabled = false) => {
		return action === undefined || disabled;
	};
	return (
		<div className='VisualizerControl'>
			<Button
				icon={Repeat}
				onCLick={onRepeat}
				disabled={isDisabled(onRepeat, repeatDisabled)}
				className='VisualizerControls__Button'
			/>
			<Button
				icon={Backward}
				onClick={onBackward}
				disabled={isDisabled(onBackward, backwardDisabled)}
				iconClass='VisualizerControls__Icon'
				className='VisualizerControls__Button'
			/>
			<Button
				icon={playing ? Pause : Play}
				onClick={playing ? onPause : onPlay}
				disabled={
					playing
						? isDisabled(onPause, pauseDisabled)
						: isDisabled(onPlay, playDisabled)
				}
				raised
				iconClass='VisualizerControls__Icon'
				className='VisualizerControls__CenterButton'
			/>
			<Button
				icon={Forward}
				onClick={onForward}
				disabled={isDisabled(onForward, forwardDisabled)}
				iconClass='VisualizerControls__Icon'
				className='VisualizerControls__Button'
			/>
			<SpeedMenu
				items={['0.25x', '0.5x', '1x', '2x', '4x']}
				placeholder='Speed'
				selected={`${playSpeed}x`}
				onSelect={onSpeed}
				noDropIcon
				className='VisualizerControls__SpeedMenu'
			/>
		</div>
	);
};

export default VisualizerControl;
