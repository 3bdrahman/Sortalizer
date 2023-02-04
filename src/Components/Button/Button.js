import React from 'react';
import './Button.css';
const Button = (
	className,
	raised,
	unelevated,
	outlined,
	dense,
	notCased,
	disabled,
	icon,
	iconClass,
	href,
	onClick,
	children
) => {
	const CSS_classes = {
		Root: 'Button',
		ICON: 'Button__Icon',
		LABEL: 'Button__Label',
		DENSE: 'Button_dense',
		RAISED: 'Button_raised',
		OUTLINED: 'Button_outlined',
		UNELEVATED: 'Button_unelevated',
		UPPERCASE: 'Button_uppercase',
	};
	const renderIcon = (icon, iconClass) => {
		const ICON = icon;
		return <ICON className={`${CSS_classes.ICON} ${iconClass}`} />;
	};

	const Class_builder =
		(CSS_classes.Root,
		{
			[CSS_classes.DENSE]: dense,
			[CSS_classes.RAISED]: raised,
			[CSS_classes.OUTLINED]: outlined,
			[CSS_classes.UNELEVATED]: dense,
			[CSS_classes.DENSE]: unelevated,
			[CSS_classes.UPPERCASE]: !notCased,
		},
		className);
	if (href) {
		return (
			<a href={href} className={Class_builder} disabled={disabled}>
				{icon ? renderIcon(icon, iconClass) : null}
				<span className='Button_lebel'>{children}</span>
			</a>
		);
	}
	return (
		<button onClick={onClick} className={Class_builder} disabled={disabled}>
			{icon ? renderIcon(icon, iconClass) : null}
			<span className='Button_lebel'>{children}</span>
		</button>
	);
};

export default Button;
