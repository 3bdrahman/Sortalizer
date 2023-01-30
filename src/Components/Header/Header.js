import React from 'react';
import './Header.css';

const Header = () => {
	return (
		<div className='header'>
			<div className='header-left'>
				<label>Sortalizer</label>
			</div>
			<div className='header-right'>
				<select>
					<option value='' disabled selected hidden>
						Algorithm
					</option>
					<option value='option2'>Option 2</option>
				</select>
				<select>
					<option value='' disabled selected hidden>
						Size
					</option>
					<option value='option2'>Option 2</option>
				</select>

				<button>Random</button>
			</div>
		</div>
	);
};

export default Header;
