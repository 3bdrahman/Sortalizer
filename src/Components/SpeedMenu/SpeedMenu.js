import { React, useState } from 'react';
import BackDrop from '../BackDrop/BackDrop';
import {
	MdExpandMore as AngleDown,
	MdExpandLess as AngleUp,
} from 'react-icons/md';
import Button from '../Button/Button';
const SpeedMenu = (
	className,
	selected,
	onSelect,
	placeholder,
	items,
	noDropIcon
) => {
	const [open, setOpen] = useState(false);
	const close = (e) => {
		e.preventDefault();
		setOpen(false);
	};
	const toggle = (e) => {
		e.preventDefault();
		setOpen(!open);
	};
	const MenuList = ({ open, items, onSelect }) => {
		return open ? (
			<ul>
				{items.map((item, i) => (
					<li
						key={`${item}_${i}`}
						onClick={(e) => {
							onSelect(e, item);
						}}
						className='Menu_item'
					>
						{item}
					</li>
				))}
			</ul>
		) : null;
	};
	return (
		<div>
			<BackDrop show={open} onClick={close} />
			<div className={`Menu ${className}`}>
				<header className='Menu__Header'>
					{noDropIcon ? (
						<Button
							onClick={toggle}
							notCased
							className={selected ? null : 'Menu__Placeholder'}
						>
							{selected ? selected : placeholder}
						</Button>
					) : (
						<div
							className={selected ? 'Menu__SelectedItem' : 'Menu__Placeholder'}
						>
							{selected ? selected : placeholder}
						</div>
					)}
					{noDropIcon ? null : (
						<Button icon={open ? AngleUp : AngleDown} onClick={toggle} />
					)}
				</header>
				<MenuList
					open={open}
					items={items}
					onSelect={(e, item) => {
						onSelect(item);
						close(e);
					}}
				/>
			</div>
		</div>
	);
};

export default SpeedMenu;
