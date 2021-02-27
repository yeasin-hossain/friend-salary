import React from 'react';
import './cart.css';
export default function Cart(props) {
	console.log(props);
	return (
		<div className="Cart">
			<div className="user__info">
				{props.cart.map((e) => (
					<div className="" key={e.login.md5}>
						<h3>Name:-{e.name.first}</h3>
						<h5>Salary:{e.salary}</h5>
					</div>
				))}
			</div>
			<div className="total__salary">
				<h4>Total:{props.cart.reduce((total, e) => total + e.salary, 0)}</h4>
			</div>
		</div>
	);
}
