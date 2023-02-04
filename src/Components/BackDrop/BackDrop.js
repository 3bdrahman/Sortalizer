import React from 'react';
import './BackDrop.css';

const BackDrop = ({ show, transparent, dark, className, onClick }) => {
	const CSS_CLASSES = {
		ROOT: 'Backdrop',
		TRANSPARENT: 'Backdrop_transparent',
		DARK: 'Backdrop_dark',
		CLICKABLE: 'Backdrop_clickable',
	};
	const classBuilder = (rootClass, ClassMapping, userClassName) => {
		let classNames = `${rootClass}`;
		Object.keys(ClassMapping).forEach((className) => {
			if (ClassMapping[className]) {
				classNames += `${className};`;
			}
		});
		classNames += `${userClassName}`;
		return classNames;
	};
	const builder = classBuilder(
		CSS_CLASSES.ROOT,
		{
			[CSS_CLASSES.TRANSPARENT]: transparent,
			[CSS_CLASSES.DARK]: dark,
			[CSS_CLASSES.CLICKABLE]: onClick !== undefined,
		},
		className
	);

	return show ? <div className={builder} onClick={onClick} /> : null;
};

export default BackDrop;
