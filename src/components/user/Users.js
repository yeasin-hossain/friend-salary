import React, { useState, useEffect } from 'react';
import Cart from './cart/Cart';
import User from './User';
export default function Users() {
	const [users, setUsers] = useState([]);
	const [cartUser, setCartUser] = useState([]);
	const cartItem = (user) => {
		setCartUser([...cartUser, user]);
	};
	useEffect(
		() =>
			(async () => {
				const callUser = await fetch(`https://randomuser.me/api/?results=20`);
				const user = await callUser.json();
				const addSalary = user.results.map((e) => {
					e.salary = Math.ceil(Math.random() * 1000000);
					return e;
				});
				console.log(addSalary);
				setUsers(user.results);
			})(),
		[]
	);
	const user__wrap = {
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		width: '70%',
	};
	return (
		<div style={{ display: 'flex' }}>
			<div style={user__wrap}>
				{users.map((usr) => (
					<User key={usr.login.md5} user={usr} cartItem={cartItem} />
				))}
			</div>
			<Cart cart={cartUser} />
		</div>
	);
}
