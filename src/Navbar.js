import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="Navbar">
			<ul>
				<NavLink exact to="/soda">
					Soda
				</NavLink>

				<NavLink exact to="/chips">
					Chips
				</NavLink>

				<NavLink exact to="/candy">
					Candy
				</NavLink>
			</ul>
		</nav>
	);
};

export default Navbar;
