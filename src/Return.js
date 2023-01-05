import React from 'react';
import { NavLink } from 'react-router-dom';

const Return = (props) => {
	return (
		<div>
			<NavLink exact to="/">
				<button>Return</button>
			</NavLink>
		</div>
	);
};
export default Return;
