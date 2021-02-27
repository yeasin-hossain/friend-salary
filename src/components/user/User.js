import React from 'react';
import Plus from '../../images/add.svg';
import './user.css';
export default function user(props) {
	const { first, last } = props.user.name;
	const { large } = props.user.picture;
	const { email, salary } = props.user;
	return (
		<div className="user">
			<img src={large} alt="" />
			<h2>Name:- {`${first} ${last}`}</h2>
			<h3>Email:- {email}</h3>
			<h4>Salary:- ${salary}</h4>
			<button onClick={() => props.cartItem(props.user)}>
				<img src={Plus} alt="" />
			</button>
		</div>
	);
}
