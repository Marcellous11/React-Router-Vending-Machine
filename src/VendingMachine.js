import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Soda from './Soda';
import Chips from './Chips';
import Candy from './Candy';
import Navbar from './Navbar';
import './VendingMachine.css';

const VendingMachine = () => {
	return (
		<div className="VendingMachine">
			<h1>List of Vending Machines Options</h1>
			<div className="VendingMachine-machine">
				<BrowserRouter>
					<Route exact path="/">
						<img src="https://media.istockphoto.com/id/165658368/vector/soft-drinks-vending-machine.jpg?s=170667a&w=0&k=20&c=3S7C21wn84ai0fO9HwMU2gb7PprrxIh1LwZ4LXhSqZA=" />
						<Navbar />
					</Route>
					<Route exact path="/soda">
						<Soda />
					</Route>
					<Route exact path="/chips">
						<Chips />
					</Route>
					<Route exact path="/candy">
						<Candy />
					</Route>
				</BrowserRouter>
			</div>
		</div>
	);
};
export default VendingMachine;
