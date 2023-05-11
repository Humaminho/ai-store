import React from 'react'
import { Link } from 'react-router-dom'
import Burger from './Burger'
import Nav from './Nav'
import Cart from './Cart'

export default function Header() {
  return (
		<div className="header">
			<div className="logo">
				<Link to="/">
					<img src='/src/assets/img/logo.png' height={40} alt="logo" />
				</Link>
			</div>
			<Nav />
			<div className="nav-right">
				<Cart />
				<Burger />
			</div>
		</div>
  );
}
